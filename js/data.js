// Database Produk Hello Coffee
const products = {
    // === LATTE ===
    'latte-aren': {
        id: 'latte-aren',
        title: 'Kopsu Aren',
        price: 'Rp 13.000',
        desc: 'Paduan espresso dan gula aren premium yang creamy dan legit.',
        img: 'assets/products/kopsu_aren.png', 
        category: 'latte',
        hasVariants: true,
        badge: 'Best Seller',
        isSoldOut: false
    },
    'latte-karamel': {
        id: 'latte-karamel',
        title: 'Kopsu Karamel',
        price: 'Rp 15.000',
        desc: 'Espresso dengan susu steam lembut dan sirup karamel spesial.',
        img: 'assets/products/kopsu_karamel.png', 
        category: 'latte',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'latte-vanilla': {
        id: 'latte-vanilla',
        title: 'Kopsu Vanilla',
        price: 'Rp 15.000',
        desc: 'Kombinasi klasik espresso, susu, dan sirup vanilla yang harum.',
        img: 'assets/products/kopsu_vanila.png', 
        category: 'latte',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'latte-regal': {
        id: 'latte-regal',
        title: 'Kopsu Regal',
        price: 'Rp 15.000',
        desc: 'Kopi susu dengan tambahan biskuit regal yang renyah.',
        img: 'assets/products/kopsu_regal.png', 
        category: 'latte',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'latte-pandan': {
        id: 'latte-pandan',
        title: 'Kopsu Pandan',
        price: 'Rp 15.000',
        desc: 'Kopi susu dengan aroma dan rasa pandan yang khas.',
        img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&h=800&fit=crop', 
        category: 'latte',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'latte-hazelnutt': {
        id: 'latte-hazelnutt',
        title: 'Kopsu Hazelnutt',
        price: 'Rp 15.000',
        desc: 'Citarasa kacang hazelnut yang gurih berpadu dengan kopi susu hangat.',
        img: 'assets/products/kopsu_hazelnut.png',
        category: 'latte',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },

    // === COFFEE ===
    'coffee-tubruk': {
        id: 'coffee-tubruk',
        title: 'Kopi Tubruk',
        price: 'Rp 10.000',
        desc: 'Kopi tubruk khas dengan seduhan air panas langsung.',
        img: 'assets/products/kopi_tubruk.png', 
        category: 'coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'coffee-americano': {
        id: 'coffee-americano',
        title: 'Americano',
        price: 'Rp 13.000',
        desc: 'Espresso murni yang diekstraksi sempurna dipadu dengan air.',
        img: 'assets/products/americano.png', 
        category: 'coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'coffee-v60': {
        id: 'coffee-v60',
        title: 'V60',
        price: 'Rp 18.000',
        desc: 'Kopi seduh manual V60 yang menghasilkan cita rasa clean dan aromatik.',
        img: 'assets/products/v60.png', 
        category: 'coffee',
        hasVariants: true,
        badge: 'Manual Brew',
        isSoldOut: false
    },
    'coffee-latte': {
        id: 'coffee-latte',
        title: 'Latte',
        price: 'Rp 15.000',
        desc: 'Espresso dengan campuran susu yang lebih dominan.',
        img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&h=800&fit=crop', 
        category: 'coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'coffee-cappucino': {
        id: 'coffee-cappucino',
        title: 'Cappucino',
        price: 'Rp 15.000',
        desc: 'Espresso dengan foam susu tebal.',
        img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&h=800&fit=crop', 
        category: 'coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'coffee-vietnam-drip': {
        id: 'coffee-vietnam-drip',
        title: 'Vietnam Drip',
        price: 'Rp 13.000',
        desc: 'Kopi tetes khas Vietnam dengan susu kental manis.',
        img: 'assets/products/vietnam_drip.png', 
        category: 'coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },

    // === NON COFFEE ===
    'non-matcha': {
        id: 'non-matcha',
        title: 'Matcha',
        price: 'Rp 15.000',
        desc: 'Bubuk Matcha premium dari Jepang, dicampur susu murni yang di-steam lembut.',
        img: 'assets/products/matcha.jpg', 
        category: 'non-coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'non-redvelvet': {
        id: 'non-redvelvet',
        title: 'Red Velvet',
        price: 'Rp 15.000',
        desc: 'Kelezatan kue red velvet dalam balutan minuman yang lembut.',
        img: 'assets/products/redvelvet.png', 
        category: 'non-coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'non-taro': {
        id: 'non-taro',
        title: 'Taro',
        price: 'Rp 15.000',
        desc: 'Minuman rasa talas yang manis dan creamy.',
        img: 'assets/products/taro.png', 
        category: 'non-coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'non-choco': {
        id: 'non-choco',
        title: 'Dark Choco',
        price: 'Rp 15.000',
        desc: 'Cokelat hitam premium yang dilelehkan dengan susu creamy. Kaya dan pekat.',
        img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&h=800&fit=crop', 
        category: 'non-coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },

    // === TEA ===
    'tea-lychee': {
        id: 'tea-lychee',
        title: 'Lycee Tea',
        price: 'Rp 13.000',
        desc: 'Teh seduh dengan buah leci asli yang menyegarkan ice',
        img: 'assets/products/lychee_tea.webp', 
        category: 'tea',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'tea-lemon': {
        id: 'tea-lemon',
        title: 'Lemon Tea',
        price: 'Rp 13.000',
        desc: 'Es teh segar dengan perasan jeruk lemon.',
        img: 'assets/products/lemon_tea.png', 
        category: 'tea',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'tea-lemongrass': {
        id: 'tea-lemongrass',
        title: 'Lemon Grass',
        price: 'Rp 15.000',
        desc: 'Minuman segar dengan aroma serai yang menenangkan.',
        img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=800&fit=crop', 
        category: 'tea',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },

    // === SIGNATURE ===
    'sig-frezza': {
        id: 'sig-frezza',
        title: 'Frezza',
        price: 'Rp 15.000',
        desc: 'Minuman signature menyegarkan khas Hello Coffee.',
        img: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&h=800&fit=crop', 
        category: 'signature',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'sig-berrycano': {
        id: 'sig-berrycano',
        title: 'Berrycano',
        price: 'Rp 15.000',
        desc: 'Perpaduan americano dengan sensasi rasa berry yang segar.',
        img: 'assets/products/berrycano.jpg', 
        category: 'signature',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'sig-lemondusk': {
        id: 'sig-lemondusk',
        title: 'Lemon Dusk',
        price: 'Rp 15.000',
        desc: 'Signature drink dengan paduan lemon dan racikan khusus.',
        img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=800&fit=crop', 
        category: 'signature',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'sig-berryblom': {
        id: 'sig-berryblom',
        title: 'Berry Blom Sparkle',
        price: 'Rp 15.000',
        desc: 'Minuman sparkling dengan sentuhan berry yang meledak di mulut',
        img: 'assets/products/berry_blom.webp', 
        category: 'signature',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'sig-americanolychee': {
        id: 'sig-americanolychee',
        title: 'Americano Lychee',
        price: 'Rp 15.000',
        desc: 'Americano segar dengan tambahan manisnya buah leci',
        img: 'assets/products/americano_lychee.jpg', 
        category: 'signature',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },

    // === SNACK & DESSERT ===
    'snack-singkong': {
        id: 'snack-singkong',
        title: 'Singkong Krispi',
        price: 'Rp 10.000',
        desc: 'Singkong goreng renyah dan gurih.',
        img: 'assets/products/singkong_krispi.png', 
        category: 'snack-dessert',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'snack-kentang': {
        id: 'snack-kentang',
        title: 'Kentang Goreng',
        price: 'Rp 12.000',
        desc: 'Kentang goreng renyah yang cocok untuk teman nongkrong.',
        img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800&h=800&fit=crop', 
        category: 'snack-dessert',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'snack-pisang-keju-coklat': {
        id: 'snack-pisang-keju-coklat',
        title: 'Pisang Goreng Keju Coklat',
        price: 'Rp 15.000',
        desc: 'Pisang goreng manis dengan topping keju dan coklat melimpah.',
        img: 'assets/products/pisang_keju_coklat.png', 
        category: 'snack-dessert',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'snack-pisang-coklat': {
        id: 'snack-pisang-coklat',
        title: 'Pisang Coklat',
        price: 'Rp 12.000',
        desc: 'Pisang goreng manis dengan topping coklat.',
        img: 'assets/products/pisang_coklat.png', 
        category: 'snack-dessert',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'snack-pisang-keju': {
        id: 'snack-pisang-keju',
        title: 'Pisang Keju',
        price: 'Rp 12.000',
        desc: 'Pisang goreng manis dengan topping parutan keju.',
        img: 'assets/products/pisang_keju.png', 
        category: 'snack-dessert',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'snack-tahu-krispi': {
        id: 'snack-tahu-krispi',
        title: 'Tahu Krispi',
        price: 'Rp 10.000',
        desc: 'Tahu goreng renyah dengan bumbu gurih.',
        img: 'assets/products/tahu_krispi.png', 
        category: 'snack-dessert',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'snack-tahu-bakso': {
        id: 'snack-tahu-bakso',
        title: 'Tahu Bakso',
        price: 'Rp 15.000',
        desc: 'Tahu isi bakso daging sapi yang lezat.',
        img: 'assets/products/tahu_bakso.png', 
        category: 'snack-dessert',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'snack-sosis-goreng': {
        id: 'snack-sosis-goreng',
        title: 'Sosis Goreng',
        price: 'Rp 15.000',
        desc: 'Sosis goreng lezat untuk camilan',
        img: 'assets/products/sosis_goreng.jpg', 
        category: 'snack-dessert',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'snack-sosis-bakar': {
        id: 'snack-sosis-bakar',
        title: 'Sosis Bakar',
        price: 'Rp 15.000',
        desc: 'Sosis bakar dengan bumbu spesial.',
        img: 'assets/products/sosis_bakar.webp', 
        category: 'snack-dessert',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'snack-nuget': {
        id: 'snack-nuget',
        title: 'Nuget',
        price: 'Rp 15.000',
        desc: 'Chicken nugget renyah.',
        img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&h=800&fit=crop', 
        category: 'snack-dessert',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'snack-mie': {
        id: 'snack-mie',
        title: 'Mie Kuah / Goreng Telur',
        price: 'Rp 13.000',
        desc: 'Mie instan pilihan yang disajikan kuah atau goreng lengkap dengan telur.',
        img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&h=800&fit=crop', 
        category: 'snack-dessert',
        hasVariants: false,
        badge: 'Kenyang',
        isSoldOut: false
    }
};
