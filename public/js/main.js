// Main JavaScript for Fake Agency

document.addEventListener('DOMContentLoaded', () => {
  console.log('Fake Agency app loaded');
  
  // Add smooth scrolling
  addSmoothScrolling();
  
  // Add active nav link highlighting
  highlightActiveNavLink();
});

// Smooth scrolling for anchor links
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Highlight active navigation link
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/')) {
      link.style.opacity = '0.6';
      link.style.textDecoration = 'underline';
    }
  });
}

// Utility function to fetch data
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Utility function to post data
async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error posting data:', error);
    return null;
  }
}

// Log page view (for analytics purposes)
function logPageView() {
  const pageInfo = {
    path: window.location.pathname,
    title: document.title,
    timestamp: new Date().toISOString()
  };
  console.log('Page view:', pageInfo);
}

logPageView();

