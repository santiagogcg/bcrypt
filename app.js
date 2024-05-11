const express = require("express")
const app = express()
const routes = require('./routes/users.js')
const session = require('express-session')
const users = require('./data/users.js')
// const verifyToken = require("./middlewares/authMiddleware.js")
// const password = require('./crypto/config.js')
// const jwt = require('./middlewares/authMiddleware.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
    session({
        secret: 'tu_contraseña',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
)


app.use('/', routes, (req, res) => {
    res.send(`
        <form action='/login' method='post'>
            <label for='username' >Usuario:</label>
            <input type='text' id='username' name='username'>

                <label for='password' >Contraseña:</label>
                <input type="text" id='password' name='password'>


                    <button type='submit'>Iniciar sesión</button>

                    <a href='/dashboard'>Panel de Control</a>



                </form>
                `)


    next()
})









app.listen(5000, () => {
    console.log("Escuchando servidor en puerto 5000")
})