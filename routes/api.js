// variables
var router = require("express").Router()
var db = require("../db/db.json")
var fs = require("fs")
var noteArr = []

// get all notes
router.get("/api/notes", function (req, res) {
    res.json(db)
})

// add notes
router.post("/api/notes", function (req, res) {
    var newNote = req.body

    // get existing notes and put in array
    var oldNotes = fs.readFileSync(JSON.parse("./db/db.json", "utf-8"))
    noteArr.push(oldNotes)
    // add new note to array
    noteArr.push(newNote)
    console.log(noteArr)
    // write db.json file
    fs.writeFileSync("./db/db.json", JSON.stringify(noteArr))
})

// delete specific note


// export for server.js
module.exports = router