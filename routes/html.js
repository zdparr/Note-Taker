// variables
var router = require("express").Router()
var path = require("path")

// get home page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

//get notes page
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

// export for server.js
module.exports = router
