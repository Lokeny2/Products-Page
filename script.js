// 1. The Data
const products = [
    { id: 1, name: "Premium Laptop", price: 1299, desc: "Power for creators.", image: "images/laptop.jpg" },
    { id: 2, name: "Wireless Mouse", price: 45, desc: "Silent clicks, long battery.", image: "images/mouse.jpg" },
    { id: 3, name: "Mechanical Keyboard", price: 89, desc: "RGB backlit, tactile feel.", image: "images/keyboard.jpg" },
    { id: 4, name: "UltraWide Monitor", price: 350, desc: "Immersive 34-inch display.", image: "images/monitor.jpg" },
    { id: 5, name: "USB-C Hub", price: 30, desc: "7-in-1 connectivity.", image: "images/hub.jpg" },
    { id: 6, name: "Webcam HD", price: 65, desc: "1080p for clear meetings.", image: "images/webcam.jpg" }
];

// Initialize cart from Local Storage or empty array if none exists
let cart = JSON.parse(localStorage.getItem('mitamboCart')) || [];

// 2. Selection
const container = document.getElementById('product-container');
const cartCountElement = document.getElementById('cart-count');

// Helper to update the UI count
function updateBadge() {
    cartCountElement.innerText = cart.length;
}
updateBadge(); // Run once on load

// 3. The Loop
products.forEach((item) => {
    // Create the element
    const card = document.createElement('div');
    card.className = 'card';

    // Set the content - ADDED THE IMG TAG HERE
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="product-img">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="price">$${item.price}</div>
        <button onclick="handlePurchase(${item.id})">Buy Now</button>
    `;

    // Add to page
    container.appendChild(card);
});

// 4. Interaction
function handlePurchase(id) {
    const product = products.find(p => p.id === id);
    
    // Add to cart array
    cart.push(product);
    
    // Save updated cart to Local Storage
    localStorage.setItem('mitamboCart', JSON.stringify(cart));
    
    updateBadge();
    console.log(`Processing order for: ${product.name}`);
    alert(`Added ${product.name} to your cart!`);
}

// New Functions for viewing the cart

function showCart() {
    const modal = document.getElementById('cart-modal');
    const list = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total');
    
    list.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        list.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        // Loop through cart items to display them
        cart.forEach((item) => {
            total += item.price;
            const itemRow = document.createElement('div');
            itemRow.innerHTML = `<span>${item.name}</span> <span>$${item.price}</span>`;
            list.appendChild(itemRow);
        });
    }

    totalEl.innerText = `Total: $${total}`;
    modal.style.display = 'block';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function clearCart() {
    cart = [];
    localStorage.removeItem('mitamboCart');
    updateBadge();
    closeCart();
}
