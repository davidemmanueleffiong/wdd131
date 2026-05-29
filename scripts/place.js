// main.js – Madagascar Country Page

// Display last modified date in footer
const lastModEl = document.getElementById('last-modified');
if (lastModEl) {
  const d = new Date(document.lastModified);
  const pad = n => String(n).padStart(2, '0');
  const formatted =
    pad(d.getMonth() + 1) + '/' +
    pad(d.getDate()) + '/' +
    d.getFullYear() + ' ' +
    pad(d.getHours()) + ':' +
    pad(d.getMinutes()) + ':' +
    pad(d.getSeconds());
  lastModEl.textContent = 'Last Modification: ' + formatted;
}