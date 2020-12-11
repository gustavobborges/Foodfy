const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')

routes.get("/", function(req, res) {
    return res.render("home")
})

//RECIPES
routes.get("/recipes", recipes.index)
routes.get("/recipes", recipes.show)

// routes.get("/about", function(res, res) {
//     return res.render("about")
// })

// routes.get(function(req, res) {
//     res.status(404).render("not-found")
// })

// server.get("/recipes", function(req, res) {

//     return res.render("recipes")
// })

// server.get("/recipes/:id", function(req, res) {
//     const id = req.query.id

//     const recipe = recipes.find(function(recipe) {
//         return recipe.title == id
//     })

//     if (!recipe) {
//         return res.send("Receita não encontrada!")
//     }

//     return res.render("recipe", {item: recipe})

    // const recipeIndex = req.params.index
    // console.log(recipes[recipeIndex])
    // return res.render(recipes[recipeIndex])
    // return res.render("recipe")
// })

