const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:3000';
var reviewServer = 'http://localhost:3011';
var CalendarServer = 'http://localhost:3001';

const port = 80;

app.use(express.static('frontEnd'));

app.all("/reviews", (req, res) => {
  console.log("redirecting to reviewServer");
  apiProxy.web(req, res, {target:reviewServer});
});

app.all("/search", (req, res) => {
  console.log("redirecting to reviewServer");
  apiProxy.web(req, res, {target:reviewServer});
});

app.all('/rooms/dates', (req, res) => {
  console.log("redirecting to CalendarServer");
  apiProxy.web(req, res, {target:CalendarServer});
});// in the calendar component, the get and the post request have the same end point. Since I use all 
//do I need to have to different all requests? Do I need to have a Get and a Post here?



app.all("/getData", (req, res) => {
  console.log("redirecting to server1");
  apiProxy.web(req, res, {target:serverOne});
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))