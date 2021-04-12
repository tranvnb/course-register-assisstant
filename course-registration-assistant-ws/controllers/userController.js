const { userService } = require('../services/index');
const passwordUtil = require('../utilities/passwordUtil');

exports.login = async (req, res) => {

  const username = req.body.username;
  const password = req.body.password;
  
  let auth_user;

  userService.findOne(username)
    .then(user => {
      if(user) {
        auth_user = user;
        return passwordUtil.validatePassword(password, user.password);
      } else {
        res.status(401).json({message: "Invalid login credentials"});
      }
    })
    .then(isPasswordValid => {
      if(isPasswordValid === true) {
        res.json({ message: 'success', user: auth_user });
      } else {
        res.status(401).json({message: "Invalid login credentials"});
      }
    })
    .catch((err, doc) => {
      res.status(500).send('Internal Server Error');
    })
}

exports.getAll = async (req, res) => {
  userService.findAll()
    .then(result => {
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
  // Hash the password first
  const password = await passwordUtil.hashPassword(req.body.password);

  userService.createUser(req.body.username, password)
    .then(result => {
      if (result === null) {
        res.status(400).json({error: "user already exists"})
      }
      res.status(201).json(result);
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
