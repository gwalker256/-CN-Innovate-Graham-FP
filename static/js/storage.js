window.load = doShowAll();
// window.load = removeBasket ();


// function removeBasket (){
// let basketLink = document.getElementById("checkout-wrapper");
// basketLink.classList.toggle("invisible");
// }
// BELOW HOPEFULLY NOT NEEDED

// function CheckBrowser() {
//     if ('localStorage' in window && window['localStorage'] !== null) {
//         // We can use localStorage object to store data.
//         return true;
//     } else {
//             return false;
//     }
// }

// <area id="nose" onmouseover="zoom(this);" />

// function zoom(ele) {
//     var id = ele.id;

//     console.log('area element id = ' + id);
// }

// let numItems = 0

// function addItemToCart(ele){
//     numItems++;
//     // let thingForCart = JSON.stringify(ele.basketitem);
//     let priceOfItem = Number(ele.getAttribute("basketprice"));
//     let thingForCart = ele.getAttribute("basketitem");
//     // let priceOfItem = ele.basketprice;
//     // console.log(document.getElementById(id))
//     // let id = ele.id;
//     // let test = ele.getAttribute("data-test");

//     console.log(thingForCart, priceOfItem);

//         localStorage.setItem(numItems, [priceOfItem, thingForCart]);

//         console.log(numItems)
//         // let basketDiv = document.getElementById("basket-div")
//         // basketDiv.innerHTML = basketDiv.innerHTML + (localStorage.getItem(numItems))
// //         let cartElement = document.getElementById("cart");
// //         cartElement.innerHTML = cartElement.innerHTML + (localStorage.getItem(itemAmount) + margheritaCost + "<br>");
// // // basketDiv.innerHTML = basketDiv.innerHTML + thingForCart, priceOfItem;
//         // console.log(localStorage.getItem(1[1]))

//         // console.log(numItems)
//     // console.log(ele)
//     // console.log(id);
//     // console.log(test);
//     // localStorage.clear();
// };

function doShowAll() {
    
  let key = "";
  let list = "";
  let i = 0;
  //For a more advanced feature, you can set a cap on max items in the cart.
  for (i = 0; i <= localStorage.length - 1; i++) {
    key = localStorage.key(i);
    if (key !== "total") {
      // list += "<tr><td>" + key + "</td>\n<td>"
      list += "<ul>" + localStorage.getItem(key) + "</ul>";
    }
  }
  //If no item exists in the cart.
  if (list == "") {
let clearButton = document.getElementById("clear-button");
clearButton.classList.toggle("invisible");
let poundBox = document.getElementById("pound-box");
poundBox.classList.toggle("invisible");

    list += "Basket Empty";
  }
  //Bind the data to HTML table.
  //You can use jQuery, too.
  document.getElementById("list").innerHTML = list;
  let total = document.getElementById("total");
  total.innerHTML = localStorage.getItem("total");
//   let basketLink = document.getElementById("checkout-wrapper");
// basketLink.classList.toggle("invisible");
}

// function doShowAll() {

//     let key = "";
//     let list = "<tr><th>Item</th><th>Value</th></tr>\n";
//     let i = 0;
//     //For a more advanced feature, you can set a cap on max items in the cart.
//     for (i = 0; i <= localStorage.length-1; i++) {
//         key = localStorage.key(i);
//         if (key !== "total"){
//         list += "<tr><td>" + key + "</td>\n<td>"
//                 + localStorage.getItem(key) + "</td></tr>\n";}
//     }
//     //If no item exists in the cart.
//     if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
//         list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
//     }
//     //Bind the data to HTML table.
//     //You can use jQuery, too.
//     document.getElementById('list').innerHTML = list;
//        let total = document.getElementById("total");
// total.innerHTML = (localStorage.getItem("total"));
// }

// function SaveItem() {

//     var name = document.forms.ShoppingList.name.value;
//     var data = document.forms.ShoppingList.data.value;
//     localStorage.setItem(name, data);
//     doShowAll();

// }

// function ModifyItem() {
//     var name1 = document.forms.ShoppingList.name.value;
//     var data1 = document.forms.ShoppingList.data.value;
//     //check if name1 is already exists

// //Check if key exists.
//             if (localStorage.getItem(name1) !=null)
//             {
//               //update
//               localStorage.setItem(name1,data1);
//               document.forms.ShoppingList.data.value = localStorage.getItem(name1);
//             }

//     doShowAll();
// }

// function RemoveItem()
// {
// var name=document.forms.ShoppingList.name.value;
// document.forms.ShoppingList.data.value=localStorage.removeItem(name);
// doShowAll();
// }

function ClearAll() {
  localStorage.clear();
  doShowAll();
}
