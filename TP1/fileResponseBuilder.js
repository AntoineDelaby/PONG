import fs from 'fs'

export default class fileResponseBuilder {

    #response
    #path;

    constructor(response, fileName){
        this.#response = response;
        this.#path = `.${fileName}`;
    }

    buildResponse(){
        try{
            const data = fs.readFileSync(this.#path, {encoding:'utf8', flag:'r'});
            this.#response.writeHead(200, {"Content-Type": "text/plain"});
            this.#response.write(data);
        }catch(exception){
            console.error(exception);
            this.#response.writeHead(404, {"Content-Type": "text/html"});
        }finally{
            this.#response.end();
        }
    }

}