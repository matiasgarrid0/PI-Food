
export const getFilterDiet = (diet, array) => {
    console.log( "array",array)
    if(diet !== 'all'){

        let filtered = array.filter(c =>  {
            if (c.types) {
                for (let i = 0; i < c.types.length; i++) {
                    if (c.types[i].name === diet) {
                        return true;
                    }
                }
            } else {
                if(c.diets){for (let i = 0; i < c.diets.length; i++) {
                    if (c.diets[i] === diet) {
                        return true;
                    }
                }

                }
            }
        });
        return filtered;
    } return array
  


};

export default getFilterDiet;