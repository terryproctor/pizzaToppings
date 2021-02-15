function Topping(topping, stock, used) {
	this.topping = topping;
	this.used = used;
  this.stock = stock;

	this.percent = function() {
		return ((this.stock - this.used) / stock) * 100	
	};
}

let peppers = new Topping('Peppers', 30, 0);
let anchovies = new Topping('Anchovies', 10, 8);
let pineapple = new Topping('Pineapple', 15, 0);

let toppings = [peppers, anchovies, pineapple];

let position = document.getElementById("menuContainer");

for (let i=0; i<toppings.length; i++) {
	let newEl = document.createElement('div');
	newEl.className = 'menuItem';
	newEl.style.cursor = 'pointer';
	if (toppings[i].percent() > 25) {
	newEl.className += ' greenBackground'
	}
	else if (toppings[i].percent() <= 25) {
	newEl.className += ' redBackground'
	} 
	
	let newH3 = document.createElement('h3');
	newEl.appendChild(newH3);

	let newText = document.createTextNode(toppings[i].topping);
	newH3.appendChild(newText);
	position.appendChild(newEl);
	
}

toppings.forEach(Topping => {
	console.log(Topping.percent())	
});
