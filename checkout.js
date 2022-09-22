window.onload = () => {
    calculateCart();
};

//Capturing vs. Bubbling

const productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
    let productInfoDiv = event.target.parentElement.parentElement;
  if (event.target.className == "plus") {
    event.target.previousElementSibling.innerText++;
    calculateProduct(productInfoDiv);
    calculateCart();
  } else if (event.target.className == "minus") {
    if (event.target.nextElementSibling.innerText > 1) {
      event.target.nextElementSibling.innerText--;
      calculateProduct(productInfoDiv);
    calculateCart();
    } else {
      if (
        confirm("The product will be deleted from your cart, do you confirm?")
      ) {
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCart();
        console.log("The product has been deleted.");
      }
    }
  } else if (event.target.className == "remove-product") {
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCart();
  } else {
    console.log("other element is clicked!!!");
  }
});
const calculateCart = () => {
  let products = document.querySelectorAll(".product");
  let cartSubtotal = 0,
    cartTax = 0,
    cartShipping = 15.0;
   
  products.forEach((product) => {
    cartSubtotal += parseFloat(product.querySelector(".product-line-price").innerText);

  });

  cartTax = cartSubtotal * 0.18;
  let totalPrice = document.querySelector("#cartSubtotal").lastElementChild;
  totalPrice.innerText = cartSubtotal.toFixed(2);

  let cartTaxHesap = document.querySelector("#cartTax").lastElementChild;
  cartTaxHesap.innerText = cartTax.toFixed(2);

  // //ternary if(condition)
  let cartShippingHesap =
    document.querySelector("#cartShipping").lastElementChild;
  cartShippingHesap.innerText = 
    (cartSubtotal > 0 && cartSubtotal < 300 ? cartShipping : 0).toFixed(2);
  let total = document.querySelector("#cartTotal").lastElementChild;
  total.innerText = (cartSubtotal + cartShipping + cartTax).toFixed(2);

};

const calculateProduct = (productInfoDiv) => {
 
    let price =  productInfoDiv.querySelector("strong").innerText *
    productInfoDiv.querySelector(".quantity-controller p").innerText;

    let priceHesap = productInfoDiv.querySelector(".product-line-price");
    priceHesap.innerText = price.toFixed(2);
 

};
