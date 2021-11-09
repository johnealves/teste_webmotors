const { 
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement
} = require("../Repository/announcementRepository")

const createAnnouncementService = async({ marca, modelo, versao, ano, quilometragem, observacao }) => {
  const result = await createAnnouncement({ marca, modelo, versao, ano, quilometragem, observacao })

  return result;
}

const updateAnnouncementService = async({ id, marca, modelo, versao, ano, quilometragem, observacao }) => {
  const result = await updateAnnouncement({ id, marca, modelo, versao, ano, quilometragem, observacao })

  return result;
}

const deleteAnnouncementService = async(id) => {
  const result = await deleteAnnouncement(id);

  return result;
}


module.exports = {
  createAnnouncementService,
  updateAnnouncementService,
  deleteAnnouncementService,
}