module.exports = (app, connection) => {
    //selection all data from mysql dataFriends databse and creating a json object
    app.get("/api/friends", (req, res) => {
        connection.query("SELECT * FROM friends", (err, results) => {
            if (err) throw err;
            console.log(results);
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

    //inserting new friend to mysql dataFriends database
    app.post("/api/friends", (req, res) => {
        let newFriend = req.body;
        //calculations to find best match
        connection.query("SELECT * FROM friends", (err, res) => {
            if (err) throw err;
            let foundYou=false;
            let totalNum = 0;
            let totalNumArray=[]
            //get all friends from database
            for (let i = 0; i < res.length; i++) {
                //loop over each answer 
                for (j = 0; j < newFriend.scores.length; j++) {
                    totalNum += Math.abs(parseInt(res[i].scores.split(',')[j]) - parseInt(newFriend.scores[j]));
                     }
                     console.log(totalNum);
                     totalNumArray.push(totalNum);
            }
            var selectedFriend=totalNumArray.min();
            console.log(`Selected person ${selectedFriend}`);
            
            var newIndex=selectedFriend.findIndex(selectedFriend);
            selectedFriend={
                name:res[newIndex].name,
                picture: res[newIndex].photo
            }

            res.send(selectedFriend);
            res.JSON(selectedFriend);

        })

        let newScores = newFriend.scores.join(',');
        connection.query(`INSERT INTO friends SET ?`,
            {
                name: newFriend.name,
                photo: newFriend.photo,
                scores: newScores,
            },
            (err, results) => {
                if (err) throw err;
                return res.json(results);
            });
    })
}