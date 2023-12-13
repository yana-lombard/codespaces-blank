const Praticient = require('../models/praticient');

exports.createPraticient = (req, res, next) => {
  const praticient = new Praticient({
    nom: req.body.nom,
    prenom: req.body.prenom,
    tel: req.body.tel,
    email: req.body.email,
    rue: req.body.rue,
    code_postal: req.body.code_postal,
    ville: req.body.ville,
  });

  praticient.save().then(
    () => {
      res.status(201).json({
        message: 'Praticient created successfully!',
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

exports.getOnePraticient = (req, res, next) => {
  Praticient.findOne({
    _id: req.params.id,
  }).then(
    (praticient) => {
      res.status(200).json(praticient);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error,
      });
    }
  );
};

exports.modifyPraticient = (req, res, next) => {
  const praticient = new Praticient({
    _id: req.params.id,
    nom: req.body.nom,
    prenom: req.body.prenom,
    tel: req.body.tel,
    email: req.body.email,
    rue: req.body.rue,
    code_postal: req.body.code_postal,
    ville: req.body.ville,
  });

  Praticient.updateOne({_id: req.params.id}, praticient).then(
    () => {
      res.status(201).json({
        message: 'Praticient updated successfully!',
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

exports.deletePraticient = (req, res, next) => {
  Praticient.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Praticient deleted!',
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

exports.getAllPraticients = (req, res, next) => {
  Praticient.find().then(
    (praticients) => {
      res.status(200).json(praticients);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error,
      });
    }
  );
};