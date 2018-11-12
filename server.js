//require('./app.dotenv').config();

const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
var connection;


if (process.env.NODE_ENV === 'production') {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: process.env.DB_PORT || 4000,
        host: process.env.DB_HOST || `localhost`,
        password: process.env.DB_PASSWORD || `root`,
        database: process.env.DB_DATABASE || `datafriends_db`,
        user: process.env.DB_USER || `root`,
    });
}
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './app/public')));

require("./app/routing/apiRoutes")(app, connection);
require("./app/routing/htmlRoutes")(app);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Sever running`)
});

