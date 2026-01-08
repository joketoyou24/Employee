🧑‍💼 Employee

Employee Management UI dengan fitur Login dan Face Recognition — dibuat dengan React dan pustaka pendukung untuk deteksi wajah.

🚀 Fitur

✨ Fitur yang mungkin ada di proyek ini berdasarkan struktur dan file yang terdeteksi:

🧑‍💻 Halaman Login Karyawan

📸 Face Recognition / Face Detection saat login atau verifikasi

🎨 UI modern menggunakan React + SCSS

📦 Integrasi dengan library react-webcam, react-use-face-detection

Catatan: Fitur lengkap bisa ditambah setelah kode dibuka/di-review lebih detail.

🛠️ Teknologi

Project ini menggunakan:

Teknologi	Keterangan
React	UI library JavaScript
SCSS	Styling modular
react-webcam	Akses webcam untuk face capture
react-use-face-detection	Hook untuk deteksi wajah
npm	Package manager
⚙️ Setup dan Instalasi

Sebelum mulai, pastikan sudah terinstall:

📌 Node.js (versi 14+)

📌 npm atau yarn

🧩 Clone
git clone https://github.com/joketoyou24/Employee.git
cd Employee

📦 Install dependensi
npm install


atau jika pakai yarn:

yarn install

▶️ Menjalankan Proyek (Development)

Setelah install selesai:

npm start


atau

yarn start


Aplikasi akan terbuka di browser biasanya di:

http://localhost:3000

🧪 Menggunakan Fitur Face Recognition

Berikan izin akses webcam saat diminta oleh browser.

Arahkan wajah ke kamera sampai terdeteksi.

Sistem akan memproses deteksi wajah (fungsi utilitas dari react-use-face-detection).

Perlu backend / model face recognition terpisah untuk verifikasi wajah yang lebih rumit — jika belum ada, placeholder deteksi bisa dimodifikasi sesuai kebutuhan.

📌 Notes

Fitur seperti “API backend login” mungkin belum terintegrasi atau perlu disesuaikan.

Penanganan error kamera dan UI responsif perlu ditambahkan.

Konten ini berdasarkan kode yang terlihat & paket yang dipakai di package.json.

📄 Lisensi

Lisensi belum tersedia di repo ini. Tambahkan file LICENSE jika ingin open source.

❓Bantuan & Kontribusi

Jika kamu ingin berkontribusi:

Fork repositori ini.

Buat branch baru (feature/awesome-feature).

Push perubahanmu dan buat Pull Request.
