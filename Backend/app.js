const express = require('express');
const mongoose = require('mongoose');

const auth = require('./middlewares/auth');

const stuffRoutes = require('./routes/stuff');
const motifRoutes = require('./routes/motif');
const visiteurRoutes = require('./routes/visiteur');
const visiteRoutes = require('./routes/visite');
const praticientRoutes = require('./routes/praticient');
const userRoutes = require('./routes/user');


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
app.use('/api/motifs', auth, motifRoutes);
app.use('/api/visiteurs', auth, visiteurRoutes);
app.use('/api/visites', auth, visiteRoutes);
app.use('/api/praticients', auth, praticientRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;