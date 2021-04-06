const { courseService } = require('../services/index');

exports.getAll = async (req, res) => {
  // Has crn query
  if (req.query.crn !== undefined && req.query.crn !== "") {
    courseService.findByCRN(req.query.crn)
      .then(result => {
        res.json(result);
      })
  } else { // else find all
    courseService.findAll()
      .then(result => {
        res.json(result);
      })
  }
}

exports.getById = async (req, res) => {
  courseService.findById(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch((err, doc) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
}

exports.getByCRN = async (req, res) => {
  courseService.findByCRN(req.params.crn)
    .then(result => {
      res.json(result);
    })
    .catch((err, doc) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
}

exports.addnew = async (req, res, next) => {
  courseService.addnew(req.body)
    .then(result => {
      res.status(201).json();
    })
    .catch((err, doc) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
}

exports.deleteCourse = async (req, res) => {
  courseService.deleteCourse(req.params.id)
    .then(result => {
      res.status(204).json(result);
    })
    .catch((err, doc) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
}

exports.update = async (req, res) => {
  courseService.update(req.params.id, req.body)
    .then(result => {
      res.status(204).json();
    })
    .catch((err, doc) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
}
