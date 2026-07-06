const products = [
  {
    part: 'OTS-ACS-220',
    name: 'AC Stabilizer',
    category: 'Power Solutions',
    manufacturer: 'One Tek Solution',
    origin: 'India',
    availability: 'Available',
    image: 'product-stabilizer.jpg',
    description: 'Reliable voltage protection system for industrial and commercial use.'
  },
  {
    part: 'OTS-CHG-200W',
    name: 'Battery Charger 200W',
    category: 'Power Solutions',
    manufacturer: 'One Tek Solution',
    origin: 'India',
    availability: 'Available',
    image: 'product-battery-charger.jpg',
    description: 'Intelligent automatic charger for 12V and 24V battery applications.'
  },
  {
    part: 'OTS-VPS-30V5A',
    name: 'Variable Power Supply',
    category: 'Power Solutions',
    manufacturer: 'One Tek Solution',
    origin: 'India',
    availability: 'Available',
    image: 'product-variable-power-supply.jpg',
    description: 'Adjustable DC power supply for R&D, testing, and industrial electronics.'
  },
  {
    part: 'OTS-FL4-12V',
    name: '4 Pin Flasher',
    category: 'Automotive Electronics',
    manufacturer: 'One Tek Solution',
    origin: 'India',
    availability: 'Available',
    image: 'product-flasher-4pin.jpg',
    description: 'Electronic flasher relay for 4 wheeler indicator systems.'
  },
  {
    part: 'OTS-HWF-12P',
    name: 'Highway Flasher',
    category: 'Automotive Electronics',
    manufacturer: 'One Tek Solution',
    origin: 'India',
    availability: 'Available',
    image: 'product-highway-flasher.jpg',
    description: 'Multi-pattern highway flasher with stable and reliable output.'
  },
  {
    part: 'OTS-FSS-BUS',
    name: 'Bus Fire Safety System',
    category: 'Fire Safety',
    manufacturer: 'One Tek Solution',
    origin: 'India',
    availability: 'On Request',
    image: 'product-fire-safety-system.jpg',
    description: 'Integrated fire detection and suppression support for bus safety systems.'
  },
  {
    part: 'OTS-FAS-SET',
    name: 'Fire Alarm Product Set',
    category: 'Fire Safety',
    manufacturer: 'One Tek Solution',
    origin: 'India',
    availability: 'On Request',
    image: 'product-fire-alarm-set.jpg',
    description: 'Control panel, strobe light, and smoke detector solutions.'
  },
  {
    part: 'OTS-BZR-12V',
    name: 'High Intensity Buzzer',
    category: 'Automotive Electronics',
    manufacturer: 'One Tek Solution',
    origin: 'India',
    availability: 'Available',
    image: 'product-buzzer.jpg',
    description: 'High-audibility emergency and signal buzzer product.'
  },
  {
    part: 'OTS-DCDC-10A',
    name: 'DC-DC Converter',
    category: 'Converters & Modules',
    manufacturer: 'One Tek Solution',
    origin: 'India',
    availability: 'Available',
    image: 'product-converter.jpg',
    description: 'Efficient DC converter for industrial and battery-linked systems.'
  },
  {
    part: 'OTS-MOD-TRF',
    name: 'Transformer Board Module',
    category: 'Converters & Modules',
    manufacturer: 'One Tek Solution',
    origin: 'India',
    availability: 'On Request',
    image: 'product-transformer-board.jpg',
    description: 'Electronic module and transformer board support for custom systems.'
  },
  {
    part: 'STM32F407VGT6',
    name: 'STM32 Microcontroller',
    category: 'Semiconductors',
    manufacturer: 'STMicroelectronics',
    origin: 'Germany / Global',
    availability: 'Available',
    image: 'product-transformer-board.jpg',
    description: 'Popular MCU for embedded development and industrial controller design.'
  },
  {
    part: 'IR2110PBF',
    name: 'Gate Driver IC',
    category: 'Semiconductors',
    manufacturer: 'Infineon',
    origin: 'Germany',
    availability: 'On Request',
    image: 'product-converter.jpg',
    description: 'Power electronics driver IC for converter and motor control applications.'
  }
];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

function productCard(item) {
  return `
    <article class="catalogue-card">
      <img src="${item.image}" alt="${item.name}" />
      <div class="product-body">
        <h3>${item.name}</h3>
        <p><strong>Part Number:</strong> ${item.part}</p>
        <p>${item.description}</p>
        <div class="product-meta">
          <span class="meta-chip">${item.category}</span>
          <span class="meta-chip">${item.manufacturer}</span>
          <span class="badge">${item.availability}</span>
        </div>
        <p><strong>Origin:</strong> ${item.origin}</p>
      </div>
    </article>
  `;
}

function renderProducts(items) {
  if (!productGrid) return;

  if (!items.length) {
    productGrid.innerHTML = `
      <article class="catalogue-card">
        <div class="product-body">
          <h3>No matching products found</h3>
          <p>Please contact One Tek Solution for sourcing support, custom requirements, or equivalent product availability.</p>
        </div>
      </article>
    `;
    return;
  }

  productGrid.innerHTML = items.map(productCard).join('');
}

function filterProducts() {
  const query = (searchInput?.value || '').toLowerCase().trim();
  const selectedCategory = categoryFilter?.value || 'all';

  const filtered = products.filter((item) => {
    const text = [
      item.part,
      item.name,
      item.category,
      item.manufacturer,
      item.origin,
      item.description
    ].join(' ').toLowerCase();

    const matchesQuery = text.includes(query);
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  renderProducts(filtered);
}

searchInput?.addEventListener('input', filterProducts);
categoryFilter?.addEventListener('change', filterProducts);
menuToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

renderProducts(products);
