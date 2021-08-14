export const filterByDiets = (array, diet) => {
    
    if(diet !== 'all'){

        let filtered = array.filter((c) => {
            if (c.Types) {
                for (let i = 0; i < c.Types.length; i++) {
                    if (c.Types[i].name === diet) {
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

export default filterByDiets;