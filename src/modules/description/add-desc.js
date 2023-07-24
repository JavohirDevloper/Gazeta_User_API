const Desc = require("./Description");

const addDesc = async (data) => {
  const result = await Desc.create({ ...data });

  return result;
};

module.exports = addDesc;
