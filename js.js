// Sample product data
const products = [
    { id: 1, name: 'E-Cigarette Starter Kit', price: 39.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 2, name: 'Premium E-Liquid', price: 19.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 3, name: 'Replacement Coils', price: 9.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 4, name: 'Vape Mod', price: 79.99, image: '/placeholder.svg?height=200&width=200' }
];

// Function to create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    return card;
}

// Function to display products
function displayProducts() {
    const productGrid = document.getElementById('productGrid');
    products.forEach(product => {
        const card = createProductCard(product);
        productGrid.appendChild(card);
    });
}

// Function to handle adding products to cart (to be implemented)
function addToCart(productId) {
    console.log(`Product ${productId} added to cart`);
    // Implement cart functionality here
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    console.log('Form submitted:', { name, email, message });
    // Implement form submission logic here (e.g., send data to a server)
    
    event.target.reset();
}

// Add this function to check if the WhatsApp icon is visible
function checkWhatsAppIconVisibility() {
    const whatsappIcon = document.getElementById('whatsappIcon');
    if (whatsappIcon) {
        const rect = whatsappIcon.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        whatsappIcon.style.display = isVisible ? 'flex' : 'none';
    }
}

// Replace the WhatsApp click handler with this updated version
const whatsappIcon = document.getElementById('whatsappIcon');
if (whatsappIcon) {
    whatsappIcon.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with your WhatsApp number (include country code)
        const phoneNumber = '+919599448722';
        const message = 'Hi, I would like to know more about VapeCrew products.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
}

// Add event listeners for scroll and resize
window.addEventListener('scroll', checkWhatsAppIconVisibility);
window.addEventListener('resize', checkWhatsAppIconVisibility);

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    checkWhatsAppIconVisibility();
});

