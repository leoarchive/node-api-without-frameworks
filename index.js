import { routes } from "./routes.js"
import * as http from 'http'

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const route = routes.find(app => app.url === req.url && app.method == req.method)
  if (route) {
    route.controller(req, res)
  } else {
    res.statusCode = 404
    res.statusMessage = 'Not found';
    res.write(res.statusMessage)
    res.end()
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});