const express = require("express");
const pendudukController = require("../controller/penduduk");

const router = express.Router();

// Create //

//Create Actor
router.post('/createPenduduk', pendudukController.createPenduduk)


// Read //

//Read Actor By Id
router.get('/getPenduduk/:id', pendudukController.getPenduduk)
//Read Name By Id
router.get('/getNama/:id', pendudukController.getNama)
//Read All Actor
router.get('/getAllPenduduk', pendudukController.getAllPenduduk)

// Update //

//Update Name Actor By Id
router.put('/updateNama/:id', pendudukController.updateNama)

// Delete //

//Delete Actor By Id
router.delete('/deletePendudukById/:id', pendudukController.deletePendudukById)

//export module
module.exports = router;