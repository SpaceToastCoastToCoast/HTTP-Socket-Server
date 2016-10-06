const navTo = {
  host : process.argv[2] || 'localhost',
  port: process.argv[3] || 80
};

const uri = process.argv[4] || '/';

function getRequestHeaders(resource) {
  return 'GET ' + resource + ' HTTP/1.1\nHost: '+ navTo.host + ':' + navTo.port +'\nConnection: keep-alive\nCache-Control: no-cache\nAccept: */*\nAccept-Encoding: gzip, deflate, sdch\nAccept-Language: en-US,en;q=0.8';
}

if(navTo.host == 'localhost' || navTo.host == '127.0.0.1') {
  navTo.port = 8080;
}

const net = require('net');
console.log(navTo);


const client = net.createConnection(navTo, () => {
  console.log('connected to server');
});

client.on('connect', () => {
  client.write(getRequestHeaders(uri));
});

client.on('data', (data) => {
  console.log(data.toString());
});

client.on('end', () => {
  console.log('connection closed');
});