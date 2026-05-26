import React, { useState, useMemo, useEffect } from 'react';
import './App.css';

// DATA PRODUK RESMI JMV (Mizu-X, Agioo, Bio Luminex, Maklon B2B)
const PRODUCT_DATA = {
  id: [
    {
      id: 'air-freshener',
      name: 'Air Freshener',
      brand: 'Mizu-X',
      brandColor: '#d32f2f',
      icon: 'bi-wind',
      description: 'Pewangi mobil gantung premium dengan dua pilihan aroma mewah: Ice Cream Bar yang segar dan manis, serta Morning Coffee yang hangat dan menenangkan. Memberikan keharuman konstan dan menyegarkan hingga 30 hari untuk kenyamanan berkendara Anda.',
      specs: [
        'Tersedia dalam 2 Varian Premium: Ice Cream Bar & Morning Coffee',
        'Ketahanan Wangi Konstan hingga 30 Hari',
        'Kemasan Botol Apel Gantung 10 mL yang Estetik',
        'Formula Ramah Lingkungan & Aman di Hirup',
        'Efektif Menghilangkan Bau Apek & Bau Tidak Sedap'
      ],
      image: '/assets/productdata/Mizu x Air Freshener New.png',
    },
    {
      id: 'wash-glow',
      name: 'Wash & Glow Car Shampoo',
      brand: 'Mizu-X',
      brandColor: '#d32f2f',
      icon: 'bi-droplet-fill',
      description: 'Car Shampoo premium dengan kandungan wax pelindung cat. Bersihkan kotoran membandel, hasilkan kilap sempurna. Tersedia dalam kemasan pouch 200 mL dan sachet 40 mL.',
      specs: ['Busa Berlimpah & Lembut di Cat', 'Kandungan Premium Wax', 'pH Balance – Aman untuk Semua Warna Cat', 'Tersedia dalam Kemasan Pouch 200 mL & Sachet 40 mL'],
      image: '/assets/productdata/Mizu x Wash and Glow New.png',
    },
    {
      id: 'clear-view',
      name: 'Clear View Wiper Fluid',
      brand: 'Mizu-X',
      brandColor: '#d32f2f',
      icon: 'bi-eye-fill',
      description: 'Cairan wiper premium yang membersihkan kaca dari debu, hujan, dan minyak. Lindungi dan perpanjang umur wiper Anda. Tersedia dalam kemasan 40 mL.',
      specs: ['Bening Tanpa Residu', 'Efektif Lawan Debu, Hujan & Minyak', 'Lindungi & Perpanjang Umur Wiper', 'Tersedia dalam Kemasan 40 mL'],
      image: '/assets/productdata/Mizu x Clear View Wiper Fluid.jpeg',
    },
    {
      id: 'anti-scratch-sponge',
      name: 'Premium Anti Scratch Sponge',
      brand: 'Mizu-X',
      brandColor: '#d32f2f',
      icon: 'bi-stars',
      description: 'Spons cuci mobil premium dengan fungsi ganda. Material anti-gores yang tahan lama, tidak mudah sobek atau kempes.',
      specs: ['Fungsi Ganda: Sisi Spons Lembut & Sisi Sabut Kasar', 'Anti-Gores – Aman untuk Cat Mobil & Motor', 'Tahan Lama, Tidak Mudah Sobek', 'Isi 2 pcs / Pack'],
      image: '/assets/productdata/Mizu x Anti scratch Sponge.jpeg',
    },
    {
      id: 'windscreen-stain',
      name: 'Windscreen Stain Removal',
      brand: 'Mizu-X',
      brandColor: '#d32f2f',
      icon: 'bi-shield-check',
      description: 'Pembersih jamur kaca yang ampuh. Hilangkan noda membandel dan berikan perlindungan jangka panjang pada kaca kendaraan. Tersedia dalam kemasan 300 mL.',
      specs: ['Ampuh Hilangkan Jamur Kaca', 'Perlindungan Jangka Panjang', 'Aman untuk Kaca Film', 'Tersedia dalam Kemasan 300 mL'],
      image: '/assets/productdata/Mizu x Windscreen Stain Removal.jpeg',
    },
    {
      id: 'tire-polish',
      name: 'Tire Polish & Shine Gel',
      brand: 'Mizu-X',
      brandColor: '#d32f2f',
      icon: 'bi-stars',
      description: 'Gel pembersih dan pengkilap ban premium yang memberikan kilau hitam wet-look tahan lama. Melindungi ban dari kerusakan akibat sinar UV dan cuaca ekstrem serta melembutkan permukaan kulit di dalam mobil untuk mencegah penuaan dini. Tersedia dalam kemasan pouch 200 mL dan sachet 40 mL.',
      specs: [
        'Kilau Maksimal & Optimal untuk Ban dan Kulit',
        'Perlindungan Terhadap Sinar UV & Cuaca Ekstrem',
        'Perawatan yang Efektif Mencegah Kerusakan & Penuaan Dini',
        'Formula Gel Tahan Air (Waterproof) & Debu',
        'Tersedia dalam Kemasan Pouch 200 mL & Sachet 40 mL'
      ],
      image: '/assets/productdata/Mizu x Tire Polish.png',
    },
    {
      id: 'engine-coolant',
      name: 'Engine Coolant ALL VEHICLE',
      brand: 'Agioo',
      brandColor: '#b71c1c',
      icon: 'bi-thermometer-high',
      description: 'Cairan radiator premium untuk semua jenis kendaraan. Cegah overheating, anti karat, anti korosi, tersertifikasi ASTM internasional. Tersedia dalam kemasan praktis 5 Liter, 2 Liter, dan 1 Liter.',
      specs: ['Anti Karat & Anti Korosi', 'Cegah Overheat & Freezing', 'Sertifikasi ASTM D1384, D4340, D2809', 'Tersedia dalam Kemasan 5 Liter, 2 Liter, 1 Liter'],
      image: '/assets/productdata/Agioo Coolant New.png',
    },
    {
      id: 'bio-luminex-anti-fog',
      name: 'Bio Luminex Anti-Fog Glass Cleaner',
      brand: 'Bio Luminex',
      brandColor: '#0288d1',
      icon: 'bi-glasses',
      description: 'Cairan pembersih dan anti-embun premium untuk semua permukaan kaca dan plastik. Mencegah kondensasi (fogging) serta memberikan pandangan jernih sempurna. Tersedia dalam kemasan spray 100 mL.',
      specs: [
        'Teknologi Anti-Fog: Mencegah Embun di Kaca & Plastik',
        'Cleans & Repels: Bersihkan & Tolak Air/Kotoran',
        'Remove Small Scratches: Samarkan Goresan Halus',
        'Anti-virus & Bacterial: Higienis & Bebas Kuman',
        'Formula Aman & Non-Carcinogenic',
        'Multi-use: Kaca Mobil, Kacamata, Helm, Laptop & HP',
        'Tersedia dalam Kemasan Spray 100 mL'
      ],
      image: '/assets/productdata/Bio Luminex Anti-Fog New.png',
    },
  ],
  en: [
    {
      id: 'air-freshener',
      name: 'Air Freshener',
      brand: 'Mizu-X',
      brandColor: '#d32f2f',
      icon: 'bi-wind',
      description: 'Premium hanging car air freshener available in two luxurious scents: the fresh, sweet Ice Cream Bar and the warm, comforting Morning Coffee. Delivers a constant and refreshing fragrance for up to 30 days to enhance your driving comfort.',
      specs: [
        'Available in 2 Premium Scents: Ice Cream Bar & Morning Coffee',
        'Constant Fragrance Durability up to 30 Days',
        'Aesthetic Hanging Apple Bottle 10 mL Packaging',
        'Eco-friendly & Safe-to-Inhale Formula',
        'Effectively Eliminates Musty & Unpleasant Odors'
      ],
      image: '/assets/productdata/Mizu x Air Freshener New.png',
    },
    {
      id: 'wash-glow',
      name: 'Wash & Glow Car Shampoo',
      brand: 'Mizu-X',
      brandColor: '#d32f2f',
      icon: 'bi-droplet-fill',
      description: 'Premium Car Shampoo with protective wax coating. Cleans stubborn dirt while delivering a perfect shine. Available in a 200 mL pouch and 40 mL sachet.',
      specs: ['Rich & Gentle Foam for Paint', 'Premium Wax Formula', 'pH Balanced – Safe for All Paint Colors', 'Available in 200 mL Pouch & 40 mL Sachet'],
      image: '/assets/productdata/Mizu x Wash and Glow New.png',
    },
    {
      id: 'clear-view',
      name: 'Clear View Wiper Fluid',
      brand: 'Mizu-X',
      brandColor: '#d32f2f',
      icon: 'bi-eye-fill',
      description: 'Premium wiper fluid that cleans glass from dust, rain, and oil film. Protects and extends your wiper blade lifespan. Available in a 40 mL packaging.',
      specs: ['Streak-Free & No Residue', 'Effective Against Dust, Rain & Oil', 'Protects & Extends Wiper Life', 'Available in 40 mL Packaging'],
      image: '/assets/productdata/Mizu x Clear View Wiper Fluid.jpeg',
    },
    {
      id: 'anti-scratch-sponge',
      name: 'Premium Anti Scratch Sponge',
      brand: 'Mizu-X',
      brandColor: '#d32f2f',
      icon: 'bi-stars',
      description: 'Premium car wash sponge with dual function. Durable scratch-free material that does not tear or flatten easily.',
      specs: ['Dual Function: Soft Sponge Side & Durable Scrubber Side', 'Scratch-Free – Safe for Car & Motorcycle Paint', 'Durable, Treads Long', 'Pack of 2 Pcs'],
      image: '/assets/productdata/Mizu x Anti scratch Sponge.jpeg',
    },
    {
      id: 'windscreen-stain',
      name: 'Windscreen Stain Removal',
      brand: 'Mizu-X',
      brandColor: '#d32f2f',
      icon: 'bi-shield-check',
      description: 'Powerful water spot and glass stain remover. Eliminates stubborn stains and provides long-term protection on vehicle glass. Available in a 300 mL packaging.',
      specs: ['Powerfully Removes Water Spots', 'Long-lasting Glass Protection', 'Safe for Window Film', 'Available in 300 mL Packaging'],
      image: '/assets/productdata/Mizu x Windscreen Stain Removal.jpeg',
    },
    {
      id: 'tire-polish',
      name: 'Premium Tire Polish & Shine Gel',
      brand: 'Mizu-X',
      brandColor: '#d32f2f',
      icon: 'bi-stars',
      description: 'Premium tire polish and shine gel providing a long-lasting wet-look black shine. Protects tires from UV rays and extreme weather damage, and conditions leather surfaces inside cars to prevent premature aging. Available in a 200 mL pouch and 40 mL sachet.',
      specs: [
        'Maximum Shine & Optimal for Tires & Leather',
        'Protects Against UV Rays & Extreme Weather',
        'Effective Care to Prevent Damage & Premature Aging',
        'Waterproof & Dust-Repellent Gel Formula',
        'Available in 200 mL Pouch & 40 mL Sachet'
      ],
      image: '/assets/productdata/Mizu x Tire Polish.png',
    },
    {
      id: 'engine-coolant',
      name: 'Engine Coolant ALL VEHICLE',
      brand: 'Agioo',
      brandColor: '#b71c1c',
      icon: 'bi-thermometer-high',
      description: 'Premium radiator coolant for all types of vehicles. Prevents overheating, anti-rust, anti-corrosion, internationally ASTM certified. Available in 5 Liters, 2 Liters, and 1 Liter.',
      specs: ['Anti-Rust & Anti-Corrosion', 'Prevents Overheating & Freezing', 'Certified ASTM D1384, D4340, D2809', 'Available in 5 Liters, 2 Liters, and 1 Liter packaging'],
      image: '/assets/productdata/Agioo Coolant New.png',
    },
    {
      id: 'bio-luminex-anti-fog',
      name: 'Bio Luminex Anti-Fog Glass Cleaner',
      brand: 'Bio Luminex',
      brandColor: '#0288d1',
      icon: 'bi-glasses',
      description: 'Premium glass cleaner and anti-fog solution for all glass and plastic surfaces. Prevents condensation (fogging) and ensures crystal clear visibility. Available in a 100 mL spray bottle.',
      specs: [
        'Anti-Fog Technology: Prevents Condensation on Glass & Plastic',
        'Cleans & Repels: Cleans & Repels Water & Dust',
        'Remove Small Scratches: Fades Fine Scratches',
        'Anti-virus & Bacterial: Hygienic & Germ-Free',
        'Safe & Non-Carcinogenic Formula',
        'Multi-use: Car Windscreens, Eyeglasses, Helmets, Laptops & Phones',
        'Available in 100 mL Spray Bottle'
      ],
      image: '/assets/productdata/Bio Luminex Anti-Fog New.png',
    },
  ]
};

