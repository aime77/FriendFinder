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
    //calculations to find best match
    app.post("/api/friends", (req, response, next) => {
        let newFriend = req.body;
        let totalNum = 0;
        let totalNumArray = [];
        let selectedFriendObj;
        

        connection.query("SELECT * FROM friends", (err, res) => {
            if (err) throw err;

            //get all friends from database
            for (let i = 0; i < res.length; i++) {
                //loop over each answer 
                for (j = 0; j < newFriend.scores.length; j++) {
                    totalNum += Math.abs(parseInt(res[i].scores.split(',')[j]) - parseInt(newFriend.scores[j]));
                }
                console.log(totalNum);
                totalNumArray.push(totalNum);
            }
            console.log(`Selected ${totalNumArray}`);
            //var newIndex=totalNumArray.findIndex(Math.min(...totalNumArray));
            var selectedFriend = Math.min(...totalNumArray);
            console.log(`Selected person ${totalNumArray}`);

            var newIndex = totalNumArray.indexOf(selectedFriend);
            selectedFriendObj = {
                name: res[newIndex].name,
                picture: res[newIndex].photo
            }
            response.send(selectedFriendObj);
            //response.JSON(selectedFriendObj);
        });

        
    })
}