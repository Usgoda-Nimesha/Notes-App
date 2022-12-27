const mongoose = require("mongoose");

var notesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  noteBody: {
    type: String,
  },
});

mongoose.model("Note", notesSchema);
