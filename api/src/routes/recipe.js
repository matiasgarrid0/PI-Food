const { Router } = require('express');
const { Recipe, Type } = require('../db');
const  axios = require('axios').default;
const { YOUR_API_KEY } = process.env;
const {URL_RECIPE } = require('../utils/path.js');
const router = Router();

const getAllDetail = async () =>{
    const allUrl = await axios.get(`${URL_RECIPE}?apiKey=${YOUR_API_KEY}&number=100&addRecipeInformation=true`)
    const recipes = allUrl.data.results;
    const apiInfo = await recipes.map((e) => {
        return{
            id: e.id,
            title: e.title,
            image: e.image,
            diets: e.diets,
            summary: e.summary,
            spoonacularScore: e.spoonacularScore,
            healthScore: e.healthScore,
            analyzedInstructions: e.analyzedInstructions,
        }
    });
    return apiInfo;
} 
const getDbInfo = async () =>{
    return await Recipe.findAll({
        include:{
            model: Type,
            attributes: ['name'],
            through: {
                attributes:[],
            }
        }
    })
 }

const getAllRecipes = async () =>{
    const allRecipes = await getAllDetail();
    const dbInfo = await getDbInfo();
    const infoTotal = allRecipes.concat(dbInfo);
    return infoTotal;
}
//ROUTES

router.get('/', async (req, res)=>{
    const {name} = req.query;
    const totalRecipes = await getAllRecipes();
    if(name){
        const recipeName = totalRecipes.filter(e => e.title.toLowerCase().includes(name.toLowerCase()));
        recipeName.length ?
        res.status(200).send(recipeName) :
        res.status(404).send('Recipe not found');
    }else{
        res.status(200).send(totalRecipes);
    }
});

router.get('/:id', async (req, res)=>{
    let id = req.params.id;
    console.log(id)
    const recipesTotal = await getAllRecipes();
    if(id){
        let recipeId = await recipesTotal.filter(e => e.id == (id))
        recipeId.length ?
        res.status(200).json(recipeId) :
        res.status(404).send('Recipe not found')
    }
});

router.post('/', async (req, res) => {
    const { 
     title,
     summary,
     spoonacularScore,
     healthScore,
     steps,
     image,
     type,
    } = req.body;
    const createRecipe = await  Recipe.create({
        title,
        summary,
        spoonacularScore,
        healthScore,
        steps,
        image,
    });
    // await createRecipe.setTypes(type);
    // return res.status(200).send(createRecipe)
    const recipeId = await Type.findAll({where: {name: type}})
    createRecipe.addType(recipeId);
    res.send('Recipe created successfully')
})

module.exports = router;