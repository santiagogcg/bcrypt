const session = require('express-session')
// const verifyToken = require("./middlewares/authMiddleware.js")

const express = require("express");
const routes = express.Router();
const jwt = require('jsonwebtoken');
// const verifyToken = require('./middlewares/authMiddleware.js');


routes.use(express.json())
routes.use(express.urlencoded({ extended: true }))



const users = [
    { id: 1, username: 'user1', password: 'password1', name: 'name1' },
    { id: 2, username: 'user2', password: 'password2', name: 'name2' },
    { id: 3, username: 'user3', password: 'password3', name: 'name3' },
]

function generateToken(user) {
    return jwt.sign({ user: user.id }, 'tu_contraseña', { expiresIn: '1h' }
    )

    next()
}


routes.post("/login", (req, res) => {
    const { username, password } = req.body;


    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = generateToken(user);
        req.session.token = token;
        res.redirect('/dashboard');



    }
    else {
        res.status(401).json({ mensaje: 'Credenciales Incorrectas' })
    }
    next()

});




routes.get("/dashboard", (req, res) => {
    res.send(`<h1>BIENVENIDO</h1>`)

    next()

});







module.exports = routes



