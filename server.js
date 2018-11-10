const express = require('express');
const app = express();
const mysql=require('mysql');
const path=require('path');

//const connection=mysql.createConnection({
 //   port:process.env.DB_PORT||8080,
  //  host:process.env.DB_HOST||`localhost`,
  //  password:process.env.DB_PASSWORD||`root`,
  //  database:process.env.DB_DATABASE||`dataFriends_bd`,
  //  user:process.env.DB_USER||`root`,
//})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'./app/public')));

require("./app/routing/apiRoutes")(app, connection);
require("./app/routing/htmlRoutes")(app);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Sever running on port`)
});