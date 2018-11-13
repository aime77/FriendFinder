module.exports = (app, connection) => {
    //selecting all data from databse and creating a json object
    app.get("/api/friends", (req, res) => {
        connection.query("SELECT * FROM friends", (err, results) => {
            if (err) throw err;
            let friendsArray = [];
            results.forEach(val => {
                friendsObj = {
                    name: val.name,
                    photo: val.photo,
                    scores: val.scores.split(',')
                }
                friendsArray.push(friendsObj);
            })
            return res.json(friendsArray);
        })
    })

    app.post("/api/friends", (req, response) => {
        let newFriend = req.body;
        let totalNumArray = [];
        let selectedFriendObj;
        let newScores = newFriend.scores.join(',');

        //calculations to find best match
        connection.query("SELECT * FROM friends", (err, res) => {
            if (err) throw err;

            //get all friends from database
            for (let i = 0; i < res.length; i++) {
                let totalNum = 0;//loop over each answer 
                for (j = 0; j < newFriend.scores.length; j++) {
                    totalNum += Math.abs(parseInt(res[i].scores.split(',')[j]) - parseInt(newFriend.scores[j]));
                }
                totalNumArray.push(totalNum);
            }
            const selectedFriend = Math.min(...totalNumArray);
            const newIndex = totalNumArray.indexOf(selectedFriend);

            selectedFriendObj = {
                name: res[newIndex].name,
                picture: res[newIndex].photo
            }
            response.send(selectedFriendObj);
        });

         //add new friend to database
         connection.query(`INSERT INTO friends SET ?`,
         {
             name: newFriend.name,
             photo: newFriend.photo,
             scores: newScores,
         },
         (err) => {
             if (err) throw err;
         });
    })
}