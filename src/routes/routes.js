import { Router } from "express";          
import { createUserController } from "../useCases/createUser/createUserController.js";

const router = Router();
const userController = new createUserController();

router.get('/sign', userController.handle);

router.get('/create-new-user', async function(req, res){
    res.send("1")
})
router.get('/shop-list', async function(req, res){
    res.send("1")
    
})

export { router }
