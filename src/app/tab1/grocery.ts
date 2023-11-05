class Grocery {
    name: string;
    description: string;
    quantity: number;
    price: number;
    subTotal: number

    constructor(name: string, description: string, quantity: number, price: number) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.subTotal = quantity * price;
    }
}

let item_milk = new Grocery("Milk", "Oragnic Milk.", 1, 8.00);
let item_eggs = new Grocery("Eggs", "Organic eggs.", 12, 8.00);
let item_bread = new Grocery("Bread", "Classic white bread.", 8, 1.99);
let item_cheese = new Grocery("Cheese", "Cheddar cheese slices.", 6, 4.99);

let groceries: Grocery[] = [];

groceries.push(item_milk);
groceries.push(item_eggs);
groceries.push(item_bread);
groceries.push(item_cheese);

const table = document.getElementById('grocery') as HTMLTableElement;

groceries.map(grocery => {
    const {name, description, quantity, price, subTotal} = grocery;
    const row = table.insertRow()
    row.innerHTML = `
            <td id="name">${name}</td>
            <td id="desc">${description}</td>
            <td id="qty">${quantity}</td>
            <td id="price">${price}</td>
            <td id="subtotal">${subTotal}</td>`;
});