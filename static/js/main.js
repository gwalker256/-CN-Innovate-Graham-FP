function changeColour () {
    let element = document.getElementById("pizzas-nav");
    element.classList.toggle("red-link");
};

// function darkMode() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
// };

// let margheritaName = "Margherita ";
// let margheritaCost = 12.99;

// let cartItems = [];
// let cartTotal = 0;



// function addToCart () {

//     cartItems.push(margheritaName);
//     cartTotal = cartTotal + margheritaCost;
//     let cartElement = document.getElementById("cart");
//     cartElement.innerHTML = (cartItems + margheritaCost);
//     let totalElement = document.getElementById("total");
//     totalElement.innerHTML = (cartTotal);
    
//     // return cartTotal, margheritaCost;
//     }
    
//     localStorage.setItem("lastname", "Smith");
// localStorage.getItem("lastname");

let margheritaName = "Margherita "
let margheritaCost = 12.99;

let cartItems = [];
let cartTotal = 0;
let itemAmount = 0

function addToCart () {
itemAmount = itemAmount + 1;
localStorage.setItem((itemAmount), (margheritaName));
localStorage.setItem("totalCost", (cartTotal + margheritaCost));
cartTotal = cartTotal + margheritaCost;
    
    let cartElement = document.getElementById("cart");
    cartElement.innerHTML = cartElement.innerHTML + (localStorage.getItem(itemAmount) + margheritaCost + "<br>");
    let totalElement = document.getElementById("total");
    totalElement.innerHTML = (localStorage.getItem("totalCost"));
    
    // return cartTotal, margheritaCost;
    }

// fetch("/static/js/products.json")
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     localStorage.setItem("products", JSON.stringify(data));
//     if(!localStorage.getItem("cart")){
//         localStorage.setItem("cart", "[]");
//     }
// });

// let products = JSON.parse(localStorage.getItem("products"));
// let cart = JSON.parse(localStorage.getItem("cart"));

// function addItemToCart(productId){
//     let product = products.find(function(product){
//         return product.id == productId;
//     });

//     if (cart.length == 0){
//         cart.push(product);
//     }else{
//         let res = cart.find(element => element.id == productId);
//         if(res === undefined){
//             cart.push(product);
//         }
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));

//     let cartElement = document.getElementById("cart");
//     cartElement.innerHTML = localStorage.getItem(cart);
    
//     // let totalElement = document.getElementById("total");
//     // totalElement.innerHTML = (localStorage.getItem("totalCost"));
// }

// addItemToCart(1);
// addItemToCart(1);

// function removeItemFromCart(productId){
//     let temp = cart.filter(item => item.id != productId);
//     localStorage.setItem("cart", JSON.stringify(temp));
// }

// removeItemFromCart(1)

// function updateQuantity(productId, quantity){
//     for(let product of cart){
//         if(product.id == productId){
//             product.quantity = quantity;
//         }
//     }
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

// updateQuantity(1, 93)

//     function getTotal(){
//         let temp = cart.map(function(item){
//             return parseFloat(item.price);

//         });

//         let sum = temp.reduce(function(prev, next){
//             return prev + next;
//         }, 0);

//         console.log(sum)
//     }
// getTotal();

// console.log(cart)
