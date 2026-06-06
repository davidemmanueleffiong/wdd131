document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": "LagosBites Food Product"
    },
    "author": {
      "@type": "Person",
      "name": "Anonymous"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Share your LagosBites product experience."
  }

const params = new URLSearchParams(window.location.search);

const products = [
    { id: "fc-1888", name: "ac-2000", averagerating: 4.5 },
    { id: "fc-2050", name: "lg-fridge", averagerating: 4.7 },
    { id: "fs-1987", name: "sony-tv", averagerating: 3.5 },
  ];
 
  const select = document.getElementById('product');
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name;
    select.appendChild(opt);
  });