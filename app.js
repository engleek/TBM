var deployd = require('deployd');

var server = deployd({
  port: 3000,
  env: 'development'
});

server.listen();

server.on('listening', function () {
  console.log('Deployd server listening.');
});

server.on('error', function (err) {
  console.error(err);
  process.nextTick(function () {
    process.exit();
  });
});