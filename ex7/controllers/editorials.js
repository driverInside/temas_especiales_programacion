const editorialsRepository = require('../repositories/editorials');

const getAll = function () {
  return editorialsRepository.findAll();
}

const deleteById = async function (id) {
  const editorial = await editorialsRepository.findByPk(id);

  if (editorial) {
    return editorialsRepository.deleteById(id);
  }
}

const findByPk = async function (id) {
  return editorialsRepository.findByPk(id);
}

module.exports = {
  getAll,
  deleteById,
  findByPk
};
