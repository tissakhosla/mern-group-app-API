const express = require('express')
const app = express();
const parser = require("body-parser");
const Tracker = require ("./models/Model")
const Trackercontroller = require ("./controllers/tracker")
const Trackerroute = require ("./routes/trackerroute")
const RouteIndex = require ("./routes/routeIndex")

app.use(parser.json());

app.use(Trackerroute);


app.listen(3000, () => console.log('listening on port 3000'));
