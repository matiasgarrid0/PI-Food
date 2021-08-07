const {Router}= require('express');
const {Type} = require('../db');
const { default: axios } = require('axios');
const {YOUR_API_KEY}= process.env;
const{URL_RECIPE, RECIPE_INFO}= require('../utils/path');

const router = Router();

// route.get('/', async(req, res)=>{
// //     Obtener todos los tipos de dieta posibles
// // En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá(link)
// let allRecipes = await Type.findAll();
// 	return res.send(allRecipes);
// })
router.get('/', async (req, res)=>{
    const dietsApi = await axios.get(`${URL_RECIPE}?apiKey=${YOUR_API_KEY}&number=100&addRecipeInformation=true`)
    const types = await dietsApi.data.results.map(e => {
		return (e.diets)
	})
    let diets = types.flat();
    let typeDiets = [...new Set(diets), 'vegetarian']
    typeDiets.forEach(e => {
        Type.findOrCreate({
            where: {name: e}
        });
    });
    const allDiets = await Type.findAll();
    res.json(allDiets);
});

module.exports = router;