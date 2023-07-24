const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const removeUser = async ({ id }) => {
  const existing = await User.findByPk(id);

  if (!existing) {
    throw new NotFoundError("User not found.");
  }
  await existing.destroy();
  return existing;
};

module.exports = removeUser;
