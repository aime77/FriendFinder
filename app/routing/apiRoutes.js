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
                    picture: val.picture,
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
        connection.query(`INSERT INTO friends SET ?`,
            {
                name: newFriend.name,
                picture: newFriend.picture,
                scores: newFriend.scores.join(',')
            },
            (err, results) => {
                if (err) throw err;
                return res.json(results);
            });

        //calculations to find best match

        connection.query("SELECT * FROM friends", (err, res) => {
            if (err) throw err;
            var totalNum = 0;
            //get all friends from database
            for (let i = 0; i < res.length; i++) {
                //loop over each answer 
                for (j = 0; j < 10; i++) {
                    totalNum += Math.abs(parseInt(res[i].scores.split(',')[j]) - parseInt(newFriend.scores[j]));
                    console.log(totalNum);
                }
            }
        }
        )
    })
}
