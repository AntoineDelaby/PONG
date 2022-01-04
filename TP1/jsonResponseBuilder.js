export default class jsonResponseBuilder {

    #response
    #url;

    constructor(response, url){
        this.#response = response;
        this.#url = url;
    }

    buildResponse(){
        if(this.#url.pathname == '/json'){
            this.#response.writeHead(200, {"Content-Type": "application/json"});
            this.#response.write(this.getParams());
        }else{
            this.#response.writeHead(404, {"Content-Type": "text/html"});
            this.#response.write('<h1>Page non trouvée</h1>');
        }
        this.#response.end();
    }

    getParams(){
        let params = "{";
        this.#url.searchParams.forEach((val, param) => {
            params += `${param}:${val},`;
        })
        params += new Date().toISOString() + "}";
        return params;
    }

}