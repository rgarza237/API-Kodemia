const Koder = require('../models/koders')

// endpoint -> caso de uso -> modelos

function getAll(){
    return Koder.find({})
}

function create(dataKoder){
    const {name, lastName, age, gender} = dataKoder
    return Koder.create({name, lastName, age, gender})
}

function getKoderById(idKoder){
    return Koder.findById(idKoder);
}


module.exports = {
    getAll,
    create,
    getKoderById
}