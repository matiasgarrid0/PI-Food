const axios = require('axios').default;
const {Recipe, Type} = require('../db')
 
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
getDbInfo();