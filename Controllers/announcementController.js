const { getAllannouncement } = require("../Repository/announcementRepository")
const { createAnnouncementService, updateAnnouncementService, deleteAnnouncementService } = require("../services/announcementService")

const getAnnouncements = async(req, res, next) => {
  try {
    const announcements = await getAllannouncement()

    res.status(200).json(announcements)
  } catch (error) {
    next(error)
  }
}

const createNewAnnouncement = async(req, res, next) => {
  try {
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
    const result = await createAnnouncementService({ marca, modelo, versao, ano, quilometragem, observacao })

    res.status(201).json(result);
  } catch (error) {
    next(error)
  }
}

const updateAnnouncementById = async(req, res, next) => {
  try {
    const { id } =req.params;
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
    const result = await updateAnnouncementService({ id, marca, modelo, versao, ano, quilometragem, observacao })

    if (result === 0) res.status(404).json({ message: `Id ${id} não encontrado` })

    res.status(200).json(result);
  } catch (error) {
    next(error)
  }
}

const deleteAnnouncementById = async(req, res, next) => {
  try {
    const { id } =req.params;
    const result = await deleteAnnouncementService(id);
    if (result === 0) {
      res.status(404).json({ message: `Id ${id} não foi encontrado` })
    }
    res.status(200).json({ message: `O item com o ${id} foi deletado do banco de dados` });
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAnnouncements,
  createNewAnnouncement,
  updateAnnouncementById,
  deleteAnnouncementById,
}