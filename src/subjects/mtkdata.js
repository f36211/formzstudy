export const mtkdata = [
  {
    id: "pertidaksamaan-linear",
    title: "Pertidaksamaan Linear Satu Variabel",
    icon: "📏",
    sections: [
      {
        subtitle: "Definisi & Konsep Utama",
        content: [
          {
            type: "text",
            content:
              "Pertidaksamaan linear satu variabel adalah kalimat matematika yang memuat satu variabel dengan pangkat 1 dan menggunakan tanda <, >, ≤, atau ≥.",
          },
          {
            type: "formula",
            content:
              "ax + b < c \\Rightarrow ax < c - b \\Rightarrow x < \\frac{c-b}{a}",
          },
          {
            type: "highlight",
            content:
              "Ingat: Jika dikali/dibagi bilangan NEGATIF, tanda pertidaksamaan BERBALIK arah!",
          },
        ],
      },
      {
        subtitle: "Contoh Soal & Pembahasan",
        content: [
          {
            type: "example",
            question:
              "Himpunan penyelesaian dari 10x - 2 < 13 + 5x untuk x bilangan asli adalah...",
            steps: [
              "10x - 5x < 13 + 2",
              "5x < 15",
              "x < \\frac{15}{5}",
              "x < 3",
            ],
            result:
              "\\text{HP} = \\{1, 2\\} \\text{ (bilangan asli kurang dari 3)}",
          },
        ],
      },
      {
        subtitle: "Tips Cepat",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Pindahkan variabel ke satu sisi dan konstanta ke sisi lain.",
              "Periksa apakah pembagi positif atau negatif sebelum membagi.",
              "Untuk bilangan asli, HP tidak termasuk 0.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bilangan-dan-operasinya",
    title: "Bilangan & Operasi Dasar",
    icon: "🔢",
    sections: [
      {
        subtitle: "Perbandingan & Urutan Bilangan",
        content: [
          {
            type: "text",
            content:
              "Untuk membandingkan bilangan bulat, bilangan yang lebih ke kanan pada garis bilangan bernilai lebih besar.",
          },
          {
            type: "highlight",
            content:
              "Contoh pernyataan BENAR: -2 > -3 ✓ dan 0 > -2 ✓. Pernyataan SALAH: -8 > -1 ✗ dan -1 < -9 ✗.",
          },
          {
            type: "text",
            content:
              "Urutan pecahan: ubah semua ke desimal atau pecahan dengan penyebut sama, lalu bandingkan.",
          },
        ],
      },
      {
        subtitle: "Perbandingan Senilai",
        content: [
          {
            type: "text",
            content:
              "Jika dua besaran berbanding lurus (senilai), gunakan rumus:",
          },
          { type: "formula", content: "\\frac{a_1}{b_1} = \\frac{a_2}{b_2}" },
          {
            type: "example",
            question:
              "Mobil menghabiskan 2 liter bensin untuk 20 km. Berapa liter untuk 180 km?",
            steps: [
              "\\frac{2}{20} = \\frac{x}{180}",
              "x = \\frac{2 \\times 180}{20}",
              "x = \\frac{360}{20}",
            ],
            result: "x = 18 \\text{ liter}",
          },
        ],
      },
      {
        subtitle: "Perbandingan Berbalik Nilai",
        content: [
          {
            type: "text",
            content:
              "Jika satu besaran naik maka besaran lain turun (berbanding terbalik):",
          },
          { type: "formula", content: "a_1 \\times b_1 = a_2 \\times b_2" },
          {
            type: "example",
            question:
              "Persediaan beras cukup untuk 2 orang selama 12 hari. Jika bertambah 2 orang lagi, habis dalam berapa hari?",
            steps: [
              "2 \\times 12 = 4 \\times x",
              "24 = 4x",
              "x = \\frac{24}{4}",
            ],
            result: "x = 6 \\text{ hari}",
          },
        ],
      },
    ],
  },
  {
    id: "himpunan",
    title: "Himpunan",
    icon: "🔵",
    sections: [
      {
        subtitle: "Definisi & Notasi",
        content: [
          {
            type: "text",
            content:
              "Himpunan adalah kumpulan objek yang terdefinisi dengan jelas. Ada tiga cara menyatakan himpunan: enumerasi (mendaftar), notasi pembentuk himpunan, dan deskripsi verbal.",
          },
          {
            type: "formula",
            content:
              "A = \\{1, 3, 5, 7, 9, 11\\} \\quad \\text{atau} \\quad A = \\{x \\mid x \\text{ bilangan ganjil}, 1 \\leq x \\leq 11\\}",
          },
          {
            type: "highlight",
            content:
              "Notasi pembentuk himpunan {1,3,5,7,9,11} dapat ditulis: { x | x bilangan ganjil, 1 ≤ x ≤ 11, x ∈ ℕ }",
          },
        ],
      },
      {
        subtitle: "Operasi Himpunan",
        content: [
          {
            type: "table",
            headers: ["Operasi", "Simbol", "Arti"],
            rows: [
              ["Gabungan", "A ∪ B", "Semua anggota A atau B"],
              ["Irisan", "A ∩ B", "Anggota yang ada di A dan B"],
              ["Selisih", "A - B", "Anggota A yang tidak ada di B"],
              ["Komplemen", "Aᶜ", "Anggota S yang bukan A"],
            ],
          },
          {
            type: "example",
            question:
              "Dari diagram Venn: S={1,2,3,4,5,6,7,8,9,10,11,12}, A={3,4,2,1}, B={4,6,5,8}. Anggota A ∪ B adalah...",
            steps: [
              "A \\cup B = \\text{semua anggota A ditambah semua anggota B (tanpa duplikat)}",
              "A = \\{1, 2, 3, 4\\}, B = \\{4, 5, 6, 8\\}",
              "A \\cup B = \\{1, 2, 3, 4, 5, 6, 8\\}",
            ],
            result: "A \\cup B = \\{1, 2, 3, 4, 5, 6, 8\\}",
          },
        ],
      },
    ],
  },
  {
    id: "aljabar-bentuk-aljabar",
    title: "Aljabar & Bentuk Aljabar",
    icon: "🔣",
    sections: [
      {
        subtitle: "Penyederhanaan Bentuk Aljabar",
        content: [
          {
            type: "text",
            content:
              "Suku-suku sejenis (variabel dan pangkat sama) dapat dijumlah/dikurang. Koefisien suku-suku sejenis cukup dijumlahkan.",
          },
          {
            type: "example",
            question: "Sederhanakan: 2x - 4y - 2z - 5x + 8y + 7z",
            steps: [
              "\\text{Kelompokkan suku sejenis:}",
              "(2x - 5x) + (-4y + 8y) + (-2z + 7z)",
              "-3x + 4y + 5z",
            ],
            result: "-3x + 4y + 5z",
          },
        ],
      },
      {
        subtitle: "Keliling Persegi Panjang dalam Aljabar",
        content: [
          { type: "formula", content: "K = 2(p + l)" },
          {
            type: "example",
            question:
              "Panjang = (2x - 4) cm, lebar = (2x + 1) cm. Nyatakan keliling dalam x!",
            steps: ["K = 2((2x-4) + (2x+1))", "K = 2(4x - 3)", "K = 8x - 6"],
            result: "K = (8x - 6) \\text{ cm}",
          },
        ],
      },
      {
        subtitle: "Persamaan Linear Satu Variabel",
        content: [
          {
            type: "example",
            question: "Penyelesaian dari 6y + 8 = 4y adalah...",
            steps: ["6y - 4y = -8", "2y = -8", "y = \\frac{-8}{2}"],
            result: "y = -4",
          },
          {
            type: "example",
            question: "Jika 2x + 19 = 4 - 3x, tentukan x + 2!",
            steps: ["2x + 3x = 4 - 19", "5x = -15", "x = -3"],
            result: "x + 2 = -3 + 2 = -1",
          },
        ],
      },
      {
        subtitle: "Sistem Persamaan Linear Dua Variabel (SPLDV)",
        content: [
          {
            type: "text",
            content:
              "SPLDV diselesaikan dengan metode substitusi atau eliminasi.",
          },
          {
            type: "example",
            question:
              "Harga 2 ayam + 3 itik = Rp230.000. Harga 3 ayam + 2 itik = Rp220.000. Harga 1 ayam dan 1 itik?",
            steps: [
              "\\text{Misal ayam} = a, \\text{itik} = i",
              "2a + 3i = 230.000 \\quad \\times 3 \\Rightarrow 6a + 9i = 690.000",
              "3a + 2i = 220.000 \\quad \\times 2 \\Rightarrow 6a + 4i = 440.000",
              "\\text{Eliminasi: } 5i = 250.000 \\Rightarrow i = 50.000",
              "2a + 3(50.000) = 230.000 \\Rightarrow 2a = 80.000 \\Rightarrow a = 40.000",
            ],
            result: "\\text{1 ayam} = Rp40.000, \\text{ 1 itik} = Rp50.000",
          },
        ],
      },
    ],
  },
  {
    id: "sudut",
    title: "Sudut & Hubungan Antar Sudut",
    icon: "📐",
    sections: [
      {
        subtitle: "Jenis-Jenis Hubungan Sudut",
        content: [
          {
            type: "table",
            headers: ["Jenis", "Jumlah", "Contoh"],
            rows: [
              ["Penyiku (Komplementer)", "90°", "x dan (90°-x)"],
              ["Pelurus (Suplementer)", "180°", "x dan (180°-x)"],
              ["Bertolak belakang", "Sama besar", "Sudut vertikal"],
            ],
          },
          {
            type: "example",
            question: "Jika sudut x = 25°, maka sudut penyiku x adalah...",
            steps: ["\\text{Penyiku} = 90° - x", "= 90° - 25°"],
            result: "= 65°",
          },
        ],
      },
      {
        subtitle: "Sudut Sehadap pada Dua Garis Sejajar",
        content: [
          {
            type: "text",
            content:
              "Jika dua garis sejajar dipotong garis transversal, sudut-sudut sehadap besarnya sama.",
          },
          {
            type: "example",
            question:
              "Dua garis sejajar dipotong garis lain. Sudut yang satu = 45°, sudut lain = (3y + 15)°. Nilai y?",
            steps: [
              "\\text{Sudut sehadap: } 3y + 15 = 45",
              "3y = 45 - 15 = 30",
              "y = \\frac{30}{3}",
            ],
            result: "y = 10",
          },
        ],
      },
    ],
  },
  {
    id: "fungsi-dan-pemetaan",
    title: "Relasi, Fungsi & Pemetaan",
    icon: "🗺️",
    sections: [
      {
        subtitle: "Definisi",
        content: [
          {
            type: "text",
            content:
              "Fungsi (pemetaan) adalah relasi dari himpunan A ke himpunan B di mana setiap anggota A dipasangkan tepat satu ke anggota B.",
          },
          {
            type: "highlight",
            content:
              "Ciri fungsi: setiap anggota domain punya TEPAT SATU pasangan di kodomain. Diagram panah yang bukan fungsi: ada anggota A yang tidak punya pasangan, atau punya lebih dari satu pasangan.",
          },
        ],
      },
      {
        subtitle: "Nilai Fungsi",
        content: [
          {
            type: "formula",
            content: "f(x) = ax + b \\Rightarrow f(c) = ac + b",
          },
          {
            type: "example",
            question:
              "Diketahui f(x) = 2x + 5. Jika f(x) = 13, nilai x adalah...",
            steps: ["2x + 5 = 13", "2x = 13 - 5 = 8", "x = \\frac{8}{2}"],
            result: "x = 4",
          },
        ],
      },
    ],
  },
  {
    id: "koordinat-kartesius",
    title: "Koordinat Kartesius & Gradien",
    icon: "📊",
    sections: [
      {
        subtitle: "Sistem Koordinat",
        content: [
          {
            type: "text",
            content:
              "Setiap titik pada bidang koordinat dinyatakan sebagai pasangan (x, y). Sumbu X horizontal, sumbu Y vertikal.",
          },
          {
            type: "highlight",
            content: "Kuadran I (+,+), II (-,+), III (-,-), IV (+,-)",
          },
        ],
      },
      {
        subtitle: "Gradien (Kemiringan) Garis",
        content: [
          { type: "formula", content: "m = \\frac{y_2 - y_1}{x_2 - x_1}" },
          {
            type: "example",
            question: "Titik A(4, -1) dan B(2, -3). Gradien garis AB adalah...",
            steps: [
              "m = \\frac{-3 - (-1)}{2 - 4}",
              "m = \\frac{-3 + 1}{-2}",
              "m = \\frac{-2}{-2}",
            ],
            result: "m = 1",
          },
          {
            type: "example",
            question:
              "Gradien garis dengan persamaan 2x - 4y + 9 = 0 adalah...",
            steps: [
              "-4y = -2x - 9",
              "y = \\frac{-2x - 9}{-4} = \\frac{1}{2}x + \\frac{9}{4}",
            ],
            result: "m = \\frac{1}{2}",
          },
        ],
      },
      {
        subtitle: "Persamaan Garis Lurus",
        content: [
          { type: "formula", content: "y - y_1 = m(x - x_1)" },
          {
            type: "example",
            question: "Garis melalui (6, 0) dan (0, 3). Persamaan garis?",
            steps: [
              "m = \\frac{3 - 0}{0 - 6} = \\frac{3}{-6} = -\\frac{1}{2}",
              "y - 0 = -\\frac{1}{2}(x - 6)",
              "y = -\\frac{1}{2}x + 3",
              "\\text{Kalikan 2: } 2y = -x + 6",
            ],
            result:
              "x + 2y = 6 \\quad \\text{atau} \\quad y = -\\frac{1}{2}x + 3",
          },
        ],
      },
    ],
  },
  {
    id: "pangkat-akar",
    title: "Bilangan Berpangkat & Bentuk Akar",
    icon: "🔬",
    sections: [
      {
        subtitle: "Sifat Perpangkatan",
        content: [
          { type: "formula", content: "a^m \\times a^n = a^{m+n}" },
          { type: "formula", content: "\\frac{a^m}{a^n} = a^{m-n}" },
          {
            type: "example",
            question: "Hasil dari (4² × 4³) : 4² adalah...",
            steps: [
              "(4^2 \\times 4^3) : 4^2 = 4^{2+3} : 4^2",
              "= 4^5 : 4^2 = 4^{5-2} = 4^3",
            ],
            result: "4^3 = 64",
          },
        ],
      },
      {
        subtitle: "Penyederhanaan Bentuk Akar",
        content: [
          {
            type: "formula",
            content: "\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}",
          },
          {
            type: "example",
            question: "Sederhanakan 5√2 + √32",
            steps: [
              "\\sqrt{32} = \\sqrt{16 \\times 2} = 4\\sqrt{2}",
              "5\\sqrt{2} + 4\\sqrt{2}",
            ],
            result: "9\\sqrt{2}",
          },
        ],
      },
    ],
  },
  {
    id: "bangun-datar",
    title: "Bangun Datar: Persegi, Persegi Panjang & Belah Ketupat",
    icon: "🔷",
    sections: [
      {
        subtitle: "Rumus Dasar",
        content: [
          {
            type: "table",
            headers: ["Bangun", "Keliling", "Luas"],
            rows: [
              ["Persegi", "4s", "s²"],
              ["Persegi Panjang", "2(p+l)", "p × l"],
              ["Belah Ketupat", "4s", "\\frac{d_1 \\times d_2}{2}"],
            ],
          },
        ],
      },
      {
        subtitle: "Contoh Soal",
        content: [
          {
            type: "example",
            question: "Persegi ABCD keliling 40 cm. Luasnya adalah...",
            steps: [
              "K = 4s \\Rightarrow 40 = 4s \\Rightarrow s = 10",
              "L = s^2 = 10^2",
            ],
            result: "L = 100 \\text{ cm}^2",
          },
          {
            type: "example",
            question:
              "Aisyah punya kain persegi panjang, renda keliling maks 350 cm. Ukuran yang mungkin dari pilihan A(125×100) dan B(125×150)?",
            steps: [
              "K_A = 2(125+100) = 2(225) = 450 \\text{ cm} > 350 \\text{ (tidak mungkin)}",
              "K_B = 2(125+150) = 2(275) = 550 \\text{ cm} > 350 \\text{ (tidak mungkin)}",
              "\\text{Kedua pilihan melebihi 350 cm, cek kembali soal atau pilih yang terkecil}",
            ],
            result:
              "\\text{Pilihan A: } K = 450\\text{ cm, Pilihan B: } K = 550\\text{ cm}",
          },
          {
            type: "example",
            question:
              "Belah ketupat diagonal 12 m dan 16 m. Keliling belah ketupat (sisi dari Pythagoras)?",
            steps: [
              "s = \\sqrt{\\left(\\frac{12}{2}\\right)^2 + \\left(\\frac{16}{2}\\right)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10",
              "K = 4 \\times 10 = 40 \\text{ m}",
            ],
            result: "K = 40 \\text{ m}",
          },
        ],
      },
    ],
  },
  {
    id: "lingkaran",
    title: "Lingkaran: Luas, Keliling & Juring",
    icon: "⭕",
    sections: [
      {
        subtitle: "Rumus Lingkaran",
        content: [
          { type: "formula", content: "K = 2\\pi r = \\pi d" },
          { type: "formula", content: "L = \\pi r^2" },
          {
            type: "formula",
            content:
              "L_{\\text{juring}} = \\frac{\\alpha}{360°} \\times \\pi r^2",
          },
          {
            type: "formula",
            content: "L_{\\text{setengah lingkaran}} = \\frac{1}{2}\\pi r^2",
          },
        ],
      },
      {
        subtitle: "Contoh Soal",
        content: [
          {
            type: "example",
            question: "Luas lingkaran berdiameter 10 cm, π = 3,14",
            steps: [
              "r = \\frac{d}{2} = \\frac{10}{2} = 5",
              "L = \\pi r^2 = 3{,}14 \\times 5^2 = 3{,}14 \\times 25",
            ],
            result: "L = 78{,}5 \\text{ cm}^2",
          },
          {
            type: "example",
            question:
              "Juring dengan sudut 120°, diameter 14 cm, π = 22/7. Luas juring?",
            steps: [
              "r = 7 \\text{ cm}",
              "L = \\frac{120}{360} \\times \\frac{22}{7} \\times 7^2",
              "= \\frac{1}{3} \\times \\frac{22}{7} \\times 49",
              "= \\frac{1}{3} \\times 154",
            ],
            result: "L = 51{,}33 \\approx \\frac{154}{3} \\text{ cm}^2",
          },
          {
            type: "example",
            question:
              "Taman setengah lingkaran d = 28 m akan dipasang pagar. Berapa panjang pagar?",
            steps: [
              "\\text{Keliling setengah lingkaran} = \\frac{1}{2} \\times \\pi d + d",
              "= \\frac{1}{2} \\times \\frac{22}{7} \\times 28 + 28",
              "= 44 + 28",
            ],
            result: "K = 72 \\text{ m}",
          },
        ],
      },
    ],
  },
  {
    id: "pythagoras",
    title: "Teorema Pythagoras",
    icon: "📐",
    sections: [
      {
        subtitle: "Definisi & Rumus",
        content: [
          {
            type: "text",
            content:
              "Pada segitiga siku-siku, kuadrat sisi miring (hipotenusa) sama dengan jumlah kuadrat kedua sisi siku-siku.",
          },
          { type: "formula", content: "c^2 = a^2 + b^2" },
          {
            type: "highlight",
            content:
              "Ingat tripel Pythagoras umum: (3,4,5), (5,12,13), (6,8,10), (8,15,17)",
          },
        ],
      },
      {
        subtitle: "Contoh Soal",
        content: [
          {
            type: "example",
            question:
              "Tangga 2,5 m bersandar ke tembok. Jarak kaki tangga ke tembok 1,5 m. Tinggi tembok yang dicapai tangga?",
            steps: [
              "c = 2{,}5 \\text{ m (tangga)}, a = 1{,}5 \\text{ m (jarak ke tembok)}",
              "b^2 = c^2 - a^2 = 2{,}5^2 - 1{,}5^2",
              "b^2 = 6{,}25 - 2{,}25 = 4",
              "b = \\sqrt{4}",
            ],
            result: "b = 2 \\text{ m}",
          },
        ],
      },
    ],
  },
  {
    id: "statistika-dasar",
    title: "Statistika: Membaca Diagram",
    icon: "📈",
    sections: [
      {
        subtitle: "Diagram Garis",
        content: [
          {
            type: "text",
            content:
              "Diagram garis digunakan untuk menunjukkan perkembangan data dari waktu ke waktu. Kenaikan terbesar dilihat dari selisih antara dua titik yang paling jauh berbeda.",
          },
          {
            type: "example",
            question:
              "Dari diagram pengunjung: Jan=2000, Feb=2500, Mar=1100, Apr=875, Mei=600, Jun=4500. Kenaikan terbesar terjadi pada bulan?",
            steps: [
              "\\text{Hitung selisih antar bulan:}",
              "\\text{Jan→Feb: } 2500-2000 = 500",
              "\\text{Mei→Jun: } 4500-600 = 3900",
            ],
            result:
              "\\text{Kenaikan terbesar: Mei ke Juni (naik 3.900 pengunjung)}",
          },
        ],
      },
      {
        subtitle: "Tips Membaca Data",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Perhatikan skala sumbu Y dengan teliti.",
              "Kenaikan = nilai bulan ini - nilai bulan sebelumnya.",
              "Kenaikan tertinggi = selisih terbesar yang bernilai positif.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "operasi-campuran",
    title: "Operasi Hitung Campuran",
    icon: "🧮",
    sections: [
      {
        subtitle: "Aturan Prioritas Operasi",
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              "Kurung ( ) diselesaikan terlebih dahulu",
              "Pangkat dan akar",
              "Perkalian × dan pembagian ÷ (kiri ke kanan)",
              "Penjumlahan + dan pengurangan − (kiri ke kanan)",
            ],
          },
          {
            type: "example",
            question: "45 + 12 × (−4) − 144 ÷ 8",
            steps: [
              "= 45 + (12 \\times -4) - (144 \\div 8)",
              "= 45 + (-48) - 18",
              "= 45 - 48 - 18",
              "= -3 - 18",
            ],
            result: "= -21",
          },
        ],
      },
    ],
  },
];
