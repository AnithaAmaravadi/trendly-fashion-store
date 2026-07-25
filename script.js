 // PRODUCT DATA
const products = [
  { id: 1, name: "Floral Summer Dress", category: "women", price: 1999, trending: true, isNew: false, rating: 4.5,
    desc: "A breezy floral dress perfect for sunny days. Made with 100% cotton for maximum comfort.",
    img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
    reviews: [
      { name: "Priya S.", rating: 5, title: "Absolutely love it!", text: "The fabric is so soft and the fit is perfect. Got so many compliments!", date: "2026-07-10", verified: true },
      { name: "Anita R.", rating: 4, title: "Beautiful dress", text: "Color is vibrant, fits well. Slightly long for my height but overall great.", date: "2026-07-05", verified: true }
    ]},
  { id: 2, name: "Classic Denim Jacket", category: "men", price: 2999, trending: true, isNew: false, rating: 4.7,
    desc: "Timeless denim jacket with a modern fit. Perfect layering piece for any season.",
    img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500",
    reviews: [
      { name: "Rahul K.", rating: 5, title: "Best jacket I own", text: "Quality is amazing, fits perfectly. Worth every rupee!", date: "2026-07-12", verified: true },
      { name: "Vikram M.", rating: 5, title: "Classic style", text: "Goes with everything. Very comfortable.", date: "2026-06-28", verified: true }
    ]},
  { id: 3, name: "Elegant Blazer", category: "women", price: 3499, trending: false, isNew: true, rating: 4.3,
    desc: "Sophisticated blazer for work or evening events. Tailored fit with premium fabric.",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    reviews: [
      { name: "Sneha T.", rating: 4, title: "Professional look", text: "Perfect for office wear. Feels premium.", date: "2026-07-08", verified: true }
    ]},
  { id: 4, name: "Casual Streetwear Tee", category: "men", price: 999, trending: true, isNew: false, rating: 4.6,
    desc: "Soft cotton tee with trendy graphic print. Everyday comfort with style.",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
    reviews: [
      { name: "Karan J.", rating: 5, title: "Super comfy", text: "Washed 5 times, still looks new. Great quality!", date: "2026-07-14", verified: true }
    ]},
  { id: 5, name: "Boho Maxi Skirt", category: "women", price: 1499, trending: false, isNew: true, rating: 4.4,
    desc: "Flowy bohemian maxi skirt with beautiful prints. Perfect for festivals and vacations.",
    img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
    reviews: [
      { name: "Meera B.", rating: 5, title: "Gorgeous!", text: "The print is stunning and the flow is beautiful.", date: "2026-07-11", verified: true }
    ]},
  { id: 6, name: "Slim Fit Chinos", category: "men", price: 1799, trending: false, isNew: false, rating: 4.2,
    desc: "Modern slim-fit chinos in versatile colors. Perfect for smart-casual occasions.",
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
    reviews: [
      { name: "Aditya N.", rating: 4, title: "Great fit", text: "Comfortable and stylish. True to size.", date: "2026-07-09", verified: true }
    ]},
  { id: 7, name: "Crop Top & Shorts Set", category: "women", price: 1299, trending: true, isNew: true, rating: 4.8,
    desc: "Trendy co-ord set perfect for summer outings. Comfortable and stylish.",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    reviews: [
      { name: "Isha G.", rating: 5, title: "Obsessed!", text: "So cute and comfortable. Perfect for beach vacations!", date: "2026-07-15", verified: true }
    ]},
  { id: 8, name: "Leather Bomber Jacket", category: "men", price: 4999, trending: true, isNew: false, rating: 4.9,
    desc: "Premium faux leather bomber jacket. Edgy style with quilted lining for comfort.",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    reviews: [
      { name: "Siddharth L.", rating: 5, title: "Looks expensive!", text: "Quality is top-notch. Feels like real leather.", date: "2026-07-14", verified: true }
    ]},
  { id: 9, name: "Knit Sweater Dress", category: "women", price: 2199, trending: false, isNew: true, rating: 4.5,
    desc: "Cozy knit sweater dress for winter. Warm, soft, and incredibly stylish.",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    reviews: [
      { name: "Divya K.", rating: 5, title: "So warm!", text: "Perfect for Delhi winters. Love the texture.", date: "2026-07-07", verified: true }
    ]},
  { id: 10, name: "Hoodie & Jogger Set", category: "men", price: 2499, trending: true, isNew: true, rating: 4.6,
    desc: "Comfortable matching hoodie and jogger set. Perfect for lounging or workouts.",
    img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500",
    reviews: [
      { name: "Aman S.", rating: 5, title: "Super comfy", text: "Wear it everywhere. Fabric is premium.", date: "2026-07-13", verified: true }
    ]},
  { id: 11, name: "Satin Slip Dress", category: "women", price: 2299, trending: true, isNew: false, rating: 4.7,
    desc: "Elegant satin slip dress for parties and dinners. Luxurious feel with flattering cut.",
    img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500",
    reviews: [
      { name: "Pooja M.", rating: 5, title: "Stunning!", text: "Felt like a queen wearing this. Perfect fit!", date: "2026-07-10", verified: true }
    ]},
  { id: 12, name: "Formal Suit", category: "men", price: 7999, trending: false, isNew: false, rating: 4.8,
    desc: "Premium tailored formal suit for weddings and business events. Sharp and sophisticated.",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500",
    reviews: [
      { name: "Rajesh T.", rating: 5, title: "Perfect fit", text: "Wore it to a wedding, got so many compliments!", date: "2026-07-06", verified: true }
    ]},
  { id: 13, name: "Linen Beach Dress", category: "women", price: 1899, trending: true, isNew: true, rating: 4.4,
    desc: "Light linen dress perfect for beach vacations. Breathable and effortless style.",
    img: "https://images.unsplash.com/photo-1595777216528-071e0127ccbf?w=500",
    reviews: [
      { name: "Kavya P.", rating: 4, title: "Beach ready", text: "Took it to Goa, perfect for the weather!", date: "2026-07-12", verified: true }
    ]},
  { id: 14, name: "Polo Shirt", category: "men", price: 1199, trending: false, isNew: true, rating: 4.3,
    desc: "Classic polo shirt in premium cotton. Smart casual essential for every wardrobe.",
    img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500",
    reviews: [
      { name: "Nikhil B.", rating: 4, title: "Good quality", text: "Comfortable and looks great with jeans.", date: "2026-07-09", verified: true }
    ]},
  { id: 15, name: "Yoga Pants Set", category: "women", price: 1699, trending: true, isNew: true, rating: 4.6,
    desc: "High-waisted yoga pants with matching top. Perfect for workouts and athleisure.",
    img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500",
    reviews: [
      { name: "Riya S.", rating: 5, title: "Squat proof!", text: "Best yoga pants I've owned. No transparency issues.", date: "2026-07-14", verified: true }
    ]},
  { id: 16, name: "Cargo Pants", category: "men", price: 1999, trending: false, isNew: true, rating: 4.5,
    desc: "Utility cargo pants with multiple pockets. Streetwear essential with modern fit.",
    img: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500",
    reviews: [
      { name: "Yash K.", rating: 5, title: "Love the style", text: "So many pockets, super practical and stylish.", date: "2026-07-11", verified: true }
    ]},
  { id: 17, name: "Off-Shoulder Top", category: "women", price: 899, trending: true, isNew: false, rating: 4.3,
    desc: "Flirty off-shoulder top with elastic neckline. Perfect for casual outings.",
    img: "https://images.unsplash.com/photo-1564257577-2d3ee8740b33?w=500",
    reviews: [
      { name: "Tanya M.", rating: 4, title: "Cute top", text: "Love the design, fits well.", date: "2026-07-08", verified: true }
    ]},
  { id: 18, name: "Graphic Hoodie", category: "men", price: 1499, trending: true, isNew: true, rating: 4.7,
    desc: "Trendy graphic hoodie with soft fleece interior. Street style at its best.",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    reviews: [
      { name: "Dev A.", rating: 5, title: "Super soft", text: "The fleece inside is so cozy. Print is fire!", date: "2026-07-15", verified: true }
    ]},
  { id: 19, name: "Pleated Midi Skirt", category: "women", price: 1399, trending: false, isNew: true, rating: 4.5,
    desc: "Elegant pleated midi skirt that flows beautifully. Versatile for any occasion.",
    img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500",
    reviews: [
      { name: "Shreya D.", rating: 5, title: "Elegant", text: "The pleats are so well done. Looks expensive!", date: "2026-07-10", verified: true }
    ]},
  { id: 20, name: "Denim Overalls", category: "men", price: 2799, trending: false, isNew: true, rating: 4.4,
    desc: "Classic denim overalls with adjustable straps. Bold streetwear statement.",
    img: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=500",
    reviews: [
      { name: "Harsh V.", rating: 4, title: "Unique piece", text: "Gets a lot of attention. Comfortable too.", date: "2026-07-13", verified: true }
    ]}
];

