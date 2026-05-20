import React, { useState, useMemo, useEffect } from 'react';
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

// KOMPONEN BONUS
const BonusSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container py-5">
        <div className="row align-items-center g-5 reveal">
          <div className="col-lg-5">
            <div className="bg-gradient-red p-5 rounded-4 h-100 text-center text-lg-start d-flex flex-column justify-content-center border shadow-lg" style={{ borderColor: 'var(--brand-red)', minHeight: '380px' }}>
              <h2 className="display-4 fw-bold text-white mb-4">Selalu Ada<br />Bonus & Hadiah</h2>
              <div>
                <a href="#partnership" className="btn-yellow-glow d-inline-flex align-items-center text-decoration-none">
                  Tanya-Tanya via Chat
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="bonus-list-item">
              <div className="bonus-icon-circle"><i className="bi bi-gift-fill"></i></div>
              <h5 className="mb-0 text-white fw-bold">Hadiah Langsung Voucher PERTAMINA</h5>
              <div className="ms-auto text-success fs-3"><i className="bi bi-cash-stack"></i></div>
            </div>
            <div className="bonus-list-item" style={{ transitionDelay: '0.1s' }}>
              <div className="bonus-icon-circle"><i className="bi bi-award-fill"></i></div>
              <h5 className="mb-0 text-white fw-bold">Hadiah Langsung Logam Emas</h5>
              <div className="ms-auto text-warning fs-3"><i className="bi bi-gem"></i></div>
            </div>
            <div className="bonus-list-item" style={{ transitionDelay: '0.2s' }}>
              <div className="bonus-icon-circle"><i className="bi bi-phone-fill"></i></div>
              <h5 className="mb-0 text-white fw-bold">Hadiah Langsung Handphone Premium</h5>
              <div className="ms-auto text-info fs-3"><i className="bi bi-phone"></i></div>
            </div>
            <div className="bonus-list-item" style={{ transitionDelay: '0.3s' }}>
              <div className="bonus-icon-circle"><i className="bi bi-bicycle"></i></div>
              <h5 className="mb-0 text-white fw-bold">Hadiah Langsung Motor Listrik</h5>
              <div className="ms-auto text-danger fs-3"><i className="bi bi-bicycle"></i></div>
            </div>
            <div className="bonus-list-item" style={{ transitionDelay: '0.4s' }}>
              <div className="bonus-icon-circle"><i className="bi bi-truck"></i></div>
              <h5 className="mb-0 text-white fw-bold">Hadiah Langsung Mobil Traga</h5>
              <div className="ms-auto text-primary fs-3"><i className="bi bi-truck"></i></div>
            </div>
            <div className="bonus-list-item" style={{ transitionDelay: '0.5s' }}>
              <div className="bonus-icon-circle"><i className="bi bi-gift"></i></div>
              <h5 className="mb-0 text-white fw-bold">Hadiah Untung Lainnya...</h5>
              <div className="ms-auto text-light fs-3"><i className="bi bi-gift-fill"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// KOMPONEN VALUE PROPOSITION RED BANNER
