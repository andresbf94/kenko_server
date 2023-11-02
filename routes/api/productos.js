const router = require('express').Router();
const Producto = require('../../models/producto.model');

// GET

router.get('/', async (req, res) => {
    try{     
        const productos = await Producto.find();
        res.json(productos);
    } catch(error){
        res.json({error: error.message});
    }   
})

router.get('/:Id', async (req, res)=>{
    try{
        const { productoId } = req.params;
        const producto = await Producto.findById(productoId);
        res.json(producto);
    }catch(error){
        res.json({error: error.message});
    }
})

// POST

router.post('/', async(req, res)=>{
    try{   
        const producto = await Producto.create(req.body);
        res.json(producto);
    }catch(error){
        res.json({error: error.message});
    }
})

module.exports = router;