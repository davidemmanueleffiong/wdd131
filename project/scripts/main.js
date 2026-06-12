// ============================================================
//  WDD131 Portfolio — main.js
//  Covers: Functions, DOM manipulation, conditional branching,
//          Objects, Arrays + array methods, Template literals,
//          localStorage
// ============================================================

// ── Data: Projects Array of Objects ─────────────────────────

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last updated: ${document.lastModified}`;


const projects = [
  {
    id: 1,
    title: "Weather Dashboard",
    description: "A responsive weather app fetching real-time data with animated forecast cards.",
    category: "javascript",
    emoji: "🌤️",
    tags: ["JavaScript", "API", "CSS Grid"],
    live: "#",
    repo: "#"
  },
  {
    id: 2,
    title: "Portfolio Site",
    description: "This very site — built with semantic HTML, external CSS, and vanilla JavaScript.",
    category: "html-css",
    emoji: "💼",
    tags: ["HTML", "CSS", "JS"],
    live: "#",
    repo: "#"
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A localStorage-powered task manager with drag-and-drop sorting and priority tags.",
    category: "javascript",
    emoji: "✅",
    tags: ["JavaScript", "localStorage", "DOM"],
    live: "#",
    repo: "#"
  },
  {
    id: 4,
    title: "Recipe Finder",
    description: "Search and filter recipes by ingredient with a clean card-based UI.",
    category: "html-css",
    emoji: "🍳",
    tags: ["HTML", "CSS", "API"],
    live: "#",
    repo: "#"
  },
  {
    id: 5,
    title: "Quiz App",
    description: "An interactive quiz with score tracking, timer, and local high-score board.",
    category: "javascript",
    emoji: "🧠",
    tags: ["JavaScript", "Objects", "Arrays"],
    live: "#",
    repo: "#"
  },
  {
    id: 6,
    title: "Landing Page",
    description: "A conversion-focused product landing page demonstrating PARC design principles.",
    category: "html-css",
    emoji: "🚀",
    tags: ["HTML", "CSS", "Responsive"],
    live: "#",
    repo: "#"
  }
];

// ── Utility Functions ─────────────────────────────────────────

/**
 * Builds an HTML string for one project card using template literals
 * @param {Object} project - project data object
 * @returns {string} HTML string
 */
function buildProjectCard(project) {
  const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  return `
    <article class="card project-card" data-category="${project.category}">
      <div class="project-img-placeholder">${project.emoji}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="skill-tags">${tagsHTML}</div>
      <div class="project-links" style="margin-top:1rem">
        <a href="${project.live}" class="project-link">↗ Live Demo</a>
        <a href="${project.repo}" class="project-link">⌥ GitHub</a>
      </div>
    </article>`;
}

/**
 * Renders project cards to the grid, applying category filter
 * @param {string} filter - category to filter by ('all' shows everything)
 */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  // Array method: filter
  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  // Conditional branching
  if (filtered.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-muted)">No projects found for this category.</p>`;
    return;
  }

  // Array method: map + join
  grid.innerHTML = filtered.map(buildProjectCard).join('');
}

// ── Theme Toggle ──────────────────────────────────────────────

/**
 * Applies saved theme from localStorage on page load
 */
function applySavedTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'light') {
    document.body.classList.add('light-theme');
    updateThemeBtn(true);
  }
}

/**
 * Updates the theme button label
 * @param {boolean} isLight
 */
function updateThemeBtn(isLight) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.textContent = isLight ? '🌙 Dark' : '☀️ Light';
}

/**
 * Toggles between dark and light theme, saves preference to localStorage
 */
function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  const theme = isLight ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', theme);
  updateThemeBtn(isLight);
}

// ── Visit Counter (localStorage) ──────────────────────────────

/**
 * Increments and displays visit count using localStorage
 */
function trackVisit() {
  const raw = localStorage.getItem('portfolio-visits');
  const count = raw ? parseInt(raw, 10) + 1 : 1;
  localStorage.setItem('portfolio-visits', count);

  const el = document.getElementById('visit-count');
  if (el) {
    el.textContent = count === 1
      ? `Welcome! First visit 🎉`
      : `Welcome back! Visit #${count}`;
  }
}

// ── Contact Form ──────────────────────────────────────────────

/**
 * Validates a single field and returns an error message or empty string
 * @param {string} name - field name
 * @param {string} value - field value
 * @returns {string}
 */
function validateField(name, value) {
  const trimmed = value.trim();
  if (name === 'name' && trimmed.length < 2) {
    return 'Name must be at least 2 characters.';
  }
  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return 'Please enter a valid email address.';
  }
  if (name === 'message' && trimmed.length < 10) {
    return 'Message must be at least 10 characters.';
  }
  return '';
}

/**
 * Handles contact form submission with validation feedback
 * @param {Event} e
 */
function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const fields = ['name', 'email', 'message'];
  const msgEl  = document.getElementById('form-msg');
  let   errors = [];

  // Validate each required field (array method: forEach)
  fields.forEach(field => {
    const input = form.elements[field];
    if (!input) return;
    const err = validateField(field, input.value);
    if (err) errors.push(err);
  });

  // Conditional branching on validation result
  if (errors.length > 0) {
    msgEl.className = 'form-msg error';
    msgEl.textContent = errors[0]; // show first error
    return;
  }

  // Build submission object
  const submission = {
    name:    form.elements['name'].value.trim(),
    email:   form.elements['email'].value.trim(),
    subject: form.elements['subject'].value,
    message: form.elements['message'].value.trim(),
    sentAt:  new Date().toISOString()
  };

  // Save last submission to localStorage
  localStorage.setItem('last-submission', JSON.stringify(submission));

  // Template literal for success message
  msgEl.className   = 'form-msg success';
  msgEl.textContent = `Thanks, ${submission.name}! Your message has been received. I'll get back to you soon.`;
  form.reset();
}

// ── Mobile Nav ────────────────────────────────────────────────

/**
 * Sets up hamburger toggle for mobile navigation
 */
function initMobileNav() {
  const toggle  = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-links');
  if (!toggle || !navList) return;

  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// ── Active Nav Link ───────────────────────────────────────────

/**
 * Marks the current page's nav link as active using the filename
 */
function setActiveNav() {
  const page  = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page) link.classList.add('active');
  });
}

// ── Filter Buttons (projects page) ───────────────────────────

/**
 * Wires up project filter buttons
 */
function initFilters() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;

  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // DOM: modify element
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderProjects(btn.dataset.filter);
  });
}

// ── Lazy Loading check ────────────────────────────────────────
// Native lazy loading is applied via loading="lazy" on all
// below-the-fold images in HTML (see project cards img tags).
// This function adds the attribute programmatically where missed.
function ensureLazyLoading() {
  const belowFold = document.querySelectorAll('img:not([loading])');
  belowFold.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  trackVisit();
  setActiveNav();
  initMobileNav();
  initFilters();
  renderProjects();
  ensureLazyLoading();

  // Theme toggle button listener (DOM event)
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Contact form listener
  const contactForm = document.getElementById('contact-form');
  if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);
});