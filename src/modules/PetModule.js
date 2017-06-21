/**
 * Created by nikita on 21.06.17.
 */

export default () => {
	function showFamily (animal) {
		for (let key in animal){
			console.log(animal[key])
		}
	}
	function Pet (name, family) {
		this.name = name;
		this.family = family
	}

	let cat = new Pet('Vasye','Cat')
	cat.color = 'gray'
	showFamily(cat);
	let dog = new Pet('Jack', 'Dog')
	showFamily(dog);
};
