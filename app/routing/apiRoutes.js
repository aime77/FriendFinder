module.exports = (app, connection) => {
    app.get("/api/friends", (req, res) => {
            connection.query("SELECT * FROM friends", (err, results) => {
                if (err) throw err;
                console.log(results);
                return res.json(results);
             })
    })

    app.post("/api/friends", (req, res) => {
        var newFriend = req.body;

        connection.query(`INSERT INTO friends FROM friends (name, picture, scores) VALUES (${newFriend.name}, ${newFriend.picture}, ${newFriend.scores})`, (err, results)=>{
            if (err) throw err;
            return res.json(result);
        })
    })
}