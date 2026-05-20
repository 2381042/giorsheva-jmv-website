import React, { useState, useMemo } from 'react';
import './App.css';

// DATA PRODUK RESMI JMV (Mizu-X, Agioo, Bio Luminex, Maklon B2B)
const PRODUCT_DATA = [
  {
    id: 'air-freshener',
    name: 'Air Freshener Ice Cream Bar',
    brand: 'Mizu-X',
    brandColor: '#d32f2f',
    icon: 'bi-wind',
    description: 'Aroma segar Ice Cream Bar yang menyegarkan, wangi tahan lama hingga 30 hari untuk menemani setiap perjalanan.',
    specs: ['Ketahanan Wangi hingga 30 Hari', 'Aroma Premium: Ice Cream Bar & Morning Coffee', 'Hilangkan Bau Tidak Sedap', 'Formula Ramah Lingkungan'],
    image: '/assets/productdata/Mizu x Air Freshener 2.jpeg',
  },
  {
    id: 'wash-glow',
    name: 'Wash & Glow Car Shampoo',
    brand: 'Mizu-X',
    brandColor: '#d32f2f',
    icon: 'bi-droplet-fill',
    description: 'Car Shampoo premium dengan kandungan wax pelindung cat. Bersihkan kotoran membandel, hasilkan kilap sempurna.',
    specs: ['Busa Berlimpah & Lembut di Cat', 'Kandungan Premium Wax', 'pH Balance – Aman untuk Semua Warna Cat', 'Tersedia 200ml Pouch & 40ml Sachet'],
    image: '/assets/productdata/Mizu x Car Shampoo Wash & Glow.jpeg',
  },
  {
    id: 'clear-view',
    name: 'Clear View Wiper Fluid',
    brand: 'Mizu-X',
    brandColor: '#d32f2f',
    icon: 'bi-eye-fill',
    description: 'Cairan wiper premium yang membersihkan kaca dari debu, hujan, dan minyak. Lindungi dan perpanjang umur wiper Anda.',
    specs: ['Bening Tanpa Residu', 'Efektif Lawan Debu, Hujan & Minyak', 'Lindungi & Perpanjang Umur Wiper', 'Extra 20% – 40mL'],
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
    description: 'Pembersih jamur kaca yang ampuh. Hilangkan noda membandel dan berikan perlindungan jangka panjang pada kaca kendaraan.',
    specs: ['Ampuh Hilangkan Jamur Kaca', 'Perlindungan Jangka Panjang', 'Aman untuk Kaca Film', 'Ukuran 300mL'],
    image: '/assets/productdata/Mizu x Windscreen Stain Removal.jpeg',
  },
  {
    id: 'engine-coolant',
    name: 'Engine Coolant ALL VEHICLE',
    brand: 'Agioo',
    brandColor: '#b71c1c',
    icon: 'bi-thermometer-high',
    description: 'Cairan radiator premium untuk semua jenis kendaraan. Cegah overheating, anti karat, anti korosi, tersertifikasi ASTM internasional.',
    specs: ['Anti Karat & Anti Korosi', 'Cegah Overheat & Freezing', 'Sertifikasi ASTM D1384, D4340, D2809', 'Tersedia 1L, 2L, 5L'],
    image: '/assets/productdata/premium coolant.jpeg',
  },
];

// DATA CAMPAIGN POSTERS
const CAMPAIGN_POSTERS = [
  {
    id: 'hadiah',
    title: 'Hadiah Distributor',
    image: '/assets/posters/poster-hadiah.jpg',
    desc: 'Hadiah langsung tanpa diundi: Voucher Pertamina, Logam Emas, HP, Motor, Mobil Traga.'
  },
  {
    id: 'solusi',
    title: 'Solusi Perawatan Harian',
    image: '/assets/posters/poster-solusi.jpg',
    desc: 'Mizu-X Autocare & Car Wash premium untuk semua jenis kendaraan.'
  },
  {
    id: 'coolant',
    title: 'Standar Internasional',
    image: '/assets/posters/poster-coolant.jpg',
    desc: 'Agioo Engine Coolant dengan uji standar laboratorium ASTM Amerika.'
  },
  {
    id: 'armada',
    title: 'Dukungan Armada JMV',
    image: '/assets/posters/poster-armada.jpg',
    desc: 'Pengiriman cepat dengan armada distribusi mandiri ke seluruh Indonesia.'
  }
];


