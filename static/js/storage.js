window.load = doShowAll();

function doShowAll() {
  let key = "";
  let list = "";
  let i = 0;

  for (i = 0; i <= localStorage.length - 1; i++) {
    key = localStorage.key(i);
    if (key !== "total") {
      list += "<ul>" + localStorage.getItem(key) + "</ul>";
    }
  }

  if (list == "") {
    let clearButton = document.getElementById("clear-button");
    clearButton.classList.toggle("invisible");
    let poundBox = document.getElementById("pound-box");
    poundBox.classList.toggle("invisible");
    let listStyler = document.getElementById("list");
    listStyler.classList.toggle("empty-cart");
    let unavailable = document.getElementById("checkout-unavailable");
    unavailable.classList.toggle("invisible");


    list += "Basket Empty";
  }

  document.getElementById("list").innerHTML = list;
  let total = document.getElementById("total");
  total.innerHTML = localStorage.getItem("total");
}

function ClearAll() {
  if (localStorage.length > 0) {
    localStorage.clear();
    doShowAll();
  }
}
