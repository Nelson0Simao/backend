import { Router } from "express";          
import { createUserController } from "../useCases/createUser/createUserController.js";

const router = Router();
const userController = new createUserController();

router.get('/', await userController.totalShops);
router.get('/shop-list', await userController.listShopProdutos)
router.post('/sign', await userController.validadeLogin);
router.post('/create-new-user',  await userController.createNewUser)

export { router }
