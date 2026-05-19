// seed.js — Run with: node seed.js
// Place this file in your nexmart-backend/ root folder
// Make sure your .env has MONGO_URI set before running

const mongoose = require('mongoose');
require('dotenv').config();

const productSchema = new mongoose.Schema({
  title:    { type: String, required: true, trim: true },
  price:    { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  image:    { type: String, default: 'https://via.placeholder.com/300' },
  rating:   { type: Number, default: 4.0, min: 0, max: 5 },
  reviews:  { type: Number, default: 0 },
  badge:    { type: String, default: '' },
  desc:     { type: String, default: '' },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

const products = [
  // ── Electronics ──────────────────────────────────────────────
  {
    title: 'Sony WH-1000XM5 Wireless Headphones',
    price: 24999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400',
    rating: 4.8,
    reviews: 3120,
    badge: 'Best Seller',
    desc: 'Industry-leading noise cancellation with 30-hour battery life and multipoint connection.',
  },
  {
    title: 'boAt Rockerz 450 Bluetooth Headphones',
    price: 1499,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    rating: 4.2,
    reviews: 8900,
    badge: 'Budget Pick',
    desc: 'Up to 15 hours playback, super-soft ear cushions, built-in mic for calls.',
  },
  {
    title: 'Logitech MX Master 3S Wireless Mouse',
    price: 8999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    rating: 4.7,
    reviews: 2140,
    badge: 'Top Rated',
    desc: 'Ultra-fast MagSpeed scroll, ergonomic design, works on any surface including glass.',
  },
  {
    title: 'Redmi 13C 5G Smartphone (4GB/128GB)',
    price: 11999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    rating: 4.1,
    reviews: 15600,
    badge: 'New Launch',
    desc: '5G ready, 50MP AI camera, 5000mAh battery, MediaTek Dimensity 6100+ processor.',
  },
  {
    title: 'Zebronics Zeb-Thunder 2.1 Speaker',
    price: 1299,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
    rating: 3.9,
    reviews: 4300,
    badge: '',
    desc: '40W RMS output, USB/AUX/Bluetooth input, LED lighting effect.',
  },
  {
    title: 'Portronics Kronos Y2 Smartwatch',
    price: 2499,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    rating: 4.0,
    reviews: 1870,
    badge: '',
    desc: 'IP68 waterproof, heart rate monitor, 20-day battery, 1.96" HD display.',
  },

  // ── Fashion ───────────────────────────────────────────────────
  {
    title: "Men's Slim Fit Casual Cotton Shirt",
    price: 799,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400',
    rating: 4.3,
    reviews: 6700,
    badge: 'Trending',
    desc: '100% cotton, breathable fabric, available in 8 colours, machine washable.',
  },
  {
    title: "Women's Floral Maxi Dress",
    price: 1199,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
    rating: 4.5,
    reviews: 3200,
    badge: 'Hot',
    desc: 'Lightweight chiffon, elastic waistband, perfect for summers and casual outings.',
  },
  {
    title: 'Running Sports Shoes for Men',
    price: 2199,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    rating: 4.4,
    reviews: 5100,
    badge: 'Best Seller',
    desc: 'Mesh upper for breathability, cushioned sole, anti-slip rubber outsole.',
  },
  {
    title: "Women's Leather Tote Bag",
    price: 1799,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
    rating: 4.6,
    reviews: 2400,
    badge: 'Premium',
    desc: 'Genuine PU leather, magnetic snap closure, multiple inner pockets.',
  },
  {
    title: 'Unisex Round Neck Graphic Tee',
    price: 449,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    rating: 4.1,
    reviews: 9800,
    badge: '',
    desc: 'Oversized fit, pre-shrunk cotton blend, bold print that lasts 50+ washes.',
  },

  // ── Home & Kitchen ────────────────────────────────────────────
  {
    title: 'Prestige Iris 750W Mixer Grinder (3 Jars)',
    price: 2799,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400',
    rating: 4.4,
    reviews: 11200,
    badge: 'Top Seller',
    desc: '750W motor, 3 stainless steel jars, 5-year warranty, overload protection.',
  },
  {
    title: 'Pigeon Basics Non-Stick Cookware Set (5 pcs)',
    price: 1499,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    rating: 4.2,
    reviews: 7800,
    badge: '',
    desc: 'PFOA-free coating, induction compatible, includes kadai, tawa, and sauce pan.',
  },
  {
    title: 'Solimo Bamboo Cutting Board Set (3 pcs)',
    price: 699,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400',
    rating: 4.3,
    reviews: 3600,
    badge: 'Eco Pick',
    desc: 'Sustainable bamboo, juice grooves, dishwasher safe, 3 different sizes.',
  },
  {
    title: 'Phillips Air Fryer HD9200 (4.1L)',
    price: 7999,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1626202378538-5a9e7d8b8fc3?w=400',
    rating: 4.6,
    reviews: 5400,
    badge: 'Premium',
    desc: 'Rapid Air technology, up to 90% less fat, 4.1L capacity, 7 presets.',
  },
  {
    title: 'Amazon Basics Microfibre Bedsheet Set (Double)',
    price: 999,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400',
    rating: 4.0,
    reviews: 14300,
    badge: '',
    desc: '300 GSM, fade-resistant colours, includes 1 bedsheet + 2 pillow covers.',
  },

  // ── Books ─────────────────────────────────────────────────────
  {
    title: 'Atomic Habits — James Clear',
    price: 399,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    rating: 4.9,
    reviews: 42000,
    badge: 'Bestseller',
    desc: 'Tiny changes, remarkable results. A proven framework for building good habits.',
  },
  {
    title: 'The Psychology of Money — Morgan Housel',
    price: 349,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400',
    rating: 4.8,
    reviews: 28000,
    badge: 'Must Read',
    desc: 'Timeless lessons on wealth, greed, and happiness with money.',
  },
  {
    title: 'JavaScript: The Good Parts — Douglas Crockford',
    price: 499,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400',
    rating: 4.5,
    reviews: 7600,
    badge: 'Dev Classic',
    desc: 'Unearthing the excellence in JavaScript — essential for every web developer.',
  },
  {
    title: 'Rich Dad Poor Dad — Robert Kiyosaki',
    price: 299,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
    rating: 4.7,
    reviews: 55000,
    badge: 'All-Time Hit',
    desc: 'What the rich teach their kids about money that the poor and middle class do not.',
  },

  // ── Sports & Fitness ──────────────────────────────────────────
  {
    title: 'Boldfit Resistance Bands Set (5 Levels)',
    price: 599,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    rating: 4.3,
    reviews: 8200,
    badge: 'Home Gym',
    desc: '5 resistance levels from 10–50 lbs, latex-free, includes carry bag.',
  },
  {
    title: 'Nivia Storm Football (Size 5)',
    price: 899,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400',
    rating: 4.2,
    reviews: 4700,
    badge: '',
    desc: 'Durable PVC outer, 32-panel construction, machine stitched, FIFA approved size.',
  },
  {
    title: 'Strauss Adjustable Yoga Mat (6mm)',
    price: 749,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
    rating: 4.4,
    reviews: 6100,
    badge: 'Yoga Pick',
    desc: 'Non-slip surface, extra thick 6mm cushioning, carrying strap included.',
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅  MongoDB connected');

    await Product.deleteMany({});
    console.log('🗑️   Cleared existing products');

    const inserted = await Product.insertMany(products);
    console.log(`🌱  Seeded ${inserted.length} products successfully!\n`);

    // Pretty-print summary grouped by category
    const categories = [...new Set(products.map(p => p.category))];
    categories.forEach(cat => {
      const items = products.filter(p => p.category === cat);
      console.log(`  ${cat.toUpperCase()} (${items.length} items)`);
      items.forEach(p => console.log(`    • ${p.title} — ₹${p.price}`));
    });

    console.log('\n✔  Done. Start your server and call GET /api/products');
  } catch (err) {
    console.error('❌  Seed failed:', err.message);
  } finally {
    await mongoose.disconnect();
  }
}

seed();