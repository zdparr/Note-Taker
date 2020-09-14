var express = require("express")
var app = express()
var PORT = process.env.PORT || 8080

// middleware parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

// routes
var api = require("./routes/api.js")
var html = require("./routes/html.js")

app.use(html)
app.use(api)

// listener
app.listen(PORT, function () {
    console.log(`app is listening on port: ${PORT}`)
})