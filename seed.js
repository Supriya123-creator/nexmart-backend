// seed.js — Run with: node data/seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.set('strictQuery', false);

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

/* ══════════════════════════════════════════════════════
   ALL CATEGORIES CAPITALIZED CONSISTENTLY:
   'Electronics' | 'Fashion' | 'Home' | 'Books' | 'Sports'
   ══════════════════════════════════════════════════════ */
const products = [

  /* ── ELECTRONICS ─────────────────────────────────── */
  {
    title: 'Sony WH-1000XM5 Wireless Headphones',
    price: 24999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400',
    rating: 4.8,
    reviews: 3120,
    badge: 'Best Seller',
    desc: 'Industry-leading noise cancellation with 30-hour battery life.',
  },
  {
    title: 'boAt Rockerz 450 Bluetooth Headphones',
    price: 1499,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    rating: 4.2,
    reviews: 8900,
    badge: 'Budget Pick',
    desc: 'Up to 15 hours playback, super-soft ear cushions.',
  },
  {
    title: 'Logitech MX Master 3S Wireless Mouse',
    price: 8999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    rating: 4.7,
    reviews: 2140,
    badge: 'Top Rated',
    desc: 'Ultra-fast MagSpeed scroll, ergonomic design.',
  },
  {
    title: 'Redmi 13C 5G Smartphone (4GB/128GB)',
    price: 11999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    rating: 4.1,
    reviews: 15600,
    badge: 'New Launch',
    desc: '5G ready, 50MP AI camera, 5000mAh battery.',
  },
  {
    title: 'Zebronics Zeb-Thunder 2.1 Speaker',
    price: 1299,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
    rating: 3.9,
    reviews: 4300,
    badge: '',
    desc: '40W RMS output, USB/AUX/Bluetooth input.',
  },
  {
    title: 'Portronics Kronos Y2 Smartwatch',
    price: 2499,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    rating: 4.0,
    reviews: 1870,
    badge: '',
    desc: 'IP68 waterproof, heart rate monitor, 20-day battery.',
  },

  /* ── FASHION ──────────────────────────────────────── */
  {
    title: "Men's Slim Fit Casual Cotton Shirt",
    price: 799,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400',
    rating: 4.3,
    reviews: 6700,
    badge: 'Trending',
    desc: '100% cotton, breathable fabric, available in 8 colours.',
  },
  {
    title: "Women's Floral Maxi Dress",
    price: 1199,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
    rating: 4.5,
    reviews: 3200,
    badge: 'Hot',
    desc: 'Lightweight chiffon, elastic waistband.',
  },
  {
    title: 'Running Sports Shoes for Men',
    price: 2199,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    rating: 4.4,
    reviews: 5100,
    badge: 'Best Seller',
    desc: 'Mesh upper for breathability, cushioned sole.',
  },
  {
    title: "Women's Leather Tote Bag",
    price: 1799,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
    rating: 4.6,
    reviews: 2400,
    badge: 'Premium',
    desc: 'Genuine PU leather, magnetic snap closure.',
  },
  {
    title: 'Unisex Round Neck Graphic Tee',
    price: 449,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    rating: 4.1,
    reviews: 9800,
    badge: '',
    desc: 'Oversized fit, pre-shrunk cotton blend.',
  },
  {
    title: "Levi's 511 Slim Fit Jeans",
    price: 2999,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    rating: 4.5,
    reviews: 12400,
    badge: 'Top Pick',
    desc: 'Classic slim fit denim jeans for men, mid-rise waist.',
  },

  /* ── HOME ─────────────────────────────────────────── */
  {
    title: 'Prestige Iris 750W Mixer Grinder (3 Jars)',
    price: 2799,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400',
    rating: 4.4,
    reviews: 11200,
    badge: 'Top Seller',
    desc: '750W motor, 3 stainless steel jars, 5-year warranty.',
  },
  {
    title: 'Pigeon Non-Stick Cookware Set (5 pcs)',
    price: 1499,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    rating: 4.2,
    reviews: 7800,
    badge: '',
    desc: 'PFOA-free coating, induction compatible.',
  },
  {
    title: 'Philips Air Fryer HD9200 (4.1L)',
    price: 7999,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1626202378538-5a9e7d8b8fc3?w=400',
    rating: 4.6,
    reviews: 5400,
    badge: 'Premium',
    desc: 'Rapid Air technology, up to 90% less fat.',
  },
  {
    title: 'Amazon Basics Microfibre Bedsheet Set',
    price: 999,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400',
    rating: 4.0,
    reviews: 14300,
    badge: '',
    desc: '300 GSM, fade-resistant colours.',
  },
  {
    title: 'Milton Thermosteel Flask 1L',
    price: 899,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
    rating: 4.3,
    reviews: 9200,
    badge: '',
    desc: '24 hour hot and cold stainless steel bottle.',
  },

  /* ── BOOKS ────────────────────────────────────────── */
  {
    title: 'Atomic Habits — James Clear',
    price: 399,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    rating: 4.9,
    reviews: 42000,
    badge: 'Bestseller',
    desc: 'Tiny changes, remarkable results.',
  },
  {
    title: 'The Psychology of Money — Morgan Housel',
    price: 349,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400',
    rating: 4.8,
    reviews: 28000,
    badge: 'Must Read',
    desc: 'Timeless lessons on wealth and happiness.',
  },
  {
    title: 'JavaScript: The Good Parts',
    price: 499,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400',
    rating: 4.5,
    reviews: 7600,
    badge: 'Dev Classic',
    desc: 'Essential for every web developer.',
  },
  {
    title: 'Rich Dad Poor Dad — Robert Kiyosaki',
    price: 299,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
    rating: 4.7,
    reviews: 55000,
    badge: 'All-Time Hit',
    desc: 'What the rich teach their kids about money.',
  },

  /* ── SPORTS ───────────────────────────────────────── */
  {
    title: 'Boldfit Resistance Bands Set (5 Levels)',
    price: 599,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    rating: 4.3,
    reviews: 8200,
    badge: 'Home Gym',
    desc: '5 resistance levels, latex-free.',
  },
  {
    title: 'Nivia Storm Football (Size 5)',
    price: 899,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400',
    rating: 4.2,
    reviews: 4700,
    badge: '',
    desc: 'Durable PVC outer, 32-panel construction.',
  },
  {
    title: 'Strauss Yoga Mat (6mm)',
    price: 749,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
    rating: 4.4,
    reviews: 6100,
    badge: 'Yoga Pick',
    desc: 'Non-slip surface, extra thick 6mm cushioning.',
  },
  {
    title: 'Yonex Badminton Racket GR 303i',
    price: 1299,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400',
    rating: 4.3,
    reviews: 3800,
    badge: '',
    desc: 'Aluminum shaft, lightweight design for beginners.',
  },

];

/* ══════════════════════════════════════════════════════
   SEED FUNCTION
   — Clears ALL existing products first (no duplicates)
   — Then inserts fresh clean data
   ══════════════════════════════════════════════════════ */
async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      family: 4,
    });
    console.log('✅  MongoDB connected');

    // Clear everything first — prevents all duplicates
    await Product.deleteMany({});
    console.log('🗑️  Cleared all existing products');

    // Insert fresh products
    const inserted = await Product.insertMany(products);
    console.log(`🌱  Seeded ${inserted.length} products successfully!`);
    console.log('📦  Categories seeded: Electronics, Fashion, Home, Books, Sports');

  } catch (err) {
    console.error('❌  Seed failed:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('✔️   Done! Check your MongoDB Atlas — all products are fresh.');
  }
}

seed();