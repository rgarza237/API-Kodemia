require('dotenv').config()
const server = require('./src/server')
const dbConnect = require('./src/lib/db')

const PORT = process.env.PORT || 8080

dbConnect() 
.then(() => {
    console.log('Database connected :D')
    server.listen(PORT, () => {
    console.log('Server running on port 8080')
    })
})
.catch((error) => {
    console.log('Error: ', error)
})


// GET /koders
/*
1 crear (asegurarme de que exista) el modelo necesario
2- crear el caso de uso necesario (useCases/)
3- crear el endpoint (routers/)


// practica
// POST /koders
// PATCH / koders/id
//DELETE / koders/:id
//GET/koders/:id
*/

// Authentication


// Authorization

//bcryot
//jwt

//Flujo dse registro y loggeo

// POST/ USERS/login
// body: {email, password}

//response: token 