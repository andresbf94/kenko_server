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

    const { email } = req.body;
    const usuarioExiste = await Usuario.findOne({email});

      // Verificar si el correo electrónico ya está en uso
    if(usuarioExiste) {
        return res.json({ error: 'El correo electrónico ya está en uso' });
    }
    try{   
        req.body.password= bcrypt.hashSync(req.body.password, 10);  // contraseña encriptada
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
            console.log('userbd', usuario)
        if(!usuario) {
            return res.json({ error : 'Error en email/contraseña'});
        }
        const eq = bcrypt.compareSync(req.body.password, usuario.password);

        if(!eq){
            return res.json({ error : 'Error en email/contraseña'});
        } 
        res.json ({                                // Devuelvo el rol para identificar el tipo de usuario y de aeste modo acceder a una ruta u otra
            sucess: 'Login correcto', 
            token: createToken(usuario),
            id: usuario._id,
            rol: usuario.rol
        });

    } catch (error) {
        res.json({error: error.message});
    }
   
})

function createToken(usuario){
    const payload = {
        usuario_id: usuario.id,
        rol: usuario.rol
    }
    return jwt.sign(payload, 'token')
}

module.exports = router;