// B2B CHANNELS LOGO DATA
const B2B_LOGOS = [
  { name: 'A Hijau', src: '/b2b-channels/A%20hijau.png' },
  { name: 'AttoExa', src: '/b2b-channels/AttoExa.png' },
  { name: 'Damri', src: '/b2b-channels/Damri.png' },
  { name: 'Maluku Utara', src: '/b2b-channels/Maluku%20Utara.png' },
  { name: 'Minahasa', src: '/b2b-channels/Minahasa.png' },
  { name: 'Petrokimia', src: '/b2b-channels/Petrokimia.png' },
  { name: 'Picture11', src: '/b2b-channels/Picture11.png' },
  { name: 'Picture12', src: '/b2b-channels/Picture12.png' },
  { name: 'Daihatsu', src: '/b2b-channels/daihatsu.png' },
  { name: 'Freeport', src: '/b2b-channels/freeport.png' },
  { name: 'Gresik', src: '/b2b-channels/gresik.png' },
  { name: 'Isuzu', src: '/b2b-channels/isuzu.png' },
];

// TESTIMONIAL DATA
const TESTIMONIAL_DATA = {
  id: [
    { text: "Saya sangat puas dengan produk Mizu-X. Produk ini menjaga kendaraan saya tetap bersih dan terawat, dan selain itu, ramah lingkungan.", name: "Mrs. Tabitha Sumendap", title: "Founder of Woman Cycling Club Indonesia" },
    { text: "Performa kendaraan saya selalu terjaga dengan baik berkat produk dari Mizu-X & Agioo. Kualitas premium mereka sangat direkomendasikan.", name: "Mr. Patrick Pandy", title: "VP Finance & Controller at BP AKR" },
    { text: "Saya sangat terkesan dengan produk dari PT. Jaya Mandiri Ventures. Daya tahan dan kualitasnya adalah kelas atas, sangat mendukung operasional.", name: "Mr. Jefree R. Pusung", title: "CEO PT Putra Bintang Mimika / Kontraktor PT. Freeport" },
    { text: "Sebagai pemilik bisnis auto detailing di Vancouver, Kanada, saya telah mengimpor produk dari PT. JMV, dan itu benar-benar membawa perubahan besar.", name: "Mr. Ferry P.", title: "Auto Detailing Business Owner di Vancouver, Kanada" },
    { text: "Sebagai Purchasing Manager di sektor perdagangan modern, produk Mizu-X selalu diminati dan memenuhi standar kami, baik dalam kualitas maupun keandalan.", name: "Mr. Bayu", title: "Purchasing Manager di Transmart" }
  ],
  en: [
    { text: "I'm very satisfied with Mizu-X products. They keep my vehicle clean and well-maintained, and on top of that, they're eco-friendly.", name: "Mrs. Tabitha Sumendap", title: "Founder of Woman Cycling Club Indonesia" },
    { text: "My vehicle's performance is always well-maintained thanks to the products from Mizu-X & Agioo. Their premium quality is highly recommended.", name: "Mr. Patrick Pandy", title: "VP Finance & Controller at BP AKR" },
    { text: "I'm really impressed with the products from PT. Jaya Mandiri Ventures. Their durability and quality are top-notch, greatly supporting operations.", name: "Mr. Jefree R. Pusung", title: "CEO PT Putra Bintang Mimika / Contractor PT. Freeport" },
    { text: "As the owner of an auto detailing business in Vancouver, Canada, I've been importing products from PT. JMV, and they've been a game changer.", name: "Mr. Ferry P.", title: "Auto Detailing Business Owner at Vancouver, Canada" },
    { text: "As a Purchasing Manager in the modern trade sector, Mizu-X products are always in demand and meet our standards, both in quality and reliability.", name: "Mr. Bayu", title: "Purchasing Manager at Transmart" }
  ]
};

