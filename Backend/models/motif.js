const mongoose = require('mongoose');

const motifSchema = new mongoose.Schema({
  libelle: { type: String, required: true },
});

const Motif = mongoose.model('Motif', motifSchema);

module.exports = Motif;