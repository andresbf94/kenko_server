const router = require('express').Router();
const Pedido = require('../../models/pedido.model');

// GET

router.get('/', async (req, res) => {
    try{
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch(error){
        res.json({error: error.message});
    }   
})

router.get('/:Id', async (req, res)=>{
    try{
        const { pedidoId } = req.params;
        const pedido = await Pedido.findById(pedidoId);
        res.json(pedido);
    }catch(error){
        res.json({error: error.message});
    }
})

// POST

router.post('/', async(req, res)=>{
    try{   
        const pedido = await Pedido.create(req.body);
        res.json(pedido);
    }catch(error){
        res.json({error: error.message});
    }
})

module.exports = router;