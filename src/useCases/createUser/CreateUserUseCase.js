import { IUserRepository } from "../../repositories/UserRepository.js";

export class CreateUserUseCase{
    #useRepository = new IUserRepository();

    async execute(){
       const userAlreadyExists = this.#useRepository.findByEmail();
    }
}