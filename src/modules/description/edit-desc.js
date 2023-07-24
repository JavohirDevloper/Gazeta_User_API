const Desc = require("./Description");
const { NotFoundError } = require("../../shared/errors");

const editDesc = async ({ id, ...data }) => {
  const existing = await Desc.findByPk(id);

  if (!existing.dataValues) throw new NotFoundError("Description not found");

  const result = await Desc.update(
    { ...data },
    { where: { id: id }, returning: true }
  );

  return result;
};

module.exports = editDesc;
