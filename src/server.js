const http = require('node:http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ servicio: 'docker-node-multistage', ruta: req.url }));
});

if (require.main === module) {
  server.listen(PORT, () => console.log(`escuchando en :${PORT}`));
}

module.exports = server;