let cart = [];
let currentFilter = "all";
let currentUser = null;
let addresses = [];
let orders = [];
let selectedRating = 0;
let currentProductId = null;

// FORMAT PRICE
function formatPrice(price) {
  return '₹' + Number(price).toLocaleString('en-IN');
}

// GENERATE STARS
function generateStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += '<i class="fa-solid fa-star"></i>';
    else if (i - rating < 1 && i - rating > 0) html += '<i class="fa-solid fa-star-half-stroke"></i>';
    else html += '<i class="fa-solid fa-star empty"></i>';
  }
  return html;
}

// ============ INITIALIZATION ============
function init() {
  loadFromStorage();
  renderProducts();
  updateCart();
  setupEventListeners();
  applyTheme();
  checkAuth();
  updateSideMenuProfile();
}

function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  addresses = JSON.parse(localStorage.getItem('addresses')) || [];
  orders = JSON.parse(localStorage.getItem('orders')) || [];
  const savedReviews = JSON.parse(localStorage.getItem('userReviews')) || [];
  
  savedReviews.forEach(ur => {
    const product = products.find(p => p.id === ur.productId);
    if (product && !product.reviews.find(r => r.text === ur.text && r.name === ur.name)) {
      product.reviews.push(ur);
    }
  });
  
  products.forEach(p => {
    if (p.reviews.length > 0) {
      p.rating = p.reviews.reduce((s, r) => s + r.rating, 0) / p.reviews.length;
    }
  });
  
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeToggle').checked = theme === 'dark';
  document.getElementById('sideThemeToggle').checked = theme === 'dark';
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  localStorage.setItem('addresses', JSON.stringify(addresses));
  localStorage.setItem('orders', JSON.stringify(orders));
}

