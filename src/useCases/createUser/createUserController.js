
import { CreateUserUseCase } from './CreateUserUseCase.js';

export class createUserController{
    #createUserCase = new CreateUserUseCase();

    async validadeLogin(request, response){

     const { body } = response;
    try { 
        const createUserUseCase = new  CreateUserUseCase();
        /*const result = createUserUseCase.execute(body);*/
        console.log(body)
    } catch (error) {
        return Response.status(400).json({
            message:error.message || "Unexpected error."
        })
    }
    }
    async createNewUser(request, response){

    }
    async listShopProdutos(request, response){

    }
}