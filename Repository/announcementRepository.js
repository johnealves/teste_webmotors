const { Tb_AnuncioWebmotors } = require("../models");

const createAnnouncement = async ({ marca, modelo, versao, ano, quilometragem, observacao }) => {
  const newAnnouncement = await Tb_AnuncioWebmotors
    .create({ marca, modelo, versao, ano, quilometragem, observacao });

  return newAnnouncement.dataValues;
};


const getAllannouncement = async () => {
  const announcement = await Tb_AnuncioWebmotors.findAll();

  return announcement;
};

const updateAnnouncement = async ({ id, marca, modelo, versao, ano, quilometragem, observacao }) => {
  const newAnnouncement = await Tb_AnuncioWebmotors
    .update(
      { marca, modelo, versao, ano, quilometragem, observacao },
      { where: { id } }
    );

  return newAnnouncement.dataValues;
};

const deleteAnnouncement = async (id) => {
  console.log(id)
  const deletedAnnouncement = await Tb_AnuncioWebmotors
    .destroy({ where: { id } });

  return deletedAnnouncement;
};

module.exports = {
  getAllannouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
}