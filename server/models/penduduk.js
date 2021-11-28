const Sequelize = require('sequelize');
const db = require('../config/database');

//Define Database For Actor Table
const Penduduk = db.define("datapenduduk", {
    nik: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: "Kosong"
    },
    nama: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Kosong"
    },
    usia: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Kosong"
    },
    jenis_kelamin: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Kosong"
    },
    pekerjaan: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Kosong"
    }
    }, 
    
    { 
    tableName : 'datapenduduk',
    schema: 'public',
    freezeTableName: true,
    createdAt : false,
    updatedAt : false
});

module.exports = Penduduk;