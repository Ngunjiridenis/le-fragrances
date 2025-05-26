// Data for your perfumes (price is now a number for calculations)
const perfumes = [
    {
        id: 'one-million',
        name: 'One Million',
        price: 25.00, // Price as a number
        description: 'A bold, spicy fragrance with notes of leather, amber, and citrus, known for its luxurious and seductive appeal.',
        image: 'https://via.placeholder.com/400x300/F08080/FFFFFF?text=One+Million'
    },
    {
        id: '212-vip',
        name: '212 VIP',
        price: 25.00,
        description: 'A sweet and tropical scent featuring rum, vanilla, and passion fruit, designed to evoke exclusivity and nightlife glamour.',
        image: 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=212+VIP'
    },
        {
        id: 'golden-dust',
        name: 'Golden Dust',
        price: 25.00,
        description: 'A warm, floral fragrance with Damascena rose, honeysuckle, vanilla, and amber offering a rich and luxurious scent.',
        image: 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Golden+Dust'
    },
        {
        id: 'sugar-baby',
        name: 'Sugar Baby',
        price: 25.00,
        description: 'A sweet floral perfume with honeysuckle, grapefruit, and musk, designed to blend with your skins natural scent.',
        image: 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Sugar+Baby'
    },
        {
        id: 'sweet-passion',
        name: 'Sweet Passion',
        price: 25.00,
        description: 'A romantic and charming fragrance with orange blossom, gardenia, vetiver, rose, and honey, offering a long-lasting, feminine scent.',
        image: 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Sweet+Passion'
    },
    {
        id: 'sweet-camilla',
        name: 'Sweet Camilla',
        price: 25.00,
        description: 'This is a softer, floral perfume often associated with feminine elegance. While there are a few variations depending on the brand, it generally offers notes of camellia flower, light citrus, and powdery musks. It is sweet, romantic, and suitable for daily wear or casual outings.',
        image: 'https://via.placeholder.com/400x300/ADD8E6/000000?text=Sweet+Camilla'
    },
    {
        id: 'pearl',
        name: 'Pearl',
        price: 25.00,
        description: 'A name used by multiple fragrance houses, but typically denotes a luxurious, soft, and elegant scent. Common notes include white florals (like lily or jasmine), creamy sandalwood, and sometimes vanilla or musk. It is usually marketed as a graceful and refined perfume.',
        image: 'https://via.placeholder.com/400x300/ADD8E6/000000?text=Pearl'
    },
    {
        id: 'polo-sport',
        name: 'Polo Sport',
        price: 25.00,
        description: 'A fresh, clean, and energetic fragrance designed for active men. It features a mix of citrus, mint, and aldehydes at the top, with heart notes of ginger, seagrass, and jasmine, and a base of musk, sandalwood, and cedar. Ideal for daytime and sporty occasions.',
        image: 'https://via.placeholder.com/400x300/ADD8E6/000000?text=Polo+Sport'
    },
    {
        id: 'polo-blue',
        name: 'Polo Blue',
        price: 25.00,
        description: 'A crisp and invigorating scent with melon, cucumber, basil, and suede evoking the freshness of open waters',
        image: 'https://via.placeholder.com/400x300/ADD8E6/000000?text=Polo+Blue'
    },
    {
        id: 'pink-chiffon',
        name: 'Pink Chiffon',
        price: 25.00,
        description: 'A sweet and floral fragrance with red pear, jasmine petals, vanilla orchid, and chiffon musk, offering a soft, feminine scent',
        image: 'https://via.placeholder.com/400x300/ADD8E6/000000?text=Pink+Chiffon'
    },
    {
        id: 'baccarat-rouge',
        name: 'Baccarat Rouge 540',
        price: 25.00,
        description: 'A luxurious and complex fragrance with saffron, amberwood, and cedar, known for its warm, radiant, and long-lasting appeal.',
        image: 'https://via.placeholder.com/400x300/ADD8E6/000000?text=Baccarat+Rouge+540'
    },
    {
        id: 'pure-seduction',
        name: 'Pure Seduction',
        price: 25.00,
        description: 'A fruity and floral fragrance with red plum, freesia, and aloe vera, designed to be playful and seductive',
        image: 'https://via.placeholder.com/400x300/ADD8E6/000000?text=Pure+Seduction'
    },
    {
        id: '1man-show',
        name: '1 Man Show',
        price: 25.00,
        description: 'A bold Masculine fragrance with basil, bergamot, frankincense, and cedarwood, offering a strong and confident scent.',
        image: 'https://via.placeholder.com/400x300/ADD8E6/000000?text=1+Man+Show'
    },
    {
        id: 'versace-eros',
        name: 'Versace Eros',
        price: 25.00,
        description: 'A fresh sensual fragrance with mint, green apple, vanilla, and cedarwood designed embody masculine seduction',
        image: 'https://via.placeholder.com/400x300/ADD8E6/000000?text=Versace+Eros'
    },
    {
        id: 'pine-apple',
        name: 'Pineapple',
        price: 25.00,
        description: 'Tropical, juicy note, often blended with citrus, vanilla, or floral elements',
        image: 'https://via.placeholder.com/400x300/ADD8E6/000000?text=Pineapple'
    },
    {
        id: 'mango',
        name: 'Mango',
        price: 25.00,
        description: 'floral, citrus, or gourmand elements for a fresh and exotic scent',
        image: 'https://via.placeholder.com/400x300/ADD8E6/000000?text=Mango'
    }
    // Add more perfume objects here
];

