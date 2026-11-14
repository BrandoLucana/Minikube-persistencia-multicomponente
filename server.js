const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({status: 'UP', message: 'Backend conectado a MongoDB', db_host: process.env.DB_HOST, db_user: process.env.MONGO_INITDB_ROOT_USERNAME}));
});
server.listen(8080, () => console.log('Backend en puerto 8080'));