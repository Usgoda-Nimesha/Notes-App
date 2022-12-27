const mongoose = require("mongoose");
var ObjectId = require("mongoose").Types.ObjectId;
const Note = mongoose.model("Note");

// function for saving data
module.exports.saveNotes = (req, res, next) => {
  var note = new Note();
  note.title = req.body.title;
  note.noteBody = req.body.noteBody;
  note.save((err, doc) => {
    if (!err) {
      res.send(doc);
    }
  });
};

// load data from mongoDB
module.exports.getNotes = (req, res) => {
  Note.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in retrieving Employess" + JSON.stringify(err, undefined, 2)
      );
    }
  });
};


module.exports.updateNotes = (req, res) => {
  var note = {
    title: req.body.title,
    noteBody: req.body.noteBody,
  };
  Note.findByIdAndUpdate(
    req.params.id,
    { $set: note },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Note update: " + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
};

module.exports.deleteNotes = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  }
  Note.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error deleting note");
    }
  });
};
