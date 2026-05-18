import React, { useState } from 'react';
import './App.css'; // Pastikan custom CSS dimuat

// DATA PRODUK
const PRODUCT_DATA = [
  {
    id: 'air-freshener',
    name: 'Air Freshener Ice Cream Bar',
    brand: 'Mizu-X',
    brandColor: '#d32f2f',
    icon: 'bi-wind',
    description: 'Aroma segar Ice Cream Bar yang menyegarkan, wangi tahan lama hingga 30 hari untuk menemani setiap perjalanan.',
    specs: ['Ketahanan Wangi hingga 30 Hari', 'Aroma Premium: Ice Cream Bar & Morning Coffee', 'Hilangkan Bau Tidak Sedap', 'Formula Ramah Lingkungan'],
    //image: '/assets/productdata/Mizu x Air Freshener.jpeg',
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
    image2: '/assets/productdata/premium coolant 2.jpeg',
  },
];

// KOMPONEN BONUS (BARU)
const BonusSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 fade-up">
            <div className="bg-gradient-red p-5 rounded-4 h-100 text-center text-lg-start d-flex flex-column justify-content-center border shadow-lg" style={{ borderColor: 'var(--brand-red)', minHeight: '380px' }}>
              <h2 className="display-4 fw-bold text-white mb-4">Selalu Ada<br />Bonus</h2>
              <div>
                <a href="#partnership" className="btn-yellow-glow d-inline-flex align-items-center text-decoration-none">
                  Tanya-Tanya via Chat
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 fade-up delay-100">
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-check2"></i></div>
              <h5 className="mb-0 text-white fw-bold">BONUS Voucher Pertamina</h5>
              <div className="ms-auto text-success fs-3"><i className="bi bi-cash-stack"></i></div>
            </div>
            <div className="bonus-list-item" style={{ animationDelay: '0.1s' }}>
              <div className="bonus-icon-circle"><i className="bi bi-check2"></i></div>
              <h5 className="mb-0 text-white fw-bold">BONUS EMAS</h5>
              <div className="ms-auto text-warning fs-3"><i className="bi bi-gem"></i></div>
            </div>
            <div className="bonus-list-item" style={{ animationDelay: '0.2s' }}>
              <div className="bonus-icon-circle"><i className="bi bi-check2"></i></div>
              <h5 className="mb-0 text-white fw-bold">HADIAH Motor</h5>
              <div className="ms-auto text-light fs-3"><i className="bi bi-bicycle"></i></div>
            </div>
            <div className="bonus-list-item" style={{ animationDelay: '0.3s' }}>
              <div className="bonus-icon-circle"><i className="bi bi-lightning-charge-fill text-dark"></i></div>
              <h5 className="mb-0 text-white fw-bold">HADIAH MOBIL TRAGA</h5>
              <div className="ms-auto text-light fs-3"><i className="bi bi-truck"></i></div>
            </div>
            <div className="bonus-list-item" style={{ animationDelay: '0.4s' }}>
              <div className="bonus-icon-circle"><i className="bi bi-check2"></i></div>
              <h5 className="mb-0 text-white fw-bold">HADIAH MENARIK LAINNYA</h5>
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
    <section className="position-relative py-5 mt-4 overflow-hidden" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      {/* Background Decor */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 80% 20%, rgba(211, 47, 47, 0.3) 0%, rgba(10, 10, 10, 1) 60%)',
        zIndex: 0
      }}></div>

      <div className="container py-5 position-relative z-1">
        <div className="row align-items-center g-5">
          {/* Bagian Kiri: Hook Utama */}
          <div className="col-lg-6 fade-up">
            <span className="badge bg-red mb-3 px-3 py-2 rounded-pill letter-spacing-1">PELUANG EMAS</span>
            <h2 className="display-4 fw-bold text-white mb-4 line-height-sm">
              Produk <span className="text-red">Trending</span>,<br />Jualannya Gampang,<br />Bonus Gak Pake Nunggu.
            </h2>
            <div className="p-4 rounded-4 mb-5" style={{ background: 'rgba(211, 47, 47, 0.1)', borderLeft: '4px solid var(--brand-red)' }}>
              <p className="fw-bold text-white text-uppercase tracking-wider mb-2" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                PRODUK AUTOCARE JARINGAN NASIONAL
              </p>
              <h3 className="fw-bold text-red mb-3" style={{ textShadow: '0 0 15px rgba(211,47,47,0.8), 0 0 30px rgba(211,47,47,0.4)' }}>
                MARGIN BESAR UP TO 30%
              </h3>
              <p className="text-white mb-0" style={{ textShadow: '0 0 8px rgba(255,255,255,0.3)', opacity: '0.9' }}>
                Agioo & Mizu-X dari PT JAYA MANDIRI VENTURES membuka peluang bisnis dengan potensi untung harian dan bonus bulanan yang langsung terasa.
              </p>
            </div>
            <a href="#partnership" className="btn-yellow-glow d-inline-flex align-items-center text-decoration-none">
              <i className="bi bi-chat-dots-fill me-2 fs-5"></i> TANYA TANYA VIA CHAT
            </a>
          </div>

          {/* Bagian Kanan: Fitur Grid */}
          <div className="col-lg-6">
            <div className="row g-4 align-items-stretch">
              <div className="col-sm-6 fade-up delay-100">
                <div className="p-4 rounded-4 h-100 shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                  <div className="bg-red text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem', boxShadow: '0 0 15px rgba(211,47,47,0.6)' }}>
                    <i className="bi bi-car-front-fill"></i>
                  </div>
                  <h5 className="text-white fw-bold mb-2">Produk Autocare</h5>
                  <p className="text-secondary small mb-0">Dipakai untuk semua kendaraan harian.</p>
                </div>
              </div>
              <div className="col-sm-6 fade-up delay-200">
                <div className="p-4 rounded-4 h-100 shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                  <div className="bg-red text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem', boxShadow: '0 0 15px rgba(211,47,47,0.6)' }}>
                    <i className="bi bi-cash-coin"></i>
                  </div>
                  <h5 className="text-white fw-bold mb-2">Cuan Maksimal!!</h5>
                  <p className="text-secondary small mb-0">Dapatkan potensi keuntungan paling besar.</p>
                </div>
              </div>
              <div className="col-sm-6 fade-up delay-300">
                <div className="p-4 rounded-4 h-100 shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                  <div className="bg-red text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem', boxShadow: '0 0 15px rgba(211,47,47,0.6)' }}>
                    <i className="bi bi-gift-fill"></i>
                  </div>
                  <h5 className="text-white fw-bold mb-2">Bonus Langsung</h5>
                  <p className="text-secondary small mb-0">Hadiahnya langsung diberikan tanpa diundi.</p>
                </div>
              </div>
              <div className="col-sm-6 fade-up delay-300">
                <div className="p-4 rounded-4 h-100 d-flex flex-column justify-content-center text-center shadow-lg" style={{ background: 'linear-gradient(135deg, var(--brand-red) 0%, #a00000 100%)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 0 25px rgba(211,47,47,0.6)' }}>
                  <h4 className="text-white fw-bold mb-3" style={{ textShadow: '0 0 10px rgba(255,255,255,0.6)' }}>HADIAH TANPA DIUNDI!</h4>
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
    <section className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container py-5">
        <div className="text-center mb-5 fade-up">
          <h2 className="display-4 fw-bold text-white">Jenis <span className="text-red">Kemitraan</span></h2>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 fade-up delay-100">
            <div className="partnership-card text-center">
              <i className="bi bi-building icon-top"></i>
              <h3 className="fw-bold text-white mb-3">Distributor</h3>
              <p className="text-secondary fw-bold fs-5">Untuk Pengambilan IDR 75 Juta Keatas</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 fade-up delay-200">
            <div className="partnership-card text-center">
              <i className="bi bi-star-fill icon-top"></i>
              <h3 className="fw-bold text-white mb-3">Reseller</h3>
              <p className="text-secondary fw-bold fs-5">Untuk Pengambilan IDR 75 Juta Kebawah</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 fade-up delay-300">
            <div className="partnership-card text-center">
              <i className="bi bi-boxes icon-top"></i>
              <h3 className="fw-bold text-white mb-3">Special Orders</h3>
              <p className="text-secondary fw-bold fs-5">Pesanan Khusus yang Fleksibel Seperti Maklon, B2B, dll.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// KOMPONEN FORMULIR KEMITRAAN
