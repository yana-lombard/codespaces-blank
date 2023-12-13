const Visite = require('../models/visite');

exports.createVisite = (req, res, next) => {
  const visite = new Visite({
    date_visite: req.body.date_visite,
    commentaire: req.body.commentaire,
    visiteur: req.body.visiteurId,
    praticient: req.body.praticientId,
    motif: req.body.motifId,
  });

  visite.save().then(
    () => {
      res.status(201).json({
        message: 'Visite created successfully!',
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

exports.getOneVisite = (req, res, next) => {
  Visite.findOne({
    _id: req.params.id,
  }).populate('visiteur praticient motif').then(
    (visite) => {
      res.status(200).json(visite);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error,
      });
    }
  );
};

exports.modifyVisite = (req, res, next) => {
  const visite = new Visite({
    _id: req.params.id,
    date_visite: req.body.date_visite,
    commentaire: req.body.commentaire,
    visiteur: req.body.visiteurId,
    praticient: req.body.praticientId,
    motif: req.body.motifId,
  });

  Visite.updateOne({_id: req.params.id}, visite).then(
    () => {
      res.status(201).json({
        message: 'Visite updated successfully!',
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

exports.deleteVisite = (req, res, next) => {
  Visite.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Visite deleted!',
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

exports.getAllVisites = (req, res, next) => {
  Visite.find().populate('visiteur praticient motif').then(
    (visites) => {
      res.status(200).json(visites);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error,
      });
    }
  );
};