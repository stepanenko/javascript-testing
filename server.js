
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('<h1>Homepage</h1>');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
