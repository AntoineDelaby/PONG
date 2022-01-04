import { URL } from 'url';
import htmlResponseBuilder from './htmlResponseBuilder.js';
import jsonResponseBuilder from './jsonResponseBuilder.js';

export default class Routeur {

    #request;
    #response;
    #url;

    constructor(request, response){
        this.#request = request;
        this.#response = response;
        this.#url = new URL(request.url, `http://${request.headers.host}`);
    }

    handleRequest(){
        if(this.#url.pathname == '/first'){
            new htmlResponseBuilder(this.#response, this.#url).buildResponse();
        }else if(this.#url.pathname == '/second'){
            new htmlResponseBuilder(this.#response, this.#url).buildResponse();
        }else if(this.#url.pathname == '/json'){
            new jsonResponseBuilder(this.#response, this.#url).buildResponse();
        }else{
            new htmlResponseBuilder(this.#response, this.#url).buildResponse();
        }
    }

}