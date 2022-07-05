import { IUserRepository } from "../../repositories/UserRepository.js";

export class CreateUserUseCase{
    #useRepository = new IUserRepository();

    async execute(body){
       const userAlreadyExists = this.#useRepository.findByEmail();
       return body;
    }
}