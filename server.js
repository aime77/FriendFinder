const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/apiRoutes")(app)(connection);
require("./routes/htmlRoutes")(app);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Sever running on port ${PORT}`)
});