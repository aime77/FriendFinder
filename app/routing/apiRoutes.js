const path = require('path');
const friends = require('../data/friends.json');

module.exports = (app, connection) => {

    app.get("/api/friends", (req, res) => {
        res.json(friends);
    })

    app.post("/api/friends", (req, res) => {
        const newFriend = req.body;

        friends.push(newFriend);
    })
}