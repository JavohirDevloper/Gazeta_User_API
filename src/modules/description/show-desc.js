const Desc = require("./Description");

const showDesc = async ({ id }) => {
  const description = await Desc.findByPk(id);

  return description;
};

module.exports = showDesc;