const ValuePropositionBanner = () => {
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
            <span className="badge bg-red mb-3 px-3 py-2 rounded-pill letter-spacing-1">PELUANG EMAS</span>
            <h2 className="display-4 fw-bold text-white mb-4 line-height-sm">
              Jualannya Laris,<br />Cuan-nya <span className="text-red">Manissss…</span>
            </h2>
            <div className="p-4 rounded-4 mb-5" style={{ background: 'rgba(211, 47, 47, 0.1)', borderLeft: '4px solid var(--brand-red)' }}>
              <p className="fw-bold text-white text-uppercase tracking-wider mb-2" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                PRODUK AUTOCARE JARINGAN NASIONAL
              </p>
              <h3 className="fw-bold text-red mb-3" style={{ textShadow: '0 0 15px rgba(211,47,47,0.8), 0 0 30px rgba(211,47,47,0.4)' }}>
                MARGIN BESAR UP TO 30%
              </h3>
              <p className="text-white mb-0" style={{ textShadow: '0 0 8px rgba(255,255,255,0.3)', opacity: '0.9' }}>
                Agioo & Mizu-X adalah brand dari PT JAYA MANDIRI VENTURES — perusahaan distribusi produk otomotif dengan jaringan retail nasional. Sekarang, siapa pun bisa ikut jualan produk fast-moving ini dengan potensi untung harian dan bonus bulanan yang langsung terasa.
              </p>
            </div>
            <a href="https://wa.me/6282323244285?text=Halo%20JMV,%20saya%20tertarik%20membahas%20kemitraan%20dan%20margin%20grosir." target="_blank" rel="noopener noreferrer" className="btn-yellow-glow d-inline-flex align-items-center text-decoration-none">
              <i className="bi bi-chat-dots-fill me-2 fs-5"></i> Tanya-Tanya via Chat
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
                  <h5 className="text-white fw-bold mb-2">Produk Autocare</h5>
                  <p className="text-secondary small mb-0">Dipakai untuk semua kendaraan harian.</p>
                </div>
              </div>
              <div className="col-sm-6" style={{ transitionDelay: '0.2s' }}>
                <div className="p-4 rounded-4 h-100 stats-card">
                  <div className="bg-red text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem', boxShadow: '0 0 15px rgba(211,47,47,0.6)' }}>
                    <i className="bi bi-cash-coin"></i>
                  </div>
                  <h5 className="text-white fw-bold mb-2">Cuan Maksimal!!</h5>
                  <p className="text-secondary small mb-0">Dapatkan potensi keuntungan paling besar.</p>
                </div>
              </div>
              <div className="col-sm-6" style={{ transitionDelay: '0.3s' }}>
                <div className="p-4 rounded-4 h-100 stats-card">
                  <div className="bg-red text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem', boxShadow: '0 0 15px rgba(211,47,47,0.6)' }}>
                    <i className="bi bi-gift-fill"></i>
                  </div>
                  <h5 className="text-white fw-bold mb-2">Bonus Langsung</h5>
                  <p className="text-secondary small mb-0">Hadiahnya langsung diberikan tanpa diundi.</p>
                </div>
              </div>
              <div className="col-sm-6" style={{ transitionDelay: '0.4s' }}>
                <div className="p-4 rounded-4 h-100 d-flex flex-column justify-content-center text-center stats-card" style={{ background: 'linear-gradient(135deg, var(--brand-red) 0%, #a00000 100%)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 0 25px rgba(211,47,47,0.6)' }}>
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

// KOMPONEN DATA STATISTIK JMV
const StatsSection = () => {
  const stats = [
    { number: '30%', label: 'Margin Keuntungan', desc: 'Margin retail & grosir tinggi hingga 30% untuk keuntungan maksimal.', icon: 'bi-cash-coin' },
    { number: '100%', label: 'Lulus Uji ASTM', desc: 'Cairan radiator teruji standar laboratorium internasional ASTM.', icon: 'bi-award-fill' },
    { number: 'Nasional', label: 'Distribusi Retail', desc: 'Stok tersebar di Bright, Indomaret, Transmart, MUJ, dll.', icon: 'bi-buildings-fill' },
    { number: '24/7', label: 'Support Kemitraan', desc: 'Pendampingan marketing, promo produk, dan armada logistik JMV.', icon: 'bi-headset' }
  ];

  return (
    <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      {/* Background ambient glow blob */}
      <div className="ambient-glow-2" style={{ top: '10%', right: '5%' }}></div>
      <div className="container py-5 position-relative z-1 reveal">
        <div className="text-center mb-5">
          <h6 className="text-red fw-bold text-uppercase tracking-wider mb-2">Mengapa Memilih Kami?</h6>
          <h2 className="display-4 fw-bold text-white mb-3">JMV <span className="text-red">Dalam Angka</span></h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px' }}>Kami menyediakan produk berkualitas tinggi didukung oleh ekosistem kemitraan yang kuat.</p>
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
const CampaignGallerySection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);

  const CAMPAIGN_POSTERS = [
    {
      id: 'hadiah',
      title: 'Hadiah Langsung Tanpa Diundi',
      subtitle: 'Program Reward Distributor JMV',
      description: 'Dapatkan Voucher Pertamina, Logam Emas, HP, Motor, hingga Mobil Traga secara langsung tanpa perlu diundi! Setiap transaksi bernilai poin reward yang bisa langsung ditukar.',
      image: '/assets/posters/poster-hadiah.jpg',
      badge: 'Rewards & Bonus',
      color: '#d32f2f',
      waText: 'Halo JMV, saya ingin bertanya tentang Program Reward dan Hadiah Langsung untuk Distributor.'
    },
    {
      id: 'armada',
      title: 'Armada & Distribusi Non-Stop',
      subtitle: 'Logistik Andalan Setiap Hari',
      description: 'Didukung oleh sistem pergudangan modern dan jaringan pengiriman terintegrasi (motorist & armada truk) langsung ke bengkel, toko, dan retail mitra. Stok barang selalu terjamin aman.',
      image: '/assets/posters/poster-armada.jpg',
      badge: 'Logistik & Distribusi',
      color: '#ff9800',
      waText: 'Halo JMV, saya ingin tahu lebih lanjut mengenai dukungan Logistik dan Distribusi JMV.'
    },
    {
      id: 'solusi',
      title: 'Solusi Autocare Premium',
      subtitle: 'Mizu-X & Agioo Performance',
      description: 'Menyediakan lini produk car care harian teruji dengan margin keuntungan hingga 30%. Solusi perawatan kendaraan berkelas yang diminati oleh bengkel dan retail seluruh Indonesia.',
      image: '/assets/posters/poster-solusi.jpg',
      badge: 'Autocare & Car Care',
      color: '#b71c1c',
      waText: 'Halo JMV, saya tertarik menjadi distributor produk Autocare Mizu-X & Agioo.'
    },
    {
      id: 'coolant',
      title: 'Engine Coolant Berstandar ASTM',
      subtitle: 'Pendinginan Optimal untuk Mesin',
      description: 'Cairan radiator premium lulus uji ASTM internasional (D1120, D1170, D1384, D4340, D2809) yang memberikan perlindungan anti-karat dan mencegah overheat pada semua jenis kendaraan.',
      image: '/assets/posters/poster-coolant.jpg',
      badge: 'Radiator Coolant',
      color: '#0d47a1',
      waText: 'Halo JMV, saya ingin bertanya mengenai spesifikasi produk Radiator Coolant dan pembelian distributor.'
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
          <h6 className="text-red fw-bold text-uppercase tracking-wider mb-2">Program Unggulan</h6>
          <h2 className="display-4 fw-bold text-white mb-3">Distributor <span className="text-red">Campaigns</span></h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px' }}>Lihat berbagai penawaran, dukungan logistik, dan reward menarik dari JMV. Klik atau hover poster untuk detail lengkap.</p>
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
                  <i className="bi bi-whatsapp me-2"></i> Tanya Program Ini
                </a>
                <button
                  onClick={() => setLightboxImg(activePoster)}
                  className="btn-modern-outline d-inline-flex align-items-center text-white"
                >
                  <i className="bi bi-zoom-in me-2"></i> Zoom Poster
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

      {/* Running Poster Marquee */}
      <div className="poster-marquee-container reveal">
        <div className="poster-marquee-track">
          {[...CAMPAIGN_POSTERS, ...CAMPAIGN_POSTERS].map((poster, idx) => (
            <div
              key={`${poster.id}-${idx}`}
              className="poster-marquee-item"
              onClick={() => setLightboxImg(poster)}
            >
              <img src={poster.image} alt={poster.title} />
              <div className="poster-marquee-overlay">
                <i className="bi bi-zoom-in"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphic Lightbox Overlay */}
      {lightboxImg && (
        <div className="lightbox-backdrop active" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="lightbox-body">
              <img src={lightboxImg.image} alt={lightboxImg.title} className="lightbox-img" />
            </div>
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
                <i className="bi bi-whatsapp me-2"></i> Hubungi Sales
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// KOMPONEN JENIS KEMITRAAN
const PartnershipTypes = () => {
  return (
    <section id="partnership-types" className="py-5" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container py-5 reveal">
        <div className="text-center mb-5">
          <h6 className="text-red fw-bold text-uppercase tracking-wider mb-2">Program Kemitraan</h6>
          <h2 className="display-4 fw-bold text-white mb-3">Jenis <span className="text-red">Kemitraan JMV</span></h2>
          <p className="text-secondary lead mx-auto mb-5" style={{ maxWidth: '600px' }}>Pilih jenis kemitraan yang paling sesuai dengan kapasitas bisnis Anda. Kami mendukung pertumbuhan Anda dari awal.</p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-3 col-md-6" style={{ transitionDelay: '0.1s' }}>
            <div className="trust-badge d-flex flex-column h-100 p-4 justify-content-between">
              <div>
                <i className="bi bi-building text-red fs-1 mb-3 d-block"></i>
                <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.4rem' }}>Distributor</h3>
                <p className="text-secondary small mb-3">Pengambilan IDR 75 Juta ke atas.</p>
              </div>
              <ul className="list-unstyled text-secondary small text-start my-3 flex-grow-1">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> Margin Keuntungan 30%</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> Proteksi Area Distribusi</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> Hadiah Langsung Tanpa Diundi</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" style={{ transitionDelay: '0.2s' }}>
            <div className="trust-badge d-flex flex-column h-100 p-4 justify-content-between">
              <div>
                <i className="bi bi-star-fill text-red fs-1 mb-3 d-block"></i>
                <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.4rem' }}>Reseller</h3>
                <p className="text-secondary small mb-3">Pengambilan IDR 75 Juta ke bawah.</p>
              </div>
              <ul className="list-unstyled text-secondary small text-start my-3 flex-grow-1">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> Tanpa Syarat Minimum PT/CV</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> Produk Fast-Moving Harian</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> Akses Aset Pemasaran & Foto</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" style={{ transitionDelay: '0.3s' }}>
            <div className="trust-badge d-flex flex-column h-100 p-4 justify-content-between">
              <div>
                <i className="bi bi-person-lines-fill text-red fs-1 mb-3 d-block"></i>
                <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.4rem' }}>Mitra Feeder</h3>
                <p className="text-secondary small mb-3">Sistem komisi / referral per PO.</p>
              </div>
              <ul className="list-unstyled text-secondary small text-start my-3 flex-grow-1">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> Komisi 1.5% (Personal)</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> Komisi 5% (Perusahaan PT/CV)</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> Tanpa Modal & Stok Barang</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" style={{ transitionDelay: '0.4s' }}>
            <div className="trust-badge d-flex flex-column h-100 p-4 justify-content-between">
              <div>
                <i className="bi bi-boxes text-red fs-1 mb-3 d-block"></i>
                <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.4rem' }}>B2B / Maklon</h3>
                <p className="text-secondary small mb-3">Produksi khusus & merek sendiri.</p>
              </div>
              <ul className="list-unstyled text-secondary small text-start my-3 flex-grow-1">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> Formulasi Kustom Kimia Autocare</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> Labeling & Pengemasan OEM</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-red me-2"></i> Legalitas & Sertifikasi ASTM</li>
              </ul>
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
      <div className="container py-5 reveal">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white mb-3">Tertarik Jadi <span className="text-red">Distributor?</span></h2>
          <p className="lead text-secondary">Penawaran eksklusif ini khusus untuk perusahaan berbadan hukum PT / CV.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="glass-panel p-4 p-md-5 rounded-4 border-red shadow-lg" style={{ borderWidth: '1px', borderStyle: 'solid' }}>
              <h4 className="fw-bold mb-4 text-center text-white">Isi Form Singkat di Bawah Ini</h4>
              <form className="form-modern-dark" onSubmit={handleSubmit}>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Depan *"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
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
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Nomor Telp Kantor / Toko *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Perusahaan *"
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
                    placeholder="Nama Usaha * (Contoh: CV. Bengkel Mitra Sejati)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Pesan Tambahan (Opsional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <div className="text-center mt-5">
                  <button type="submit" className="btn-modern-red w-100 text-uppercase letter-spacing-1 shadow-lg" style={{ padding: '16px 20px', borderRadius: '50px' }}>
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
const CreativeProductShowcase = ({ onSelectProduct, products, selectedBrand, setSelectedBrand }) => {
  const brands = ['all', 'Mizu-X', 'Agioo'];

  return (
    <section id="services" className="py-5" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid var(--border-color)' }}>
      <div className="container py-5 reveal">
        <div className="text-center mb-5">
          <h6 className="text-red fw-bold text-uppercase mb-2">Katalog Produk</h6>
          <h2 className="display-5 fw-bold text-white mb-3">Our <span className="text-red">Premium Brands</span></h2>
          <p className="text-secondary lead">Pilih brand di bawah atau gunakan kolom pencarian di navigasi untuk memfilter produk.</p>
        </div>

        {/* Brand tabs filter */}
        <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
          {brands.map((br) => (
            <button
              key={br}
              onClick={() => setSelectedBrand(br)}
              className={`brand-tab-btn ${selectedBrand === br ? 'active' : ''}`}
            >
              {br === 'all' ? 'Semua Brand' : br}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {products.length === 0 ? (
            <div className="col-12 text-center py-5">
              <p className="text-secondary fs-5">Tidak ada produk yang cocok dengan pencarian Anda.</p>
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
                            <i className="bi bi-arrow-repeat me-1"></i>Hover untuk lihat detail
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* BACK - Features + CTA */}
                    <div className="flip-card-back" style={{ background: `linear-gradient(135deg, ${prod.brandColor}dd 0%, ${prod.brandColor} 100%)`, borderRadius: '20px' }}>
                      <div className="d-flex flex-column h-100 p-4 text-start">
                        <h5 className="fw-bold text-white mb-1">{prod.name}</h5>
                        <span className="badge bg-white text-dark mb-3 align-self-start px-2 py-1 small">{prod.brand}</span>
                        <p className="text-white small mb-3" style={{ fontStyle: 'italic', opacity: 0.9 }}>{prod.description}</p>
                        <ul className="list-unstyled text-white flex-grow-1 mb-4">
                          {prod.specs.slice(0, 3).map((spec, i) => (
                            <li key={i} className="mb-2 d-flex align-items-start">
                              <i className="bi bi-check-circle-fill me-2 mt-1 flex-shrink-0" style={{ fontSize: '0.85rem' }}></i>
                              <span className="small text-start">{spec}</span>
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
            ))
          )}
        </div>
      </div>
    </section>
  );
};

// KOMPONEN TESTIMONI DAN PARTNER
const TestimonialSection = () => {
  const testimonials = [
    { text: "I'm very satisfied with Mizu-X products. They keep my vehicle clean and well-maintained, and on top of that, they're eco-friendly.", name: "Mrs. Tabitha Sumendap", title: "Founder of Woman Cycling Club Indonesia" },
    { text: "My vehicle's performance is always well-maintained thanks to the products from Mizu-X & Agioo. Their premium quality is highly recommended.", name: "Mr. Patrick Pandy", title: "VP Finance & Controller at BP AKR" },
    { text: "I'm really impressed with the products from PT. Jaya Mandiri Ventures. Their durability and quality are top-notch, greatly supporting operations.", name: "Mr. Jefree R. Pusung", title: "CEO PT Putra Bintang Mimika / Contractor PT. Freeport" },
    { text: "As the owner of an auto detailing business in Vancouver, Canada, I've been importing products from PT. JMV, and they've been a game changer.", name: "Mr. Ferry P.", title: "Auto Detailing Business Owner at Vancouver, Canada" },
    { text: "As a Purchasing Manager in the modern trade sector, Mizu-X products are always in demand and meet our standards, both in quality and reliability.", name: "Mr. Bayu", title: "Purchasing Manager at Transmart" }
  ];

  return (
    <section className="py-5 overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      {/* Marquee Partners */}
      <div className="marquee-container mb-5 reveal">
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

      <div className="container py-5 reveal">
        <div className="text-center mb-5">
          <h6 className="text-red fw-bold text-uppercase mb-2">Testimoni</h6>
          <h2 className="display-5 fw-bold text-white mb-3">Happy <span className="text-red">Clients & Partners</span></h2>
          <p className="text-secondary lead">Apa kata mereka tentang produk JMV?</p>
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
const MapSection = () => {
  return (
    <section id="map-section" className="py-5 position-relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      {/* Decorative ambient glows */}
      <div className="ambient-glow" style={{ top: '20%', left: '5%' }}></div>
      <div className="ambient-glow-2" style={{ bottom: '10%', right: '5%' }}></div>

      <div className="container py-5 position-relative z-1 reveal">
        <div className="text-center mb-5">
          <h6 className="text-red fw-bold text-uppercase tracking-wider mb-2">Hubungi Kami</h6>
          <h2 className="display-4 fw-bold text-white mb-3">Lokasi & <span className="text-red">Rute Kantor</span></h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px' }}>Temukan letak kantor PT Jaya Mandiri Ventures dan klik tombol rute untuk navigasi instan lewat Google Maps.</p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Info Kantor & CTA Rute */}
          <div className="col-lg-5">
            <div className="map-control-panel rounded-4 h-100 border border-secondary text-start d-flex flex-column justify-content-between" style={{ background: 'rgba(20, 20, 20, 0.6)', backdropFilter: 'blur(10px)', minHeight: '400px' }}>
              <div>
                <span className="badge bg-red mb-3 px-3 py-2 rounded-pill letter-spacing-1">HEADQUARTERS</span>
                <h3 className="text-white fw-bold mb-4">PT Jaya Mandiri Ventures</h3>
                
                <div className="mb-4">
                  <h6 className="text-red text-uppercase small fw-bold mb-2">Alamat Kantor:</h6>
                  <p className="text-secondary mb-0" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                    Gedung SOHO Pancoran, Lt. 28, Suite 2801<br />
                    Jl. Letjen M.T. Haryono Kav. 2-3, RT.3/RW.3, Tebet Barat, Kec. Tebet,<br />
                    Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810, Indonesia.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="text-red text-uppercase small fw-bold mb-2">Kontak Hubung:</h6>
                  <p className="text-secondary mb-1" style={{ fontSize: '0.95rem' }}>
                    <i className="bi bi-envelope-fill me-2 text-white opacity-50"></i> admin@jmv.co.id
                  </p>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
                    <i className="bi bi-telephone-fill me-2 text-white opacity-50"></i> +62 823-2324-4285
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="text-red text-uppercase small fw-bold mb-2">Jam Operasional:</h6>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
                    <i className="bi bi-clock-fill me-2 text-white opacity-50"></i> Senin - Jumat: 08:30 - 17:00 WIB
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
                  <i className="bi bi-map-fill me-2"></i> Buka Navigasi Rute di Google Maps
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
      const product = PRODUCT_DATA.find(p => p.id === selectedProductId);
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
                <i className="bi bi-star-fill text-red me-2"></i> Kelebihan Utama:
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
                  href={`https://wa.me/6282323244285?text=Halo%20JMV,%20saya%20tertarik%20bertanya%20mengenai%20grosir%20untuk%20produk%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern-red text-decoration-none text-center d-inline-flex align-items-center"
                >
                  <i className="bi bi-whatsapp me-2"></i> Hubungi Sales
                </a>
                <button onClick={() => setSelectedProductId(null)} className="btn-modern-outline text-white">
                  <i className="bi bi-arrow-left me-2"></i> Kembali ke Beranda
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
            <span className="badge bg-transparent border border-red text-red rounded-pill px-3 py-2 mb-4 fw-bold letter-spacing-1">AUTOCARE PRINCIPAL</span>
            <h1 className="display-3 fw-bold text-white mb-4">
              Kita Bantu Buang Barang Melalui <br /><span className="text-red">Program-Program Penjualan</span>
            </h1>
            <p className="fs-5 text-secondary mb-5 max-w-700 mx-auto" style={{ maxWidth: '700px' }}>
              Penawaran ini hanya untuk perusahaan berbadan hukum PT / CV. Jualannya Laris, Cuan-nya Manissss… Produk Autocare dengan Jaringan Nasional, Margin Besar Up TO 30%.
            </p>

            <div className="d-flex gap-3 justify-content-center mb-5">
              <a href="#services" className="btn-modern-red text-decoration-none">Cari & Telusuri Produk</a>
              <a href="#partnership" className="btn-modern-outline text-decoration-none text-white">Daftar Distributor Resmi</a>
            </div>

            <div className="row gy-4 mt-5 justify-content-center">
              <div className="col-md-4 d-flex" style={{ transitionDelay: '0.1s' }}>
                <div className="trust-badge d-flex flex-column w-100">
                  <i className="bi bi-award-fill icon-main"></i>
                  <h4 className="fw-bold text-white mb-2">Lolos Uji ASTM</h4>
                  <p className="text-secondary small mb-3 border-bottom border-secondary pb-2">American Standard Testing and Material</p>
                  <ul className="list-unstyled text-secondary small text-start ps-3 mb-0 flex-grow-1">
                    <li className="mb-1"><i className="bi bi-check text-red fs-5 me-1 align-middle"></i> ASTM D1120 (Titik Didih)</li>
                    <li className="mb-1"><i className="bi bi-check text-red fs-5 me-1 align-middle"></i> ASTM D1170 (Titik Beku)</li>
                    <li className="mb-1"><i className="bi bi-check text-red fs-5 me-1 align-middle"></i> ASTM D1384, D4340, D2809</li>
                  </ul>
                  <p className="text-secondary small mt-3 pt-2 border-top border-secondary mb-0">(Perlindungan terhadap Karat dan Korosi)</p>
                </div>
              </div>
              <div className="col-md-4 d-flex" style={{ transitionDelay: '0.2s' }}>
                <div className="trust-badge d-flex flex-column w-100">
                  <i className="bi bi-shield-check icon-main"></i>
                  <h4 className="fw-bold text-white mb-3">Semua Jenis Kendaraan</h4>
                  <p className="text-secondary mb-4 flex-grow-1">Formula kimia dirancang aman dan optimal untuk perawatan mesin, radiator, kaca, dan bodi mobil maupun motor (yang menggunakan radiator).</p>
                </div>
              </div>
              <div className="col-md-4 d-flex" style={{ transitionDelay: '0.3s' }}>
                <div className="trust-badge d-flex flex-column w-100">
                  <i className="bi bi-buildings icon-main"></i>
                  <h4 className="fw-bold text-white mb-3">Suplai Retail Nasional</h4>
                  <p className="text-secondary mb-3 flex-grow-1">Suplier tepercaya jaringan retail terkemuka di Indonesia.</p>
                  <p className="text-secondary small mt-auto mb-0" style={{ fontSize: '0.75rem' }}>(Tersedia di Bright by Pertamina, Bright by Alfamart, Indomaret, Transmart, MUJ, dll.)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION RED BANNER */}
        <ValuePropositionBanner />

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
                    <img src="/logo-jmv.png" alt="JMV Logo" className="img-fluid" style={{ maxHeight: '200px' }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 px-lg-5 text-start">
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
          <div className="container text-center reveal">
            <p className="text-secondary mb-4 fw-bold letter-spacing-1 text-uppercase">Tersedia di Jaringan Retail & B2B Channels:</p>
            <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-5 fs-3 fw-bold text-white opacity-50">
              <span className="hover-opacity-100 transition">DAIHATSU</span>
              <span className="hover-opacity-100 transition">ISUZU</span>
              <span className="hover-opacity-100 transition">DAMRI</span>
              <span className="hover-opacity-100 transition">JAK LINGKO</span>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <StatsSection />

        {/* BONUS SECTION */}
        <BonusSection />

        {/* CREATIVE PRODUCT SHOWCASE */}
        <CreativeProductShowcase
          onSelectProduct={setSelectedProductId}
          products={filteredProducts}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />

        {/* TESTIMONIALS & PARTNERS */}
        <TestimonialSection />

        {/* CAMPAIGN GALLERY & RUNNING POSTERS */}
        <CampaignGallerySection />

        {/* JENIS KEMITRAAN */}
        <PartnershipTypes />

        {/* GOOGLE MAP SECTION */}
        <MapSection />

        {/* FORMULIR KEMITRAAN */}
        <PartnershipForm />

      </main>
    );
  };

  return (
    <div className="app-container">
      {/* HEADER FIXED (Dark navbar, with Search Input) */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-glass fixed-top py-3">
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
                className="form-control ps-5 text-white"
                style={{
                  borderRadius: '30px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
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
              <a href="#map-section" className="nav-link" onClick={() => setSelectedProductId(null)}>Lokasi</a>
              <a className="btn-modern-red d-inline-block text-center text-decoration-none" href="#partnership">
                Daftar Distributor
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* KONTEN UTAMA */}
      {renderContent()}

      {/* FOOTER DIRECTORY (Adapted for Dark Theme) */}
      <footer className="py-5" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
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
                <li><a href="#partnership-types" className="footer-link">Program Distributor</a></li>
                <li><a href="#partnership-types" className="footer-link">Program Reseller</a></li>
                <li><a href="#partnership" className="footer-link">Layanan Maklon Kimia</a></li>
                <li><a href="#campaigns" className="footer-link">Hadiah Langsung Reward</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 text-start">
              <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: '0.85rem', tracking: '1px' }}>Perusahaan</h6>
              <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                <li><a href="#about" className="footer-link">Tentang Kami</a></li>
                <li><a href="#services" className="footer-link">Katalog Grosir</a></li>
                <li><a href="#map-section" className="footer-link">Lokasi Kantor JMV</a></li>
                <li><a href="#partnership" className="footer-link">Kontak Registrasi</a></li>
              </ul>
            </div>
          </div>
          <div className="border-top mt-5 pt-4 text-center text-secondary small d-flex flex-wrap justify-content-between align-items-center" style={{ borderColor: 'var(--border-color) !important' }}>
            <p className="mb-0">© {new Date().getFullYear()} PT Jaya Mandiri Ventures. All rights reserved.</p>
            <div className="d-flex gap-3 mt-3 mt-md-0">
              <span className="text-secondary">Sertifikasi ASTM D1120 / D1170 / D1384 / D4340</span>
            </div>
          </div>
        </div>
      </footer>

      {/* TOMBOL WHATSAPP MELAYANG */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;