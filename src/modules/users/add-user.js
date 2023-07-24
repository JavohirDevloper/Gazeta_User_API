const bcryptjs = require("bcryptjs");
const User = require("./User");

const addUser = async (data) => {
  const hashedPassword = await bcryptjs.hash(data.password, 10);

  const result = await User.create({ ...data, password: hashedPassword });

  return result;
};

module.exports = addUser;