function saveUserReviews() {
  const userReviews = [];
  products.forEach(p => {
    p.reviews.forEach(r => {
      if (!r.verified) userReviews.push({ ...r, productId: p.id });
    });
  });
  localStorage.setItem('userReviews', JSON.stringify(userReviews));
}

function applyTheme() {
  const theme = document.documentElement.getAttribute('data-theme');
  document.getElementById('themeToggle').checked = theme === 'dark';
  document.getElementById('sideThemeToggle').checked = theme === 'dark';
}

// ============ RENDER PRODUCTS ============
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const search = document.getElementById("searchInput").value.toLowerCase();
  grid.innerHTML = "";

  const filtered = products.filter(p => {
    const matchFilter = currentFilter === "all" ||
                        (currentFilter === "trending" && p.trending) ||
                        (currentFilter === "new" && p.isNew) ||
                        p.category === currentFilter;
    const matchSearch = p.name.toLowerCase().includes(search);
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:40px;">No outfits found 😢</p>`;
    return;
  }

  filtered.forEach(p => {
    const badge = p.isNew ? '<span class="badge new-badge">NEW</span>' : 
                  p.trending ? '<span class="badge trend-badge">🔥 HOT</span>' : '';
    grid.innerHTML += `
      <div class="product-card">
        ${badge}
        <img src="${p.img}" alt="${p.name}" loading="lazy" onclick="openProductDetail(${p.id})"/>
        <div class="product-info">
          <span class="category">${p.category}</span>
          <h3 onclick="openProductDetail(${p.id})">${p.name}</h3>
          <div class="product-rating">
            <div class="stars">${generateStars(p.rating)}</div>
            <span class="count">(${p.reviews.length})</span>
          </div>
          <div class="price">${formatPrice(p.price)}</div>
          <button class="add-btn" onclick="addToCart(${p.id})">Add to Bag</button>
        </div>
      </div>`;
  });
}

