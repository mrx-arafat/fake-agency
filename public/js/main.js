// Main JavaScript for Fake Agency

document.addEventListener('DOMContentLoaded', () => {
  console.log('Fake Agency app loaded');

  // Add smooth scrolling
  addSmoothScrolling();

  // Add active nav link highlighting
  highlightActiveNavLink();

  // Initialize password modal
  initPasswordModal();
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

// Password Modal Functions
function initPasswordModal() {
  const modal = document.getElementById('passwordModal');
  const exploreBtn = document.getElementById('exploreBtn');
  const closeBtn = document.querySelector('.close');
  const cancelBtn = document.getElementById('cancelBtn');
  const submitBtn = document.getElementById('submitBtn');
  const passwordInput = document.getElementById('passwordInput');
  const errorMessage = document.getElementById('errorMessage');

  // Open modal when Explore button is clicked
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      modal.classList.add('show');
      passwordInput.focus();
      errorMessage.classList.remove('show');
      errorMessage.textContent = '';
      passwordInput.value = '';
    });
  }

  // Close modal when close button is clicked
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // Close modal when cancel button is clicked
  cancelBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // Close modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  });

  // Submit password
  submitBtn.addEventListener('click', verifyPassword);

  // Allow Enter key to submit
  passwordInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      verifyPassword();
    }
  });
}

// Verify password function
async function verifyPassword() {
  const passwordInput = document.getElementById('passwordInput');
  const errorMessage = document.getElementById('errorMessage');
  const password = passwordInput.value;

  if (!password) {
    errorMessage.textContent = 'Please enter a password';
    errorMessage.classList.add('show');
    return;
  }

  try {
    const response = await fetch('/api/verify-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password })
    });

    const data = await response.json();

    if (data.success) {
      // Password is correct, redirect to services
      window.location.href = '/services';
    } else {
      // Password is incorrect
      errorMessage.textContent = data.message || 'Incorrect password!';
      errorMessage.classList.add('show');
      passwordInput.value = '';
      passwordInput.focus();
    }
  } catch (error) {
    console.error('Error verifying password:', error);
    errorMessage.textContent = 'An error occurred. Please try again.';
    errorMessage.classList.add('show');
  }
}

