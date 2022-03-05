const User = require('../models/users')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')


function getAll () {
    return User.find({})
}

async function signUp(dataUser){
// name, email, password
// validar que no exista un usuario en el email
const {email, password, name} = dataUser

const userFound = await User.findOne({email})

if(userFound) throw new Error('User already exists')
//encriptar mi contraseña

const passwordEncrypted = await bcrypt.hash(password)

return User.create({name, email, password: passwordEncrypted})
}

async function login (email, password){
    
    const userFound = await User.findOne({email})

    if(!userFound) throw new Error('Invalid credentials')

   const isValidPassword = await bcrypt.compare(password, userFound.password)

   if(!isValidPassword) throw new Error ('Invalid credentials')

   // regresar
   return jwt.sign({id:userFound._id})

}

module.exports = {
    getAll,
    signUp,
    login
}