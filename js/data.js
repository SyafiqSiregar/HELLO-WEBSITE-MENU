// Database Produk (Kopi, Non-Kopi, Makanan)
const products = {
    'kopi-sig': {
        id: 'kopi-sig',
        title: 'Hello Kopi Signature',
        price: 'Rp 18.000',
        desc: 'Signature espresso blend dari Hello Coffee dipadukan dengan susu segar pilihan dan sentuhan gula aren organik murni.',
        img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&h=800&fit=crop', // Iced coffee visually similar to screenshot
        category: 'coffee',
        hasVariants: true,
        badge: 'Andalan',
        isSoldOut: false
    },
    'pizza-mini': {
        id: 'pizza-mini',
        title: 'Pizza Mini Margherita',
        price: 'Rp 25.000',
        desc: 'Pizza personal dengan adonan tipis renyah, saus tomat asli, keju mozzarella, dan taburan daun basil.',
        img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=800&fit=crop',
        category: 'makanan',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'croissant': {
        id: 'croissant',
        title: 'Butter Croissant',
        price: 'Rp 22.000',
        desc: 'Croissant klasik ala Prancis yang renyah di luar dan lembut di dalam.',
        img: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=800&h=800&fit=crop', // Coffee & pastry top down
        category: 'makanan',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'mie-saus': {
        id: 'mie-saus',
        title: 'Mie Saus Kekinian',
        price: 'Rp 15.000',
        desc: 'Mie pedas dengan saus racikan rahasia Hello Coffee.',
        img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&h=800&fit=crop',
        category: 'makanan',
        hasVariants: false,
        badge: null,
        isSoldOut: true // Ini yang HABIS
    },
    'americano-ice': {
        id: 'americano-ice',
        title: 'Iced Americano',
        price: 'Rp 15.000',
        desc: 'Espresso murni yang diekstraksi sempurna, disajikan dengan air es untuk menyegarkan harimu.',
        img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&h=800&fit=crop',
        category: 'coffee',
        hasVariants: false,
        badge: null,
        isSoldOut: false
    },
    'matcha-latte': {
        id: 'matcha-latte',
        title: 'Kyoto Matcha Latte',
        price: 'Rp 22.000',
        desc: 'Bubuk Matcha premium dari Kyoto, Jepang. Dicampur susu murni yang di-steam lembut.',
        img: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=800&h=800&fit=crop',
        category: 'non-coffee',
        hasVariants: true,
        badge: null,
        isSoldOut: false
    },
    'choco-belgian': {
        id: 'choco-belgian',
        title: 'Belgian Dark Choco',
        price: 'Rp 20.000',
        desc: 'Cokelat hitam premium Belgia yang dilelehkan dengan susu creamy. Kaya, pekat, tidak terlalu manis.',
        img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&h=800&fit=crop',
        category: 'non-coffee',
        hasVariants: true,
        badge: 'Spesial',
        isSoldOut: false
    }
};
