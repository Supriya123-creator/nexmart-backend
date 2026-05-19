// ============================================================
//  NEXMART — server.js
//  Run locally : npm run dev
//  Production  : npm start  (Render uses this)
// ============================================================

import express       from 'express';
import mongoose      from 'mongoose';
import cors          from 'cors';
import dotenv        from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import authRoutes    from './routes/auth.js';

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 5000;

// ── CORS ─────────────────────────────────────────────────────
const allowedOrigins = [
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(null, true); // allow all during dev
  },
  credentials: true,
}));

// ── Middleware ────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Health Check ──────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    status   : 'ok',
    message  : '🚀 NEXMART API is running!',
    endpoints: {
      products : 'GET /api/products',
      auth     : 'POST /api/auth/register  |  POST /api/auth/login',
    },
  });
});

// ── Routes ────────────────────────────────────────────────────
app.use('/api/products', productRoutes);
app.use('/api/auth',     authRoutes);

// ── 404 ───────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.method} ${req.url} not found` });
});

// ── Global Error Handler ──────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(err.status || 500).json({ message: err.message || 'Internal server error' });
});

// ── MongoDB Connect → Start Server ───────────────────────────
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS : 10000,
    family                   : 4,    // ← FIXES Indian ISP querySrv ECONNREFUSED bug
  })
  .then(() => {
    console.log('✅  MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`🚀  NEXMART server running → http://localhost:${PORT}`);
      console.log(`📦  Products API → http://localhost:${PORT}/api/products`);
    });
  })
  .catch(err => {
    console.error('❌  MongoDB connection failed:', err.message);
    process.exit(1);
  });