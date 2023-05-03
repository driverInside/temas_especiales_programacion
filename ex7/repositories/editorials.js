const EditorialModel = require('../models/editorials');

const findAll = function () {
  return EditorialModel.findAll();
}

const findByPk = function (pk) {
  return EditorialModel.findByPk(pk);  
}

const deleteById = function (id) {
  return EditorialModel.destroy({
    where: {
      id
    }
  });
}

module.exports = {
  findAll,
  deleteById,
  findByPk
};