// KOMPONEN BONUS (BARU)
const BonusSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 fade-up">
            <div className="p-5 rounded-4 h-100 text-center text-lg-start d-flex flex-column justify-content-center border shadow-sm" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
              <h2 className="display-4 fw-bold mb-4" style={{ color: 'var(--text-primary)' }}>Selalu Ada<br /><span className="text-red">Hadiah & Bonus</span></h2>
              <div>
                <a href="https://wa.me/6282323244285?text=Halo%20JMV,%20saya%20ingin%20bertanya%20mengenai%20program%20hadiah%20dan%20bonus%20distributor." target="_blank" rel="noopener noreferrer" className="btn-modern-red d-inline-flex align-items-center text-decoration-none">
                  Tanya-Tanya via Chat
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 fade-up delay-100">
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-gift-fill"></i></div>
              <h5 className="mb-0 fw-bold" style={{ color: 'var(--text-primary)' }}>Hadiah Langsung Voucher PERTAMINA</h5>
              <div className="ms-auto text-success fs-3"><i className="bi bi-cash-stack"></i></div>
            </div>
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-award-fill"></i></div>
              <h5 className="mb-0 fw-bold" style={{ color: 'var(--text-primary)' }}>Hadiah Langsung Logam Emas</h5>
              <div className="ms-auto text-warning fs-3"><i className="bi bi-gem"></i></div>
            </div>
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-phone-fill"></i></div>
              <h5 className="mb-0 fw-bold" style={{ color: 'var(--text-primary)' }}>Hadiah Langsung Handphone Premium</h5>
              <div className="ms-auto text-info fs-3"><i className="bi bi-phone"></i></div>
            </div>
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-bicycle"></i></div>
              <h5 className="mb-0 fw-bold" style={{ color: 'var(--text-primary)' }}>Hadiah Langsung Motor Listrik</h5>
              <div className="ms-auto text-danger fs-3"><i className="bi bi-bicycle"></i></div>
            </div>
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-truck"></i></div>
              <h5 className="mb-0 fw-bold" style={{ color: 'var(--text-primary)' }}>Hadiah Langsung Mobil Traga</h5>
              <div className="ms-auto text-primary fs-3"><i className="bi bi-truck"></i></div>
            </div>
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-gift"></i></div>
              <h5 className="mb-0 fw-bold" style={{ color: 'var(--text-primary)' }}>Hadiah Untung Lainnya...</h5>
              <div className="ms-auto text-danger fs-3"><i className="bi bi-gift-fill"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// KOMPONEN RED BANNER (BARU - DESAIN MODERN)
