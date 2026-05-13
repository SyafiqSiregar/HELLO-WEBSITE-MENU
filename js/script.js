const menuGrid = document.getElementById('menu-grid-container');
const categoryButtons = {
    'semua': document.getElementById('btn-cat-semua'),
    'coffee': document.getElementById('btn-cat-coffee'),
    'non-coffee': document.getElementById('btn-cat-non-coffee'),
    'makanan': document.getElementById('btn-cat-makanan')
};
const sectionTitle = document.getElementById('menu-section-title');

// Fungsi Render Item Menu
function renderProducts(categoryFilter = 'semua') {
    menuGrid.innerHTML = ''; 

    const filteredProducts = Object.values(products).filter(product => {
        if (categoryFilter === 'semua') return true;
        return product.category === categoryFilter;
    });

    if(filteredProducts.length === 0){
         menuGrid.innerHTML = `<p class="col-span-2 text-center text-app-textMuted py-10 font-light">Menu belum tersedia di kategori ini.</p>`;
         return;
    }

    filteredProducts.forEach(product => {
        // Style Badge (Mirip dengan screenshot, gelap tembus pandang)
        let badgeHTML = '';
        if (product.badge && !product.isSoldOut) {
            badgeHTML = `<div class="absolute top-2 left-2 bg-[#1A1613]/80 backdrop-blur-sm text-app-textMain text-[11px] px-2.5 py-1 rounded-md font-medium tracking-wide z-10">${product.badge}</div>`;
        }

        // Default Styles
        let itemClasses = 'bg-app-card rounded-2xl overflow-hidden cursor-pointer active:scale-95 transition-transform duration-200 border border-white/5';
        let imgContainerClasses = 'relative h-44 w-full bg-[#1A1613]';
        let imgClasses = 'w-full h-full object-cover opacity-90';
        let titleClasses = 'font-serif text-app-textMain text-[15px] leading-snug mb-1 mt-1 font-medium';
        let priceHTML = `<p class="text-app-textMuted text-[13px] font-sans">${product.price}</p>`;
        let soldOutOverlay = '';
        let onclickAction = `onclick="openDetail('${product.id}')"`; 
        
        // Style Habis / Sold Out (Persis screenshot)
        if (product.isSoldOut) {
             itemClasses = 'bg-app-card rounded-2xl overflow-hidden border border-white/5 opacity-60'; 
             imgClasses = 'w-full h-full object-cover grayscale opacity-40'; 
             priceHTML = `<p class="text-app-textMuted text-[13px] font-sans line-through">${product.price}</p>`;
             soldOutOverlay = `
                <div class="absolute inset-0 flex items-end justify-center pb-4 z-10">
                    <span class="bg-[#14110F]/90 backdrop-blur text-app-textMuted px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase border border-white/10">Habis</span>
                </div>`;
             onclickAction = ''; 
        }

        const cardHTML = `
            <div class="${itemClasses}" ${onclickAction}>
                <div class="${imgContainerClasses}">
                    <img src="${product.img}" alt="${product.title}" class="${imgClasses}" loading="lazy">
                    ${badgeHTML}
                    ${soldOutOverlay}
                </div>
                <div class="p-3">
                    <h3 class="${titleClasses}">${product.title}</h3>
                    ${priceHTML}
                </div>
            </div>
        `;
        
        menuGrid.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Fungsi Filter Kategori
function filterCategory(category) {
    renderProducts(category);

    // Reset Button Styles (ke style outline/inactive)
    Object.values(categoryButtons).forEach(btn => {
         btn.className = "whitespace-nowrap px-5 py-2 rounded-full bg-transparent text-app-textMain border border-app-border font-medium text-sm transition-transform active:scale-95";
    });

    // Set Active Button Style (warna peach/gold, teks gelap)
    const activeBtn = categoryButtons[category];
    if(activeBtn) {
         activeBtn.className = "whitespace-nowrap px-5 py-2 rounded-full bg-app-accent text-app-bg font-semibold text-sm transition-transform active:scale-95";
    }
    
    // Update Title 
    if(category === 'semua') sectionTitle.innerHTML = '<span class="text-app-accent text-xl">✦</span> Signature Picks';
    else if(category === 'coffee') sectionTitle.innerHTML = '<span class="text-app-accent text-xl">✦</span> Kopi Pilihan';
    else if(category === 'non-coffee') sectionTitle.innerHTML = '<span class="text-app-accent text-xl">✦</span> Sweet & Fresh';
    else if(category === 'makanan') sectionTitle.innerHTML = '<span class="text-app-accent text-xl">✦</span> Makanan & Snack';
}

// Fungsi Pindah Tab Navigasi
function switchTab(tabId) {
    const menuTab = document.getElementById('tab-content-menu');
    const infoTab = document.getElementById('tab-content-info');
    const btnMenu = document.getElementById('tab-btn-menu');
    const btnInfo = document.getElementById('tab-btn-info');

    if (tabId === 'menu') {
        menuTab.classList.remove('hidden');
        infoTab.classList.add('hidden');
        // Menu Active
        btnMenu.className = "mr-6 pb-3 text-app-accent border-b-2 border-app-accent font-medium transition-colors text-[15px]";
        // Info Inactive
        btnInfo.className = "mr-6 pb-3 text-app-textMuted border-b-2 border-transparent font-medium transition-colors text-[15px]";
    } else {
        infoTab.classList.remove('hidden');
        menuTab.classList.add('hidden');
        // Info Active
        btnInfo.className = "mr-6 pb-3 text-app-accent border-b-2 border-app-accent font-medium transition-colors text-[15px]";
        // Menu Inactive
        btnMenu.className = "mr-6 pb-3 text-app-textMuted border-b-2 border-transparent font-medium transition-colors text-[15px]";
    }
}

// Logic Bottom Sheet (Modal Detail Produk)
const modalContainer = document.getElementById('modal-container');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalSheet = document.getElementById('modal-sheet');

function openDetail(productId) {
    const product = products[productId];
    if (!product) return;

    // Isi Data
    document.getElementById('modal-title').textContent = product.title;
    document.getElementById('modal-price').textContent = product.price;
    document.getElementById('modal-desc').textContent = product.desc;
    document.getElementById('modal-img').src = product.img;
    
    // Sembunyikan varian jika tidak ada
    const variantContainer = document.getElementById('modal-variants');
    if (product.hasVariants) {
        variantContainer.classList.remove('hidden');
    } else {
        variantContainer.classList.add('hidden');
    }

    // Tampilkan Modal
    modalContainer.classList.remove('hidden');
    void modalContainer.offsetWidth; // trigger reflow
    
    modalBackdrop.classList.remove('opacity-0');
    modalBackdrop.classList.add('opacity-100');
    
    modalSheet.classList.remove('translate-y-full');
    modalSheet.classList.add('translate-y-0');
    
    document.body.style.overflow = 'hidden';
}

function closeDetail() {
    // Animasi Keluar
    modalBackdrop.classList.remove('opacity-100');
    modalBackdrop.classList.add('opacity-0');
    
    modalSheet.classList.remove('translate-y-0');
    modalSheet.classList.add('translate-y-full');
    
    setTimeout(() => {
        modalContainer.classList.add('hidden');
        document.body.style.overflow = ''; 
    }, 300);
}

// Inisialisasi awal saat web dimuat
window.addEventListener('DOMContentLoaded', () => {
     renderProducts('semua');
});
