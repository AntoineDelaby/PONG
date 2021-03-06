export default class htmlResponseBuilder {

    #response
    #url;

    constructor(response, url){
        this.#response = response;
        this.#url = url;
    }

    buildResponse(){
        const beginning = `<html><header><link href="./public/style/style.css" rel="stylesheet" type="text/css"></link></header><body class="ok"><img src="./public/img/timoleon_oceanie.jpg" alt="timoleon bien sur">`;
        let date = new Date().toISOString();
        if(this.#url.pathname == '/first'){
            this.#response.writeHead(200, {"Content-Type": "text/html"});
            this.#response.write(beginning + `<h1>First Page</h1></body><footer>${date}</footer></html>`);
        }else if(this.#url.pathname == '/second'){
            this.#response.writeHead(200, {"Content-Type": "text/html"});
            this.#response.write(beginning + `<h1>Second Page</h1></body><footer>${date}</footer></html>`);
        }else{
            this.#response.writeHead(404, {"Content-Type": "text/html"});
            this.#response.write('<h1>Erreur 404</h1><p>Page non trouvée</p></body></html>');
        }
        this.#response.end();
    }

}