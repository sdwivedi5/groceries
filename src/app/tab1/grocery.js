var Grocery = /** @class */ (function () {
    function Grocery(name, description, quantity, price) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.subTotal = quantity * price;
    }
    return Grocery;
}());
var item_milk = new Grocery("Milk", "Oragnic Milk.", 1, 8.00);
var item_eggs = new Grocery("Eggs", "Organic eggs.", 12, 8.00);
var item_bread = new Grocery("Bread", "Classic white bread.", 8, 1.99);
var item_cheese = new Grocery("Cheese", "Cheddar cheese slices.", 6, 4.99);
var groceries = [];
groceries.push(item_milk);
groceries.push(item_eggs);
groceries.push(item_bread);
groceries.push(item_cheese);
var table = document.getElementById('grocery');
groceries.map(function (grocery) {
    var name = grocery.name, description = grocery.description, quantity = grocery.quantity, price = grocery.price, subTotal = grocery.subTotal;
    var row = table.insertRow();
    row.innerHTML = "\n            <td id=\"name\">".concat(name, "</td>\n            <td id=\"desc\">").concat(description, "</td>\n            <td id=\"qty\">").concat(quantity, "</td>\n            <td id=\"price\">").concat(price, "</td>\n            <td id=\"subtotal\">").concat(subTotal, "</td>");
});
