import { Router } from "express";          

const router = Router();

router.get('/sign', async function(req, res){
    res.send("1")
})
router.get('/create-new-user', async function(req, res){
    res.send("1")
})
router.get('/shop-list', async function(req, res){
    res.send("1")
    
})

export { router }
