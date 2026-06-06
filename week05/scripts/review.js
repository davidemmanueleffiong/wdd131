document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

const params = new URLSearchParams(window.location.search);

// Define product names lookup to match <option> values in the form
const productNames = {
  'ac-2000': 'AC-2000',
  'lg-fridge': 'LG Fridge',
  'sony-tv': 'Sony TV'
};

const productId = params.get('product');
document.getElementById('out-product').textContent =
  productNames[productId] || productId || 'Unknown Product';

const rating = parseInt(params.get('rating'));
document.getElementById('out-rating').textContent =
  rating ? '★'.repeat(rating) + '☆'.repeat(5 - rating) : 'No rating';

const date = params.get('installDate');
document.getElementById('out-date').textContent = date || 'No date';

const features = params.getAll('features');
document.getElementById('out-features').textContent =
  features.length ? features.join(', ') : 'None selected';

const review = params.get('review');
document.getElementById('out-review').textContent =
  review?.trim() || 'No written review';

const name = params.get('username');
document.getElementById('out-name').textContent =
  name?.trim() || 'Anonymous';

let reviewCount = localStorage.getItem("reviewCount");
if (!reviewCount) {
  reviewCount = 0;
}
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
document.getElementById("review-count").textContent = reviewCount;

localStorage.removeItem("reviewCount");
localStorage.removeItem("lastReview");