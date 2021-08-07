export const getOrder = (order, array) => {
	switch (order) {
		case 'A-Z':
			return array.sort((a, b) => {
				if (a.title > b.title) {
					return 1;
				} else {
					return -1;
				}
			});
		case 'Z-A':
			return array.sort((a, b) => {
				if (a.title < b.title) {
					return 1;
				} else {
					return -1;
				}
			});
		case 'More Score':
			return array.sort((a, b) => {
				if (a.spoonacularScore < b.spoonacularScore) {
					return 1;
				} else {
					return -1;
				}
			});
		case 'Less Score':
			return array.sort((a, b) => {
				if (a.spoonacularScore > b.spoonacularScore) {
					console.log(a.spoonacularScore)
					return 1;
				} else {
					return -1;
				}
			});

		default:
			return array;
	}
};
export default getOrder;