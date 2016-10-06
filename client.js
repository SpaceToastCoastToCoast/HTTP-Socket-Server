const navTo = {path : process.argv[2]};
const net = require('net');
console.log(navTo);
const client = net.connect(navTo, () => {
  console.log('connected to server');
});

client.on('data', (data) => {
  console.log(data.toString());
});

client.on('end', () => {
  console.log('connection closed');
});

function navigate(endPoint) {
  console.log('navigating to ' + endPoint.path);
}

navigate(navTo);