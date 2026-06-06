const params = new URLSearchParams(window.location.search);

// Define product names lookup
const productNames = {
  'prod1': 'SuperWidget 3000',
  'prod2': 'MegaGadget Pro',
  'prod3': 'UltraTool X',
  // Add more products as needed
};

const productId = params.get('product');
  document.getElementById('out-product').textContent = productNames[productId] || productId || '-';
 
  const rating = parseInt(params.get('rating'));
  document.getElementById('out-rating').textContent = rating ? '★'.repeat(rating) + '☆'.repeat(5 - rating) : '—';
 
  const date = params.get('installDate');
  document.getElementById('out-date').textContent = date || '—';
 
  const features = params.getAll('features');
  document.getElementById('out-features').textContent = features.length ? features.join(', ') : 'None selected';
 
  const review = params.get('review');
  document.getElementById('out-review').textContent = review?.trim() || 'No written review';
 
  const name = params.get('username');
  document.getElementById('out-name').textContent = name?.trim() || 'Anonymous';