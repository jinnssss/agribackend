const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
require('dotenv').config();


require('./config/passport');

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const productRoutes = require('./routes/productRoutes');
const actionRoutes = require('./routes/actionRoutes');
const reportsRoute = require('./routes/reports.route');
const credentialsRoute = require('./routes/credentials.route');
const dataExchangeRoute = require('./routes/dataExchange.route');
const actionsRoute = require('./routes/actions');
const settingsRoute = require('./routes/settings.route');
const dataExchangeRoutes = require('./routes/dataExchange');
const productPassportRoutes = require('./routes/productPassportRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, 
  })
);

app.use(passport.initialize());
app.use(passport.session());

connectDB();

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/users', userRoutes);
app.use('/roles', roleRoutes);
app.use('/products', productRoutes);
app.use('/actions', actionRoutes);
app.use('/reports', reportsRoute);
app.use('/credentials', credentialsRoute);
app.use('/data-exchange', dataExchangeRoute);
app.use('/actions', actionsRoute);
app.use('/settings', settingsRoute);
app.use('/data-exchange', dataExchangeRoutes);
app.use('/api/product-passports', productPassportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
