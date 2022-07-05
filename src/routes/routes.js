import { Router } from "express";          
import { createUserController } from "../useCases/createUser/createUserController.js";

const router = Router();
const userController = new createUserController();

router.get('/sign', await userController.validadeLogin);
router.get('/create-new-user',  await userController.createNewUser)
router.get('/shop-list', await userController.listShopProdutos)

export { router }
