const http = require('http');
const fs = require('fs');

const port = process.env.PORT

var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

const server = http.createServer((req, res) => {
  dogstatsd.increment('page.views')
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  var dt = "";
  try {
    const data = fs.readFileSync('mytxt', 'utf8');
    console.error(data);
    dt = data;
  } catch (err) {
    console.error(err + dt);
  }
  res.end('Hello Thryv!\nI\'m: ' + process.env.APP + '\nBuild:' + process.env.BUILD + '\nRelease: ' + process.env.RELEASE + '\nrunning on: ' + process.env.RACK + '\ndata: ' + dt);
  console.log('PING');
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
