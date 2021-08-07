const {getAllDetail} = require('../controllers/getAllDetail');
const {getDbInfo} = require('../controllers/getDbInfo');

const getAllRecipes = async () =>{
     const allRecipes = await getAllDetail();
     const dbInfo = await getDbInfo();
     const infoTotal = allRecipes.concat(dbInfo);
     return infoTotal;
}
getAllRecipes();