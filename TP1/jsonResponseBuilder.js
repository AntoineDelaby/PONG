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
        }else if(this.#url.pathname == '/random'){
            this.#response.writeHead(200, {"Content-Type": "application/json"});
            this.#response.write("{\"Random number\":\"" + parseInt((Math.random() * 100), 10) + "\"}");
        }else{
            this.#response.writeHead(404, {"Content-Type": "text/html"});
            this.#response.write('<h1>Page non trouvée</h1>');
        }
        this.#response.end();
    }

    getParams(){
        let params = "{";
        this.#url.searchParams.forEach((val, param) => {
            params += `\"${param}\":\"${val}\",`;
        })
        params += "\"date\":\"" + new Date().toISOString() + "\"}";
        console.log(params);
        return params;
    }

}