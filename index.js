import { routes } from "./routes.js"
import { getBody } from "./utils/getBody.js"
import * as http from 'http'
import * as url from 'url'

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  const body = await getBody(req)
  const route = routes.find(app => app.url === req.url && app.method == req.method)
  if (route) {
    route.controller(req, res, body)
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