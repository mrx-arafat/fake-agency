# Fake Agency - Node.js Web App

A simple Node.js web application built with Express.js and EJS templating engine. This is a demo website for a fictional digital agency.

## Features

- **Home Page**: Hero section with call-to-action
- **Services Page**: Display of agency services with pricing information
- **About Page**: Information about the agency
- **Contact Page**: Contact form with form validation
- **Responsive Design**: Mobile-friendly layout
- **API Endpoints**: RESTful API for services data

## Project Structure

```
fake-agency/
├── server.js              # Main Express server
├── package.json           # Project dependencies
├── views/                 # EJS templates
│   ├── header.ejs        # Navigation header
│   ├── footer.ejs        # Footer
│   ├── index.ejs         # Home page
│   ├── services.ejs      # Services page
│   ├── about.ejs         # About page
│   ├── contact.ejs       # Contact page
│   ├── 404.ejs           # 404 error page
│   └── error.ejs         # Error page
├── public/               # Static files
│   ├── css/
│   │   └── style.css     # Main stylesheet
│   └── js/
│       └── main.js       # Client-side JavaScript
└── README.md             # This file
```

## Installation

1. Navigate to the project directory:
```bash
cd fake-agency
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

or

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Routes

- `GET /` - Home page
- `GET /services` - Services page
- `GET /about` - About page
- `GET /contact` - Contact page
- `POST /contact` - Submit contact form
- `GET /api/services` - API endpoint for services data (JSON)

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **EJS** - Templating engine
- **CSS3** - Styling
- **Vanilla JavaScript** - Client-side interactivity

## Features Included

### Frontend
- Responsive navigation bar
- Hero section with call-to-action
- Feature cards
- Service listings
- Pricing information
- Contact form with validation
- Footer with contact information

### Backend
- Express server with routing
- EJS template rendering
- JSON API endpoint
- Form submission handling
- Error handling middleware
- 404 page handling

## Customization

### Change Port
Set the `PORT` environment variable:
```bash
PORT=8000 npm start
```

### Modify Services
Edit the services array in `server.js` to add or remove services.

### Update Styling
Modify `public/css/style.css` to customize the appearance.

### Add New Pages
1. Create a new EJS file in the `views/` directory
2. Add a new route in `server.js`
3. Add a navigation link in `views/header.ejs`

## License

ISC

## Author

Created as a demo project

