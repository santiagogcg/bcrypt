const express = require('express.js')

const jwt = require('jsonwebtoken')


function generateToken(user) {
    return jwt.sign({ user: user.id }, 'tu_contraseña', { expieresIn: '1h,' }
    )

    next()
}


function verifyToken(req, res, next) {
    const token = req.session.token;
    if (!token) {
        return res.status(401).json({ mensaje: "token no generado" })
    } else {

        jwt.verify(token, 'tu_contraseña', (error, decoded) => {
            if (err) {
                return res.status(401).json({ mensaje: "token inválido" })
            }
            req.user = decoded.user;
        })
    }
    next()
}



module.exports = generateToken
module.exports = verifyToken