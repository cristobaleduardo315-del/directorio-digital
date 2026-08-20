// Directorio Digital — placeholder data & basic interactivity.
// Reemplaza estos arreglos con datos reales (o un fetch a tu API/CMS) cuando estén listos.

const categories = [
  { name: "Restaurantes", count: 0 },
  { name: "Salud", count: 0 },
  { name: "Hogar", count: 0 },
  { name: "Belleza", count: 0 },
  { name: "Educación", count: 0 },
  { name: "Servicios profesionales", count: 0 },
];

const listings = [
  // { name: "Nombre del negocio", category: "Categoría", description: "Descripción breve." },
];

function renderCategories() {
  const grid = document.getElementById("category-grid");
  if (!grid) return;
  grid.innerHTML = categories
    .map(
      (c) => `
      <div class="card">
        <h3>${c.name}</h3>
        <p>${c.count} negocios</p>
      </div>`
    )
    .join("");
}

function renderListings() {
  const grid = document.getElementById("listing-grid");
  if (!grid) return;
  if (listings.length === 0) {
    grid.innerHTML = `<p style="color: var(--color-text-muted)">Aún no hay listados publicados. ¡Sé el primero en registrar tu negocio!</p>`;
    return;
  }
  grid.innerHTML = listings
    .map(
      (l) => `
      <div class="card">
        <h3>${l.name}</h3>
        <p>${l.category}</p>
        <p>${l.description}</p>
      </div>`
    )
    .join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderCategories();
renderListings();
