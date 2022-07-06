import { CreateUserUseCase } from './CreateUserUseCase.js';

export class createUserController{
    #createUserCase = new CreateUserUseCase();

    async totalShops(request, response){
        response.send("Todos os produtos então em andamento");
    }
    async validadeLogin(request, response){
        response.send("1234")
    }
    async createNewUser(request, response){

    }
    async listShopProdutos(request, response){

    }
}