if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

var cart = [];

function ready() {
  const products = [
    {
      id: 1,
      name: "Adult Male Bike",
      price: 20.5,
      image: "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
      product_type: "bike"
    },
    {
      id: 2,
      name: "Adult Female Bike",
      price: 20.5,
      image: "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
      product_type: "bike"
    },
    {
      id: 3,
      name: "Kids Unisex Bike",
      price: 12.75,
      image: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
      product_type: "bike"
    },
    {
      id: 4,
      name: "Adult Unisex Helmet",
      price: 4.0,
      image: "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
      product_type: "accessory"
    },
    {
      id: 5,
      name: "Kids Unisex Helmet",
      price: 3.5,
      image: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
      product_type: "accessory"
    },
    {
      id: 6,
      name: "Insurance",
      price: 9.99,
      image: "http://via.placeholder.com/250x250?text=Insurance",
      product_type: "addon"
    }
  ];

  const shopItems = document.querySelector(".shop-items");

  var types = document.getElementById("selectType");

  types.addEventListener("change", function() {
    if (types.value === "bikes") {
      const getBikes = products.filter(
        product => product.product_type === "bike"
      );
      const html = `<h2 class="section-header">Bikes</h2>
        <div class="items-list">
        ${getBikes.map(
          bike => `<div  class="shop-item">
                  <span class="shop-item-title">${bike.name}</span>
                
                  <img class="shop-item-image" src=${bike.image} />
                
                  <div class="shop-item-details">
                    <span class="shop-item-price">$${parseFloat(
                      bike.price
                    ).toFixed(2)}</span>
                
                    <button class="btn btn-primary shop-item-button" type="button" id='bikeButton'>
                      SELECT
                    </button>
          </div>
        </div>`
        )}`;

      shopItems.innerHTML = html;
      var removeCartItemButtons = document.getElementsByClassName("btn-danger");
      for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeItem);
      }

      var quantityInputs = document.getElementsByClassName(
        "cart-quantity-input"
      );
      for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
      }

      var addToCartButtons = document.getElementsByClassName(
        "shop-item-button"
      );
      for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
      }

      document
        .getElementsByClassName("btn-reserve")[0]
        .addEventListener("click", checkOut);
    } else if (types.value === "accessories") {
      const getAccessory = products.filter(
        product => product.product_type === "accessory"
      );
      const html = `<h2 class="section-header">Accessories</h2>
      <div class="items-list">
      ${getAccessory.map(
        accs => `<div  class="shop-item">
                <span class="shop-item-title">${accs.name}</span>
              
                <img class="shop-item-image" src=${accs.image} />
              
                <div class="shop-item-details">
                  <span class="shop-item-price">$${parseFloat(
                    accs.price
                  ).toFixed(2)}</span>
              
                  <button class="btn btn-primary shop-item-button" type="button" id='accesButton'>
                    SELECT
                  </button>
        </div>
      </div>`
      )}`;
      shopItems.innerHTML = html;

      var removeCartItemButtons = document.getElementsByClassName("btn-danger");
      for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeItem);
      }

      var quantityInputs = document.getElementsByClassName(
        "cart-quantity-input"
      );
      for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
      }

      var addToCartButtons = document.getElementsByClassName(
        "shop-item-button"
      );
      for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
      }

      document
        .getElementsByClassName("btn-reserve")[0]
        .addEventListener("click", checkOut);
    } else if (types.value === "addons") {
      const getAddon = products.filter(
        product => product.product_type === "addon"
      );
      const html = `<h2 class="section-header">Add-ons</h2>
        <div class="items-list">
        ${getAddon.map(
          addon => `<div  class="shop-item">
                  <span class="shop-item-title">${addon.name}</span>
                
                  <img class="shop-item-image" src=${addon.image} />
                
                  <div class="shop-item-details">
                    <span class="shop-item-price">$${parseFloat(
                      addon.price
                    ).toFixed(2)}</span>
                
                    <button class="btn btn-primary shop-item-button" type="button" id='addonButton'>
                     SELECT
                    </button>
          </div>
        </div>`
        )}`;
      shopItems.innerHTML = html;
      var removeCartItemButtons = document.getElementsByClassName("btn-danger");
      for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeItem);
      }

      var quantityInputs = document.getElementsByClassName(
        "cart-quantity-input"
      );
      for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
      }

      var addToCartButtons = document.getElementsByClassName(
        "shop-item-button"
      );
      for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
      }

      document
        .getElementsByClassName("btn-reserve")[0]
        .addEventListener("click", checkOut);
    } else if (types.value === "none") {
      const html = `<h2 class="section-header"></h2>
        <div class="items-list">      
          </div>
        </div>
      `;
      shopItems.innerHTML = html;
    }
  });
}

function checkOut() {
  if (cart.includes("bikeButton")) {
    document.getElementById("reservedMessage").style.display = "block";
    var cartItems = document.getElementsByClassName("cart-items")[0];
    while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
    cart = [];
  } else {
   document.getElementById("errorMessage").style.display = "block";
  }
}

function removeItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  cart.push(event.target.id);
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      document.getElementById("infoMessage").style.display = "block";
      return;
    }
  }
  var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + parseFloat(total).toFixed(2);
}
