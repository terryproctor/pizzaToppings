function Topping(topping, stock, used) {
	this.topping = topping;
	this.used = used;
  this.stock = stock;

	this.percentage = function() {
		return ((this.stock - this.used) / stock) * 100	
	};
}

let peppers = new Topping('peppers', 30, 0);
let anchovies = new Topping('anchovies', 10, 0);
let pineapple = new Topping('pineapple', 15, 0);

let toppings = [peppers, anchovies, pineapple];

for (let i=0; i<toppings.length; i++) {
	let newEl = document.createElement('div');
	let newText = document.createTextNode(toppings[i].topping);
	newEl.appendChild(newText);
	
	let position = document.getElementById("menuContainer");

	position.appendChild(newEl);


}
//need to add css classes to new elements