// TRANSLATIONS DICTIONARY
const TRANSLATIONS = {
  id: {
    navHome: "Beranda",
    navAbout: "Tentang JMV",
    navProducts: "Produk",
    navCampaigns: "Kampanye",
    navLocation: "Lokasi",
    navDistributor: "Daftar Distributor",
    searchPlaceholder: "Cari Brand, Spesifikasi, atau Nama Produk",
    heroSubtitle: "AUTOCARE PRINCIPAL",
    heroTitlePart1: "Solusi Perawatan Mobil Premium",
    heroTitlePart2: "Untuk Performa Optimal",
    heroDescRed: "Penawaran ini hanya untuk perusahaan berbadan hukum PT / CV.",
    heroDescText: " Produk Autocare dengan Jaringan Nasional, Margin Besar Up TO 30%.",
    heroBtnSearch: "Cari & Telusuri Produk",
    heroBtnRegister: "Daftar Distributor Resmi",
    badge1Title: "Lolos Uji ASTM",
    badge1Sub: "American Standard Testing and Material",
    badge1Item1: "ASTM D1120 (Titik Didih)",
    badge1Item2: "ASTM D1170 (Titik Beku)",
    badge1Item3: "ASTM D1384, D4340, D2809",
    badge1Footer: "(Perlindungan terhadap Karat dan Korosi)",
    badge2Title: "Semua Jenis Kendaraan",
    badge2Desc: "Formula kimia dirancang aman dan optimal untuk perawatan mesin, radiator, kaca, dan bodi mobil maupun motor (yang menggunakan radiator).",
    badge3Title: "Suplai Retail Nasional",
    badge3Desc: "Suplier tepercaya jaringan retail terkemuka di Indonesia.",
    badge3Footer: "(Tersedia di Bright by Pertamina, Bright by Alfamart, Indomaret, Transmart, MUJ, dll.)",
    valPropBadge: "PELUANG EMAS",
    valPropTitle: "Jualannya Laris, Cuan-nya Manissss…",
    valPropSub: "PRODUK AUTOCARE JARINGAN NASIONAL",
    valPropMargin: "MARGIN BESAR UP TO 30%",
    valPropDesc: "Agioo & Mizu-X adalah brand dari PT JAYA MANDIRI VENTURES — perusahaan distribusi produk otomotif dengan jaringan retail nasional. Sekarang, siapa pun bisa ikut jualan produk fast-moving ini dengan potensi untung harian dan bonus bulanan yang langsung terasa.",
    valPropBtnChat: "Tanya-Tanya via Chat",
    valPropCard1Title: "Produk Autocare",
    valPropCard1Desc: "Dipakai untuk semua kendaraan harian.",
    valPropCard2Title: "Cuan Maksimal!!",
    valPropCard2Desc: "Dapatkan potensi keuntungan paling besar.",
    valPropCard3Title: "Bonus Langsung",
    valPropCard3Desc: "Hadiahnya langsung diberikan tanpa diundi.",
    valPropCard4Title: "HADIAH TANPA DIUNDI!",
    valPropCard4Desc: "Voucher Pertamina, Logam Emas, Handphone, Motor & Mobil Traga",
    aboutSubtitle: "Tentang Perusahaan",
    aboutTitle: "PT Jaya Mandiri Ventures",
    aboutText: "JMV adalah perusahaan yang fokus pada pengembangan produk berkualitas premium dan mendistribusikannya melalui jaringan retail berskala nasional. Kami berkomitmen memberikan yang terbaik untuk performa kendaraan Anda.",
    aboutCard1Title: "Prinsipal Resmi",
    aboutCard1Desc: "Pemegang merek Agioo, Mizu-X, dan Bio Luminex.",
    aboutCard2Title: "Distribusi Nasional",
    aboutCard2Desc: "Menjangkau seluruh wilayah Indonesia dengan sistem terintegrasi.",
    b2bTitle: "B2B Channels:",
    statsSubtitle: "Mengapa Memilih Kami?",
    statsTitle: "JMV Dalam Angka",
    statsDesc: "Kami menyediakan produk berkualitas tinggi didukung oleh ekosistem kemitraan yang kuat.",
    stats1Label: "Margin Keuntungan",
    stats1Desc: "Margin retail & grosir tinggi hingga 30% untuk keuntungan maksimal.",
    stats2Label: "Lulus Uji ASTM",
    stats2Desc: "Cairan radiator teruji standar laboratorium internasional ASTM.",
    stats3Label: "Distribusi Retail",
    stats3Desc: "Stok tersebar di Bright, Indomaret, Transmart, MUJ, dll.",
    stats4Label: "Support Kemitraan",
    stats4Desc: "Pendampingan marketing, promo produk, dan armada logistik JMV.",
    bonusTitlePart1: "Keuntungan",
    bonusTitlePart2: "Program Unggulan",
    bonusDesc: "Nikmati berbagai keuntungan menarik dengan program unggulan JMV yang dirancang khusus untuk distributor.",
    waBonusText: "Halo JMV, saya ingin tahu lebih lanjut tentang program unggulan dan keuntungannya.",
    bonusBtnChat: "Tanya-Tanya via Chat",
    bonus1Text: "Produk Fast-Moving",
    bonus2Text: "Repeat Order Tinggi",
    bonus3Text: "Tanpa Minimum Order",
    bonus4Text: "Modal Kecil",
    bonus5Text: "Bimbingan Marketing",
    bonus6Text: "Support Konten & Materi Promosi",
    bonus7Text: "Diskon up to 50%",
    showcaseSubtitle: "Katalog Produk",
    showcaseTitle: "Our Premium Brands",
    showcaseDesc: "Pilih brand di bawah atau gunakan kolom pencarian di navigasi untuk memfilter produk.",
    showcaseTabAll: "Semua Brand",
    showcaseCardHover: "Hover untuk lihat detail",
    showcaseCardBackBtn: "Cek Detail Lengkap",
    showcaseSearchEmpty: "Tidak ada produk yang cocok dengan pencarian Anda.",
    detailsSubtitle: "Kelebihan Utama:",
    detailsSpecsTitle: "Spesifikasi Utama",
    detailsBtnContact: "Hubungi Sales",
    detailsBtnBack: "Kembali ke Beranda",
    campaignSubtitle: "Program Unggulan",
    campaignTitle: "Distributor Campaigns",
    campaignDesc: "Lihat berbagai penawaran, dukungan logistik, dan reward menarik dari JMV.",
    campaignBtnInquire: "Tanya Program Ini",
    campaignBtnZoom: "Zoom Poster",
    testiSubtitle: "Testimoni",
    testiTitle: "Happy Clients & Partners",
    testiDesc: "Apa kata mereka tentang produk JMV?",
    mapSubtitle: "Hubungi Kami",
    mapTitle: "Lokasi & Rute Kantor",
    mapDesc: "Temukan letak kantor PT Jaya Mandiri Ventures dan klik tombol rute untuk navigasi instan lewat Google Maps.",
    mapAddressLabel: "Alamat Kantor:",
    mapContactLabel: "Kontak Info:",
    mapHoursLabel: "Jam Operasional:",
    mapHoursValue: "Senin - Jumat: 09:00 - 17:00 WIB",
    mapBtnRoute: "Buka Navigasi Rute di Google Maps",
    partnershipTypesSubtitle: "Program Kemitraan",
    partnershipTypesTitle: "Jenis Kemitraan JMV",
    partnershipTypesDesc: "Pilih jenis kemitraan yang paling sesuai dengan kapasitas bisnis Anda. Kami mendukung pertumbuhan Anda dari awal.",
    partnerDistributorTitle: "Distributor",
    partnerDistributorSub: "Pengambilan IDR 75 Juta ke atas.",
    partnerDistributorItem1: "Margin Keuntungan 30%",
    partnerDistributorItem2: "Proteksi Area Distribusi",
    partnerDistributorItem3: "Hadiah Langsung Tanpa Diundi",
    partnerResellerTitle: "Reseller",
    partnerResellerSub: "Pengambilan IDR 75 Juta ke bawah.",
    partnerResellerItem1: "Tanpa Syarat Minimum PT/CV",
    partnerResellerItem2: "Produk Fast-Moving Harian",
    partnerResellerItem3: "Akses Aset Pemasaran & Foto",
    partnerFeederTitle: "Mitra Feeder",
    partnerFeederSub: "Sistem komisi / referral per PO.",
    partnerFeederItem1: "Komisi 1.5% (Personal)",
    partnerFeederItem2: "Komisi 5% (Perusahaan PT/CV)",
    partnerFeederItem3: "Tanpa Modal & Stok Barang",
    partnerB2BTitle: "B2B / Maklon",
    partnerB2BSub: "Produksi khusus & merek sendiri.",
    partnerB2BItem1: "Formulasi Kustom Kimia Autocare",
    partnerB2BItem2: "Labeling & Pengemasan OEM",
    partnerB2BItem3: "Legalitas & Sertifikasi ASTM",
    partnershipFormTitle: "Tertarik Jadi Distributor?",
    partnershipFormDesc: "Penawaran eksklusif ini khusus untuk perusahaan berbadan hukum PT / CV.",
    partnershipFormBoxTitle: "Isi Form Singkat di Bawah Ini",
    formPlaceholderFirstName: "Nama Depan *",
    formPlaceholderLastName: "Nama Belakang",
    formPlaceholderPhone: "Nomor Telp Kantor / Toko *",
    formPlaceholderEmail: "Email Perusahaan *",
    formPlaceholderCompany: "Nama Usaha * (Contoh: CV. Bengkel Mitra Sejati)",
    formPlaceholderMessage: "Pesan Tambahan (Opsional)",
    formBtnSubmit: "Kirim Penawaran via WhatsApp",
    footerDesc: "PT Jaya Mandiri Ventures - Penyedia dan distributor solusi perawatan kendaraan harian premium dengan standar laboratorium ASTM internasional.",
    footerAddress: "Gedung SOHO, Jakarta Selatan, 12801, Indonesia",
    footerLinkDistributor: "Program Distributor",
    footerLinkReseller: "Program Reseller",
    footerLinkMaklon: "Layanan Maklon Kimia",
    footerLinkRewards: "Hadiah Langsung Reward",
    footerLinkAbout: "Tentang Kami",
    footerLinkCatalog: "Katalog Grosir",
    footerLinkOffice: "Lokasi Kantor JMV",
    footerLinkContact: "Kontak Registrasi",
    footerRights: "PT Jaya Mandiri Ventures. All rights reserved.",
    waFloatingText: "Tanya-Tanya via Chat",
    waGeneralText: "Halo JMV, saya tertarik menjadi distributor",
    lightboxHeader: "Hubungi Sales",
    lightboxClose: "Tutup",
  },
  en: {
    navHome: "Home",
    navAbout: "About JMV",
    navProducts: "Products",
    navCampaigns: "Campaigns",
    navLocation: "Location",
    navDistributor: "Become a Distributor",
    searchPlaceholder: "Search Brand, Specifications, or Product Name",
    heroSubtitle: "AUTOCARE PRINCIPAL",
    heroTitlePart1: "Premium Autocare Solutions",
    heroTitlePart2: "For Optimal Performance",
    heroDescRed: "This offer is exclusively for legally incorporated companies (PT / CV).",
    heroDescText: " Autocare products with a national distribution network and high margins up to 30%.",
    heroBtnSearch: "Search & Browse Products",
    heroBtnRegister: "Register as Official Distributor",
    badge1Title: "ASTM Certified",
    badge1Sub: "American Standard Testing and Material",
    badge1Item1: "ASTM D1120 (Boiling Point)",
    badge1Item2: "ASTM D1170 (Freezing Point)",
    badge1Item3: "ASTM D1384, D4340, D2809",
    badge1Footer: "(Protection against Rust and Corrosion)",
    badge2Title: "All Types of Vehicles",
    badge2Desc: "Chemical formulas designed safe and optimal for engines, radiators, glass, and car or motorcycle bodies (using radiators).",
    badge3Title: "National Retail Supply",
    badge3Desc: "Trusted supplier for leading retail networks in Indonesia.",
    badge3Footer: "(Available at Bright by Pertamina, Bright by Alfamart, Indomaret, Transmart, MUJ, etc.)",
    valPropBadge: "GOLDEN OPPORTUNITY",
    valPropTitle: "High Demands, Sweetest Profit...",
    valPropSub: "NATIONAL NETWORK AUTOCARE PRODUCTS",
    valPropMargin: "HIGH MARGINS UP TO 30%",
    valPropDesc: "Agioo & Mizu-X are brands under PT JAYA MANDIRI VENTURES — an automotive product distribution company with a national retail network. Now, anyone can join in selling these fast-moving products with immediate daily profit potential and monthly bonuses.",
    valPropBtnChat: "Inquire via Chat",
    valPropCard1Title: "Autocare Products",
    valPropCard1Desc: "Used for all daily vehicles.",
    valPropCard2Title: "Maximum Profit!!",
    valPropCard2Desc: "Get the highest profit potential.",
    valPropCard3Title: "Direct Bonus",
    valPropCard3Desc: "Prizes are awarded directly without any raffle.",
    valPropCard4Title: "PRIZES WITHOUT RAFFLE!",
    valPropCard4Desc: "Pertamina Vouchers, Gold Bars, Phones, Motorcycles & Traga Trucks",
    aboutSubtitle: "About Company",
    aboutTitle: "PT Jaya Mandiri Ventures",
    aboutText: "JMV is a company focused on developing premium quality products and distributing them through a national-scale retail network. We are committed to providing the best for your vehicle's performance.",
    aboutCard1Title: "Official Principal",
    aboutCard1Desc: "Brand owner of Agioo, Mizu-X, and Bio Luminex.",
    aboutCard2Title: "National Distribution",
    aboutCard2Desc: "Reaching all regions of Indonesia with an integrated system.",
    b2bTitle: "B2B Channels:",
    statsSubtitle: "Why Choose Us?",
    statsTitle: "JMV In Numbers",
    statsDesc: "We provide high-quality products backed by a strong partnership ecosystem.",
    stats1Label: "Profit Margin",
    stats1Desc: "High retail & wholesale margin up to 30% for maximum profit.",
    stats2Label: "ASTM Certified",
    stats2Desc: "Radiator coolant tested to international ASTM laboratory standards.",
    stats3Label: "Retail Distribution",
    stats3Desc: "Stock distributed across Bright, Indomaret, Transmart, MUJ, etc.",
    stats4Label: "Partnership Support",
    stats4Desc: "Marketing support, product promos, and JMV logistics fleet assistance.",
    bonusTitlePart1: "Advantages",
    bonusTitlePart2: "Featured Programs",
    bonusDesc: "Enjoy various attractive benefits with JMV's featured programs specially designed for distributors.",
    waBonusText: "Hello JMV, I want to know more about the featured program and its benefits.",
    bonusBtnChat: "Inquire via Chat",
    bonus1Text: "Fast-Moving Products",
    bonus2Text: "High Repeat Orders",
    bonus3Text: "No Minimum Order",
    bonus4Text: "Small Capital",
    bonus5Text: "Marketing Guidance",
    bonus6Text: "Content & Promo Support",
    bonus7Text: "Discount up to 50%",
    showcaseSubtitle: "Product Catalog",
    showcaseTitle: "Our Premium Brands",
    showcaseDesc: "Choose a brand below or use the search box in navigation to filter products.",
    showcaseTabAll: "All Brands",
    showcaseCardHover: "Hover to see details",
    showcaseCardBackBtn: "View Full Details",
    showcaseSearchEmpty: "No products matched your search query.",
    detailsSubtitle: "Key Advantages:",
    detailsSpecsTitle: "Key Specifications",
    detailsBtnContact: "Contact Sales",
    detailsBtnBack: "Back to Home",
    campaignSubtitle: "Featured Programs",
    campaignTitle: "Distributor Campaigns",
    campaignDesc: "Explore various offers, logistics support, and attractive rewards from JMV. Click or hover on a poster for details.",
    campaignBtnInquire: "Inquire About Program",
    campaignBtnZoom: "Zoom Poster",
    testiSubtitle: "Testimonials",
    testiTitle: "Happy Clients & Partners",
    testiDesc: "What do they say about JMV products?",
    mapSubtitle: "Contact Us",
    mapTitle: "Office Location & Route",
    mapDesc: "Find the location of PT Jaya Mandiri Ventures office and click the route button for instant navigation via Google Maps.",
    mapAddressLabel: "Office Address:",
    mapContactLabel: "Contact Info:",
    mapHoursLabel: "Operational Hours:",
    mapHoursValue: "Monday - Friday: 09:00 - 17:00 WIB",
    mapBtnRoute: "Open Navigation Route on Google Maps",
    partnershipTypesSubtitle: "Partnership Program",
    partnershipTypesTitle: "Types of JMV Partnership",
    partnershipTypesDesc: "Choose the partnership type that best suits your business capacity. We support your growth from the start.",
    partnerDistributorTitle: "Distributor",
    partnerDistributorSub: "Orders above IDR 75 Million.",
    partnerDistributorItem1: "Profit Margin 30%",
    partnerDistributorItem2: "Protected Distribution Area",
    partnerDistributorItem3: "Direct Prizes Without Raffle",
    partnerResellerTitle: "Reseller",
    partnerResellerSub: "Orders below IDR 75 Million.",
    partnerResellerItem1: "No Minimum PT/CV Requirement",
    partnerResellerItem2: "Daily Fast-Moving Products",
    partnerResellerItem3: "Access to Marketing Assets & Photos",
    partnerFeederTitle: "Feeder Partner",
    partnerFeederSub: "Commission / referral system per Purchase Order.",
    partnerFeederItem1: "1.5% Commission (Personal)",
    partnerFeederItem2: "5% Commission (PT/CV Entity)",
    partnerFeederItem3: "No Capital & No Stock Required",
    partnerB2BTitle: "B2B / Private Label",
    partnerB2BSub: "Custom production & own brand (OEM).",
    partnerB2BItem1: "Custom Autocare Chemical Formulation",
    partnerB2BItem2: "OEM Labeling & Packaging",
    partnerB2BItem3: "ASTM Legality & Certification",
    partnershipFormTitle: "Interested in Becoming a Distributor?",
    partnershipFormDesc: "This exclusive offer is strictly for legally incorporated entities (PT / CV).",
    partnershipFormBoxTitle: "Fill Out the Short Form Below",
    formPlaceholderFirstName: "First Name *",
    formPlaceholderLastName: "Last Name",
    formPlaceholderPhone: "Office / Store Phone Number *",
    formPlaceholderEmail: "Company Email *",
    formPlaceholderCompany: "Business Name * (e.g., CV. Bengkel Mitra Sejati)",
    formPlaceholderMessage: "Additional Message (Optional)",
    formBtnSubmit: "Send Offer via WhatsApp",
    footerDesc: "PT Jaya Mandiri Ventures - Provider and distributor of premium daily vehicle care solutions with international ASTM laboratory standards.",
    footerAddress: "SOHO Building, South Jakarta, 12801, Indonesia",
    footerLinkDistributor: "Distributor Program",
    footerLinkReseller: "Reseller Program",
    footerLinkMaklon: "Chemical Manufacturing Services",
    footerLinkRewards: "Direct Reward Prizes",
    footerLinkAbout: "About Us",
    footerLinkCatalog: "Wholesale Catalog",
    footerLinkOffice: "JMV Office Location",
    footerLinkContact: "Registration Contact",
    footerRights: "PT Jaya Mandiri Ventures. All rights reserved.",
    waFloatingText: "Inquire via Chat",
    waGeneralText: "Hello JMV, I am interested in becoming a distributor",
    lightboxHeader: "Contact Sales",
    lightboxClose: "Close",
  }
};

