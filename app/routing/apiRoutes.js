const friends = require('./../data/friends');

module.exports = (app, connection) => {

    app.get("/api/friends", (req, res) => {
        console.log(res);
        connection.connect((err, results) => {
            if (err) throw err;
            console.log(results);
            queryFriends();
            //res.json(rows);
        })
        function queryFriends(){
        connection.query("SELECT * FROM friends", (err, results) => {
            if (err) throw err;
            console.log(results);
            //res.json(rows);
        })
    }
    })

    app.post("/api/friends", (req, res) => {
        const newFriend = req.body;

        friends.push(newFriend);
    })
}