let cart = [];
let total = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const price = parseFloat(button.dataset.price);
        cart.push(price);
        total += price;
        updateCart();
    });
});

document.querySelectorAll('.buy').forEach(button => {
    button.addEventListener('click', () => {
        const price = parseFloat(button.dataset.price);
        alert(`You bought an item for $${price}`);
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map((item, index) => `<p>Item ${index + 1}: $${item}</p>`).join('');
    document.getElementById('total').innerText = total.toFixed(2);
}

document.getElementById('checkout').addEventListener('click', () => {
    alert(`Your total amount is $${total.toFixed(2)}. Proceed to payment.`);
    // Here, you could implement payment logic
    total = 0; // Reset after checkout
    cart = [];
    updateCart();
});
