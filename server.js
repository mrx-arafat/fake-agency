const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Fake Agency - Your Digital Partner' });
});

app.get('/services', (req, res) => {
  const services = [
    { id: 1, name: 'Web Design', description: 'Beautiful and responsive web designs' },
    { id: 2, name: 'Web Development', description: 'Full-stack web development solutions' },
    { id: 3, name: 'Mobile Apps', description: 'Native and cross-platform mobile applications' },
    { id: 4, name: 'SEO Optimization', description: 'Boost your online visibility' },
    { id: 5, name: 'Digital Marketing', description: 'Strategic marketing campaigns' },
    { id: 6, name: 'Consulting', description: 'Expert digital strategy consulting' }
  ];
  res.render('services', { title: 'Our Services', services });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  res.json({ success: true, message: 'Thank you for your message! We will get back to you soon.' });
});

// Password verification endpoint
app.post('/api/verify-password', (req, res) => {
  const { password } = req.body;
  const correctPassword = process.env.PASSWORD;

  if (password === correctPassword) {
    res.json({ success: true, message: 'Password verified!' });
  } else {
    res.status(401).json({ success: false, message: 'Incorrect password!' });
  }
});

app.get('/api/services', (req, res) => {
  const services = [
    { id: 1, name: 'Web Design', price: '$2,000' },
    { id: 2, name: 'Web Development', price: '$5,000' },
    { id: 3, name: 'Mobile Apps', price: '$8,000' },
    { id: 4, name: 'SEO Optimization', price: '$1,500' },
    { id: 5, name: 'Digital Marketing', price: '$3,000' },
    { id: 6, name: 'Consulting', price: '$1,000/hour' }
  ];
  res.json(services);
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { title: 'Error', error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Fake Agency app listening on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see the app`);
});