// KOMPONEN BONUS
const BonusSection = ({ lang }) => {
  const t = (key) => TRANSLATIONS[lang][key] || key;
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container py-5">
        <div className="row align-items-center g-5 reveal">
          <div className="col-lg-5">
            <div className="bg-gradient-red p-5 rounded-4 h-100 text-center text-lg-start d-flex flex-column justify-content-center border shadow-lg" style={{ borderColor: 'var(--brand-red)', minHeight: '380px' }}>
              <h2 className="display-4 fw-bold text-white mb-4">{t('bonusTitlePart1')}<br />{t('bonusTitlePart2')}</h2>
              <div>
                <a href="#partnership" className="btn-yellow-glow d-inline-flex align-items-center text-decoration-none">
                  {t('bonusBtnChat')}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-lightning-fill"></i></div>
              <h5 className="mb-0 text-white fw-bold">{t('bonus1Text')}</h5>
              <div className="ms-auto text-success fs-3"><i className="bi bi-graph-up-arrow"></i></div>
            </div>
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-arrow-repeat"></i></div>
              <h5 className="mb-0 text-white fw-bold">{t('bonus2Text')}</h5>
              <div className="ms-auto text-warning fs-3"><i className="bi bi-arrow-repeat"></i></div>
            </div>
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-check-circle-fill"></i></div>
              <h5 className="mb-0 text-white fw-bold">{t('bonus3Text')}</h5>
              <div className="ms-auto text-info fs-3"><i className="bi bi-check-lg"></i></div>
            </div>
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-coin"></i></div>
              <h5 className="mb-0 text-white fw-bold">{t('bonus4Text')}</h5>
              <div className="ms-auto text-danger fs-3"><i className="bi bi-currency-dollar"></i></div>
            </div>
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-megaphone-fill"></i></div>
              <h5 className="mb-0 text-white fw-bold">{t('bonus5Text')}</h5>
              <div className="ms-auto text-primary fs-3"><i className="bi bi-megaphone"></i></div>
            </div>
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-file-richtext-fill"></i></div>
              <h5 className="mb-0 text-white fw-bold">{t('bonus6Text')}</h5>
              <div className="ms-auto text-light fs-3"><i className="bi bi-file-earmark-text"></i></div>
            </div>
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-percent"></i></div>
              <h5 className="mb-0 text-white fw-bold">{t('bonus7Text')}</h5>
              <div className="ms-auto text-success fs-3"><i className="bi bi-ticket-detailed"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// KOMPONEN VALUE PROPOSITION RED BANNER
const ValuePropositionBanner = ({ lang }) => {
  const t = (key) => TRANSLATIONS[lang][key] || key;
  return (
    <section className="position-relative py-5 mt-4 overflow-hidden" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      {/* Background Decor */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 80% 20%, rgba(211, 47, 47, 0.3) 0%, rgba(10, 10, 10, 1) 60%)',
        zIndex: 0
      }}></div>

      <div className="container py-5 position-relative z-1 reveal">
        <div className="row align-items-center g-5">
          {/* Bagian Kiri: Hook Utama */}
          <div className="col-lg-6">
            <span className="badge bg-red mb-3 px-3 py-2 rounded-pill letter-spacing-1">{t('valPropBadge')}</span>
            <h2 className="display-4 fw-bold text-white mb-4 line-height-sm">
              {lang === 'en' ? (
                <>High Demands,<br />Sweetest <span className="text-red">Profit...</span></>
              ) : (
                <>Jualannya Laris,<br />Cuan-nya <span className="text-red">Manissss…</span></>
              )}
            </h2>
            <div className="p-4 rounded-4 mb-5" style={{ background: 'rgba(211, 47, 47, 0.1)', borderLeft: '4px solid var(--brand-red)' }}>
              <p className="fw-bold text-white text-uppercase tracking-wider mb-2" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                {t('valPropSub')}
              </p>
              <h3 className="fw-bold text-red mb-3" style={{ textShadow: '0 0 15px rgba(211,47,47,0.8), 0 0 30px rgba(211,47,47,0.4)' }}>
                {t('valPropMargin')}
              </h3>
              <p className="text-white mb-0" style={{ textShadow: '0 0 8px rgba(255,255,255,0.3)', opacity: '0.9' }}>
                {t('valPropDesc')}
              </p>
            </div>
            <a href={`https://wa.me/6282323244285?text=${encodeURIComponent(lang === 'en' ? 'Hello JMV, I am interested in discussing partnership and wholesale margins.' : 'Halo JMV, saya tertarik membahas kemitraan dan margin grosir.')}`} target="_blank" rel="noopener noreferrer" className="btn-yellow-glow d-inline-flex align-items-center text-decoration-none">
              <i className="bi bi-chat-dots-fill me-2 fs-5"></i> {t('valPropBtnChat')}
            </a>
          </div>

          {/* Bagian Kanan: Fitur Grid */}
          <div className="col-lg-6">
            <div className="row g-4 align-items-stretch">
              <div className="col-sm-6" style={{ transitionDelay: '0.1s' }}>
                <div className="p-4 rounded-4 h-100 stats-card">
                  <div className="bg-red text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem', boxShadow: '0 0 15px rgba(211,47,47,0.6)' }}>
                    <i className="bi bi-car-front-fill"></i>
                  </div>
                  <h5 className="text-white fw-bold mb-2">{t('valPropCard1Title')}</h5>
                  <p className="text-secondary small mb-0">{t('valPropCard1Desc')}</p>
                </div>
              </div>
              <div className="col-sm-6" style={{ transitionDelay: '0.2s' }}>
                <div className="p-4 rounded-4 h-100 stats-card">
                  <div className="bg-red text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem', boxShadow: '0 0 15px rgba(211,47,47,0.6)' }}>
                    <i className="bi bi-cash-coin"></i>
                  </div>
                  <h5 className="text-white fw-bold mb-2">{t('valPropCard2Title')}</h5>
                  <p className="text-secondary small mb-0">{t('valPropCard2Desc')}</p>
                </div>
              </div>
              <div className="col-sm-6" style={{ transitionDelay: '0.3s' }}>
                <div className="p-4 rounded-4 h-100 stats-card">
                  <div className="bg-red text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem', boxShadow: '0 0 15px rgba(211,47,47,0.6)' }}>
                    <i className="bi bi-gift-fill"></i>
                  </div>
                  <h5 className="text-white fw-bold mb-2">{t('valPropCard3Title')}</h5>
                  <p className="text-secondary small mb-0">{t('valPropCard3Desc')}</p>
                </div>
              </div>
              <div className="col-sm-6" style={{ transitionDelay: '0.4s' }}>
                <div className="p-4 rounded-4 h-100 d-flex flex-column justify-content-center text-center stats-card" style={{ background: 'linear-gradient(135deg, var(--brand-red) 0%, #a00000 100%)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 0 25px rgba(211,47,47,0.6)' }}>
                  <h4 className="text-white fw-bold mb-3" style={{ textShadow: '0 0 10px rgba(255,255,255,0.6)' }}>{t('valPropCard4Title')}</h4>
                  <p className="text-white opacity-75 small mb-0">{t('valPropCard4Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// KOMPONEN DATA STATISTIK JMV
const StatsSection = ({ lang }) => {
  const t = (key) => TRANSLATIONS[lang][key] || key;
  const stats = [
    { number: '30%', label: t('stats1Label'), desc: t('stats1Desc'), icon: 'bi-cash-coin' },
    { number: '100%', label: t('stats2Label'), desc: t('stats2Desc'), icon: 'bi-award-fill' },
    { number: lang === 'en' ? 'National' : 'Nasional', label: t('stats3Label'), desc: t('stats3Desc'), icon: 'bi-buildings-fill' },
    { number: '24/7', label: t('stats4Label'), desc: t('stats4Desc'), icon: 'bi-headset' }
  ];

  return (
    <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      {/* Background ambient glow blob */}
      <div className="ambient-glow-2" style={{ top: '10%', right: '5%' }}></div>
      <div className="container py-5 position-relative z-1 reveal">
        <div className="text-center mb-5">
          <h6 className="text-red fw-bold text-uppercase tracking-wider mb-2">{t('statsSubtitle')}</h6>
          <h2 className="display-4 fw-bold text-white mb-3">JMV <span className="text-red">{lang === 'en' ? 'In Numbers' : 'Dalam Angka'}</span></h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px' }}>{t('statsDesc')}</p>
        </div>
        <div className="row g-4">
          {stats.map((st, idx) => (
            <div className="col-lg-3 col-md-6" style={{ transitionDelay: `${idx * 0.15}s` }} key={idx}>
              <div className="stats-card h-100">
                <div className="bg-red text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem', boxShadow: '0 0 15px rgba(211,47,47,0.4)' }}>
                  <i className={`bi ${st.icon}`}></i>
                </div>
                <div>
                  <span className="stats-number">{st.number}</span>
                  <h5 className="text-white fw-bold mb-2">{st.label}</h5>
                  <p className="text-secondary small mb-0">{st.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// KOMPONEN CAMPAIGN GALLERY & RUNNING POSTER
const CampaignGallerySection = ({ lang }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const t = (key) => TRANSLATIONS[lang][key] || key;

  const CAMPAIGN_POSTERS = [
    {
      id: 'unggulan',
      title: lang === 'en' ? 'Featured Products & Programs' : 'Program Unggulan',
      subtitle: lang === 'en' ? 'Distributor Advantages' : 'Keuntungan Distributor',
      description: lang === 'en' ? '✓ Fast-Moving Products\n✓ High Repeat Orders\n✓ No Minimum Order\n✓ Small Capital\n✓ Marketing Guidance\n✓ Content & Promo Support' : '✓ Produk Fast-Moving\n✓ Repeat Order Tinggi\n✓ Tanpa Minimum Order\n✓ Modal Kecil\n✓ Bimbingan Marketing\n✓ Support Konten & Materi Promosi',
      image: '/assets/posters/poster-hadiah.jpg',
      badge: lang === 'en' ? 'Be Our Distributor !!' : 'Jadilah Distributor Kami !!',
      color: '#d32f2f',
      waText: lang === 'en' ? 'Hello JMV, I want to ask about the Featured Program and Distributor Advantages.' : 'Halo JMV, saya ingin bertanya tentang Program Unggulan dan keuntungan distributor.'
    },
    {
      id: 'armada',
      title: lang === 'en' ? 'Fleet & Reliable Logistics' : 'Armada & Logistik Terpercaya',
      subtitle: lang === 'en' ? 'Distributor Advantages' : 'Keuntungan Distributor',
      description: lang === 'en' ? '✓ Fast-Moving Products\n✓ High Repeat Orders\n✓ No Minimum Order\n✓ Small Capital\n✓ Marketing Guidance\n✓ Content & Promo Support' : '✓ Produk Fast-Moving\n✓ Repeat Order Tinggi\n✓ Tanpa Minimum Order\n✓ Modal Kecil\n✓ Bimbingan Marketing\n✓ Support Konten & Materi Promosi',
      image: '/assets/posters/poster-armada.jpg',
      badge: lang === 'en' ? 'Be Our Reseller !!' : 'Jadilah Reseller Kami !!',
      color: '#ff9800',
      waText: lang === 'en' ? 'Hello JMV, I want to ask about the Featured Program and Distributor Advantages.' : 'Halo JMV, saya ingin bertanya tentang Program Unggulan dan keuntungan distributor.'
    },
    {
      id: 'solusi',
      title: lang === 'en' ? 'Premium Autocare Solutions' : 'Solusi Autocare Premium',
      subtitle: lang === 'en' ? 'Distributor Advantages' : 'Keuntungan Distributor',
      description: lang === 'en' ? '✓ Fast-Moving Products\n✓ High Repeat Orders\n✓ No Minimum Order\n✓ Small Capital\n✓ Marketing Guidance\n✓ Content & Promo Support' : '✓ Produk Fast-Moving\n✓ Repeat Order Tinggi\n✓ Tanpa Minimum Order\n✓ Modal Kecil\n✓ Bimbingan Marketing\n✓ Support Konten & Materi Promosi',
      image: '/assets/posters/poster-solusi.jpg',
      badge: lang === 'en' ? 'Be Our Reseller !!' : 'Jadilah Reseller Kami !!',
      color: '#b71c1c',
      waText: lang === 'en' ? 'Hello JMV, I want to ask about the Featured Program and Distributor Advantages.' : 'Halo JMV, saya ingin bertanya tentang Program Unggulan dan keuntungan distributor.'
    },
    {
      id: 'coolant',
      title: lang === 'en' ? 'ASTM Standard Coolant' : 'Radiator Premium Berstandar ASTM',
      subtitle: lang === 'en' ? 'Distributor Advantages' : 'Keuntungan Distributor',
      description: lang === 'en' ? '✓ Fast-Moving Products\n✓ High Repeat Orders\n✓ No Minimum Order\n✓ Small Capital\n✓ Marketing Guidance\n✓ Content & Promo Support' : '✓ Produk Fast-Moving\n✓ Repeat Order Tinggi\n✓ Tanpa Minimum Order\n✓ Modal Kecil\n✓ Bimbingan Marketing\n✓ Support Konten & Materi Promosi',
      image: '/assets/posters/poster-coolant.jpg',
      badge: lang === 'en' ? 'Be Our Reseller !!' : 'Jadilah Reseller Kami !!',
      color: '#0d47a1',
      waText: lang === 'en' ? 'Hello JMV, I want to ask about the Featured Program and Distributor Advantages.' : 'Halo JMV, saya ingin bertanya tentang Program Unggulan dan keuntungan distributor.'
    }
  ];

  const activePoster = CAMPAIGN_POSTERS[activeIdx];

  const getDeckClass = (idx) => {
    if (idx === activeIdx) return 'active';
    const diff = (idx - activeIdx + CAMPAIGN_POSTERS.length) % CAMPAIGN_POSTERS.length;
    if (diff === 1) return 'stack-1';
    if (diff === 2) return 'stack-2';
    return 'stack-3';
  };

  return (
    <section className="campaign-section py-5" id="campaigns">
      <div className="container py-5 reveal">
        <div className="text-center mb-5">
          <h6 className="text-red fw-bold text-uppercase tracking-wider mb-2">{t('campaignSubtitle')}</h6>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px' }}>{t('campaignDesc')}</p>
        </div>

        <div className="row align-items-center g-5 mb-5">
          {/* Kiri: Detail Text */}
          <div className="col-lg-6">
            <div key={activeIdx} className="animate-detail">
              <span className="badge px-3 py-2 rounded-pill fw-bold mb-3" style={{ background: activePoster.color }}>
                {activePoster.badge}
              </span>
              <h5 className="text-secondary text-uppercase tracking-wider mb-2" style={{ fontSize: '0.9rem' }}>{activePoster.subtitle}</h5>
              <h2 className="display-5 fw-bold text-white mb-4">{activePoster.title}</h2>
              <p className="text-secondary fs-5 mb-5 line-height-lg" style={{ minHeight: '120px' }}>
                {activePoster.description}
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/6282323244285?text=${encodeURIComponent(activePoster.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern-red text-decoration-none d-inline-flex align-items-center"
                >
                  <i className="bi bi-whatsapp me-2"></i> {t('campaignBtnInquire')}
                </a>
                <button
                  onClick={() => setLightboxImg(activePoster)}
                  className="btn-modern-outline d-inline-flex align-items-center text-white"
                >
                  <i className="bi bi-zoom-in me-2"></i> {t('campaignBtnZoom')}
                </button>
              </div>
            </div>

            {/* Indicators */}
            <div className="d-flex gap-2 mt-5">
              {CAMPAIGN_POSTERS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className="border-0 rounded-pill transition"
                  style={{
                    width: idx === activeIdx ? '35px' : '10px',
                    height: '10px',
                    backgroundColor: idx === activeIdx ? 'var(--brand-red)' : 'rgba(255,255,255,0.2)',
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Kanan: Interactive 3D Card Stack */}
          <div className="col-lg-6">
            <div className="poster-deck-wrapper">
              <div className="poster-deck">
                {CAMPAIGN_POSTERS.map((poster, idx) => (
                  <div
                    key={poster.id}
                    className={`poster-card-3d ${getDeckClass(idx)}`}
                    onClick={() => setActiveIdx(idx)}
                  >
                    <img src={poster.image} alt={poster.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glassmorphic Lightbox Overlay */}
      {lightboxImg && (
        <div className="lightbox-backdrop active" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>

            <div className="lightbox-footer">
              <div>
                <h4 className="text-white fw-bold mb-1">{lightboxImg.title}</h4>
                <p className="text-secondary small mb-0">{lightboxImg.subtitle}</p>
              </div>
              <a
                href={`https://wa.me/6282323244285?text=${encodeURIComponent(lightboxImg.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern-red text-decoration-none px-4 py-2"
                style={{ fontSize: '0.9rem' }}
              >
                <i className="bi bi-whatsapp me-2"></i> {t('detailsBtnContact')}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// KOMPONEN JENIS KEMITRAAN
const PartnershipTypes = ({ lang }) => {
  const t = (key) => TRANSLATIONS[lang][key] || key;
  return (
    <section id="partnership-types" className="py-5" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container py-5 reveal">
        <div className="text-center mb-5">
          <h6 className="text-red fw-bold text-uppercase tracking-wider mb-2">{t('partnershipTypesSubtitle')}</h6>
          <h2 className="display-4 fw-bold text-white mb-3">{t('partnershipTypesTitle')}</h2>
          <p className="text-secondary lead mx-auto mb-5" style={{ maxWidth: '600px' }}>{t('partnershipTypesDesc')}</p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-3 col-md-6" style={{ transitionDelay: '0.1s' }}>
            <div className="trust-badge d-flex flex-column h-100 p-4 justify-content-between">
              <div>
                <i className="bi bi-building text-red fs-1 mb-3 d-block"></i>
                <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.4rem' }}>{t('partnerDistributorTitle')}</h3>
                <p className="text-secondary small mb-3">{t('partnerDistributorSub')}</p>
              </div>
              <ul className="list-unstyled text-secondary small text-start my-3 flex-grow-1">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> {t('partnerDistributorItem1')}</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> {t('partnerDistributorItem2')}</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> {t('partnerDistributorItem3')}</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" style={{ transitionDelay: '0.2s' }}>
            <div className="trust-badge d-flex flex-column h-100 p-4 justify-content-between">
              <div>
                <i className="bi bi-star-fill text-red fs-1 mb-3 d-block"></i>
                <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.4rem' }}>{t('partnerResellerTitle')}</h3>
                <p className="text-secondary small mb-3">{t('partnerResellerSub')}</p>
              </div>
              <ul className="list-unstyled text-secondary small text-start my-3 flex-grow-1">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> {t('partnerResellerItem1')}</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> {t('partnerResellerItem2')}</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> {t('partnerResellerItem3')}</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" style={{ transitionDelay: '0.3s' }}>
            <div className="trust-badge d-flex flex-column h-100 p-4 justify-content-between">
              <div>
                <i className="bi bi-person-lines-fill text-red fs-1 mb-3 d-block"></i>
                <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.4rem' }}>{t('partnerFeederTitle')}</h3>
                <p className="text-secondary small mb-3">{t('partnerFeederSub')}</p>
              </div>
              <ul className="list-unstyled text-secondary small text-start my-3 flex-grow-1">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> {t('partnerFeederItem1')}</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> {t('partnerFeederItem2')}</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> {t('partnerFeederItem3')}</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" style={{ transitionDelay: '0.4s' }}>
            <div className="trust-badge d-flex flex-column h-100 p-4 justify-content-between">
              <div>
                <i className="bi bi-boxes text-red fs-1 mb-3 d-block"></i>
                <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.4rem' }}>{t('partnerB2BTitle')}</h3>
                <p className="text-secondary small mb-3">{t('partnerB2BSub')}</p>
              </div>
              <ul className="list-unstyled text-secondary small text-start my-3 flex-grow-1">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> {t('partnerB2BItem1')}</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> {t('partnerB2BItem2')}</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> {t('partnerB2BItem3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// KOMPONEN FORMULIR KEMITRAAN
const PartnershipForm = ({ lang }) => {
  const t = (key) => TRANSLATIONS[lang][key] || key;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = lang === 'en' ? `Hello JMV, I am interested in becoming a distributor.
Name: ${formData.firstName} ${formData.lastName}
Phone/WA: ${formData.phone}
Email: ${formData.email}
Business Name: ${formData.company}
Message: ${formData.message}` : `Halo JMV, saya tertarik menjadi distributor.
Nama: ${formData.firstName} ${formData.lastName}
No. Telp/WA: ${formData.phone}
Email: ${formData.email}
Nama Usaha: ${formData.company}
Pesan: ${formData.message}`;
    const waUrl = `https://wa.me/6282323244285?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="partnership" className="py-5" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container py-5 reveal">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white mb-3">
            {lang === 'en' ? (
              <>Interested in Becoming a <span className="text-red">Distributor?</span></>
            ) : (
              <>Tertarik Jadi <span className="text-red">Distributor?</span></>
            )}
          </h2>
          <p className="lead text-secondary">{t('partnershipFormDesc')}</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="glass-panel p-4 p-md-5 rounded-4 border-red shadow-lg" style={{ borderWidth: '1px', borderStyle: 'solid' }}>
              <h4 className="fw-bold mb-4 text-center text-white">{t('partnershipFormBoxTitle')}</h4>
              <form className="form-modern-dark" onSubmit={handleSubmit}>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t('formPlaceholderFirstName')}
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t('formPlaceholderLastName')}
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder={t('formPlaceholderPhone')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder={t('formPlaceholderEmail')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t('formPlaceholderCompany')}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder={t('formPlaceholderMessage')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <div className="text-center mt-5">
                  <button type="submit" className="btn-modern-red w-100 text-uppercase letter-spacing-1 shadow-lg" style={{ padding: '16px 20px', borderRadius: '50px' }}>
                    <i className="bi bi-whatsapp me-2"></i> {t('formBtnSubmit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// KOMPONEN PRODUCT SHOWCASE (CARD GRID + FLIP + DETAIL)
const CreativeProductShowcase = ({ onSelectProduct, products, selectedBrand, setSelectedBrand, lang }) => {
  const brands = ['all', 'Mizu-X', 'Agioo', 'Bio Luminex'];
  const t = (key) => TRANSLATIONS[lang][key] || key;

  return (
    <section id="services" className="py-5" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid var(--border-color)' }}>
      <div className="container py-5 reveal">
        <div className="text-center mb-5">
          <h6 className="text-red fw-bold text-uppercase mb-2">{t('showcaseSubtitle')}</h6>
          <h2 className="display-5 fw-bold text-white mb-3">Our <span className="text-red">Premium Brands</span></h2>
          <p className="text-secondary lead">{t('showcaseDesc')}</p>
        </div>

        {/* Brand tabs filter */}
        <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
          {brands.map((br) => (
            <button
              key={br}
              onClick={() => setSelectedBrand(br)}
              className={`brand-tab-btn ${selectedBrand === br ? 'active' : ''}`}
            >
              {br === 'all' ? t('showcaseTabAll') : br}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {products.length === 0 ? (
            <div className="col-12 text-center py-5">
              <p className="text-secondary fs-5">{t('showcaseSearchEmpty')}</p>
            </div>
          ) : (
            products.map((prod, idx) => (
              <div className="col-lg-4 col-md-6" style={{ transitionDelay: `${idx * 0.05}s` }} key={prod.id}>
                <div className="flip-card" onClick={() => onSelectProduct(prod.id)}>
                  <div className="flip-card-inner">
                    {/* FRONT - Real Product Image */}
                    <div className="flip-card-front">
                      <div className="position-relative h-100" style={{ borderRadius: '20px', overflow: 'hidden', background: '#111' }}>
                        <img
                          src={prod.image}
                          alt={prod.name}
                          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', padding: '20px' }}
                        />
                        <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)' }}>
                          <span className="badge px-2 py-1 rounded-pill fw-bold mb-1 small d-inline-block" style={{ background: prod.brandColor }}>{prod.brand}</span>
                          <h5 className="fw-bold text-white mb-1" style={{ fontSize: '0.95rem' }}>{prod.name}</h5>
                          <p className="text-secondary mb-0" style={{ fontSize: '0.75rem' }}>
                            <i className="bi bi-arrow-repeat me-1"></i>{t('showcaseCardHover')}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* BACK - Features + CTA */}
                    <div className="flip-card-back" style={{ background: `linear-gradient(135deg, ${prod.brandColor}dd 0%, ${prod.brandColor} 100%)`, borderRadius: '20px' }}>
                      <div className="d-flex flex-column h-100 text-start" style={{ padding: '20px' }}>
                        <h5 className="fw-bold text-white mb-1" style={{ fontSize: '1.1rem', lineHeight: '1.2' }}>{prod.name}</h5>
                        <span className="badge bg-white text-dark mb-2 align-self-start px-2 py-1" style={{ fontSize: '0.75rem' }}>{prod.brand}</span>
                        <p className="text-white mb-2" style={{ fontStyle: 'italic', opacity: 0.9, fontSize: '0.8rem', lineHeight: '1.3' }}>{prod.description}</p>
                        <ul className="list-unstyled text-white flex-grow-1 mb-3">
                          {prod.specs.slice(0, 3).map((spec, i) => (
                            <li key={i} className="mb-1 d-flex align-items-start" style={{ fontSize: '0.8rem', lineHeight: '1.25' }}>
                              <i className="bi bi-check-circle-fill me-2 mt-0.5 flex-shrink-0" style={{ fontSize: '0.75rem' }}></i>
                              <span className="text-start">{spec}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          className="w-100 py-2 fw-bold rounded-pill border-0 text-dark"
                          style={{ background: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', cursor: 'pointer', fontSize: '0.85rem' }}
                        >
                          <i className="bi bi-arrow-right-circle me-2"></i>{t('showcaseCardBackBtn')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

// KOMPONEN TESTIMONI DAN PARTNER
const TestimonialSection = ({ lang }) => {
  const t = (key) => TRANSLATIONS[lang][key] || key;
  const testimonials = TESTIMONIAL_DATA[lang];

  return (
    <section className="py-5 overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container py-5 reveal">
        <div className="text-center mb-5">
          <h6 className="text-red fw-bold text-uppercase mb-2">{t('testiSubtitle')}</h6>
          <h2 className="display-5 fw-bold text-white mb-3">Happy <span className="text-red">Clients & Partners</span></h2>
          <p className="text-secondary lead">{t('testiDesc')}</p>
        </div>
        <div className="row g-4 justify-content-center">
          {testimonials.map((testi, idx) => (
            <div className="col-lg-4 col-md-6" style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="testimonial-card d-flex flex-column text-start">
                <div className="mb-4 text-warning">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p className="text-secondary fs-6 mb-4 flex-grow-1" style={{ fontStyle: 'italic' }}>"{testi.text}"</p>
                <div>
                  <h6 className="text-white fw-bold mb-1">{testi.name}</h6>
                  <p className="text-red small mb-0 fw-bold">{testi.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// KOMPONEN PETA GOOGLE MAPS & INFO KANTOR JMV
const MapSection = ({ lang }) => {
  const t = (key) => TRANSLATIONS[lang][key] || key;
  return (
    <section id="map-section" className="py-5 position-relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      {/* Decorative ambient glows */}
      <div className="ambient-glow" style={{ top: '20%', left: '5%' }}></div>
      <div className="ambient-glow-2" style={{ bottom: '10%', right: '5%' }}></div>

      <div className="container py-5 position-relative z-1 reveal">
        <div className="text-center mb-5">
          <h6 className="text-red fw-bold text-uppercase tracking-wider mb-2">{t('mapSubtitle')}</h6>
          <h2 className="display-4 fw-bold text-white mb-3">
            {lang === 'en' ? (
              <>Office Location & <span className="text-red">Route</span></>
            ) : (
              <>Lokasi & <span className="text-red">Rute Kantor</span></>
            )}
          </h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px' }}>{t('mapDesc')}</p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Info Kantor & CTA Rute */}
          <div className="col-lg-5">
            <div className="map-control-panel rounded-4 h-100 border border-secondary text-start d-flex flex-column justify-content-between" style={{ background: 'rgba(20, 20, 20, 0.6)', backdropFilter: 'blur(10px)', minHeight: '400px' }}>
              <div>
                <span className="badge bg-red mb-3 px-3 py-2 rounded-pill letter-spacing-1">HEADQUARTERS</span>
                <h3 className="text-white fw-bold mb-4">PT Jaya Mandiri Ventures</h3>

                <div className="mb-4">
                  <h6 className="text-red text-uppercase small fw-bold mb-2">{t('mapAddressLabel')}</h6>
                  <p className="text-secondary mb-0" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                    Gedung SOHO Pancoran, Jl. Letjen M.T. Haryono Kav. 2-3, RT.3/RW.3, Tebet Barat, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810, Indonesia.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="text-red text-uppercase small fw-bold mb-2">{t('mapContactLabel')}</h6>
                  <p className="text-secondary mb-1" style={{ fontSize: '0.95rem' }}>
                    <i className="bi bi-envelope-fill me-2 text-white opacity-50"></i> admin@jmv.co.id
                  </p>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
                    <i className="bi bi-telephone-fill me-2 text-white opacity-50"></i> +62 823-2324-4285
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="text-red text-uppercase small fw-bold mb-2">{t('mapHoursLabel')}</h6>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
                    <i className="bi bi-clock-fill me-2 text-white opacity-50"></i> {t('mapHoursValue')}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top border-secondary">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=-6.242389,106.845244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern-red w-100 text-center text-decoration-none d-inline-flex align-items-center justify-content-center"
                  style={{ borderRadius: '30px', padding: '14px 20px', fontWeight: '600' }}
                >
                  <i className="bi bi-map-fill me-2"></i> {t('mapBtnRoute')}
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embedded Map */}
          <div className="col-lg-7">
            <div className="map-card h-100 position-relative overflow-hidden" style={{ minHeight: '400px', border: '1px solid var(--border-color)' }}>
              <iframe
                title="Google Maps JMV Office"
                src="https://maps.google.com/maps?q=-6.242389,106.845244&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// KOMPONEN TOMBOL WHATSAPP
const FloatingWhatsApp = ({ lang }) => {
  const t = (key) => TRANSLATIONS[lang][key] || key;
  return (
    <a
      href={`https://wa.me/6282323244285?text=${encodeURIComponent(t('waGeneralText'))}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
    >
      <i className="bi bi-whatsapp fs-4"></i>
      <span className="d-none d-md-block">{t('waFloatingText')}</span>
    </a>
  );
};

// KOMPONEN UTAMA
function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [lang, setLang] = useState(() => localStorage.getItem('jmv_lang') || 'id');

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('jmv_lang', newLang);
  };

  const t = (key) => TRANSLATIONS[lang][key] || key;

  // Intersection Observer scroll reveal hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [selectedProductId]); // Re-observe when UI view toggles between Home & Details

  const filteredProducts = useMemo(() => {
    return PRODUCT_DATA[lang].filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesBrand = selectedBrand === 'all' || product.brand.toLowerCase() === selectedBrand.toLowerCase();

      return matchesSearch && matchesBrand;
    });
  }, [searchQuery, selectedBrand, lang]);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val) {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderContent = () => {
    if (selectedProductId) {
      const product = PRODUCT_DATA[lang].find(p => p.id === selectedProductId);
      if (!product) return null;
      return (
        <div className="container py-5 mt-5 reveal">
          <div className="row align-items-center mt-5">
            <div className="col-lg-6 mb-4 text-center">
              <img src={product.image} className="img-fluid rounded-4 shadow-lg border border-dark" alt={product.name} style={{ maxHeight: '450px', objectFit: 'contain' }} />
            </div>
            <div className="col-lg-6 px-lg-5 text-start">
              <span className="badge bg-red mb-3 fs-6 px-3 py-2 rounded-pill">{product.brand}</span>
              <h2 className="fw-bold display-4 text-white mb-3">{product.name}</h2>
              <p className="lead text-secondary mb-5">{product.description}</p>

              <h5 className="fw-bold text-white mb-3 d-flex align-items-center">
                <i className="bi bi-star-fill text-red me-2"></i> {t('detailsSpecsTitle')}
              </h5>
              <ul className="list-group list-group-flush mb-5 bg-transparent">
                {product.specs.map((spec, index) => (
                  <li key={index} className="list-group-item bg-transparent text-secondary px-0 border-secondary d-flex align-items-center">
                    <i className="bi bi-check2-circle text-red fs-5 me-3"></i> {spec}
                  </li>
                ))}
              </ul>
              <div className="d-flex gap-3">
                <a
                  href={`https://wa.me/6282323244285?text=${encodeURIComponent(lang === 'en' ? `Hello JMV, I am interested in inquiring about wholesale for product ${product.name}` : `Halo JMV, saya tertarik bertanya mengenai grosir untuk produk ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern-red text-decoration-none text-center d-inline-flex align-items-center"
                >
                  <i className="bi bi-whatsapp me-2"></i> {t('detailsBtnContact')}
                </a>
                <button onClick={() => setSelectedProductId(null)} className="btn-modern-outline text-white">
                  <i className="bi bi-arrow-left me-2"></i> {t('detailsBtnBack')}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <main>
        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          {/* Ambient Glows */}
          <div className="ambient-glow" style={{ top: '10%', left: '10%' }}></div>
          <div className="ambient-glow-2" style={{ bottom: '20%', right: '15%' }}></div>

          <img src="/hero-bg.jpg" className="hero-bg-image" alt="Mizu-X Agioo Background" />
          <div className="hero-overlay"></div>

          <div className="container hero-content text-center reveal pb-5">
            <span className="badge bg-transparent border border-red text-red rounded-pill px-3 py-2 mb-4 fw-bold letter-spacing-1">{t('heroSubtitle')}</span>
            <h1 className="display-3 fw-bold text-white mb-4">
              {lang === 'en' ? (
                <>Premium Car Care Solutions <br /><span className="text-red">For Optimal Performance</span></>
              ) : (
                <>Solusi Perawatan Mobil Premium <br /><span className="text-red">Untuk Performa Optimal</span></>
              )}
            </h1>
            <p className="fs-5 text-secondary mb-5 max-w-700 mx-auto" style={{ maxWidth: '700px' }}>
              <span className="text-red">{t('heroDescRed')}</span> <br></br>{t('heroDescText')}
            </p>

            <div className="d-flex gap-3 justify-content-center mb-5">
              <a href="#services" className="btn-modern-red text-decoration-none">{t('heroBtnSearch')}</a>
              <a href="#partnership" className="btn-modern-outline text-decoration-none text-white">{t('heroBtnRegister')}</a>
            </div>

            <div className="row gy-4 mt-5 justify-content-center">
              <div className="col-md-4 d-flex" style={{ transitionDelay: '0.1s' }}>
                <div className="trust-badge d-flex flex-column w-100">
                  <i className="bi bi-award-fill icon-main"></i>
                  <h4 className="fw-bold text-white mb-2">{t('badge1Title')}</h4>
                  <p className="text-secondary small mb-3 border-bottom border-secondary pb-2">{t('badge1Sub')}</p>
                  <ul className="list-unstyled text-secondary small text-start ps-3 mb-0 flex-grow-1">
                    <li className="mb-1"><i className="bi bi-check text-red fs-5 me-1 align-middle"></i> {t('badge1Item1')}</li>
                    <li className="mb-1"><i className="bi bi-check text-red fs-5 me-1 align-middle"></i> {t('badge1Item2')}</li>
                    <li className="mb-1"><i className="bi bi-check text-red fs-5 me-1 align-middle"></i> {t('badge1Item3')}</li>
                  </ul>
                  <p className="text-secondary small mt-3 pt-2 border-top border-secondary mb-0">{t('badge1Footer')}</p>
                </div>
              </div>
              <div className="col-md-4 d-flex" style={{ transitionDelay: '0.2s' }}>
                <div className="trust-badge d-flex flex-column w-100">
                  <i className="bi bi-shield-check icon-main"></i>
                  <h4 className="fw-bold text-white mb-3">{t('badge2Title')}</h4>
                  <p className="text-secondary mb-4 flex-grow-1">{t('badge2Desc')}</p>
                </div>
              </div>
              <div className="col-md-4 d-flex" style={{ transitionDelay: '0.3s' }}>
                <div className="trust-badge d-flex flex-column w-100">
                  <i className="bi bi-buildings icon-main"></i>
                  <h4 className="fw-bold text-white mb-3">{t('badge3Title')}</h4>
                  <p className="text-secondary mb-3 flex-grow-1">{t('badge3Desc')}</p>
                  <p className="text-secondary small mt-auto mb-0" style={{ fontSize: '0.75rem' }}>{t('badge3Footer')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION RED BANNER */}
        <ValuePropositionBanner lang={lang} />

        {/* ABOUT SECTION */}
        <section id="about" className="py-5 position-relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
          {/* Ambient Glows */}
          <div className="ambient-glow" style={{ bottom: '10%', right: '5%' }}></div>
          <div className="ambient-glow-2" style={{ top: '10%', left: '5%' }}></div>

          <div className="container py-5 reveal">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-5 mb-lg-0 text-center">
                <div className="position-relative">
                  <div className="bg-red rounded-circle position-absolute" style={{ width: '300px', height: '300px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', filter: 'blur(80px)', opacity: '0.2' }}></div>
                  <div className="position-relative z-1">
                    <div className="logo-badge-about">
                      <img src="/logo-jmv.png" alt="JMV Logo" className="img-fluid" style={{ maxHeight: '130px', objectFit: 'contain' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 px-lg-5 text-start">
                <h6 className="text-red fw-bold text-uppercase tracking-wider mb-2">{t('aboutSubtitle')}</h6>
                <h3 className="fw-bold text-white display-6 mb-4">PT Jaya Mandiri Ventures</h3>
                <p className="text-secondary fs-5 mb-4 line-height-lg">
                  {t('aboutText')}
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center p-3 rounded-3" style={{ backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--brand-red)' }}>
                    <i className="bi bi-award fs-3 text-red me-3"></i>
                    <div>
                      <h6 className="text-white fw-bold mb-1">{t('aboutCard1Title')}</h6>
                      <p className="text-secondary mb-0 small">{t('aboutCard1Desc')}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center p-3 rounded-3" style={{ backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--brand-red)' }}>
                    <i className="bi bi-truck fs-3 text-red me-3"></i>
                    <div>
                      <h6 className="text-white fw-bold mb-1">{t('aboutCard2Title')}</h6>
                      <p className="text-secondary mb-0 small">{t('aboutCard2Desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B2B CHANNELS */}
        <section className="b2b-section py-5">
          <div className="container text-center reveal">
            <p className="b2b-title mb-4 fw-bold letter-spacing-1 text-uppercase">B2B Channels:</p>
            <div className="b2b-marquee-container">
              <div className="b2b-marquee-track">
                {B2B_LOGOS.map((logo, idx) => (
                  <div className="b2b-marquee-item" key={`b2b-logo-1-${idx}`}>
                    <img src={logo.src} alt={logo.name} />
                  </div>
                ))}
                {B2B_LOGOS.map((logo, idx) => (
                  <div className="b2b-marquee-item" key={`b2b-logo-2-${idx}`}>
                    <img src={logo.src} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <StatsSection lang={lang} />

        {/* BONUS SECTION */}
        <BonusSection lang={lang} />

        {/* CREATIVE PRODUCT SHOWCASE */}
        <CreativeProductShowcase
          onSelectProduct={setSelectedProductId}
          products={filteredProducts}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          lang={lang}
        />

        {/* TESTIMONIALS & PARTNERS */}
        <TestimonialSection lang={lang} />

        {/* JENIS KEMITRAAN */}
        <PartnershipTypes lang={lang} />

        {/* GOOGLE MAP SECTION */}
        <MapSection lang={lang} />

        {/* FORMULIR KEMITRAAN */}
        <PartnershipForm lang={lang} />

      </main>
    );
  };

  return (
    <div className="app-container">
      {/* HEADER FIXED (Dark navbar, with Search Input) */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-glass fixed-top py-3">
        <div className="container-fluid px-4 px-xl-5">
          <a className="navbar-brand d-flex align-items-center" href="#" onClick={(e) => { e.preventDefault(); setSelectedProductId(null); }}>
            <div className="logo-badge-white">
              <img src="/logo-jmv.png" alt="JMV Logo" style={{ height: '32px' }} />
            </div>
          </a>
          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Search Input in Navbar */}
            <div className="d-none d-lg-flex mx-auto position-relative" style={{ width: '280px' }}>
              <i className="bi bi-search position-absolute text-secondary" style={{ left: '15px', top: '12px', zIndex: 3 }}></i>
              <input
                type="text"
                className="form-control ps-5 text-white search-input-field"
                style={{
                  borderRadius: '30px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.9rem',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  zIndex: 1
                }}
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {!searchQuery && (
                <div className="custom-placeholder-marquee">
                  <span className="custom-placeholder-text">
                    {t('searchPlaceholder')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {t('searchPlaceholder')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
              )}
            </div>

            <div className="navbar-nav ms-auto gap-3 gap-lg-4 my-3 my-lg-0 align-items-center">
              <a href="#hero" className="nav-link" onClick={() => setSelectedProductId(null)}>{t('navHome')}</a>
              <a href="#about" className="nav-link" onClick={() => setSelectedProductId(null)}>{t('navAbout')}</a>
              <a href="#services" className="nav-link" onClick={() => setSelectedProductId(null)}>{t('navProducts')}</a>
              <a href="#map-section" className="nav-link" onClick={() => setSelectedProductId(null)}>{t('navLocation')}</a>
              <a className="btn-modern-red d-inline-block text-center text-decoration-none" href="#partnership" style={{ whiteSpace: 'nowrap' }}>
                {t('navDistributor')}
              </a>

              {/* Language Switcher */}
              <div className="d-flex align-items-center bg-dark-adjust px-1 py-1 rounded-pill" style={{ border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255, 255, 255, 0.05)', gap: '2px' }}>
                <button
                  onClick={() => changeLanguage('id')}
                  className={`btn btn-sm rounded-pill px-2 py-0.5 border-0 fw-bold transition ${lang === 'id' ? 'bg-red text-white' : 'text-secondary bg-transparent'}`}
                  style={{ fontSize: '0.75rem', minWidth: '32px', height: '24px', lineHeight: '24px', padding: 0 }}
                >
                  ID
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`btn btn-sm rounded-pill px-2 py-0.5 border-0 fw-bold transition ${lang === 'en' ? 'bg-red text-white' : 'text-secondary bg-transparent'}`}
                  style={{ fontSize: '0.75rem', minWidth: '32px', height: '24px', lineHeight: '24px', padding: 0 }}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* KONTEN UTAMA */}
      {renderContent()}

      {/* FOOTER DIRECTORY (Adapted for Dark Theme) */}
      <footer className="modern-footer py-5">
        <div className="container py-4">
          <div className="row g-5">
            {/* Column 1: Brand Info */}
            <div className="col-lg-4 text-start">
              <div className="logo-badge-white mb-4">
                <img src="/logo-jmv.png" alt="JMV Logo" style={{ height: '35px' }} />
              </div>
              <p className="footer-brand-desc mb-4">
                <strong>PT Jaya Mandiri Ventures</strong><br />
                {t('footerDesc')}
              </p>
              <div className="d-flex flex-column gap-1">
                <a href="#map-section" className="footer-contact-item text-decoration-none small">
                  <i className="bi bi-geo-alt-fill text-red me-2"></i>
                  <span>{t('footerAddress')}</span>
                </a>
                <a href="mailto:admin@jmv.co.id" className="footer-contact-item text-decoration-none small">
                  <i className="bi bi-envelope-fill text-red me-2"></i>
                  <span>admin@jmv.co.id</span>
                </a>
                <a href="tel:+6282323244285" className="footer-contact-item text-decoration-none small">
                  <i className="bi bi-telephone-fill text-red me-2"></i>
                  <span>+62 823-2324-4285</span>
                </a>
              </div>
            </div>

            {/* Column 2: Brands Directory */}
            <div className="col-lg-2 col-md-4 text-start">
              <h6 className="footer-title">Brands</h6>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="#services" className="footer-modern-link">
                    <i className="bi bi-chevron-right"></i>Mizu-X Autocare
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-modern-link">
                    <i className="bi bi-chevron-right"></i>Agioo Engine Coolant
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-modern-link">
                    <i className="bi bi-chevron-right"></i>Bio Luminex Anti-Fog
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-modern-link">
                    <i className="bi bi-chevron-right"></i>Maklon JMV B2B OEM
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Partnership Program */}
            <div className="col-lg-3 col-md-4 text-start">
              <h6 className="footer-title">Partnership</h6>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="#partnership-types" className="footer-modern-link">
                    <i className="bi bi-chevron-right"></i>{t('footerLinkDistributor')}
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#partnership-types" className="footer-modern-link">
                    <i className="bi bi-chevron-right"></i>{t('footerLinkReseller')}
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#partnership" className="footer-modern-link">
                    <i className="bi bi-chevron-right"></i>{t('footerLinkMaklon')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Quick Links & Socials */}
            <div className="col-lg-3 col-md-4 text-start">
              <h6 className="footer-title">Links</h6>
              <ul className="footer-links-list mb-4">
                <li className="footer-link-item">
                  <a href="#about" className="footer-modern-link">
                    <i className="bi bi-chevron-right"></i>{t('footerLinkAbout')}
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-modern-link">
                    <i className="bi bi-chevron-right"></i>{t('footerLinkCatalog')}
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#map-section" className="footer-modern-link">
                    <i className="bi bi-chevron-right"></i>{t('footerLinkOffice')}
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#partnership" className="footer-modern-link">
                    <i className="bi bi-chevron-right"></i>{t('footerLinkContact')}
                  </a>
                </li>
              </ul>

              <div className="d-flex align-items-center gap-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <hr className="footer-divider my-5" />

          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <p className="mb-0 text-secondary small">
              © {new Date().getFullYear()} {t('footerRights')}
            </p>
            <div className="d-flex align-items-center gap-3">
              <div className="footer-badge-astm">
                <i className="bi bi-shield-fill-check"></i>
                <span>ASTM CERTIFIED QUALITY</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* TOMBOL WHATSAPP MELAYANG */}
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}

export default App;