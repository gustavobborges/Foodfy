const fs = require('fs')
const data = require('../data.js')

exports.index = function(req, res) {
    return res.render("recipes/index", { recipes: data.recipes })
}

exports.show = function(req, res) {
    //pegando o parâmetro
    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe) {
        return id == recipe.id
    })

    if(!foundRecipe) return res.send("recipe not found!")
    
    const recipe = {
        ...foundRecipe
    }

    return res.render("recipes/show", { recipe: recipe })
}