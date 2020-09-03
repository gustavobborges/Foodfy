const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receitas = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {

    return res.render("home")
})

server.get("/receitas", function(req, res) {

    return res.render("receitas")
})

server.get("/sobre", function(res, res) {
    return res.render("sobre")
})


// server.use(function(req, res) {
//     res.status(404).render("not-found")
// })

server.listen(5000, function() {
    console.log("server is running...")
})