const Visiteur = require('../models/visiteur');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');

exports.createVisiteur = [
  body('email').isEmail().withMessage('Veuillez entrer un email valide.').normalizeEmail(),
  body('nom').isLength({ min: 2 }).withMessage('Le nom doit contenir au moins 2 caractères.'),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const visiteur = new Visiteur({
      nom: req.body.nom,
      prenom: req.body.prenom,
      tel: req.body.tel,
      email: req.body.email,
      date_embauche: req.body.date_embauche,
      visites: req.body.visites,
    });

    visiteur.save().then(
      () => {
        res.status(201).json({
          message: 'Visiteur created successfully!',
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error,
        });
      }
    );
  })
];
exports.getOneVisiteur = (req, res, next) => {
  Visiteur.findOne({
    _id: req.params.id,
  }).then(
    (visiteur) => {
      res.status(200).json(visiteur);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error,
      });
    }
  );
};

exports.modifyVisiteur = (req, res, next) => {
  const visiteur = new Visiteur({
    _id: req.params.id,
    nom: req.body.nom,
    prenom: req.body.prenom,
    tel: req.body.tel,
    email: req.body.email,
    date_embauche: req.body.date_embauche,
  });

  Visiteur.updateOne({_id: req.params.id}, visiteur).then(
    () => {
      res.status(201).json({
        message: 'Visiteur updated successfully!',
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error,
      });
    }
  );
};

exports.deleteVisiteur = (req, res, next) => {
  Visiteur.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Visiteur deleted!',
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error,
      });
    }
  );
};

exports.getAllVisiteurs = (req, res, next) => {
  Visiteur.find().then(
    (visiteurs) => {
      res.status(200).json(visiteurs);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error,
      });
    }
  );
};