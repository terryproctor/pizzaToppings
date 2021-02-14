function Topping(topping, stock, used) {
	this.topping = topping;
	this.used = used;
  this.stock = stock;

	this.percentage = function() {
		return ((this.stock - this.used) / stock) * 100	
	};
}

let peppers = new Topping('Peppers', 30, 0);
let anchovies = new Topping('Anchovies', 10, 0);
let pineapple = new Topping('Pineapple', 15, 0);

let toppings = [peppers, anchovies, pineapple];

for (let i=0; i<toppings.length; i++) {
	let newEl = document.createElement('div');
	newEl.className = 'menuItem';
	
	let newH3 = document.createElement('h3');
	newEl.appendChild(newH3);

	let position = document.getElementById("menuContainer");
	let newText = document.createTextNode(toppings[i].topping);
	newH3.appendChild(newText);
	position.appendChild(newEl);


}
//need to add css classes to new elements
