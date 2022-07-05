import { app } from "./app.js";

export class App{
    #PORT = process.env.PORT || 3333;

    constructor(){
        app.listen(this.#PORT, function(){
            console.debug("Server running")
        });
    }
}
export default new App();


