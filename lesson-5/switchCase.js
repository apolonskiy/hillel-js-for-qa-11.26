let type;
const fruitName = 'tomato';

switch (fruitName) {
	case 'apple':
	case 'pear':
	case 'kiwi':
		type = 'Fruit';
        console.log("Type:", type);
        break;
	case 'tomato':
	case 'cucumber':
		type = 'Vegetable';
        console.log("Type:", type);
        break;
	default:
		type = 'Unknown';
        console.log("Type:", type);
        break;
}
console.log("Final Type:", type);