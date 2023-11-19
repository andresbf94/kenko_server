const jwt = require ('jsonwebtoken');

const checkToken = (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json({ error: 'Debes introducir la cabecera con el token' });
    }
    const token = req.headers['authorization'];
    let payload;
    try {
        payload = jwt.verify(token, 'token');
    } catch (error) {
        return res.json({ error: 'El token no es correcto' });
    }
    req.userId = payload.id;
    next();
}



module.exports = { checkToken };