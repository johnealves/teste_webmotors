const express = require("express");
const { getAnnouncements,
  createNewAnnouncement,
  updateAnnouncementById,
  deleteAnnouncementById
} = require("../Controllers/announcementController");

const router = express.Router();

router.post("/announcement", createNewAnnouncement);
router.get("/announcement", getAnnouncements);
router.put("/announcement/:id", updateAnnouncementById)
router.delete("/announcement/:id", deleteAnnouncementById)

module.exports = router;
