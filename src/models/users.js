const mongoose = require('mongoose')

const useSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        minlength:2,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/  
    },
    password:{
    type: String,
    required: true,
    }
})

const model = mongoose.model('users', useSchema)

module.exports = model 

// regex o expresion regular -> regular una cadena de texto