// ============ PRODUCT DETAIL ============
function openProductDetail(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentProductId = id;
  
  document.getElementById('detailImg').src = p.img;
  document.getElementById('detailCategory').textContent = p.category.toUpperCase();
  document.getElementById('detailName').textContent = p.name;
  document.getElementById('detailStars').innerHTML = generateStars(p.rating);
  document.getElementById('detailReviewCount').textContent = `(${p.reviews.length} reviews)`;
  document.getElementById('detailPrice').textContent = formatPrice(p.price);
  document.getElementById('detailDesc').textContent = p.desc;
  document.getElementById('detailAddBtn').onclick = () => { addToCart(id); };
  
  renderReviews(p);
  
  if (currentUser) {
    document.getElementById('writeReviewSection').style.display = 'block';
    document.getElementById('loginPrompt').style.display = 'none';
  } else {
    document.getElementById('writeReviewSection').style.display = 'none';
    document.getElementById('loginPrompt').style.display = 'block';
  }
  
  document.getElementById('productDetailModal').classList.add('active');
}

function renderReviews(p) {
  const list = document.getElementById('reviewsList');
  if (p.reviews.length === 0) {
    list.innerHTML = `<p style="text-align:center;padding:20px;color:var(--text-secondary);">No reviews yet. Be the first!</p>`;
    return;
  }
  list.innerHTML = p.reviews.map(r => {
    const initial = r.name.charAt(0).toUpperCase();
    const verifiedBadge = r.verified ? '<span class="verified-badge">✓ Verified</span>' : '';
    return `
      <div class="review-item">
        <div class="review-header">
          <div class="reviewer-info">
            <div class="reviewer-avatar">${initial}</div>
            <div>
              <div class="reviewer-name">${r.name} ${verifiedBadge}</div>
              <div class="review-date">${formatDate(r.date)}</div>
            </div>
          </div>
        </div>
        <div class="review-stars">${generateStars(r.rating)}</div>
        <div class="review-title">${r.title}</div>
        <div class="review-text">${r.text}</div>
      </div>`;
  }).join('');
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function submitReview() {
  if (!currentUser) { showToast('Please login first'); return; }
  if (selectedRating === 0) { showToast('Please select a rating'); return; }
  const title = document.getElementById('reviewTitle').value.trim();
  const text = document.getElementById('reviewText').value.trim();
  if (!title || !text) { showToast('Please fill all fields'); return; }
  
  const product = products.find(p => p.id === currentProductId);
  const newReview = {
    name: currentUser.name,
    rating: selectedRating,
    title: title,
    text: text,
    date: new Date().toISOString().split('T')[0],
    verified: false
  };
  product.reviews.unshift(newReview);
  product.rating = product.reviews.reduce((s, r) => s + r.rating, 0) / product.reviews.length;
  
  saveUserReviews();
  renderReviews(product);
  document.getElementById('detailStars').innerHTML = generateStars(product.rating);
  document.getElementById('detailReviewCount').textContent = `(${product.reviews.length} reviews)`;
  
  document.getElementById('reviewTitle').value = '';
  document.getElementById('reviewText').value = '';
  selectedRating = 0;
  document.querySelectorAll('#starInput i').forEach(s => s.classList.remove('active'));
  
  renderProducts();
  showToast('Review submitted! Thank you 🙏');
}

// ============ CART ============
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  updateCart();
  saveToStorage();
  showToast(`${product.name} added to bag!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCart();
  saveToStorage();
}

function updateCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cartCount").textContent = count;

  const itemsDiv = document.getElementById("cartItems");
  if (cart.length === 0) {
    itemsDiv.innerHTML = `<p style="text-align:center;padding:30px;color:var(--text-secondary);">Your bag is empty</p>`;
  } else {
    itemsDiv.innerHTML = cart.map(i => `
      <div class="cart-item">
        <img src="${i.img}" alt="${i.name}"/>
        <div class="cart-item-info">
          <h4>${i.name}</h4>
          <p>${formatPrice(i.price)} × ${i.qty}</p>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${i.id})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>`).join("");
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("cartTotal").textContent = formatPrice(total);
}

// ============ AUTH ============
function openAuth() {
  if (currentUser) {
    if (confirm(`Logged in as ${currentUser.name}. Logout?`)) {
      currentUser = null;
      saveToStorage();
      showToast('Logged out successfully');
      checkAuth();
      updateSideMenuProfile();
    }
    return;
  }
  document.getElementById('authModal').classList.add('active');
}

function switchAuthTab(tab, event) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
}

function checkAuth() {
  const btn = document.getElementById('userBtn');
  if (currentUser) {
    btn.innerHTML = `<i class="fa-solid fa-user-check"></i>`;
    btn.title = currentUser.name;
  } else {
    btn.innerHTML = `<i class="fa-solid fa-user"></i>`;
    btn.title = 'Account';
  }
}

function handleLogout() {
  if (currentUser) {
    if (confirm(`Logout as ${currentUser.name}?`)) {
      currentUser = null;
      saveToStorage();
      showToast('Logged out successfully');
      checkAuth();
      updateSideMenuProfile();
      closeSideMenu();
    }
  } else {
    openAuth();
    closeSideMenu();
  }
}

function updateSideMenuProfile() {
  const profile = document.getElementById('sideMenuProfile');
  const logoutBtn = document.getElementById('logoutBtn');
  if (currentUser) {
    profile.style.display = 'flex';
    logoutBtn.style.display = 'flex';
    document.getElementById('profileAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
  } else {
    profile.style.display = 'none';
    logoutBtn.style.display = 'none';
  }
}

// ============ ADDRESS ============
function openAddresses() {
  renderAddresses();
  document.getElementById('addressModal').classList.add('active');
}

function renderAddresses() {
  const list = document.getElementById('addressList');
  if (addresses.length === 0) {
    list.innerHTML = `<p style="text-align:center;padding:20px;color:var(--text-secondary);">No addresses saved</p>`;
  } else {
    list.innerHTML = addresses.map((addr, i) => `
      <div class="address-item">
        <h4>${addr.name}</h4>
        <p>${addr.street}, ${addr.city}, ${addr.state} - ${addr.zip}</p>
        <p>📞 ${addr.phone}</p>
        <button onclick="deleteAddress(${i})" style="background:#c00;color:#fff;border:none;padding:6px 12px;border-radius:6px;cursor:pointer;margin-top:8px;">Delete</button>
      </div>
    `).join('');
  }
}

function deleteAddress(index) {
  addresses.splice(index, 1);
  saveToStorage();
  renderAddresses();
  showToast('Address deleted');
}

// ============ CHECKOUT ============
function openCheckout() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  if (!currentUser) { showToast('Please login first'); openAuth(); return; }
  if (addresses.length === 0) { showToast('Please add an address first'); openAddresses(); return; }

  const addressSelect = document.getElementById('checkoutAddress');
  addressSelect.innerHTML = addresses.map((addr, i) => 
    `<option value="${i}">${addr.name} - ${addr.city}, ${addr.state}</option>`
  ).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + shipping + tax;

  document.getElementById('checkoutItems').innerHTML = cart.map(i => 
    `<div class="checkout-item"><span>${i.name} × ${i.qty}</span><span>${formatPrice(i.price * i.qty)}</span></div>`
  ).join('');

  document.getElementById('checkoutSubtotal').textContent = formatPrice(subtotal);
  document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE 🎉' : formatPrice(shipping);
  document.getElementById('checkoutTax').textContent = formatPrice(tax);
  document.getElementById('checkoutGrandTotal').textContent = formatPrice(grandTotal);
  document.getElementById('payAmount').textContent = formatPrice(grandTotal);

  document.getElementById('checkoutModal').classList.add('active');
  closeCart();
}

function placeOrder() {
  const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
  const paymentLabel = { card: 'Card', upi: 'UPI', cod: 'Cash on Delivery' }[paymentMethod];
  
  const order = {
    id: 'ORD' + Date.now(),
    items: [...cart],
    total: document.getElementById('checkoutGrandTotal').textContent,
    date: new Date().toLocaleDateString('en-IN'),
    status: paymentMethod === 'cod' ? 'Confirmed (COD)' : 'Processing',
    payment: paymentLabel
  };
  orders.unshift(order);
  cart = [];
  saveToStorage();
  updateCart();
  closeModal('checkoutModal');
  showToast('Order placed successfully! 🎉');
  setTimeout(() => openOrders(), 1000);
}

// ============ ORDERS ============
function openOrders() {
  const list = document.getElementById('ordersList');
  if (orders.length === 0) {
    list.innerHTML = `<p style="text-align:center;padding:30px;color:var(--text-secondary);">No orders yet</p>`;
  } else {
    list.innerHTML = orders.map(order => `
      <div class="order-item">
        <div class="order-header">
          <span class="order-id">${order.id}</span>
          <span class="order-status">${order.status}</span>
        </div>
        <p><strong>Date:</strong> ${order.date}</p>
        <p><strong>Items:</strong> ${order.items.length}</p>
        <p><strong>Payment:</strong> ${order.payment}</p>
        <p><strong>Total:</strong> ${order.total}</p>
      </div>
    `).join('');
  }
  document.getElementById('ordersModal').classList.add('active');
}

// ============ PAGE NAVIGATION ============
function showPage(page) {
  document.getElementById('aboutPage').style.display = 'none';
  document.getElementById('contactPage').style.display = 'none';
  document.getElementById('helpPage').style.display = 'none';
  document.getElementById('faqPage').style.display = 'none';
  document.querySelector('.hero').style.display = 'none';
  document.querySelector('.filters').style.display = 'none';
  document.getElementById('products').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
  
  document.getElementById(page + 'Page').style.display = 'block';
  document.getElementById('pageNav').style.display = 'flex';
  
  const titles = { about: 'About Us', contact: 'Contact', help: 'Help Center', faq: 'FAQ' };
  document.getElementById('pageTitle').textContent = titles[page];
  
  if (page === 'about') animateStats();
  if (page === 'faq') renderFAQ('all');
  
  window.scrollTo(0, 0);
}

function showHomePage() {
  document.getElementById('aboutPage').style.display = 'none';
  document.getElementById('contactPage').style.display = 'none';
  document.getElementById('helpPage').style.display = 'none';
  document.getElementById('faqPage').style.display = 'none';
  
  document.querySelector('.hero').style.display = 'flex';
  document.querySelector('.filters').style.display = 'flex';
  document.getElementById('products').style.display = 'block';
  document.querySelector('footer').style.display = 'block';
  document.getElementById('pageNav').style.display = 'none';
  
  window.scrollTo(0, 0);
}

function filterAndShow(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filter);
  });
  renderProducts();
  showHomePage();
  setTimeout(() => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function animateStats() {
  document.querySelectorAll('.stat-number').forEach(stat => {
    const target = parseInt(stat.dataset.target);
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      if (target >= 1000) {
        stat.textContent = Math.floor(current).toLocaleString('en-IN') + '+';
      } else {
        stat.textContent = Math.floor(current) + (target === 98 ? '%' : '+');
      }
    }, 25);
  });
}

// ============ SIDE MENU ============
function openSideMenu() {
  document.getElementById('sideMenu').classList.add('open');
  document.getElementById('overlay').classList.add('active');
}

function closeSideMenu() {
  document.getElementById('sideMenu').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

// ============ HELP & FAQ ============
function showHelpCategory(category) {
  showToast(`Opening ${category} help section...`);
}

// FAQ Data
const faqData = [
  { category: 'general', q: 'What is Trendly?', a: 'Trendly is India\'s premium online fashion destination offering curated outfits for men and women. We bring you the latest trends at affordable prices with quality guaranteed.' },
  { category: 'general', q: 'Where is Trendly located?', a: 'Our headquarters is in Mumbai, Maharashtra. We ship pan-India to 500+ cities across the country.' },
  { category: 'general', q: 'Are the products original?', a: 'Yes! All products are 100% authentic and sourced directly from verified manufacturers and designers.' },
  { category: 'orders', q: 'How do I place an order?', a: 'Simply browse products, click "Add to Bag", proceed to checkout, select your address and payment method, and confirm.' },
  { category: 'orders', q: 'Can I modify or cancel my order?', a: 'You can cancel or modify your order within 2 hours of placing it. Go to My Orders and click "Cancel" or "Modify".' },
  { category: 'orders', q: 'How do I track my order?', a: 'Once shipped, you\'ll receive a tracking link via SMS and email. You can also track orders from the "My Orders" section.' },
  { category: 'shipping', q: 'What are the shipping charges?', a: 'FREE shipping on orders above ₹999! For orders below ₹999, a flat shipping fee of ₹99 applies.' },
  { category: 'shipping', q: 'How long does delivery take?', a: 'Metro cities: 3-5 business days. Other cities: 5-7 business days. Remote areas: 7-10 business days.' },
  { category: 'shipping', q: 'Do you ship outside India?', a: 'Currently, we only ship within India. International shipping will be available soon!' },
  { category: 'returns', q: 'What is your return policy?', a: 'We offer a 7-day easy return policy from the date of delivery. Products must be unused, with original tags and packaging.' },
  { category: 'returns', q: 'How do I initiate a return?', a: 'Go to My Orders → Select the order → Click "Return" → Choose reason → Schedule pickup.' },
  { category: 'returns', q: 'When will I get my refund?', a: 'After we receive and verify the returned product, refunds are processed within 5-7 business days.' },
  { category: 'payments', q: 'What payment methods do you accept?', a: 'We accept Credit/Debit Cards, UPI (GPay, PhonePe, Paytm), Net Banking, Wallets, and Cash on Delivery (COD).' },
  { category: 'payments', q: 'Is Cash on Delivery (COD) available?', a: 'Yes! COD is available on most pin codes across India. A small COD fee of ₹49 may apply on orders below ₹1,500.' },
  { category: 'payments', q: 'Is my payment information secure?', a: 'Absolutely. We use 256-bit SSL encryption and are PCI DSS compliant. Your card details are never stored.' },
  { category: 'payments', q: 'Payment failed but amount deducted?', a: 'Don\'t worry! Failed transactions are auto-reversed within 5-7 business days.' },
  { category: 'payments', q: 'Do you offer EMI options?', a: 'Yes! We offer no-cost EMI on select credit cards for orders above ₹3,000.' }
];

function renderFAQ(category) {
  const list = document.getElementById('faqList');
  const filtered = category === 'all' ? faqData : faqData.filter(f => f.category === category);
  
  list.innerHTML = filtered.map(faq => `
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <span>${faq.q}</span>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(element) {
  const item = element.parentElement;
  const wasActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('active'));
  if (!wasActive) item.classList.add('active');
}