// YOUR BUSINESS EMAIL FOR ORDERS (IMPORTANT: Replace this with your actual email)
const BUSINESS_EMAIL = 'denisngunjiri73@gmail.com'; // <--- **CHANGE THIS!**

// Shopping Cart Array (stores items added to cart)
let cart = []; // Each item in cart will be { id: 'perfume-id', quantity: X }

// Get references to all main sections
const homeSection = document.getElementById('home-section');
const productDetailsSection = document.getElementById('product-details');
const ourStorySection = document.getElementById('our-story-section');
const contactUsSection = document.getElementById('contact-us-section');
const cartSection = document.getElementById('cart-section'); // New cart section

// Get references for product details elements
const detailImage = document.getElementById('detail-image');
const detailName = document.getElementById('detail-name');
const detailPrice = document.getElementById('detail-price');
const detailDescription = document.getElementById('detail-description');
const addToCartBtn = document.getElementById('add-to-cart-btn'); // Renamed for clarity
const backToListingsBtn = document.getElementById('back-to-listings');

// Get references for navigation links
const navHome = document.getElementById('nav-home');
const navOurStory = document.getElementById('nav-our-story');
const navContactUs = document.getElementById('nav-contact-us');
const navCart = document.getElementById('nav-cart'); // New cart nav link
const cartCountSpan = document.getElementById('cart-count'); // Span for cart count

// Get references for cart elements
const cartItemsList = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');
const cartEmptyMessage = document.getElementById('cart-empty-message');
const checkoutButton = document.getElementById('checkout-button');

// Get reference for the contact form and its message
const contactForm = document.getElementById('contact-form');
const formSubmissionMessage = document.querySelector('.form-submission-message');

// --- Helper Functions ---

// Function to hide all main sections
function hideAllSections() {
    homeSection.classList.add('hidden-section');
    homeSection.classList.remove('active-section');

    productDetailsSection.classList.add('hidden-section');
    productDetailsSection.classList.remove('active-section');

    ourStorySection.classList.add('hidden-section');
    ourStorySection.classList.remove('active-section');

    contactUsSection.classList.add('hidden-section');
    contactUsSection.classList.remove('active-section');

    cartSection.classList.add('hidden-section'); // Hide cart section
    cartSection.classList.remove('active-section');
}

// Function to show a specific section
function showSection(sectionElement) {
    hideAllSections(); // Hide everything first
    sectionElement.classList.remove('hidden-section');
    sectionElement.classList.add('active-section');
}

// --- Product and Cart Functions ---

// Function to display product details
function showProductDetails(perfumeId) {
    const selectedPerfume = perfumes.find(perfume => perfume.id === perfumeId);

    if (selectedPerfume) {
        detailImage.src = selectedPerfume.image;
        detailImage.alt = selectedPerfume.name;
        detailName.textContent = selectedPerfume.name;
        detailPrice.textContent = `Ksh. ${selectedPerfume.price.toFixed(2)} per ml`; // Format price for display
        detailDescription.textContent = selectedPerfume.description;
        addToCartBtn.dataset.perfumeId = selectedPerfume.id; // Set data-perfume-id for the add to cart button

        showSection(productDetailsSection); // Show only product details
    }
}

// Function to add item to cart
function addItemToCart(perfumeId) {
    const existingItemIndex = cart.findIndex(item => item.id === perfumeId);

    if (existingItemIndex > -1) {
        // Item already in cart, increase quantity
        cart[existingItemIndex].quantity++;
    } else {
        // Item not in cart, add new
        cart.push({ id: perfumeId, quantity: 1 });
    }
    updateCartDisplay();
    alert(`${perfumes.find(p => p.id === perfumeId).name} added to cart!`);
}

