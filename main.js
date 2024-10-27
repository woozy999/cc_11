//cc 11

//task 1 - html code

//task 2

//event listeners for changes in input
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

//task 3

function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity <= 0) {
        totalPriceElement.textContent = '0.00';
        return;
    }
    
    const totalPrice = productPrice * quantity;
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// event listeners for changes
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

//task 4

const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity <= 0) {
        orderSummary.textContent = 'Please enter an amount greater than 0.';
        return;
    }
    
    const totalPrice = totalPriceElement.textContent;
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});