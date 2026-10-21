# 👾 Al Fatih - Retro Portfolio Website

Website portofolio pribadi bertema **Retro / 8-Bit Arcade Style** yang dibuat oleh **Al Fatih**, seorang siswa kelas 6 SD di Kabupaten Bulukumba yang memiliki antusiasme tinggi terhadap dunia pemrograman, web development, dan Artificial Intelligence (AI).

---

## 🌟 Fitur Utama

- **🎨 Retro 8-bit & Neo-Brutalism Aesthetics**:
  - Border tebal hitam khas retro window.
  - Hard shadow (`box-shadow` solid tanpa blur).
  - Warna kontras arcade (kuning retro, pink, hijau neon, cyan/biru).
  - Menggunakan font bergaya pixel (**Press Start 2P**) dan monospace (**Space Mono**).
- **🌗 Dark / Light Mode (Arcade Night)**:
  - Toggle tema instan dengan icon animasi.
  - Preferensi tema tersimpan di `localStorage` dan mendeteksi pengaturan sistem (`prefers-color-scheme`).
  - Dilengkapi script inline pencegah *flash of unstyled content* (FOUC).
- **⌨️ Dynamic Typewriter Effect**:
  - Efek mesin tik dinamis pada badge hero yang berganti kata secara otomatis.
- **✨ Scroll Animations (AOS)**:
  - Animasi transisi elemen yang halus saat di-scroll menggunakan library AOS (*Animate On Scroll*).
- **🕹️ Easter Egg Interaktif**:
  - Tombol rahasia `★ BONUS BUTTON` dengan kejutan suara retro (Web Audio API) / pesan interaktif.
- **📱 Responsif & Mobile-Friendly**:
  - Ditenagai oleh **Bootstrap 5**, rapi diakses dari layar smartphone, tablet, hingga desktop.
- **🚀 Showcase Proyek Nyata**:
  - Menampilkan demo interaktif dari berbagai proyek web buatan Al Fatih.
- **🔝 Back to Top Button**:
  - Tombol retro untuk kembali ke bagian teratas halaman dengan *smooth scrolling*.

---

## 🛠️ Teknologi yang Digunakan

| Kategori | Teknologi |
| --- | --- |
| **Markup** | HTML5 (Semantik & SEO Friendly) |
| **Styling** | CSS3 (Custom Variables, Retro/Neo-brutalist Styles) & Bootstrap 5 |
| **Logika & Interaktivitas** | Vanilla JavaScript (ES6+) |
| **Ikon & Font** | [Google Fonts](https://fonts.google.com/) (*Space Mono*, *Press Start 2P*), [Bootstrap Icons](https://icons.getbootstrap.com/), [Devicon](https://devicon.dev/) |
| **Library Eksternal** | [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) |

---

## 📂 Struktur Proyek

```plaintext
web-portofolio/
├── image/                 # Berisi aset gambar (foto profil, ilustrasi, dll.)
│   └── Profil.png
├── node_modules/          # Dependensi lokal (Bootstrap)
├── index.html             # Halaman utama portofolio
├── style.css              # File styling kustom bertema retro
├── script.js              # Interaktivitas JS (AOS, Typewriter, Easter Egg, dll.)
├── package.json           # Konfigurasi dependensi project
├── .gitignore             # File yang diabaikan oleh Git
└── README.md              # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan Proyek di Lokal

1. **Clone repositori**:
   ```bash
   git clone https://github.com/afth-2014/portofolio.git
   cd portofolio
   ```

2. **Instal dependensi** (opsional, jika ingin mengunduh Bootstrap via npm):
   ```bash
   npm install
   ```

3. **Buka halaman**:
   - Cukup buka file [`index.html`](file:///d:/web-portofolio/index.html) langsung di browser Anda, atau
   - Gunakan ekstensi **Live Server** di VS Code / Antigravity IDE untuk live reload otomatis.

---

## 📌 Proyek yang Ditampilkan

1. **🕌 [Waktu Sholat](https://web-waktu-sholat.netlify.app)**  
   *Aplikasi jadwal waktu sholat otomatis dan akurat dengan integrasi API.*
2. **⚡ [Hemat Listrik](https://hemat-listrik.netlify.app)**  
   *Website edukasi dan kalkulator praktis untuk memantau serta menghemat penggunaan daya listrik di rumah.*
3. **🎨 [Air Drawing Board](https://air-drawing-boardd.netlify.app)**  
   *Papan gambar interaktif berbasis web canvas yang kreatif dan inovatif.*

---

## 📬 Kontak & Media Sosial

- **GitHub**: [@afth-2014](https://github.com/afth-2014)
- **Instagram**: [@afth_0009](https://instagram.com/afth_0009)
- **Email**: [alvatih2014@gmail.com](mailto:alvatih2014@gmail.com)
- **WhatsApp**: [Chat via WhatsApp](https://wa.link/f9bnbf)

---

<p align="center">
  Dibuat dengan semangat belajar oleh <b>Al Fatih</b> 🚀👾
</p>