const ValuePropositionBanner = () => {
  return (
    <section className="position-relative py-5 mt-4 overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container py-5 position-relative z-1">
        <div className="row align-items-center g-5">
          {/* Bagian Kiri: Hook Utama */}
          <div className="col-lg-6 fade-up">
            <span className="badge bg-red mb-3 px-3 py-2 rounded-pill text-white letter-spacing-1">PELUANG EMAS</span>
            <h2 className="display-4 fw-bold mb-4 line-height-sm" style={{ color: 'var(--text-primary)' }}>
              Jualannya Laris,<br />Cuan-nya <span className="text-red">Manissss…</span>
            </h2>
            <div className="p-4 rounded-4 mb-5" style={{ background: 'var(--brand-red-glass)', borderLeft: '4px solid var(--brand-red)' }}>
              <p className="fw-bold text-uppercase tracking-wider mb-2" style={{ color: 'var(--brand-red)' }}>
                PRODUK AUTOCARE JARINGAN NASIONAL
              </p>
              <h3 className="fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                MARGIN BESAR UP TO 30%
              </h3>
              <p className="text-secondary mb-0">
                Agioo & Mizu-X adalah brand dari PT JAYA MANDIRI VENTURES — perusahaan distribusi produk otomotif dengan jaringan retail nasional. Sekarang, siapa pun bisa ikut jualan produk fast-moving ini dengan potensi untung harian dan bonus bulanan yang langsung terasa.
              </p>
            </div>
            <a href="https://wa.me/6282323244285?text=Halo%20JMV,%20saya%20tertarik%20membahas%20kemitraan%20dan%20margin%20grosir." target="_blank" rel="noopener noreferrer" className="btn-modern-red d-inline-flex align-items-center text-decoration-none">
              <i className="bi bi-chat-dots-fill me-2 fs-5"></i> Tanya-Tanya via Chat
            </a>
          </div>

          {/* Bagian Kanan: Fitur Grid */}
          <div className="col-lg-6">
            <div className="row g-4 align-items-stretch">
              <div className="col-sm-6 fade-up delay-100">
                <div className="p-4 rounded-4 h-100 shadow-sm" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <div className="bg-red text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                    <i className="bi bi-car-front-fill"></i>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>Produk Autocare</h5>
                  <p className="text-secondary small mb-0">Dipakai semua kendaraan harian.</p>
                </div>
              </div>
              <div className="col-sm-6 fade-up delay-200">
                <div className="p-4 rounded-4 h-100 shadow-sm" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <div className="bg-red text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                    <i className="bi bi-cash-coin"></i>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>Cuan Maksimal!!</h5>
                  <p className="text-secondary small mb-0">Dapatkan potensi keuntungan paling besar.</p>
                </div>
              </div>
              <div className="col-sm-6 fade-up delay-300">
                <div className="p-4 rounded-4 h-100 shadow-sm" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <div className="bg-red text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                    <i className="bi bi-gift-fill"></i>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>Bonus Langsung</h5>
                  <p className="text-secondary small mb-0">Hadiahnya langsung diberikan tanpa diundi.</p>
                </div>
              </div>
              <div className="col-sm-6 fade-up delay-300">
                <div className="p-4 rounded-4 h-100 d-flex flex-column justify-content-center text-center shadow-sm" style={{ background: 'linear-gradient(135deg, var(--brand-red) 0%, #a00000 100%)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <h4 className="text-white fw-bold mb-3">HADIAH TANPA DIUNDI!</h4>
                  <p className="text-white opacity-75 small mb-0">Voucher Pertamina, Logam Emas, Handphone, Motor & Mobil Traga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// KOMPONEN JENIS KEMITRAAN (BARU)
const PartnershipTypes = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }} id="partnership-types">
      <div className="container py-5">
        <div className="text-center mb-5 fade-up">
          <h2 className="display-4 fw-bold" style={{ color: 'var(--text-primary)' }}>Program <span className="text-red">Kemitraan</span></h2>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 fade-up delay-100">
            <div className="partnership-card text-center">
              <i className="bi bi-building text-red fs-1 mb-3 d-block"></i>
              <h3 className="fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Distributor</h3>
              <p className="text-secondary fw-bold fs-5">Untuk Pengambilan IDR 75 Juta Keatas</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 fade-up delay-200">
            <div className="partnership-card text-center">
              <i className="bi bi-star-fill text-red fs-1 mb-3 d-block"></i>
              <h3 className="fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Reseller</h3>
              <p className="text-secondary fw-bold fs-5">Untuk Pengambilan IDR 75 Juta Kebawah</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 fade-up delay-300">
            <div className="partnership-card text-center">
              <i className="bi bi-boxes text-red fs-1 mb-3 d-block"></i>
              <h3 className="fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Special Orders</h3>
              <p className="text-secondary fw-bold fs-5">Layanan maklon B2B, OEM, dan kebutuhan formulasi kimia khusus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// KOMPONEN FORMULIR KEMITRAAN
const PartnershipForm = () => {
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
    const text = `Halo JMV, saya tertarik menjadi distributor.
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
      <div className="container py-5">
        <div className="text-center mb-5 fade-up">
          <h2 className="display-5 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Tertarik Jadi <span className="text-red">Distributor?</span></h2>
          <p className="lead text-secondary">Penawaran eksklusif ini khusus untuk perusahaan berbadan hukum PT / CV.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 fade-up delay-100">
            <div className="p-4 p-md-5 rounded-4 form-modern-light shadow-sm" style={{ border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
              <h4 className="fw-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>Isi Form Singkat di Bawah Ini</h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label">Nama Depan *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Depan"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Nama Belakang</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Belakang"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label">Nomor Telp Kantor / Toko *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Nomor Telp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Perusahaan *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Nama Usaha * (Contoh: CV. Bengkel Mitra Sejati)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Usaha"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Pesan Tambahan (Opsional)</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Tulis pesan Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <div className="text-center mt-5">
                  <button type="submit" className="btn-modern-red w-100 text-uppercase letter-spacing-1">
                    <i className="bi bi-whatsapp me-2"></i> Kirim Penawaran via WhatsApp
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

// KOMPONEN TESTIMONI DAN PARTNER (BARU)
const TestimonialSection = () => {
  const testimonials = [
    { text: "I'm very satisfied with Mizu-X products. They keep my vehicle clean and well-maintained, and on top of that, they're eco-friendly.", name: "Mrs. Tabitha Sumendap", title: "Founder of Woman Cycling Club Indonesia" },
    { text: "My vehicle's performance is always well-maintained thanks to the products from Mizu-X & Agioo. Their premium quality is highly recommended.", name: "Mr. Patrick Pandy", title: "VP Finance & Controller at BP AKR" },
    { text: "I'm really impressed with the products from PT. Jaya Mandiri Ventures. Their durability and quality are top-notch, greatly supporting operations.", name: "Mr. Jefree R. Pusung", title: "CEO PT Putra Bintang Mimika / Contractor PT. Freeport" },
    { text: "As the owner of an auto detailing business in Vancouver, Canada, I've been importing products from PT. JMV, and they've been a game changer.", name: "Mr. Ferry P.", title: "Auto Detailing Business Owner at Vancouver, Canada" },
    { text: "As a Purchasing Manager in the modern trade sector, Mizu-X products are always in demand and meet our standards, both in quality and reliability.", name: "Mr. Bayu", title: "Purchasing Manager at Transmart" }
  ];

  return (
    <section className="py-5 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Marquee Partners */}
      <div className="poster-marquee-container mb-5">
        <div className="poster-marquee-track">
          <span className="partner-logo-text">PERTAMINA</span>
          <span className="partner-logo-text">MUJ</span>
          <span className="partner-logo-text text-primary">ENM</span>
          <span className="partner-logo-text text-danger">DKSH</span>
          <span className="partner-logo-text text-success">SAI</span>
          <span className="partner-logo-text text-info">BENE DIGITAL</span>
          <span className="partner-logo-text text-danger">BRIGHT BY ALFAMART</span>
          {/* Duplicate for infinite marquee */}
          <span className="partner-logo-text">PERTAMINA</span>
          <span className="partner-logo-text">MUJ</span>
          <span className="partner-logo-text text-primary">ENM</span>
          <span className="partner-logo-text text-danger">DKSH</span>
          <span className="partner-logo-text text-success">SAI</span>
          <span className="partner-logo-text text-info">BENE DIGITAL</span>
          <span className="partner-logo-text text-danger">BRIGHT BY ALFAMART</span>
        </div>
      </div>

      <div className="container py-5">
        <div className="text-center mb-5 fade-up">
          <h6 className="text-red fw-bold text-uppercase mb-2">Testimoni</h6>
          <h2 className="display-5 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Happy <span className="text-red">Clients & Partners</span></h2>
          <p className="text-secondary lead">Apa kata mereka tentang produk JMV?</p>
        </div>
        <div className="row g-4 justify-content-center">
          {testimonials.map((testi, idx) => (
            <div className="col-lg-4 col-md-6 fade-up" style={{ animationDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="testimonial-card d-flex flex-column">
                <div className="mb-4 text-warning">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p className="text-secondary fs-6 mb-4 flex-grow-1" style={{ fontStyle: 'italic' }}>"{testi.text}"</p>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>{testi.name}</h6>
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

// KOMPONEN TOMBOL WHATSAPP MELAYANG
const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/6282323244285?text=Halo%20JMV,%20saya%20tertarik%20menjadi%20distributor"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
    >
      <i className="bi bi-whatsapp fs-4"></i>
      <span className="d-none d-md-block">Tanya-Tanya via Chat</span>
    </a>
  );
};

// KOMPONEN UTAMA
function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  // Auto-filtering logic
  const filteredProducts = useMemo(() => {
    return PRODUCT_DATA.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesBrand = selectedBrand === 'all' || product.brand.toLowerCase() === selectedBrand.toLowerCase();

      return matchesSearch && matchesBrand;
    });
  }, [searchQuery, selectedBrand]);

  const brandCounts = useMemo(() => {
    const counts = { all: PRODUCT_DATA.length };
    PRODUCT_DATA.forEach(p => {
      const b = p.brand.toLowerCase();
      counts[b] = (counts[b] || 0) + 1;
    });
    return counts;
  }, []);

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

  const activeProduct = useMemo(() => {
    return PRODUCT_DATA.find(p => p.id === selectedProductId);
  }, [selectedProductId]);

  return (
    <div className="app-container">
      {/* HEADER FIXED (Faire-style Header with Search) */}
      <nav className="navbar navbar-expand-lg navbar-light navbar-glass fixed-top py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#" onClick={(e) => { e.preventDefault(); setSelectedProductId(null); }}>
            <img src="/logo-jmv.png" alt="JMV Logo" style={{ height: '45px' }} />
          </a>
          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Search Input in Navbar */}
            <div className="d-none d-lg-flex mx-auto position-relative" style={{ width: '400px' }}>
              <i className="bi bi-search position-absolute text-secondary" style={{ left: '15px', top: '12px' }}></i>
              <input
                type="text"
                placeholder="Cari brand, spesifikasi, atau nama produk..."
                className="form-control ps-5"
                style={{
                  borderRadius: '30px',
                  backgroundColor: '#FAF9F6',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.9rem',
                  paddingTop: '8px',
                  paddingBottom: '8px'
                }}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            
            <div className="navbar-nav ms-auto gap-3 gap-lg-4 my-3 my-lg-0 align-items-center">
              <a href="#hero" className="nav-link" onClick={() => setSelectedProductId(null)}>Home</a>
              <a href="#about" className="nav-link" onClick={() => setSelectedProductId(null)}>Tentang JMV</a>
              <a href="#services" className="nav-link" onClick={() => setSelectedProductId(null)}>Produk</a>
              <a href="#campaigns" className="nav-link" onClick={() => setSelectedProductId(null)}>Kampanye</a>
              <a className="btn-modern-red d-inline-block text-center text-decoration-none" href="#partnership">
                Daftar Distributor
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main>
        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          <img src="/hero-bg.jpg" className="hero-bg-image" alt="Mizu-X Agioo Background" />
          <div className="hero-overlay"></div>

          <div className="container hero-content text-center fade-up pb-5">
            <span className="badge bg-transparent border border-red text-red rounded-pill px-3 py-2 mb-4 fw-bold font-monospace" style={{ fontSize: '0.8rem' }}>BECOME OUR DISTRIBUTOR!</span>
            <h1 className="display-3 fw-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Kita Bantu Buang Barang Melalui <span className="text-red">Program-Program Penjualan</span>
            </h1>
            <p className="fs-5 text-secondary mb-5 max-w-700 mx-auto" style={{ maxWidth: '700px' }}>
              Penawaran ini hanya untuk perusahaan berbadan hukum PT / CV. Jualannya Laris, Cuan-nya Manissss… Produk Autocare dengan Jaringan Nasional, Margin Besar Up TO 30%.
            </p>

            <div className="d-flex gap-3 justify-content-center mb-5">
              <a href="#services" className="btn-modern-red text-decoration-none">Cari & Telusuri Produk</a>
              <a href="#partnership" className="btn-modern-outline text-decoration-none">Daftar Distributor Resmi</a>
            </div>

            {/* ASTM and Trust Badges */}
            <div className="row gy-4 mt-5 justify-content-center fade-up delay-200">
              <div className="col-md-4 d-flex">
                <div className="trust-badge d-flex flex-column w-100">
                  <i className="bi bi-award-fill icon-main"></i>
                  <h4 className="fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>Lolos Uji ASTM</h4>
                  <p className="text-secondary small mb-3 border-bottom pb-2">American Standard Testing and Material</p>
                  <ul className="list-unstyled text-secondary small text-start ps-3 mb-0 flex-grow-1">
                    <li className="mb-1"><i className="bi bi-check text-red fs-5 me-1 align-middle"></i> ASTM D1120 (Titik Didih)</li>
                    <li className="mb-1"><i className="bi bi-check text-red fs-5 me-1 align-middle"></i> ASTM D1170 (Titik Beku)</li>
                    <li className="mb-1"><i className="bi bi-check text-red fs-5 me-1 align-middle"></i> ASTM D1384, D4340, D2809</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="trust-badge d-flex flex-column w-100">
                  <i className="bi bi-car-front icon-main"></i>
                  <h4 className="fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Semua Jenis Kendaraan</h4>
                  <p className="text-secondary mb-4 flex-grow-1 small">Formula kimia dirancang aman dan optimal untuk perawatan mesin, radiator, kaca, dan bodi mobil maupun motor (yang menggunakan radiator).</p>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="trust-badge d-flex flex-column w-100">
                  <i className="bi bi-buildings icon-main"></i>
                  <h4 className="fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Suplai Retail Nasional</h4>
                  <p className="text-secondary mb-3 flex-grow-1 small">Suplier tepercaya jaringan retail terkemuka di Indonesia.</p>
                  <p className="text-secondary small mt-auto mb-0" style={{ fontSize: '0.75rem' }}>(Tersedia di Bright by Pertamina, Bright by Alfamart, Indomaret, Transmart, MUJ, dll.)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION GRID */}
        <ValuePropositionBanner />

        {/* B2B CHANNELS MARQUEE */}
        <section className="py-5 bg-white" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container text-center">
            <p className="text-secondary small mb-4 fw-bold letter-spacing-1 text-uppercase" style={{ color: 'var(--brand-red)' }}>OUR B2B CHANNELS & PARTNERS</p>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5 fs-4 fw-bold text-secondary">
              <span className="partner-item transition" style={{ cursor: 'default' }}>JAK LINGKO</span>
              <span className="partner-item transition" style={{ cursor: 'default' }}>DAMRI</span>
              <span className="partner-item transition" style={{ cursor: 'default' }}>FREEPORT INDONESIA</span>
              <span className="partner-item transition" style={{ cursor: 'default' }}>DAIHATSU</span>
              <span className="partner-item transition" style={{ cursor: 'default' }}>ISUZU</span>
              <span className="partner-item transition" style={{ cursor: 'default' }}>SEMEN GRESIK</span>
            </div>
          </div>
        </section>

        {/* CREATIVE CAMPAIGN GALLERY */}
        <section className="py-5 campaign-section" id="campaigns">
          <div className="container py-4">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-start">
                <span className="badge bg-red mb-3 px-3 py-2 rounded-pill text-white letter-spacing-1">OFFICIAL CAMPAIGNS</span>
                <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Running Posters & <span className="text-red">Galeri Kampanye</span>
                </h2>
                <p className="text-secondary mb-4 fs-5" style={{ lineHeight: '1.7' }}>
                  Lihat poster program kemitraan resmi JMV untuk informasi margin keuntungan, standar uji lab, dan program hadiah langsung distributor.
                </p>
                <div className="d-flex gap-2 mb-4 flex-wrap">
                  {CAMPAIGN_POSTERS.map((poster, idx) => (
                    <button
                      key={poster.id}
                      className="btn-modern-outline px-3 py-2"
                      onClick={() => setLightboxImage(poster.image)}
                      style={{ fontSize: '0.85rem' }}
                    >
                      {poster.title}
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="poster-deck-wrapper">
                  <div className="poster-deck">
                    {CAMPAIGN_POSTERS.map((poster, idx) => (
                      <div
                        key={poster.id}
                        className={`poster-card-3d stack-${(idx + 1) % 4}`}
                        onClick={() => setLightboxImage(poster.image)}
                      >
                        <img src={poster.image} alt={poster.title} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Running posters marquee track */}
          <div className="poster-marquee-container mt-5">
            <div className="poster-marquee-track">
              {[...CAMPAIGN_POSTERS, ...CAMPAIGN_POSTERS].map((poster, idx) => (
                <div
                  key={idx}
                  className="poster-marquee-item"
                  onClick={() => setLightboxImage(poster.image)}
                >
                  <img src={poster.image} alt={poster.title} />
                  <div className="poster-marquee-overlay">
                    <i className="bi bi-zoom-in text-white fs-3"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREATIVE PRODUCT SHOWCASE */}
        <section id="services" className="py-5" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container py-5">
            <div className="text-center mb-5 fade-up">
              <h6 className="text-red fw-bold text-uppercase mb-2">Katalog Produk</h6>
              <h2 className="display-5 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Our <span className="text-red">Premium Brands</span></h2>
              <p className="text-secondary lead">Cari produk berdasarkan kata kunci atau filter brand di bawah ini. Hover untuk melihat spesifikasi ringkas.</p>
            </div>

            {/* Brand filters navigation */}
            <div className="brand-filter-nav fade-up">
              <button
                className={`brand-filter-btn ${selectedBrand === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedBrand('all')}
              >
                Semua Produk <span className="count-badge">{brandCounts.all}</span>
              </button>
              <button
                className={`brand-filter-btn ${selectedBrand === 'mizu-x' ? 'active' : ''}`}
                onClick={() => setSelectedBrand('mizu-x')}
              >
                Mizu-X Autocare <span className="count-badge">{brandCounts['mizu-x'] || 0}</span>
              </button>
              <button
                className={`brand-filter-btn ${selectedBrand === 'agioo' ? 'active' : ''}`}
                onClick={() => setSelectedBrand('agioo')}
              >
                Agioo Coolant <span className="count-badge">{brandCounts['agioo'] || 0}</span>
              </button>
            </div>

            <div className="row g-4">
              {filteredProducts.map((prod, idx) => (
                <div className="col-lg-4 col-md-6 fade-up" style={{ animationDelay: `${idx * 0.05}s` }} key={prod.id}>
                  <div className="flip-card" onClick={() => setSelectedProductId(prod.id)}>
                    <div className="flip-card-inner">
                      {/* FRONT - Real Product Image */}
                      <div className="flip-card-front">
                        <div className="position-relative h-100" style={{ borderRadius: '8px', overflow: 'hidden', background: '#FFFFFF', border: '1px solid var(--border-color)' }}>
                          <img
                            src={prod.image}
                            alt={prod.name}
                            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', padding: '20px' }}
                          />
                          <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.98) 0%, transparent 100%)' }}>
                            <span className="card-brand-badge">{prod.brand}</span>
                            <h5 className="fw-bold mb-1" style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{prod.name}</h5>
                            <p className="text-secondary mb-0" style={{ fontSize: '0.75rem' }}>
                              <i className="bi bi-arrow-repeat me-1"></i>Hover untuk lihat detail
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* BACK - Features + CTA */}
                      <div className="flip-card-back" style={{ background: `#FFFFFF`, borderRadius: '8px' }}>
                        <div className="d-flex flex-column h-100 p-4 justify-content-between">
                          <div className="text-start">
                            <span className="card-brand-badge">{prod.brand}</span>
                            <h5 className="fw-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>{prod.name}</h5>
                            <p className="text-secondary small mb-3" style={{ fontStyle: 'italic', opacity: 0.9 }}>{prod.description}</p>
                            <ul className="list-unstyled text-secondary mb-0">
                              {prod.specs.slice(0, 3).map((spec, i) => (
                                <li key={i} className="mb-2 d-flex align-items-start">
                                  <i className="bi bi-check-circle-fill text-red me-2 mt-1 flex-shrink-0" style={{ fontSize: '0.85rem' }}></i>
                                  <span className="small">{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <button
                            className="w-100 py-2 btn-modern-red"
                            style={{ boxShadow: 'none' }}
                          >
                            Cek Detail Lengkap
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-12 text-center py-5">
                  <i className="bi bi-search text-secondary display-3 mb-3 d-block"></i>
                  <p className="text-secondary fs-5">Tidak ada produk yang cocok dengan kriteria pencarian Anda.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-5 mb-lg-0 text-center fade-up">
                <div className="position-relative">
                  <div className="bg-red rounded-circle position-absolute" style={{ width: '300px', height: '300px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', filter: 'blur(80px)', opacity: '0.1' }}></div>
                  <div className="position-relative z-1">
                    <img src="/logo-jmv.png" alt="JMV Logo" className="img-fluid" style={{ maxHeight: '180px' }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 px-lg-5 fade-up delay-100 text-start">
                <h6 className="text-red fw-bold text-uppercase tracking-wider mb-2">Tentang Perusahaan</h6>
                <h3 className="fw-bold display-6 mb-4" style={{ color: 'var(--text-primary)' }}>PT Jaya Mandiri Ventures</h3>
                <p className="text-secondary fs-5 mb-4 line-height-lg">
                  JMV adalah perusahaan yang fokus pada pengembangan produk perawatan kendaraan harian premium dengan jaringan distribusi nasional di Indonesia. Kami berkomitmen memberikan kualitas terbaik berstandar internasional.
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center p-3 rounded-3" style={{ backgroundColor: 'var(--bg-primary)', borderLeft: '4px solid var(--brand-red)', border: '1px solid var(--border-color)' }}>
                    <i className="bi bi-award fs-3 text-red me-3"></i>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>Prinsipal Otomotif & Chemical Resmi</h6>
                      <p className="text-secondary mb-0 small">Pemegang merek eksklusif Agioo, Mizu-X, dan Bio Luminex.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center p-3 rounded-3" style={{ backgroundColor: 'var(--bg-primary)', borderLeft: '4px solid var(--brand-red)', border: '1px solid var(--border-color)' }}>
                    <i className="bi bi-truck fs-3 text-red me-3"></i>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>Distribusi Nasional</h6>
                      <p className="text-secondary mb-0 small">Menjangkau kota-kota besar di Indonesia untuk menyuplai distributor resmi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BONUS HADIAH SECTION */}
        <BonusSection />

        {/* TESTIMONIALS & PARTNERS */}
        <TestimonialSection />

        {/* JENIS KEMITRAAN */}
        <PartnershipTypes />

        {/* FORMULIR KEMITRAAN */}
        <PartnershipForm />

      </main>

      {/* FOOTER DIRECTORY (Faire-Style) */}
      <footer className="py-5 bg-white" style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
        <div className="container py-4">
          <div className="row g-5">
            <div className="col-lg-4 text-start">
              <img src="/logo-jmv.png" alt="JMV Logo" style={{ height: '48px' }} className="mb-4" />
              <p className="text-secondary small mb-4" style={{ lineHeight: '1.7' }}>
                <strong>PT Jaya Mandiri Ventures</strong><br />
                Penyedia dan distributor solusi perawatan kendaraan harian premium dengan standar laboratorium ASTM internasional.
              </p>
              <div className="text-secondary small">
                <p className="mb-1"><i className="bi bi-geo-alt-fill text-red me-2"></i> Gedung SOHO, Lt. 28, Suite 2801, Jakarta Selatan, 12801, Indonesia</p>
                <p className="mb-1"><i className="bi bi-envelope-fill text-red me-2"></i> admin@jmv.co.id</p>
                <p className="mb-0"><i className="bi bi-telephone-fill text-red me-2"></i> +62 823-2324-4285</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 text-start">
              <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: '0.85rem', tracking: '1px' }}>Brands Directory</h6>
              <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                <li>Mizu-X Autocare</li>
                <li>Agioo Engine Coolant</li>
                <li>Bio Luminex Anti-Fog</li>
                <li>Maklon JMV B2B OEM</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 text-start">
              <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: '0.85rem', tracking: '1px' }}>Kemitraan & Program</h6>
              <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                <li><a href="#partnership-types" className="text-decoration-none text-secondary">Program Distributor</a></li>
                <li><a href="#partnership-types" className="text-decoration-none text-secondary">Program Reseller</a></li>
                <li><a href="#partnership" className="text-decoration-none text-secondary">Layanan Maklon Kimia</a></li>
                <li><a href="#campaigns" className="text-decoration-none text-secondary">Hadiah Langsung Reward</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 text-start">
              <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: '0.85rem', tracking: '1px' }}>Perusahaan</h6>
              <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                <li><a href="#about" className="text-decoration-none text-secondary">Tentang Kami</a></li>
                <li><a href="#services" className="text-decoration-none text-secondary">Katalog Grosir</a></li>
                <li><a href="#partnership" className="text-decoration-none text-secondary">Kontak Registrasi</a></li>
              </ul>
            </div>
          </div>
          <div className="border-top mt-5 pt-4 text-center text-secondary small d-flex flex-wrap justify-content-between align-items-center">
            <p className="mb-0">© {new Date().getFullYear()} PT Jaya Mandiri Ventures. All rights reserved.</p>
            <div className="d-flex gap-3 mt-3 mt-md-0">
              <span className="text-secondary">Sertifikasi ASTM D1120 / D1170 / D1384 / D4340</span>
            </div>
          </div>
        </div>
      </footer>

      {/* B2B DETAIL OVERLAY MODAL (Faire-Style Detail Popup) */}
      {activeProduct && (
        <div className="b2b-detail-overlay" onClick={() => setSelectedProductId(null)}>
          <div className="b2b-detail-card" onClick={(e) => e.stopPropagation()}>
            <button className="b2b-detail-close" onClick={() => setSelectedProductId(null)}>
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="row g-0">
              <div className="col-lg-5 p-4 p-md-5 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#FAF9F6' }}>
                <img src={activeProduct.image} className="img-fluid rounded shadow-sm" alt={activeProduct.name} style={{ maxHeight: '350px', objectFit: 'contain' }} />
              </div>
              <div className="col-lg-7 p-4 p-md-5 text-start d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-red mb-3 fs-7 px-3 py-1 text-white rounded-pill">{activeProduct.brand}</span>
                  <h2 className="fw-bold mb-3" style={{ color: 'var(--text-primary)', fontSize: '2rem' }}>{activeProduct.name}</h2>
                  <p className="text-secondary mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{activeProduct.description}</p>
                  
                  <h6 className="fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    <i className="bi bi-check2-circle text-red me-2"></i> Keunggulan Utama & Spesifikasi:
                  </h6>
                  <ul className="list-group list-group-flush mb-4">
                    {activeProduct.specs.map((spec, index) => (
                      <li key={index} className="list-group-item bg-transparent text-secondary px-0 py-2 border-0 d-flex align-items-center" style={{ fontSize: '0.85rem' }}>
                        <i className="bi bi-check text-red fs-5 me-2"></i> {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-top pt-4 mt-3">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <span className="small text-secondary d-block">Potensi Keuntungan Grosir</span>
                      <span className="fs-5 fw-bold text-success">30% Margin Bersih</span>
                    </div>
                    <div>
                      <span className="small text-secondary d-block">Skema Logistik</span>
                      <span className="small fw-bold text-dark">Gratis Kirim Gudang</span>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <a
                      href={`https://wa.me/6282323244285?text=Halo%20JMV,%20saya%20tertarik%20bertanya%20mengenai%20wholesale%20grosir%20untuk%20produk%20${encodeURIComponent(activeProduct.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-modern-red text-decoration-none flex-grow-1 text-center"
                    >
                      <i className="bi bi-whatsapp me-2"></i> Ajukan Penawaran Grosir
                    </a>
                    <button onClick={() => setSelectedProductId(null)} className="btn-modern-outline">
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX OVERLAY */}
      {lightboxImage && (
        <div className="b2b-detail-overlay" onClick={() => setLightboxImage(null)}>
          <div className="position-relative text-center" onClick={(e) => e.stopPropagation()}>
            <button
              className="b2b-detail-close"
              style={{ top: '-45px', right: '0' }}
              onClick={() => setLightboxImage(null)}
            >
              <i className="bi bi-x-lg"></i>
            </button>
            <img
              src={lightboxImage}
              alt="Campaign Poster"
              className="img-fluid rounded shadow-lg animate-zoom"
              style={{ maxHeight: '85vh', maxWidth: '95vw', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}

      {/* TOMBOL WHATSAPP MELAYANG */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;