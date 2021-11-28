const Penduduk = require('../models/penduduk')

// Create //

//Method Post To Create Actor
exports.createPenduduk = async (req, res) => {

  //Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content Can Not Be Empty!"
    });
    return;
  }

  //Create A Actor
  const penduduk = {
    //actor_id: req.body.actor_id,
    nik: req.body.nik,
    nama: req.body.nama,
    usia: req.body.usia,
    jenis_kelamin: req.body.jenis_kelamin,
    pekerjaan: req.body.pekerjaan
    //last_update: req.body.last_update,
  };

  Penduduk.create(penduduk)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ada Error"
      });
    });
};

// Read //

//Method Get To Read Actor By Id      
exports.getPenduduk = async (req, res) => {
  const id  = req.params.id;

  //Find Actor By Id
  Penduduk.findOne({
    where: {
      nik: req.params.id
    },
    attributes: ['nik', 'nama', 'usia', 'jenis_kelamin', 'pekerjaan'],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error Retrieving Actor With Id = " + id
      });
    });
};

//Method Get To Read First Name Actor      
exports.getNama = async (req, res) => {
  const id = req.params.id;

  //Find Actor By Id
  Penduduk.findOne({
    where: {
      nik: req.params.id
    },
    attributes: ['nama'],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error Retrieving Actor With Id = " + id
      });
    });
};

//Method Get To Read All Actor    
exports.getAllPenduduk = async (req, res) => {

  //Find All Actor On Database
  Penduduk.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error Retrieving All Actor"
      });
    });
};

// Update //

//Method To Update First Name Actor
exports.updateNama = async (req, res) => {
  const id = req.params.id;

  //Update Actor First Name By Id
  Penduduk.update(
    { nama: req.body.nama },
    { where: { nik: id } }
  )
    .then(data => {
      if (data == 1) {
        res.send({
          message: "Name Has Been Updated!"
        });
      } else {
        res.send({
          message: `Can't Update Penduduk Name With NIK = ${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error Updating Penduduk Name With NIK = " + id
      });
    });
};

// Delete //

//Method To Delete Actor By Id
exports.deletePendudukById = async (req, res) => {
  const id = req.params.id;

  try {
    await Penduduk.destroy({
      where: { nik: id }
    });
    res.json({
      "message" : "Deleted Successfully"
    });
  } catch(error) {
    console.log(error)
  }
};