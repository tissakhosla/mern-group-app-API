const express = require('express')
const app = express();
const parser = require("body-parser");
const routeIndex = require ("./routes/routeIndex")

app.use(parser.json());

app.use(routeIndex);
app.use(require('./routes/routeIndex'))


app.listen(3000, () => console.log('listening on port 3000'));