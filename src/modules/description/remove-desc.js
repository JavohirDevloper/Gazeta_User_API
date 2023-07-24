const { NotFoundError } = require("../../shared/errors");
const Desc = require("./Description");

const removeDesc = async ({ id }) => {
  const existing = await Desc.findByPk(id);

  if (!existing) {
    throw new NotFoundError("Description not found.");
  }
  await existing.destroy();
  return existing;
};

module.exports = removeDesc;
