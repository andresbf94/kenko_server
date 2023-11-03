const router = require('express').Router();
const Usuario = require ('../../models/usuario.model');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');

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

// CREAR NUEVO USUARIO

router.post('/register', async(req, res)=>{
    try{   
        req.body.contraseña = bcrypt.hashSync(req.body.contraseña, 10);  // contraseña encriptada
        const usuario = await Usuario.create(req.body);
        res.json(usuario);
    }catch(error){
        res.json({error: error.message});
    }
})

// INICIAR SESION

router.post('/login', async(req, res)=>{

    try {
         const usuario = await Usuario.findOne({ email: req.body.email });

        if(!usuario) {
            return res.json({ error : 'Error en email/contraseña'});
        }
        const eq = bcrypt.compareSync(req.body.contraseña, usuario.contraseña);

        if(!eq){
            return res.json({ error : 'Error en email/contraseña'});
        } 
        res.json ({ 
            sucess: 'Login correcto,', 
            token: createToken(usuario)});

    } catch (error) {
        res.json({error: error.message});
    }
   
})

function createToken(usuario){
    const payload = {
        usuario_id: usuario.id,
        usuario_rol: usuario.rol
    }
    return jwt.sign(payload, 'probandooo')
}

module.exports = router;