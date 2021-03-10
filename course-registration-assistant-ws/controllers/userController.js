const { userService } = require('../services/index');

exports.login = async (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];
  userService.findOne(username, password)
    .then(result => {
      if (result) {
        res.json({ message: 'success', user: result });
      } else {
        res.status(401).json();
      }
    })
    .catch((err, doc) => {
      res.status(500).send('Internal Server Error');
    })
}

exports.getAll = async (req, res) => {
  userService.findAll()
    .then(result => {
      console.log('find all', result);
      res.json(result);
    })
}

exports.getById = async (req, res) => {
  userService.findById(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch((err, doc) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
}

exports.createUser = async (req, res, next) => {
  userService.createUser(req.body['username'], req.body['password'])
    .then(result => {
      res.status(201).json();
    })
    .catch((err, doc) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
}

exports.deleteById = async (req, res) => {
  userService.deleteUser(req.params.id)
    .then(result => {
      res.status(204).json(result);
    })
    .catch((err, doc) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
}

exports.updateById = async (req, res) => {
  userService.updateUser(req.params.id, req.body)
    .then(result => {
      res.status(204).json();
    })
    .catch((err, doc) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
}