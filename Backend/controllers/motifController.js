const Motif = require('../models/motif');

exports.createMotif = (req, res, next) => {
  const motif = new Motif({
    libelle: req.body.libelle,
  });

  motif.save().then(
    () => {
      res.status(201).json({
        message: 'Motif created successfully!',
        motif_id: motif._id
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

exports.getOneMotif = (req, res, next) => {
  Motif.findOne({
    _id: req.params.id,
  }).then(
    (motif) => {
      res.status(200).json(motif);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error,
      });
    }
  );
};

exports.modifyMotif = (req, res, next) => {
  const motif = new Motif({
    _id: req.params.id,
    libelle: req.body.libelle,
  });

  Motif.updateOne({_id: req.params.id}, motif).then(
    () => {
      res.status(201).json({
        message: 'Motif updated successfully!',
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

exports.deleteMotif = (req, res, next) => {
  Motif.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Motif deleted!',
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

exports.getAllMotifs = (req, res, next) => {
  Motif.find().then(
    (motifs) => {
      res.status(200).json(motifs);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error,
      });
    }
  );
};