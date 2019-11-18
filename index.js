const express = require('express')
const app = express();
const parser = require("body-parser");
const Tracker = require ("./models/Application")
const Trackercontroller = require ("./controllers/applicationController")
const Trackerroute = require ("./routes/trackerroute")
const RouteIndex = require ("./routes/routeIndex")

app.use(parser.json());

app.use(Trackerroute);


app.listen(3000, () => console.log('listening on port 3000'));
