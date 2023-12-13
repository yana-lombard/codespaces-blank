const mongoose = require('mongoose');

const visiteSchema = new mongoose.Schema({
  date_visite: { type: Date, required: true },
  commentaire: { type: String, required: true },
  visiteur: { type: mongoose.Schema.Types.ObjectId, ref: 'Visiteur' },
  praticient: { type: mongoose.Schema.Types.ObjectId, ref: 'Praticient' },
  motif: { type: mongoose.Schema.Types.ObjectId, ref: 'Motif' },
});

const Visite = mongoose.model('Visite', visiteSchema);

module.exports = Visite;