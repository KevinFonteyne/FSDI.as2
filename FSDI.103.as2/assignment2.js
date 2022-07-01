let product;
let price = "2200";
let quantity = "0";
let cart = "0";
let tax = "0.08"
let total = "0";
// let user1 = "admin";
// let pass1 = "password";

// let userName = prompt("Enter your username");
// let password = prompt("Enter your password");
// console.log(userName, password);

// if(userName==user1 && password==pass1){
//     document.write("Thanks for you recent purchase!");
// } else{
//     document.write("Create an account");
// }    

function Checkout(){
    product=prompt("Enter your product")
    quantity=prompt("How many would you like?")
    cart=(price * quantity)
    total=(cart * tax) + cart
    console.log(product, quantity, cart, tax, total)
    displayInfo() 
}

function displayInfo(){
    document.write(`
    <p>Product: ${product}</p>
    <p>Quanitity: ${quantity}</p>
    <p>Cart: ${cart}</p>
    <p>Tax: ${tax}</p>
    <p>Total: ${total}</p>
    `)
}
Checkout()