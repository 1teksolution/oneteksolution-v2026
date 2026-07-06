const products = [
  { part: 'STM32F407VGT6', category: 'Microcontrollers', manufacturer: 'STMicroelectronics', origin: 'Germany / Global', availability: 'Available' },
  { part: 'PIC16F877A-I/P', category: 'Microcontrollers', manufacturer: 'Microchip', origin: 'USA', availability: 'Available' },
  { part: 'ESP32-WROOM-32', category: 'Communication', manufacturer: 'Espressif', origin: 'China', availability: 'Available' },
  { part: 'ADS1115IDGSR', category: 'Sensors', manufacturer: 'Texas Instruments', origin: 'USA', availability: 'On Request' },
  { part: 'AT24C256C-SSHL-T', category: 'Memory', manufacturer: 'Microchip', origin: 'USA', availability: 'Available' },
  { part: 'IR2110PBF', category: 'Power IC', manufacturer: 'Infineon', origin: 'Germany', availability: 'Available' },
  { part: 'LM2596S-5.0', category: 'Power IC', manufacturer: 'Texas Instruments', origin: 'USA / China', availability: 'Available' },
  { part: 'MCP2551-I/SN', category: 'Communication', manufacturer: 'Microchip', origin: 'USA', availability: 'On Request' },
  { part: 'TLE42744DV50', category: 'Power IC', manufacturer: 'Infineon', origin: 'Germany', availability: 'Available' },
  { part: 'S25FL127SAGMFI011', category: 'Memory', manufacturer: 'Cypress', origin: 'USA', availability: 'On Request' }
];

const tableBody = document.getElementById('productTableBody');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

function renderProducts(items) {
  if (!tableBody) return;

  if (!items.length) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5">No matching products found. Please contact us for sourcing support.</td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = items.map((item) => `
    <tr>
      <td><strong>${item.part}</strong></td>
      <td>${item.category}</td>
      <td>${item.manufacturer}</td>
      <td>${item.origin}</td>
      <td><span class="badge">${item.availability}</span></td>
    </tr>
  `).join('');
}

function filterProducts() {
  const query = (searchInput?.value || '').toLowerCase().trim();
  const selectedCategory = categoryFilter?.value || 'all';

  const filtered = products.filter((item) => {
    const matchesQuery = [item.part, item.category, item.manufacturer, item.origin]
      .join(' ')
      .toLowerCase()
      .includes(query);

    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  renderProducts(filtered);
}

searchInput?.addEventListener('input', filterProducts);
categoryFilter?.addEventListener('change', filterProducts);
menuToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

renderProducts(products);
