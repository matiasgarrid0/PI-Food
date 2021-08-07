const axios = require('axios').default;
const {Recipe} = require('../db')
const { YOUR_API_KEY } = process.env;
const {URL_RECIPE } = require('../utils/path.js');

const getAllDetail = async () =>{
    const allUrl = await axios.get(`${URL_RECIPE}?apiKey=${YOUR_API_KEY}&number=100&addRecipeInformation=true`);
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
            Instructions: e.analyzedInstructions,
        }
    });
    return apiInfo;
} 
getAllDetail();