import * as http from 'http';
import routeur from './routeur.js';

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write('<h1>Serveur minimal</h1>');
//     response.end();
// });

const server = http.createServer((request, response) => new routeur(request, response).handleRequest());

server.listen(8080);
console.log("Lancement du serveur");