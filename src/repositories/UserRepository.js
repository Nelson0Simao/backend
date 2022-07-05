class IUserRepository{
    async findByEmail(email){
        console.log("Repositorio find chegou")
    }
    async save(user){
        console.log("Repositorio save chegou")
    }
}

export {IUserRepository};