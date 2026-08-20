// Directorio Digital — datos de ejemplo para el carrusel de destacados.
// Reemplaza estos objetos con tus negocios reales (o un fetch a tu API/CMS) cuando estén listos.

const listings = [
  {
    category: "Café Especial",
    name: "Origen & Grano",
    rating: "4.9",
    reviews: "120",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Restaurante",
    name: "La Brasa Bistro",
    rating: "4.8",
    reviews: "340",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Bar & Coctelería",
    name: "Rooftop 360",
    rating: "4.9",
    reviews: "89",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Hotel Boutique",
    name: "Casa Verde Suites",
    rating: "5.0",
    reviews: "210",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Recreación",
    name: "EcoPark Aventura",
    rating: "4.7",
    reviews: "95",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80",
  },
];

const starIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>`;

function renderListings() {
  const el = document.getElementById("carousel");
  if (!el) return;
  el.innerHTML = listings
    .map(
      (l) => `
      <article class="listing-card">
        <img src="${l.image}" alt="${l.name}" loading="lazy">
        <div class="card-body">
          <span class="category">${l.category}</span>
          <h3>${l.name}</h3>
          <div class="rating">${starIcon} ${l.rating} (${l.reviews} reseñas)</div>
        </div>
      </article>`
    )
    .join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderListings();
