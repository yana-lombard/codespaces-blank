const mongoose = require('mongoose');

const visiteurSchema = new mongoose.Schema({
  nom: { type: String, required: false },
  prenom: { type: String, required: false },
  tel: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date_embauche: { type: Date, required: false },
  password: { type: String, required: false },
  visites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Visite' }],
});

const Visiteur = mongoose.model('Visiteur', visiteurSchema);

module.exports = Visiteur;