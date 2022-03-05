const express = require('express')
const useCasesKoders = require('../useCases/koders')

const auth = require('../middlewares/auth')

const router = express.Router()

router.use(auth)

router.get('/',  async (request, response) => {
    try {
        const allKoders = await useCasesKoders.getAll()

        response.json({
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all koders',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try{
const koderToCreate = request.body
const koderCreated = await useCasesKoders.create(koderToCreate)

response.json({
    success: true, 
    message: 'koder created',
    data: {
        koder: koderCreated
    }
})

    }catch(error){
        response.status(400)
        response.json({
            success: false, 
            message: 'Error at create a koder',
            error: error.message
        })
    }
})

router.get("/:id", async (request, response) => {
    try {
      const idKoder = request.params.id;
      const koderFound = await useCasesKoders.getKoderById(idKoder);
  
      if (!koderFound) throw new Error("Koder not found");
      response.json({
        success: true,
        message: "koder found",
        data: {
          koder: koderFound,
        },
      });
    } catch (error) {
      response.status(404);
      response.json({
        success: false,
        message: "Koder not found",
        error: error.message,
      });
    }
  });

  module.exports = router