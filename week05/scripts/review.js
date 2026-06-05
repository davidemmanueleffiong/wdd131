const productId = params.get('product');
  document.getElementById('out-product').textContent = productNames[productId] || productId || '—';
 
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