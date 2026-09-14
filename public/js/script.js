document.addEventListener("DOMContentLoaded", () => {
  const categoryCards = document.querySelectorAll(".category-card");
  const allFilterBtn = document.querySelector('.filter-btn-all');
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const counter = document.getElementById("counter");
  const cardsContainer = document.getElementById("cards-container");
  const noResults = document.getElementById("no-results");

  let activeCategory = "";

  const categoryIcons = {
    'Alimentação': '🍔',
    'Cuidados Pessoais': '✂️',
    'Saúde': '💊',
    'Serviços': '🔧',
    'Comércio': '🛍️',
    'Automotivo': '🚗',
    'Educação': '🎓',
    'Esportes & Lazer': '🏋️',
    'Agronegócio': '🌱'
  };

  // Funcao para consumir a API Node.js
  async function fetchEstabelecimentos(categoria = "", busca = "") {
    try {
      const url = `/api/estabelecimentos?categoria=${encodeURIComponent(categoria)}&busca=${encodeURIComponent(busca)}`;
      const response = await fetch(url);

      if (!response.ok) throw new Error("Erro ao carregar dados.");

      const estabelecimentos = await response.json();
      renderCards(estabelecimentos);
    } catch (error) {
      console.error("Erro no fetch:", error);
      cardsContainer.innerHTML = `<p class="no-results">Erro ao carregar dados do servidor local.</p>`;
    }
  }

  // Funcao para renderizar os cards dinâmicos vindos do SQLite
  function renderCards(lista) {
    cardsContainer.innerHTML = "";

    if (!lista || lista.length === 0) {
      noResults.style.display = "block";
      counter.textContent = "Mostrando 0 estabelecimentos";
      return;
    }

    noResults.style.display = "none";
    counter.textContent = `Mostrando ${lista.length} estabelecimento${lista.length === 1 ? "" : "s"}`;

    lista.forEach((item) => {
      const icon = categoryIcons[item.categoria] || '📍';
      const queryMaps = encodeURIComponent(`${item.nome}, ${item.endereco || ''}, Nao-Me-Toque - RS`);
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${queryMaps}`;

      const mediaHTML = item.imagem
        ? `<img src="${item.imagem}" alt="${item.nome}" class="card-img">`
        : `<span class="card-emoji">${icon}</span>`;

      const cardHTML = `
        <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="store-card-link">
          <article class="store-card">
            <div class="card-img-placeholder">
              ${mediaHTML}
            </div>
            <div class="card-body">
              <div class="card-header">
                <h3>${item.nome}</h3>
              </div>
              <p class="store-address">📍 ${item.endereco || 'Não-Me-Toque/RS'}</p>
              <span class="tag-pill">${item.categoria}</span>
            </div>
          </article>
        </a>
      `;
      cardsContainer.insertAdjacentHTML("beforeend", cardHTML);
    });
  }

  // Eventos de Filtro por Categoria
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      categoryCards.forEach(c => c.classList.remove("active"));
      allFilterBtn.classList.remove("active");

      card.classList.add("active");
      activeCategory = card.querySelector('.cat-name').textContent.trim();
      fetchEstabelecimentos(activeCategory, searchInput.value.trim());
    });
  });

  if (allFilterBtn) {
    allFilterBtn.addEventListener("click", () => {
      categoryCards.forEach(c => c.classList.remove("active"));
      allFilterBtn.classList.add("active");
      activeCategory = "";
      fetchEstabelecimentos("", searchInput.value.trim());
    });
  }

  // Eventos de Busca por Texto
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      fetchEstabelecimentos(activeCategory, searchInput.value.trim());
    });
  }

  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        fetchEstabelecimentos(activeCategory, searchInput.value.trim());
      }
    });
  }

  fetchEstabelecimentos();
});