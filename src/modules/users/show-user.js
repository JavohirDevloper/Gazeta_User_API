const User = require("./User");

const showUser = async ({ id }) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ["password"] },
    include: "list",
  });

  return user;
};

module.exports = showUser;
