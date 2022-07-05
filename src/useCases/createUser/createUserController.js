
import { CreateUserUseCase } from './CreateUserUseCase.js';

export class createUserController{
    #createUserCase = new CreateUserUseCase();

    async handle(request, response){
     /*const { name, body, password } = Request.body;
    try {
        await this.#createUserCase.execute({
            name, body, password
        })
        return Response.status(201).send();
    } catch (error) {
        return Response.status(400).json({
            message:error.message || "Unexpected error."
        })
    }*/
    }
}