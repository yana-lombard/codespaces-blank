const express = require('express');
const mongoose = require('mongoose');


const stuffRoutes = require('./routes/stuff');
const motifRoutes = require('./routes/motif');
const visiteurRoutes = require('./routes/visiteur');
const visiteRoutes = require('./routes/visite');
const praticientRoutes = require('./routes/praticient');

const app = express();

mongoose.connect('mongodb+srv://yanalombard:YanabaSEdoNNee@expressjs.jnndn69.mongodb.net/gsb-visites?retryWrites=true&w=majority')
  .then(() => console.log('T A REUSSIIIIIIT!!!!!'))
  .catch(() => console.log('Décourage pas, ca va aller tkt'));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', stuffRoutes);
app.use('/api/motifs', motifRoutes);
app.use('/api/visiteurs', visiteurRoutes);
app.use('/api/visites', visiteRoutes);
app.use('/api/praticients', praticientRoutes);

module.exports = app;