const router = require('express').Router();
const Usuario = require ('../../models/usuario.model');

// GET

router.get('/', async (req, res) => {
    try{
        const usuario = await Usuario.find();
        res.json(usuario);
    } catch(error){
        res.json({error: error.message});
    }   
})

router.get('/:Id', async (req, res)=>{
    try{
        const { usuarioId } = req.params;
        const usuario = await Producto.findById(usuarioId);
    }catch(error){
        res.json({error: error.message});
    }
})

// POST

router.post('/', async(req, res)=>{
    try{   
        const usuario = await Usuario.create(req.body);
        res.json(usuario);
    }catch(error){
        res.json({error: error.message});
    }
})

module.exports = router;