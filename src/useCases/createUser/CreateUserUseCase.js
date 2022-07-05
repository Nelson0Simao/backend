import { IUserRepository } from "../../repositories/UserRepository";

export class CreateUserUseCase{
    #useRepository = new IUserRepository();

    async execute(){
       const userAlreadyExists = this.#useRepository.findByEmail();
    }
}