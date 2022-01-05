import { URL } from 'url';
import htmlResponseBuilder from './htmlResponseBuilder.js';
import jsonResponseBuilder from './jsonResponseBuilder.js';
import fileResponseBuilder from './fileResponseBuilder.js';

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
        if(this.#url.pathname == '/first' || this.#url.pathname == '/second'){
            new htmlResponseBuilder(this.#response, this.#url).buildResponse();
        }else if(this.#url.pathname == '/json' || this.#url.pathname == '/random'){
            new jsonResponseBuilder(this.#response, this.#url).buildResponse();
        }else if(this.#url.pathname.split('/')[1] == 'public'){
            new fileResponseBuilder(this.#response, this.#url.pathname).buildResponse();
        }else{
            new htmlResponseBuilder(this.#response, this.#url).buildResponse();
        }
    }

}