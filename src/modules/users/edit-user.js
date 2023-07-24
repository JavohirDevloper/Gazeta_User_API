const User = require("./User");
const { NotFoundError } = require("../../shared/errors");

const editUser = async ({ id, ...data }) => {
  const existing = await User.findByPk(id);
  if (!existing.dataValues) throw new NotFoundError("User not found");

  const result = await User.update(
    { ...data },
    { where: { id }, returning: true }
  );
  return result;
};

module.exports = editUser;
