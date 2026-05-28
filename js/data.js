// Database Produk Hello Coffee
const products = {
    // === SIGNATURE ===
    'sig-kopi-hello': {
        id: 'sig-kopi-hello',
        title: 'Kopi Susu Hello',
        price: 'Rp 18.000',
        desc: 'Signature espresso blend dari Hello Coffee dipadukan dengan susu segar pilihan dan sentuhan gula aren organik murni.',
        img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&h=800&fit=crop', 
        category: 'signature',
        hasVariants: true,
        badge: 'Andalan',
        isSoldOut: false
    },
    'sig-aren': {
        id: 'sig-aren',
        title: 'Aren Signature',
        price: 'Rp 20.000',
        desc: 'Perpaduan espresso dan gula aren premium yang creamy dan legit.',
        img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&h=800&fit=crop',
        category: 'signature',
        hasVariants: true,
        badge: 'Best Seller',
        isSoldOut: false
    },

    // === LATTE ===
    'latte-caramel': {
        id: 'latte-caramel',
        title: 'Caramel Latte',
        price: 'Rp 22.000',
        desc: 'Espresso dengan susu steam lembut dan sirup karamel spesial.',
        img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&h=800&fit=crop',
        category: 'latte',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'latte-vanilla': {
        id: 'latte-vanilla',
        title: 'Vanilla Latte',
        price: 'Rp 22.000',
        desc: 'Kombinasi klasik espresso, susu, dan sirup vanilla yang harum.',
        img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&h=800&fit=crop',
        category: 'latte',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'latte-hazelnut': {
        id: 'latte-hazelnut',
        title: 'Hazelnut Latte',
        price: 'Rp 23.000',
        desc: 'Citarasa kacang hazelnut yang gurih berpadu dengan latte hangat.',
        img: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?w=800&h=800&fit=crop',
        category: 'latte',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },

    // === COFFEE ===
    'coffee-americano': {
        id: 'coffee-americano',
        title: 'Americano',
        price: 'Rp 15.000',
        desc: 'Espresso murni yang diekstraksi sempurna.',
        img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&h=800&fit=crop',
        category: 'coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'coffee-cappuccino': {
        id: 'coffee-cappuccino',
        title: 'Cappuccino',
        price: 'Rp 20.000',
        desc: 'Espresso dengan foam susu tebal dan taburan cocoa.',
        img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&h=800&fit=crop',
        category: 'coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },

    // === NON COFFEE ===
    'non-matcha': {
        id: 'non-matcha',
        title: 'Kyoto Matcha Latte',
        price: 'Rp 22.000',
        desc: 'Bubuk Matcha premium dari Kyoto, Jepang. Dicampur susu murni yang di-steam lembut.',
        img: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=800&h=800&fit=crop',
        category: 'non-coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'non-choco': {
        id: 'non-choco',
        title: 'Belgian Dark Choco',
        price: 'Rp 20.000',
        desc: 'Cokelat hitam premium Belgia yang dilelehkan dengan susu creamy. Kaya, pekat, tidak terlalu manis.',
        img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&h=800&fit=crop',
        category: 'non-coffee',
        hasVariants: true,
        badge: 'Spesial',
        isSoldOut: false
    },
    'non-redvelvet': {
        id: 'non-redvelvet',
        title: 'Red Velvet Latte',
        price: 'Rp 22.000',
        desc: 'Kelezatan kue red velvet dalam balutan minuman hangat yang lembut.',
        img: 'https://images.unsplash.com/photo-1620189507195-68309c04c4d0?w=800&h=800&fit=crop',
        category: 'non-coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },

    // === TEA ===
    'tea-lychee': {
        id: 'tea-lychee',
        title: 'Lychee Tea',
        price: 'Rp 18.000',
        desc: 'Teh melati seduh dengan buah leci asli.',
        img: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=800&h=800&fit=crop',
        category: 'tea',
        hasVariants: true,
        badge: 'Segar',
        isSoldOut: false
    },
    'tea-lemon': {
        id: 'tea-lemon',
        title: 'Lemon Tea',
        price: 'Rp 15.000',
        desc: 'Es teh segar dengan perasan jeruk lemon.',
        img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=800&fit=crop',
        category: 'tea',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'tea-peach': {
        id: 'tea-peach',
        title: 'Peach Tea',
        price: 'Rp 18.000',
        desc: 'Teh rasa buah persik yang manis dan menyegarkan.',
        img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=800&fit=crop',
        category: 'tea',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },

    // === SNACK & DESSERT ===
    'snack-croissant': {
        id: 'snack-croissant',
        title: 'Butter Croissant',
        price: 'Rp 22.000',
        desc: 'Croissant klasik ala Prancis yang renyah di luar dan lembut di dalam.',
        img: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=800&h=800&fit=crop',
        category: 'snack-dessert',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'snack-platter': {
        id: 'snack-platter',
        title: 'Mix Platter',
        price: 'Rp 25.000',
        desc: 'Kombinasi sosis, kentang goreng, dan nugget. Cocok untuk sharing.',
        img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=800&fit=crop',
        category: 'snack-dessert',
        hasVariants: false,
        badge: 'Sharing',
        isSoldOut: false
    },
    'snack-dimsum': {
        id: 'snack-dimsum',
        title: 'Dimsum Mentai',
        price: 'Rp 20.000',
        desc: 'Dimsum ayam lezat dengan baluran saus mentai bakar.',
        img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=800&fit=crop',
        category: 'snack-dessert',
        hasVariants: false,
        badge: null,
        isSoldOut: true // Ini yang HABIS
    },

    // === MAIN COURSE ===
    'main-pizza': {
        id: 'main-pizza',
        title: 'Pizza Mini Margherita',
        price: 'Rp 25.000',
        desc: 'Pizza personal dengan adonan tipis renyah, saus tomat asli, keju mozzarella, dan taburan daun basil.',
        img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=800&fit=crop',
        category: 'main-course',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'main-mie': {
        id: 'main-mie',
        title: 'Mie Saus Kekinian',
        price: 'Rp 15.000',
        desc: 'Mie pedas dengan saus racikan rahasia Hello Coffee.',
        img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&h=800&fit=crop',
        category: 'main-course',
        hasVariants: false,
        badge: 'Spicy',
        isSoldOut: false
    },
    'main-ricebowl': {
        id: 'main-ricebowl',
        title: 'Rice Bowl Chicken Teriyaki',
        price: 'Rp 28.000',
        desc: 'Nasi hangat dengan ayam saus teriyaki dan telur mata sapi.',
        img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=800&fit=crop',
        category: 'main-course',
        hasVariants: false,
        badge: 'Kenyang',
        isSoldOut: false
    }
};
