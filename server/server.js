//Modules
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

//Database Connection
const db = require('./config/database');

//Connect Database
db.authenticate().then(() => {
    console.log('Database Terhubung...');
}).catch(err => {
    console.log('Error: ' + err);
})

//Routes
const actorRoutes = require('./routes/penduduk');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));

//Use Routes
app.use('/actor', actorRoutes);

//Inisialisasi Server
const PORT = process.env.PORT || 5001;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server Telah Terhubung Di ${PORT}`));
}).catch(err => console.log("Error: " + err));
