function addItemToCart(ele) {
  let priceOfItem = Number(ele.getAttribute("basketprice"));
  let thingForCart = ele.getAttribute("basketitem");

  console.log(thingForCart, priceOfItem);

  numItems = localStorage.length;

  localStorage.setItem(numItems, thingForCart + "&nbsp;£" + priceOfItem);

  console.log(numItems);

  let curTotal = Number(localStorage.getItem("total"));
  let newTotal = Number(curTotal + priceOfItem);
  localStorage.setItem("total", newTotal.toFixed(2));
}
