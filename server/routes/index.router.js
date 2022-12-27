const express = require("express");
const router = express.Router();

const noteCtrl = require("../controllers/note.controller");

router.post("/notes", noteCtrl.saveNotes);
router.get("/notes", noteCtrl.getNotes);
router.put("/notes/:id", noteCtrl.updateNotes);
router.delete("/notes/:id", noteCtrl.deleteNotes);
module.exports = router;
