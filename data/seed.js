/* ============================================================
   NEXMART — data/seed.js
   Run once to populate your MongoDB with sample products:
     node data/seed.js
   ============================================================ */

require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Product  = require('../models/Product');

const SAMPLE_PRODUCTS = [
  {
    title: 'Sony WH-1000XM5 Headphones',
    price: 24999, originalPrice: 29999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80',
    rating: 4.8, reviews: 1240, badge: 'hot',
    desc: 'Industry-leading noise cancellation with 30-hour battery life.',
  },
  {
    title: 'Apple iPhone 15 Pro Max',
    price: 134900, originalPrice: 139900,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80',
    rating: 4.9, reviews: 3840, badge: 'new',
    desc: 'Titanium design, A17 Pro chip, and pro camera system.',
  },
  {
    title: 'Samsung 4K OLED Smart TV 55"',
    price: 89999, originalPrice: 109999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=500&q=80',
    rating: 4.7, reviews: 672, badge: 'sale',
    desc: 'Vivid OLED display with smart features and Dolby Atmos.',
  },
  {
    title: 'Nike Air Max 270',
    price: 9995, originalPrice: 12995,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    rating: 4.5, reviews: 890, badge: 'sale',
    desc: 'Iconic air cushioning for all-day comfort and street style.',
  },
  {
    title: 'Puma Virat Kohli T-Shirt',
    price: 1499, originalPrice: 1999,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&q=80',
    rating: 4.3, reviews: 340, badge: '',
    desc: 'Moisture-wicking fabric with modern athletic fit.',
  },
  {
    title: 'Levi\'s 511 Slim Fit Jeans',
    price: 2999, originalPrice: 3999,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=500&q=80',
    rating: 4.4, reviews: 512, badge: 'new',
    desc: 'Classic slim fit with stretch denim for everyday wear.',
  },
  {
    title: 'Organic Basmati Rice 5kg',
    price: 549, originalPrice: 649,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
    rating: 4.6, reviews: 1890, badge: '',
    desc: 'Long-grain premium aged basmati, certified organic.',
  },
  {
    title: 'Tata Tea Premium 500g',
    price: 249, originalPrice: 279,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80',
    rating: 4.5, reviews: 2100, badge: 'hot',
    desc: 'Strong and refreshing blend of Assam and Darjeeling leaves.',
  },
  {
    title: 'Amul Gold Full Cream Milk 1L',
    price: 68, originalPrice: 70,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80',
    rating: 4.7, reviews: 3400, badge: '',
    desc: 'Fresh full cream milk with 6% fat, rich and nutritious.',
  },
  {
    title: 'Dyson V15 Vacuum Cleaner',
    price: 52900, originalPrice: 62900,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    rating: 4.8, reviews: 445, badge: 'new',
    desc: 'Laser dust detection with 60-min run time and HEPA filtration.',
  },
  {
    title: 'IKEA KALLAX Shelf Unit',
    price: 7999, originalPrice: 9499,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80',
    rating: 4.4, reviews: 780, badge: 'sale',
    desc: 'Versatile shelving unit, perfect for books and decor.',
  },
  {
    title: 'Instant Pot Duo 7-in-1',
    price: 8499, originalPrice: 10999,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&q=80',
    rating: 4.7, reviews: 2310, badge: 'hot',
    desc: 'Pressure cook, slow cook, rice cooker, steamer and more.',
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    await Product.deleteMany({});
    console.log('🗑  Cleared existing products');

    const inserted = await Product.insertMany(SAMPLE_PRODUCTS);
    console.log(`✅ Seeded ${inserted.length} products`);

    mongoose.disconnect();
    console.log('✅ Done — disconnected from MongoDB');
  } catch (err) {
    console.error('❌ Seed failed:', err.message);
    process.exit(1);
  }
}

seed();
