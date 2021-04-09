const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const hashPassword = async (password) => {
  return await bcrypt.hashSync(password, salt);
}

const validatePassword = async (password, hash) => {
  return await bcrypt.compareSync(password, hash);
}

const passwordUtil = {hashPassword, validatePassword};

module.exports = passwordUtil;