// Function to remove item from cart
function removeItemFromCart(perfumeId) {
    cart = cart.filter(item => item.id !== perfumeId);
    updateCartDisplay();
}

// Function to update the cart display and total
function updateCartDisplay() {
    cartItemsList.innerHTML = ''; // Clear current cart items
    let total = 0;

    if (cart.length === 0) {
        cartEmptyMessage.style.display = 'block';
        checkoutButton.disabled = true; // Disable checkout if cart is empty
    } else {
        cartEmptyMessage.style.display = 'none';
        checkoutButton.disabled = false; // Enable checkout if cart has items
        cart.forEach(cartItem => {
            const perfume = perfumes.find(p => p.id === cartItem.id);
            if (perfume) {
                const itemTotal = perfume.price * cartItem.quantity;
                total += itemTotal;

                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span class="item-name">${perfume.name}</span>
                    <span class="item-quantity">Qty: ${cartItem.quantity}</span>
                    <span class="item-price">Ksh${itemTotal.toFixed(2)}</span>
                    <button class="remove-item-btn" data-perfume-id="${perfume.id}">Remove</button>
                `;
                cartItemsList.appendChild(listItem);
            }
        });
    }

    cartTotalSpan.textContent = `Ksh${total.toFixed(2)}`;
    cartCountSpan.textContent = cart.length; // Update the count in the header
}

// Function to handle "Proceed to Order" (mailto link)
function proceedToOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add some items first.');
        return;
    }

    let emailSubject = encodeURIComponent('New Perfume Order from Aroma(Zhi) Fragrances');
    let emailBody = 'Hello Aroma(Zhi) Fragrances,\n\nI would like to place an order for the following perfumes:\n\n';

    let orderDetails = [];
    let grandTotal = 0;

    cart.forEach(cartItem => {
        const perfume = perfumes.find(p => p.id === cartItem.id);
        if (perfume) {
            const itemPrice = perfume.price;
            const itemTotal = itemPrice * cartItem.quantity;
            orderDetails.push(`${perfume.name} (Qty: ${cartItem.quantity}) - Ksh${itemTotal.toFixed(2)}`);
            grandTotal += itemTotal;
        }
    });

    emailBody += orderDetails.join('\n');
    emailBody += `\n\nEstimated Total: Ksh${grandTotal.toFixed(2)}`;
    emailBody += '\n\nPlease contact me to confirm the order and arrange payment/delivery details.';
    emailBody += '\n\nMy details: (Please fill in your name and contact number here)';
    emailBody += '\nName: ';
    emailBody += '\nPhone: ';
    emailBody += '\n\nThank you!';

    const mailtoLink = `mailto:${BUSINESS_EMAIL}?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Optional: Clear the cart after sending the order (assumes success)
    // In a real app, you'd only clear after server confirmation.
    cart = [];
    updateCartDisplay();
    alert('Your order request has been sent! Please check your email client to complete sending the message.');
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for navigation links
    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(homeSection);
    });

    navOurStory.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(ourStorySection);
    });

    navContactUs.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(contactUsSection);
    });

    navCart.addEventListener('click', (e) => { // New cart nav listener
        e.preventDefault();
        showSection(cartSection);
        updateCartDisplay(); // Make sure cart is updated when opened
    });

    // Add event listeners for "View Details" buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const perfumeId = event.target.dataset.perfumeId;
            showProductDetails(perfumeId);
        });
    });

    // Add event listener to "Add to Cart" button
    addToCartBtn.addEventListener('click', (e) => {
        const perfumeId = e.target.dataset.perfumeId;
        if (perfumeId) {
            addItemToCart(perfumeId);
        } else {
            console.error('No perfume ID found for Add to Cart button.');
        }
    });

    // Event delegation for remove buttons in the cart list
    cartItemsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item-btn')) {
            const perfumeId = e.target.dataset.perfumeId;
            removeItemFromCart(perfumeId);
        }
    });


    // Add event listener to "Back to Collection" button
    backToListingsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(homeSection);
    });

    // Handle contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log('Contact Form Submitted!');
        console.log('Name:', document.getElementById('name').value);
        console.log('Email:', document.getElementById('email').value);
        console.log('Message:', document.getElementById('message').value);

        formSubmissionMessage.style.display = 'block';
        contactForm.reset();
        setTimeout(() => {
            formSubmissionMessage.style.display = 'none';
        }, 5000);
    });

    // Add event listener for the "Proceed to Order" button
    checkoutButton.addEventListener('click', proceedToOrder);

    // Initial load: ensure home section is visible and cart display is updated
    showSection(homeSection);
    updateCartDisplay(); // Initialize cart display
});