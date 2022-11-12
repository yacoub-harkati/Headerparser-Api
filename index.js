// index.js
// where your node app starts

// init project
require('dotenv').config();
let express = require('express');
let app = express();
let http = require("http")
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
let cors = require('cors');
app.use(cors({
  optionsSuccessStatus: 200
})); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/whoami', function (req, res) {
  let response = {
    "ipaddress": req.ip,
    "language": `${req.get("accept-language")};q=0.6`,
    "software": req.get('user-agent')
  }
  res.json(response);
});

// listen for requests :)
let listener = app.listen(process.env.PORT || 80, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});