const PartnershipForm = () => {
  return (
    <section id="partnership" className="py-5" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container py-5">
        <div className="text-center mb-5 fade-up">
          <h2 className="display-5 fw-bold text-white mb-3">Tertarik Jadi <span className="text-red">Distributor?</span></h2>
          <p className="lead text-secondary">Penawaran eksklusif ini khusus untuk perusahaan berbadan hukum PT / CV.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 fade-up delay-100">
            <div className="glass-panel p-4 p-md-5 rounded-4 border-red" style={{ borderWidth: '1px', borderStyle: 'solid' }}>
              <h4 className="fw-bold mb-4 text-center text-white">Isi Form Singkat di Bawah Ini</h4>
              <form className="form-modern-dark" onSubmit={(e) => { e.preventDefault(); alert('Formulir berhasil dikirim!'); }}>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Nama Depan *" required />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Nama Belakang" />
                  </div>
                </div>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <input type="tel" className="form-control" placeholder="Nomor Telp Kantor / Toko *" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email Perusahaan *" required />
                  </div>
                </div>
                <div className="mb-4">
                  <input type="text" className="form-control" placeholder="Nama Usaha * (Contoh: CV. Bengkel Mitra Sejati)" required />
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

// KOMPONEN PRODUCT SHOWCASE (CARD GRID + FLIP + DETAIL)
const CreativeProductShowcase = ({ onSelectProduct }) => {
  return (
    <section id="services" className="py-5" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid var(--border-color)' }}>
      <div className="container py-5">
        <div className="text-center mb-5 fade-up">
          <h6 className="text-red fw-bold text-uppercase mb-2">Katalog Produk</h6>
          <h2 className="display-5 fw-bold text-white mb-3">Our <span className="text-red">Premium Brands</span></h2>
          <p className="text-secondary lead">Hover kartu untuk melihat keunggulan. Klik untuk detail lengkap.</p>
        </div>
        <div className="row g-4">
          {PRODUCT_DATA.map((prod, idx) => (
            <div className="col-lg-4 col-md-6 fade-up" style={{ animationDelay: `${idx * 0.1}s` }} key={prod.id}>
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
                          <i className="bi bi-arrow-repeat me-1"></i>Hover untuk lihat detail
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* BACK - Features + CTA */}
                  <div className="flip-card-back" style={{ background: `linear-gradient(135deg, ${prod.brandColor}dd 0%, ${prod.brandColor} 100%)`, borderRadius: '20px' }}>
                    <div className="d-flex flex-column h-100 p-4">
                      <h5 className="fw-bold text-white mb-1">{prod.name}</h5>
                      <span className="badge bg-white text-dark mb-3 align-self-start px-2 py-1 small">{prod.brand}</span>
                      <p className="text-white small mb-3" style={{ fontStyle: 'italic', opacity: 0.9 }}>{prod.description}</p>
                      <ul className="list-unstyled text-white flex-grow-1 mb-4">
                        {prod.specs.map((spec, i) => (
                          <li key={i} className="mb-2 d-flex align-items-start">
                            <i className="bi bi-check-circle-fill me-2 mt-1 flex-shrink-0" style={{ fontSize: '0.85rem' }}></i>
                            <span className="small">{spec}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className="w-100 py-2 fw-bold rounded-pill border-0 text-dark"
                        style={{ background: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', cursor: 'pointer' }}
                      >
                        <i className="bi bi-arrow-right-circle me-2"></i>Cek Detail Lengkap
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
    <section className="py-5 overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Marquee Partners */}
      <div className="marquee-container mb-5 fade-up">
        <div className="marquee-content">
          <span className="partner-logo-text">PERTAMINA</span>
          <span className="partner-logo-text">MUJ</span>
          <span className="partner-logo-text text-primary">ENM</span>
          <span className="partner-logo-text text-red">DKSH</span>
          <span className="partner-logo-text text-success">SAI</span>
          <span className="partner-logo-text text-info">bene digital</span>
          <span className="partner-logo-text text-danger">bright by Alfamart</span>
          {/* Duplicate for infinite effect */}
          <span className="partner-logo-text">PERTAMINA</span>
          <span className="partner-logo-text">MUJ</span>
          <span className="partner-logo-text text-primary">ENM</span>
          <span className="partner-logo-text text-red">DKSH</span>
          <span className="partner-logo-text text-success">SAI</span>
          <span className="partner-logo-text text-info">bene digital</span>
          <span className="partner-logo-text text-danger">bright by Alfamart</span>
        </div>
      </div>

      <div className="container py-5">
        <div className="text-center mb-5 fade-up">
          <h6 className="text-red fw-bold text-uppercase mb-2">Testimoni</h6>
          <h2 className="display-5 fw-bold text-white mb-3">Happy <span className="text-red">Clients & Partners</span></h2>
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

// KOMPONEN TOMBOL WHATSAPP BARU
const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/628111111111?text=Halo%20JMV,%20saya%20tertarik%20menjadi%20distributor"
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

  const renderContent = () => {
    if (selectedProductId) {
      const product = PRODUCT_DATA.find(p => p.id === selectedProductId);
      return (
        <div className="container py-5 mt-5 fade-up">
          <div className="row align-items-center mt-5">
            <div className="col-lg-6 mb-4 text-center">
              <img src={product.image} className="img-fluid rounded-4 shadow-lg border border-dark" alt={product.name} />
            </div>
            <div className="col-lg-6 px-lg-5">
              <span className="badge bg-red mb-3 fs-6 px-3 py-2 rounded-pill">{product.brand}</span>
              <h2 className="fw-bold display-4 text-white mb-3">{product.name}</h2>
              <p className="lead text-secondary mb-5">{product.description}</p>

              <h5 className="fw-bold text-white mb-3 d-flex align-items-center">
                <i className="bi bi-star-fill text-red me-2"></i> Kelebihan Utama:
              </h5>
              <ul className="list-group list-group-flush mb-5 bg-transparent">
                {product.specs.map((spec, index) => (
                  <li key={index} className="list-group-item bg-transparent text-secondary px-0 border-secondary d-flex align-items-center">
                    <i className="bi bi-check2-circle text-red fs-5 me-3"></i> {spec}
                  </li>
                ))}
              </ul>
              <button onClick={() => setSelectedProductId(null)} className="btn-modern-outline">
                <i className="bi bi-arrow-left me-2"></i> Kembali ke Beranda
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <main>
        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          <img src="/hero-bg.jpg" className="hero-bg-image" alt="Mizu-X Agioo Background" />
          <div className="hero-overlay"></div>

          <div className="container hero-content text-center fade-up pb-5">
            <span className="badge bg-transparent border border-red text-red rounded-pill px-3 py-2 mb-4 fw-bold letter-spacing-1">AUTOCARE PRINCIPAL</span>
            <h1 className="display-2 fw-bold text-white mb-4">
              Solusi Perawatan Mobil <br /><span className="text-red">Premium</span> & Peluang Bisnis
            </h1>
            <p className="fs-5 text-secondary mb-5 max-w-700 mx-auto" style={{ maxWidth: '700px' }}>
              Prinsipal & Distributor Resmi merek otomotif ternama: Agioo, Mizu-X, dan Bio Luminex. Berkualitas, teruji, dan menguntungkan.
            </p>

            <div className="d-flex gap-3 justify-content-center mb-5">
              <a href="#services" className="btn-modern-red text-decoration-none">Lihat Produk Kami</a>
              <a href="#partnership" className="btn-modern-outline text-decoration-none">Jadi Distributor</a>
            </div>

            <div className="row gy-4 mt-5 justify-content-center fade-up delay-200">
              <div className="col-md-4 d-flex">
                <div className="trust-badge d-flex flex-column w-100">
                  <i className="bi bi-check-all icon-main"></i>
                  <h3 className="fw-bold text-white mb-2">Lolos Sertifikasi ASTM</h3>
                  <p className="text-secondary small mb-3 border-bottom border-secondary pb-2">ASTM = American Standard Testing and Material</p>
                  <ul className="list-unstyled text-secondary small text-start ps-3 mb-0 flex-grow-1">
                    <li className="mb-1"><i className="bi bi-check text-red fs-5 me-1 align-middle"></i> ASTM D1120 (Titik Didih)</li>
                    <li className="mb-1"><i className="bi bi-check text-red fs-5 me-1 align-middle"></i> ASTM D1170 (Titik Beku)</li>
                    <li className="mb-1"><i className="bi bi-check text-red fs-5 me-1 align-middle"></i> ASTM D1384, D4340, D2809</li>
                  </ul>
                  <p className="text-secondary small mt-3 pt-2 border-top border-secondary mb-0">(Perlindungan terhadap Karat dan Korosi)</p>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="trust-badge d-flex flex-column w-100">
                  <i className="bi bi-bicycle icon-main"></i>
                  <h3 className="fw-bold text-white mb-3">Cocok Untuk Semua Motor & Mobil</h3>
                  <p className="text-secondary mb-4 flex-grow-1">Formula unggulan yang didesain untuk performa optimal baik pada mobil maupun motor yang menggunakan radiator.</p>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="trust-badge d-flex flex-column w-100">
                  <i className="bi bi-bag-check-fill icon-main"></i>
                  <h3 className="fw-bold text-white mb-3">Jaringan Retail Nasional</h3>
                  <p className="text-secondary mb-4 flex-grow-1">Dipercaya oleh jaringan retail ternama di Indonesia.</p>
                  <p className="text-secondary small mt-auto mb-0">(Di-support dan tersedia di MUJ & Bright by Pertamina, Bright by Alfamart, Bright by Indomaret, Transmart, and many more...)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION RED BANNER */}
        <ValuePropositionBanner />

        {/* ABOUT SECTION */}
        <section id="about" className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-5 mb-lg-0 text-center fade-up">
                <div className="position-relative">
                  <div className="bg-red rounded-circle position-absolute" style={{ width: '300px', height: '300px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', filter: 'blur(80px)', opacity: '0.2' }}></div>
                  <div className="position-relative z-1">
                    <img src="/logo-jmv.png" alt="JMV Logo" className="img-fluid" style={{ maxHeight: '200px' }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 px-lg-5 fade-up delay-100">
                <h6 className="text-red fw-bold text-uppercase tracking-wider mb-2">Tentang Perusahaan</h6>
                <h3 className="fw-bold text-white display-6 mb-4">PT Jaya Mandiri Ventures</h3>
                <p className="text-secondary fs-5 mb-4 line-height-lg">
                  JMV adalah perusahaan yang fokus pada pengembangan produk berkualitas premium dan mendistribusikannya melalui jaringan retail berskala nasional. Kami berkomitmen memberikan yang terbaik untuk performa kendaraan Anda.
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center p-3 rounded-3" style={{ backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--brand-red)' }}>
                    <i className="bi bi-award fs-3 text-red me-3"></i>
                    <div>
                      <h6 className="text-white fw-bold mb-1">Prinsipal Resmi</h6>
                      <p className="text-secondary mb-0 small">Pemegang merek Agioo, Mizu-X, dan Bio Luminex.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center p-3 rounded-3" style={{ backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--brand-red)' }}>
                    <i className="bi bi-truck fs-3 text-red me-3"></i>
                    <div>
                      <h6 className="text-white fw-bold mb-1">Distribusi Nasional</h6>
                      <p className="text-secondary mb-0 small">Menjangkau seluruh wilayah Indonesia dengan sistem terintegrasi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B2B CHANNELS */}
        <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container text-center fade-up">
            <p className="text-secondary mb-4 fw-bold letter-spacing-1 text-uppercase">Tersedia di Jaringan Retail & B2B Channels:</p>
            <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-5 fs-3 fw-bold text-white opacity-50">
              <span className="hover-opacity-100 transition">DAIHATSU</span>
              <span className="hover-opacity-100 transition">ISUZU</span>
              <span className="hover-opacity-100 transition">DAMRI</span>
              <span className="hover-opacity-100 transition">JAK LINGKO</span>
            </div>
          </div>
        </section>

        {/* BONUS SECTION */}
        <BonusSection />

        {/* CREATIVE PRODUCT SHOWCASE */}
        <CreativeProductShowcase onSelectProduct={setSelectedProductId} />

        {/* TESTIMONIALS & PARTNERS */}
        <TestimonialSection />

        {/* JENIS KEMITRAAN */}
        <PartnershipTypes />

        {/* FORMULIR KEMITRAAN */}
        <PartnershipForm />

      </main>
    );
  };

  return (
    <div className="app-container">
      {/* HEADER FIXED */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-glass fixed-top py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#" onClick={(e) => { e.preventDefault(); setSelectedProductId(null); }}>
            <img src="/logo-jmv.png" alt="JMV Logo" style={{ height: '45px' }} />
          </a>
          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav mx-auto gap-3 gap-lg-4 my-3 my-lg-0">
              <a href="#hero" className="nav-link" onClick={() => setSelectedProductId(null)}>Home</a>
              <a href="#about" className="nav-link" onClick={() => setSelectedProductId(null)}>Tentang JMV</a>
              <a href="#services" className="nav-link" onClick={() => setSelectedProductId(null)}>Produk</a>
            </div>
            <a className="btn-modern-red d-inline-block text-center text-decoration-none" href="#partnership">
              Daftar Distributor
            </a>
          </div>
        </div>
      </nav>

      {/* KONTEN UTAMA */}
      {renderContent()}

      {/* FOOTER */}
      <footer className="py-5 text-center" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="mb-4">
            <img src="/logo-jmv.png" alt="JMV Logo" style={{ height: '70px' }} />
          </div>
          <p className="text-secondary mb-0">© {new Date().getFullYear()} <strong className="text-white">PT Jaya Mandiri Ventures</strong>. All Rights Reserved.</p>
        </div>
      </footer>

      {/* TOMBOL WHATSAPP MELAYANG */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;