const mongoose = require('mongoose');

const visiteurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  tel: { type: String, required: true },
  email: { type: String, required: true },
  date_embauche: { type: Date, required: true },
  visites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Visite' }],
});

const Visiteur = mongoose.model('Visiteur', visiteurSchema);

module.exports = Visiteur;