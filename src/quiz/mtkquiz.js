export const mtkquiz = [
  {
    id: 1,
    question:
      "Seorang pedagang membeli 50 kg mangga seharga Rp500.000,00. Sebanyak 5 kg busuk dan tidak dapat dijual. Sisa mangga dijual dengan harga Rp12.000,00/kg. Persentase keuntungan pedagang tersebut adalah...",
    options: ["8%", "10%", "12%", "14%"],
    correctAnswer: 0,
    explanation:
      "Modal = Rp500.000. Mangga terjual = 50 - 5 = 45 kg. Hasil penjualan = 45 × 12.000 = Rp540.000. Keuntungan = 540.000 - 500.000 = Rp40.000. Persentase keuntungan = (40.000 / 500.000) × 100% = 8%.",
  },
  {
    id: 2,
    question:
      "Diketahui f(x) = 3x − 7. Jika f(a) = 2 dan f(b) = 14, maka nilai dari 2a + b adalah...",
    options: ["11", "13", "15", "17"],
    correctAnswer: 1,
    explanation:
      "f(a) = 3a - 7 = 2 → 3a = 9 → a = 3. f(b) = 3b - 7 = 14 → 3b = 21 → b = 7. Maka 2a + b = 2(3) + 7 = 6 + 7 = 13.",
  },
  {
    id: 3,
    question:
      "Dua garis sejajar dipotong oleh sebuah garis transversal. Salah satu sudut yang terbentuk adalah (4x + 15)° dan sudut dalam berseberangan dengannya adalah (6x − 25)°. Besar sudut pelurus dari sudut tersebut adalah...",
    options: ["55°", "75°", "85°", "95°"],
    correctAnswer: 2,
    explanation:
      "Sudut dalam berseberangan sama besar: 4x + 15 = 6x - 25 → 40 = 2x → x = 20. Sudut = 4(20) + 15 = 95°. Sudut pelurusnya = 180° - 95° = 85°.",
  },
  {
    id: 4,
    question:
      "Suatu himpunan S = {1,2,3,...,10}, A = {bilangan prima di S}, dan B = {bilangan ganjil di S}. Banyak anggota (A ∪ B)ᶜ adalah...",
    options: ["1", "2", "3", "4"],
    correctAnswer: 3,
    explanation:
      "A = {2,3,5,7}, B = {1,3,5,7,9}. A ∪ B = {1,2,3,5,7,9}. (A ∪ B)ᶜ = S − (A ∪ B) = {4,6,8,10}. Banyak anggota = 4.",
  },
  {
    id: 5,
    question:
      "Gradien garis yang melalui titik P(2, 5) dan tegak lurus terhadap garis 3x − 4y + 8 = 0 adalah...",
    options: ["3/4", "4/3", "−4/3", "−3/4"],
    correctAnswer: 2,
    explanation:
      "Gradien garis 3x - 4y + 8 = 0 adalah m₁ = 3/4. Garis yang tegak lurus memiliki gradien m₂ = −1/m₁ = −4/3.",
  },
  {
    id: 6,
    question:
      "Pak Ahmad menabung Rp2.000.000,00 dengan bunga tunggal 6% per tahun. Berapa lama (dalam bulan) hingga tabungannya menjadi Rp2.300.000,00?",
    options: ["24 bulan", "28 bulan", "30 bulan", "36 bulan"],
    correctAnswer: 2,
    explanation:
      "Bunga yang dibutuhkan = 2.300.000 - 2.000.000 = Rp300.000. Bunga per tahun = 6% × 2.000.000 = Rp120.000. Waktu = 300.000 / 120.000 = 2,5 tahun = 30 bulan.",
  },
  {
    id: 7,
    question:
      "Sebuah taman lingkaran berdiameter 28 m akan dibuat jalan setapak melingkar di dalamnya berjarak 3,5 m dari tepi taman. Luas jalan setapak tersebut (π = 22/7) adalah...",
    options: ["269,5 m²", "280 m²", "291,5 m²", "308 m²"],
    correctAnswer: 0,
    explanation:
      "Jari-jari luar = 14 m. Jari-jari dalam = 14 - 3,5 = 10,5 m. Luas jalan = π(r₁² − r₂²) = 22/7 × (196 − 110,25) = 22/7 × 85,75 = 269,5 m².",
  },
  {
    id: 8,
    question:
      "Titik A(2, −1), B(6, 3), dan C(p, 7) terletak pada satu garis lurus. Nilai p adalah...",
    options: ["8", "9", "10", "11"],
    correctAnswer: 2,
    explanation:
      "Gradien AB = (3−(−1))/(6−2) = 4/4 = 1. Agar segaris, gradien BC juga harus 1. (7−3)/(p−6) = 1 → 4 = p − 6 → p = 10.",
  },
  {
    id: 9,
    question: "Diketahui (4√3 + 2√5)(4√3 − 2√5) = a. Nilai a adalah...",
    options: ["28", "32", "36", "48"],
    correctAnswer: 0,
    explanation:
      "Menggunakan rumus selisih kuadrat: (a+b)(a−b) = a² − b². (4√3)² − (2√5)² = 16×3 − 4×5 = 48 − 20 = 28.",
  },
  {
    id: 10,
    question:
      "Harga 2 buku tulis dan 3 pensil adalah Rp29.000,00. Harga 4 buku tulis dan 2 pensil adalah Rp38.000,00. Lisa membeli 2 buku tulis dan 3 pensil, lalu membayar Rp50.000,00. Kembalian yang diterima Lisa adalah...",
    options: ["Rp19.000,00", "Rp21.000,00", "Rp23.000,00", "Rp25.000,00"],
    correctAnswer: 1,
    explanation:
      "Misalkan buku = b, pensil = p. Persamaan: 2b+3p=29.000 ...(1), 4b+2p=38.000 ...(2). Kalikan (1)×2: 4b+6p=58.000. Kurangi (2): 4p=20.000 → p=5.000. Dari (1): 2b=29.000−15.000=14.000 → b=7.000. Total belanja Lisa = 2(7.000)+3(5.000) = Rp29.000. Kembalian = 50.000−29.000 = Rp21.000.",
  },
  {
    id: 11,
    question:
      "Dari diagram Venn diketahui n(S) = 40, n(A) = 25, n(B) = 20, dan n(A ∩ B) = 10. Banyak anggota yang tidak masuk himpunan A maupun B adalah...",
    options: ["3", "5", "7", "9"],
    correctAnswer: 1,
    explanation:
      "n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 25 + 20 − 10 = 35. Anggota di luar A dan B = n(S) − n(A ∪ B) = 40 − 35 = 5.",
  },
  {
    id: 12,
    question:
      "Sebuah keluarga memiliki persediaan beras untuk 6 orang selama 8 bulan. Jika 6 orang baru bergabung, berapa bulan persediaan beras akan habis?",
    options: ["3 bulan", "4 bulan", "4,5 bulan", "5 bulan"],
    correctAnswer: 1,
    explanation:
      "Perbandingan berbalik nilai: orang × waktu = konstan. 6 × 8 = 12 × t → t = 48/12 = 4 bulan.",
  },
  {
    id: 13,
    question:
      "Sebuah tangga panjang 10 m bersandar pada tembok, kaki tangga 8 m dari tembok. Ujung atas tangga digeser ke atas 2 m. Berapa meter kaki tangga harus digeser mendekati tembok?",
    options: ["1 m", "2 m", "3 m", "4 m"],
    correctAnswer: 1,
    explanation:
      "Tinggi awal: h₁ = √(10² − 8²) = √(100−64) = √36 = 6 m. Tinggi baru: h₂ = 6 + 2 = 8 m. Jarak kaki baru: d₂ = √(10² − 8²) = √36 = 6 m. Kaki tangga digeser = 8 − 6 = 2 m mendekati tembok.",
  },
  {
    id: 14,
    question: "Persamaan garis yang melalui titik (6, 0) dan (0, 3) adalah...",
    options: [
      "x + 2y − 6 = 0",
      "x − 2y + 6 = 0",
      "2x + y − 6 = 0",
      "2x − y + 3 = 0",
    ],
    correctAnswer: 0,
    explanation:
      "Gradien = (3−0)/(0−6) = −1/2. Persamaan: y − 0 = −1/2(x − 6) → y = −x/2 + 3 → 2y = −x + 6 → x + 2y − 6 = 0.",
  },
  {
    id: 15,
    question:
      "Pak Haji memiliki tanah berbentuk belah ketupat dengan diagonal 12 m dan 16 m. Sekeliling tanah akan ditanami pohon mangga dengan jarak antar pohon 2,5 m. Jika harga satu pohon Rp25.000,00, total biaya yang diperlukan adalah...",
    options: ["Rp400.000,00", "Rp450.000,00", "Rp500.000,00", "Rp550.000,00"],
    correctAnswer: 0,
    explanation:
      "Sisi belah ketupat = √((12/2)² + (16/2)²) = √(36+64) = √100 = 10 m. Keliling = 4 × 10 = 40 m. Jumlah pohon = 40 / 2,5 = 16 pohon. Total biaya = 16 × 25.000 = Rp400.000,00.",
  },
];