// ============ SIDEBAR & MODALS ============
function closeSidebar(id) {
  document.getElementById(id).classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("active");
}

// ============ TOAST ============
function showToast(msg) {
  const toast = document.createElement("div");
  toast.textContent = msg;
  toast.style.cssText = `
    position:fixed;bottom:30px;left:50%;transform:translateX(-50%);
    background:var(--text-primary);color:var(--bg-primary);padding:12px 24px;border-radius:25px;
    z-index:500;box-shadow:0 4px 15px var(--shadow);
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// ============ EVENT LISTENERS ============
function setupEventListeners() {
  // Hamburger menu
  document.getElementById('hamburgerBtn').addEventListener('click', openSideMenu);
  document.getElementById('closeSideMenu').addEventListener('click', closeSideMenu);

  // Filters
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderProducts();
    });
  });

  // Search
  document.getElementById("searchInput").addEventListener("input", renderProducts);

  // Cart
  document.getElementById("cartBtn").addEventListener("click", () => {
    document.getElementById("cartSidebar").classList.add("open");
    document.getElementById("overlay").classList.add("active");
  });
  document.getElementById("closeCart").addEventListener("click", closeCart);
  document.getElementById("overlay").addEventListener("click", () => {
    closeCart();
    closeSidebar('settingsSidebar');
    closeSideMenu();
  });

  // Settings
  document.getElementById("settingsBtn").addEventListener("click", () => {
    document.getElementById("settingsSidebar").classList.add("open");
    document.getElementById("overlay").classList.add("active");
  });

  // User
  document.getElementById("userBtn").addEventListener("click", openAuth);

  // Theme toggle (both)
  const themeHandler = (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.getElementById('themeToggle').checked = theme === 'dark';
    document.getElementById('sideThemeToggle').checked = theme === 'dark';
  };
  document.getElementById("themeToggle").addEventListener("change", themeHandler);
  document.getElementById("sideThemeToggle").addEventListener("change", themeHandler);

  // Login
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    
    if (email === "demo@trendly.com" && password === "demo123") {
      currentUser = { name: "Demo User", email: email };
      saveToStorage();
      checkAuth();
      updateSideMenuProfile();
      closeModal('authModal');
      showToast('Welcome back, Demo User! 👋');
    } else {
      showToast('Invalid credentials. Use demo@trendly.com / demo123');
    }
  });

  // Register
  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    currentUser = { name, email };
    saveToStorage();
    checkAuth();
    updateSideMenuProfile();
    closeModal('authModal');
    showToast(`Welcome, ${name}! 🎉`);
  });

  // Address
  document.getElementById("addressForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const address = {
      name: document.getElementById("addrName").value,
      phone: document.getElementById("addrPhone").value,
      street: document.getElementById("addrStreet").value,
      city: document.getElementById("addrCity").value,
      state: document.getElementById("addrState").value,
      zip: document.getElementById("addrZip").value,
      country: "India"
    };
    addresses.push(address);
    saveToStorage();
    renderAddresses();
    e.target.reset();
    showToast('Address added successfully!');
  });

  // Contact form
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    showToast(`Thanks ${name}! We'll get back to you within 24 hours 📧`);
    e.target.reset();
  });

  // Help search
  document.getElementById('helpSearch').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('.article-item').forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? 'flex' : 'none';
    });
  });

  // FAQ tabs
  document.querySelectorAll('.faq-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderFAQ(tab.dataset.category);
    });
  });

  // Payment method toggle
  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const method = e.target.value;
      document.getElementById('cardFields').style.display = method === 'card' ? 'block' : 'none';
      document.getElementById('upiFields').style.display = method === 'upi' ? 'block' : 'none';
      document.getElementById('cardNumber').required = method === 'card';
      document.getElementById('cardExpiry').required = method === 'card';
      document.getElementById('cardCVV').required = method === 'card';
      document.getElementById('cardName').required = method === 'card';
      document.getElementById('upiId').required = method === 'upi';
    });
  });

  // Payment form
  document.getElementById("paymentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    placeOrder();
  });

  // Card formatting
  document.getElementById("cardNumber").addEventListener("input", (e) => {
    let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/g, '');
    let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formatted.substring(0, 19);
  });

  document.getElementById("cardExpiry").addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) value = value.substring(0, 2) + '/' + value.substring(2, 4);
    e.target.value = value;
  });

  document.getElementById("cardCVV").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
  });

  document.getElementById("addrZip").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 6);
  });

  // Star rating input
  document.querySelectorAll('#starInput i').forEach(star => {
    star.addEventListener('click', (e) => {
      selectedRating = parseInt(e.target.dataset.rating);
      document.querySelectorAll('#starInput i').forEach((s, idx) => {
        s.classList.toggle('active', idx < selectedRating);
      });
    });
  });
}

// INIT
init();