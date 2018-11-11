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
                return res.json(result);
            });

    //calculations to find best match

    })


}