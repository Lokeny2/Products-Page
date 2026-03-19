// 1. The Data
const products = [
    { id: 1, name: "Premium Laptop", price: 1299, desc: "Power for creators." },
    { id: 2, name: "Wireless Mouse", price: 45, desc: "Silent clicks, long battery." },
    { id: 3, name: "Mechanical Keyboard", price: 89, desc: "RGB backlit, tactile feel." },
    { id: 4, name: "UltraWide Monitor", price: 350, desc: "Immersive 34-inch display." },
    { id: 5, name: "USB-C Hub", price: 30, desc: "7-in-1 connectivity." },
    { id: 6, name: "Webcam HD", price: 65, desc: "1080p for clear meetings." }
];

// 2. Selection
const container = document.getElementById('product-container');

// 3. The Loop
products.forEach((item) => {
    // Create the element
    const card = document.createElement('div');
    card.className = 'card';

    // Set the content
    card.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="price">$${item.price}</div>
        <button onclick="handlePurchase('${item.name}')">Buy Now</button>
    `;

    // Add to page
    container.appendChild(card);
});

// 4. Interaction
function handlePurchase(name) {
    console.log(`Processing order for: ${name}`);
    alert(`Added ${name} to your cart!`);
}
