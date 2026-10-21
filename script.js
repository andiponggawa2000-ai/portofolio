// ==========================================================================
// RETRO PORTFOLIO JAVASCRIPT
// Bersih, Modular, dan Mudah Dipahami (Readable)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('🎮 Retro Portfolio Loaded! Ready for Level Up! 🚀');

  // Inisialisasi semua fitur
  initAOS();
  initTypewriter();
  initBackToTop();
  initContactForm();
  initEasterEgg();
});

// --------------------------------------------------------------------------
// 0. INISIALISASI AOS (ANIMATE ON SCROLL)
// Berjalan serentak/bersamaan saat komponen masuk ke viewport dengan durasi unik
// --------------------------------------------------------------------------
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: false,          // Animasi dapat terulang saat di-scroll kembali
      mirror: true,
      easing: 'ease-out-cubic', // Efek transisi smooth retro
      offset: 60,           // Jarak trigger animasi dari viewport
    });
  }
}

// --------------------------------------------------------------------------
// 1. FITUR TYPEWRITER EFEK PADA HERO BADGE
// Mengetik kalimat secara dinamis dan berganti-ganti secara otomatis
// --------------------------------------------------------------------------
function initTypewriter() {
  const textElement = document.getElementById('typewriterText');
  if (!textElement) return;

  // Daftar teks yang akan diketik bergantian
  const phrases = [
    'SIAP NGODING & BELAJAR',
    'SISWA KELAS 6 SD',
    'JUNIOR WEB DEVELOPER',
    'EXPLORING HTML, CSS & JS'
  ];

  let phraseIndex = 0;   // Indeks teks yang sedang aktif
  let charIndex = 0;     // Posisi huruf yang sedang diketik
  let isDeleting = false; // Status apakah sedang menghapus teks
  const typingSpeed = 90; // Kecepatan mengetik (ms)
  const deletingSpeed = 45; // Kecepatan menghapus (ms)
  const pauseEnd = 1600;   // Waktu jeda saat teks selesai diketik (ms)

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      // Mengurangi satu karakter (efek backspace)
      textElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Menambah satu karakter (efek mengetik)
      textElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    // Tentukan jeda waktu berikutnya
    let nextDelay = isDeleting ? deletingSpeed : typingSpeed;

    // Jika kata sudah selesai diketik seluruhnya
    if (!isDeleting && charIndex === currentPhrase.length) {
      nextDelay = pauseEnd; // Berhenti sejenak agar bisa dibaca
      isDeleting = true;
    } 
    // Jika kata sudah selesai dihapus
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length; // Pindah ke frasa berikutnya
      nextDelay = 400; // Jeda sejenak sebelum mulai mengetik frasa baru
    }

    setTimeout(typeEffect, nextDelay);
  }

  // Mulai animasi mengetik
  typeEffect();
}

// --------------------------------------------------------------------------
// 2. FITUR BACK TO TOP (KEMBALI KE ATAS)
// Muncul saat user scroll ke bawah, dan scroll halus ke puncak halaman saat diklik
// --------------------------------------------------------------------------
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  // Pantau scroll layar
  window.addEventListener('scroll', () => {
    // Tombol muncul jika sudah scroll lebih dari 250px ke bawah
    if (window.scrollY > 250) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // Saat tombol diklik, lakukan smooth scroll ke atas
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// --------------------------------------------------------------------------
// 3. FITUR FORM KONTAK
// --------------------------------------------------------------------------
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const alertBox = document.getElementById('contactSuccessAlert');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('senderName');
    const senderName = nameInput ? nameInput.value : 'Teman';

    if (alertBox) {
      alertBox.innerHTML = `⭐ <strong>Hore! Pesan dari ${senderName} terkirim!</strong> Terima kasih sudah mampir ke retro portofolio saya!`;
      alertBox.classList.remove('d-none');
    }

    contactForm.reset();

    // Sembunyikan notifikasi setelah 5 detik
    setTimeout(() => {
      if (alertBox) {
        alertBox.classList.add('d-none');
      }
    }, 5000);
  });
}

// --------------------------------------------------------------------------
// 4. FITUR EASTER EGG BONUS
// --------------------------------------------------------------------------
function initEasterEgg() {
  const easterEggBtn = document.getElementById('easterEggBtn');
  if (!easterEggBtn) return;

  easterEggBtn.addEventListener('click', () => {
    alert('👾 LEVEL 99 ACHIEVED!\nSemangat belajar coding untuk masa depan yang hebat!');
  });
}
