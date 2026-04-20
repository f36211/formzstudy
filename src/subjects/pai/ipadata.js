const ipaData = [
  {
    id: "besaran-pokok-satuan",
    title: "Besaran Pokok dan Satuannya",
    icon: "📏",
    sections: [
      {
        subtitle: "Pengertian",
        content: [
          {
            type: "text",
            content:
              "Besaran pokok adalah besaran yang satuannya telah ditetapkan terlebih dahulu dan tidak diturunkan dari besaran lain. Terdapat 7 besaran pokok dalam Sistem Internasional (SI).",
          },
        ],
      },
      {
        subtitle: "7 Besaran Pokok",
        content: [
          {
            type: "table",
            headers: ["No", "Besaran Pokok", "Satuan SI", "Simbol"],
            rows: [
              ["1", "Panjang", "Meter", "m"],
              ["2", "Massa", "Kilogram", "kg"],
              ["3", "Waktu", "Sekon", "s"],
              ["4", "Suhu", "Kelvin", "K"],
              ["5", "Kuat Arus Listrik", "Ampere", "A"],
              ["6", "Intensitas Cahaya", "Kandela", "cd"],
              ["7", "Jumlah Zat", "Mol", "mol"],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "alat-ukur-panjang",
    title: "Alat Ukur Panjang",
    icon: "📐",
    sections: [
      {
        subtitle: "Penggaris (Mistar)",
        content: [
          {
            type: "text",
            content:
              "Penggaris digunakan untuk mengukur panjang benda dengan ketelitian 1 mm (0,1 cm). Cara membaca: posisikan mata tegak lurus terhadap skala agar tidak terjadi paralaks.",
          },
          { type: "highlight", content: "Ketelitian penggaris: 1 mm" },
        ],
      },
      {
        subtitle: "Jangka Sorong",
        content: [
          {
            type: "text",
            content:
              "Jangka sorong memiliki dua skala: skala utama dan skala nonius (vernier). Digunakan untuk mengukur diameter luar, diameter dalam, dan kedalaman benda.",
          },
          {
            type: "highlight",
            content: "Ketelitian jangka sorong: 0,1 mm (0,01 cm)",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Baca angka pada skala utama (sebelah kiri angka 0 nonius)",
              "Cari garis nonius yang paling lurus/berimpit dengan skala utama",
              "Kalikan nomor garis nonius tersebut dengan 0,1 mm",
              "Jumlahkan hasil skala utama + skala nonius",
            ],
          },
        ],
      },
      {
        subtitle: "Mikrometer Sekrup",
        content: [
          {
            type: "text",
            content:
              "Mikrometer sekrup digunakan untuk mengukur benda-benda yang sangat tipis seperti diameter kawat atau ketebalan kertas.",
          },
          {
            type: "highlight",
            content: "Ketelitian mikrometer sekrup: 0,01 mm (0,001 cm)",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Baca skala utama pada selubung (sleeve) — perhatikan garis atas dan bawah",
              "Baca skala putar (thimble) — angka yang sejajar dengan garis tengah sleeve",
              "Hasil = skala utama + (skala thimble × 0,01 mm)",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "perubahan-fisika-kimia",
    title: "Perubahan Fisika dan Kimia",
    icon: "⚗️",
    sections: [
      {
        subtitle: "Perubahan Fisika",
        content: [
          {
            type: "text",
            content:
              "Perubahan fisika adalah perubahan zat yang tidak menghasilkan zat baru. Sifat kimia zat tidak berubah, hanya wujud atau bentuknya.",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Es yang mencair menjadi air",
              "Kertas yang dipotong-potong menjadi serpihan kecil",
              "Kayu yang dibelah menjadi papan",
            ],
          },
        ],
      },
      {
        subtitle: "Perubahan Kimia",
        content: [
          {
            type: "text",
            content:
              "Perubahan kimia adalah perubahan zat yang menghasilkan zat baru dengan sifat yang berbeda dari zat semula. Ditandai dengan perubahan warna, timbul gas, terbentuk endapan, atau perubahan suhu.",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Besi berkarat (besi + oksigen → karat besi/oksida besi)",
              "Kayu yang dibakar menjadi arang dan abu",
              "Susu yang berubah menjadi yogurt (fermentasi)",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "konversi-suhu",
    title: "Konversi Suhu",
    icon: "🌡️",
    sections: [
      {
        subtitle: "Rumus Konversi Suhu",
        content: [
          {
            type: "table",
            headers: [
              "Dari/Ke",
              "Celsius (°C)",
              "Fahrenheit (°F)",
              "Kelvin (K)",
              "Reamur (°R)",
            ],
            rows: [
              [
                "Celsius",
                "—",
                "°F = (9/5 × °C) + 32",
                "K = °C + 273",
                "°R = 4/5 × °C",
              ],
              [
                "Fahrenheit",
                "°C = 5/9 × (°F − 32)",
                "—",
                "K = 5/9(°F−32)+273",
                "°R = 4/9(°F−32)",
              ],
            ],
          },
          {
            type: "highlight",
            content: "Soal: 40°C → °F = (9/5 × 40) + 32 = 72 + 32 = 104°F",
          },
        ],
      },
    ],
  },
  {
    id: "resultan-gaya",
    title: "Resultan Gaya",
    icon: "⚡",
    sections: [
      {
        subtitle: "Konsep Resultan Gaya",
        content: [
          {
            type: "text",
            content:
              "Resultan gaya adalah jumlah vektor dari semua gaya yang bekerja pada suatu benda. Gaya ke kanan bernilai positif (+), gaya ke kiri bernilai negatif (−).",
          },
          {
            type: "highlight",
            content:
              "Soal: F1 = +40 N, F2 = −35 N, F3 = +25 N → R = 40 − 35 + 25 = 30 N (ke kanan)",
          },
        ],
      },
      {
        subtitle: "Aturan Tanda",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Gaya ke kanan / ke atas → bernilai POSITIF (+)",
              "Gaya ke kiri / ke bawah → bernilai NEGATIF (−)",
              "Jika hasil positif → arah resultan ke kanan",
              "Jika hasil negatif → arah resultan ke kiri",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "energi-potensial",
    title: "Energi Potensial",
    icon: "🥥",
    sections: [
      {
        subtitle: "Rumus Energi Potensial",
        content: [
          {
            type: "text",
            content:
              "Energi potensial gravitasi adalah energi yang dimiliki benda karena posisi ketinggiannya terhadap suatu acuan.",
          },
          { type: "highlight", content: "Ep = m × g × h" },
          {
            type: "table",
            headers: ["Simbol", "Keterangan", "Satuan"],
            rows: [
              ["m", "Massa benda", "kg"],
              ["g", "Percepatan gravitasi (biasanya 10)", "m/s²"],
              ["h", "Ketinggian benda", "m"],
              ["Ep", "Energi Potensial", "Joule (J)"],
            ],
          },
          { type: "highlight", content: "Soal: Ep = 2 × 10 × 5 = 100 Joule" },
        ],
      },
    ],
  },
  {
    id: "usaha-dan-perpindahan",
    title: "Usaha dan Perpindahan",
    icon: "💪",
    sections: [
      {
        subtitle: "Rumus Usaha",
        content: [
          {
            type: "text",
            content:
              "Usaha adalah hasil kali gaya dengan perpindahan benda searah gaya tersebut.",
          },
          { type: "highlight", content: "W = F × s  →  s = W / F" },
          { type: "highlight", content: "Soal: s = 1400 / 200 = 7 meter" },
        ],
      },
    ],
  },
  {
    id: "perpindahan-kalor",
    title: "Perpindahan Kalor",
    icon: "🔥",
    sections: [
      {
        subtitle: "Konduksi",
        content: [
          {
            type: "text",
            content:
              "Konduksi adalah perpindahan kalor melalui zat perantara tanpa disertai perpindahan partikel zat tersebut.",
          },
          {
            type: "highlight",
            content:
              "Contoh: Ujung sendok logam yang dipanaskan di atas api akan terasa panas di ujung yang dipegang.",
          },
        ],
      },
      {
        subtitle: "Konveksi",
        content: [
          {
            type: "text",
            content:
              "Konveksi adalah perpindahan kalor yang disertai perpindahan partikel zat perantaranya (fluida: cair atau gas).",
          },
          {
            type: "highlight",
            content:
              "Contoh: Air mendidih dalam panci — air panas naik ke atas, air dingin turun ke bawah membentuk arus konveksi.",
          },
        ],
      },
      {
        subtitle: "Radiasi",
        content: [
          {
            type: "text",
            content:
              "Radiasi adalah perpindahan kalor tanpa memerlukan zat perantara, merambat dalam bentuk gelombang elektromagnetik.",
          },
          {
            type: "highlight",
            content:
              "Contoh: Panas matahari sampai ke bumi melewati ruang hampa udara.",
          },
        ],
      },
    ],
  },
  {
    id: "zat-aditif-makanan",
    title: "Zat Aditif Makanan",
    icon: "🍬",
    sections: [
      {
        subtitle: "Pewarna Buatan",
        content: [
          {
            type: "text",
            content:
              "Pewarna buatan adalah zat kimia yang ditambahkan untuk memberi atau mempercantik warna makanan.",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Tartrazin (kuning) — digunakan pada minuman dan permen",
              "Sunset Yellow FCF (oranye-kuning) — terdapat pada selai dan sereal",
            ],
          },
        ],
      },
      {
        subtitle: "Penyedap Buatan",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "MSG (Monosodium Glutamat) — menguatkan rasa gurih pada makanan",
              "Dinatrium Inosinat (IMP) — menambah cita rasa umami pada produk olahan",
            ],
          },
        ],
      },
      {
        subtitle: "Pemanis Buatan",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Sakarin — pemanis non-kalori pada minuman diet",
              "Aspartam — digunakan pada permen bebas gula dan minuman rendah kalori",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "frekuensi-dan-periode",
    title: "Frekuensi dan Periode Getaran",
    icon: "🔁",
    sections: [
      {
        subtitle: "Rumus Frekuensi dan Periode",
        content: [
          {
            type: "highlight",
            content: "f = n / t     |     T = t / n     |     f = 1/T",
          },
          {
            type: "table",
            headers: ["Simbol", "Keterangan", "Satuan"],
            rows: [
              ["f", "Frekuensi", "Hz (Hertz)"],
              ["T", "Periode", "sekon (s)"],
              ["n", "Jumlah getaran", "kali"],
              ["t", "Waktu", "sekon (s)"],
            ],
          },
          {
            type: "highlight",
            content: "Soal: f = 200/50 = 4 Hz | T = 50/200 = 0,25 sekon",
          },
        ],
      },
    ],
  },
  {
    id: "cepat-rambat-gelombang",
    title: "Cepat Rambat Gelombang",
    icon: "〰️",
    sections: [
      {
        subtitle: "Rumus Cepat Rambat",
        content: [
          { type: "highlight", content: "v = λ / T  atau  v = λ × f" },
          {
            type: "text",
            content: "Jika diketahui jarak (λ) dan waktu (t) tanpa frekuensi:",
          },
          {
            type: "highlight",
            content: "v = s / t  →  v = 100 cm / 5 s = 20 cm/s = 0,2 m/s",
          },
          {
            type: "text",
            content: "Keterangan: s = jarak tempuh gelombang, t = waktu tempuh",
          },
        ],
      },
    ],
  },
  {
    id: "cermin-cekung",
    title: "Cermin Cekung (Konkaf)",
    icon: "🪞",
    sections: [
      {
        subtitle: "Rumus Cermin Cekung",
        content: [
          { type: "highlight", content: "1/f = 1/So + 1/Si   |   M = Si / So" },
          {
            type: "table",
            headers: ["Simbol", "Keterangan"],
            rows: [
              ["f", "Jarak fokus (cm)"],
              ["So", "Jarak benda (cm)"],
              ["Si", "Jarak bayangan (cm)"],
              ["M", "Perbesaran (kali)"],
            ],
          },
          {
            type: "highlight",
            content:
              "Soal: 1/f = 1/10 → 1/Si = 1/10 − 1/10 = 0 → Si = ∞ (bayangan di tak hingga)",
          },
          {
            type: "text",
            content:
              "Catatan: Jika So = f, bayangan terbentuk di tak hingga. Jika soal So=10 dan f=10 maka bayangan tidak terbentuk (di tak terhingga). Bayangan bersifat: maya jika Si negatif, nyata jika Si positif.",
          },
        ],
      },
      {
        subtitle: "Sifat Bayangan Cermin Cekung",
        content: [
          {
            type: "table",
            headers: ["Posisi Benda", "Sifat Bayangan"],
            rows: [
              [
                "So > 2f (di luar pusat kelengkungan)",
                "Nyata, terbalik, diperkecil",
              ],
              ["So = 2f", "Nyata, terbalik, sama besar"],
              ["f < So < 2f", "Nyata, terbalik, diperbesar"],
              ["So = f", "Bayangan di tak terhingga"],
              ["So < f", "Maya, tegak, diperbesar"],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "tuas-pengungkit",
    title: "Tuas (Pengungkit)",
    icon: "🏗️",
    sections: [
      {
        subtitle: "Rumus Keseimbangan Tuas",
        content: [
          {
            type: "highlight",
            content: "F × lk = W × lb   →   F = (W × lb) / lk",
          },
          {
            type: "table",
            headers: ["Simbol", "Keterangan", "Satuan"],
            rows: [
              ["F", "Gaya kuasa", "N"],
              ["W", "Beban", "N"],
              ["lk", "Lengan kuasa", "cm atau m"],
              ["lb", "Lengan beban", "cm atau m"],
            ],
          },
          {
            type: "highlight",
            content: "Soal Tuas: F = (200 × 20) / 80 = 4000/80 = 50 N",
          },
        ],
      },
      {
        subtitle: "Jenis-Jenis Tuas",
        content: [
          {
            type: "table",
            headers: ["Jenis", "Urutan", "Contoh"],
            rows: [
              [
                "Tuas 1",
                "Titik tumpu di tengah (B-T-K)",
                "Gunting, tang, jungkat-jungkit, linggis",
              ],
              [
                "Tuas 2",
                "Beban di tengah (T-B-K)",
                "Gerobak dorong, pemecah kemiri, pembuka tutup botol",
              ],
              [
                "Tuas 3",
                "Kuasa di tengah (T-K-B)",
                "Pinset, sekop, lengan manusia saat mengangkat",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bidang-miring",
    title: "Bidang Miring",
    icon: "📦",
    sections: [
      {
        subtitle: "Rumus Bidang Miring",
        content: [
          { type: "highlight", content: "F = (W × h) / l" },
          {
            type: "table",
            headers: ["Simbol", "Keterangan"],
            rows: [
              ["F", "Gaya yang diperlukan (N)"],
              ["W", "Berat benda (N)"],
              ["h", "Tinggi bidang miring (m)"],
              ["l", "Panjang bidang miring (m)"],
            ],
          },
          {
            type: "highlight",
            content: "Soal: F = (300 × 1,5) / 3 = 450/3 = 150 N",
          },
        ],
      },
    ],
  },
  {
    id: "sifat-partikel-zat",
    title: "Sifat Partikel Benda Padat, Cair, dan Gas",
    icon: "🧊",
    sections: [
      {
        subtitle: "Perbandingan Sifat Partikel",
        content: [
          {
            type: "table",
            headers: ["Sifat", "Padat", "Cair", "Gas"],
            rows: [
              [
                "Gaya tarik antar partikel",
                "Sangat kuat",
                "Lemah",
                "Sangat lemah / hampir tidak ada",
              ],
              [
                "Letak partikel",
                "Sangat berdekatan & teratur",
                "Berdekatan, tidak teratur",
                "Sangat berjauhan, acak",
              ],
              ["Bentuk", "Tetap", "Mengikuti wadah", "Mengisi seluruh ruangan"],
              ["Volume", "Tetap", "Tetap", "Berubah sesuai wadah"],
              [
                "Gerak partikel",
                "Hanya bergetar di tempat",
                "Bergerak bebas terbatas",
                "Bergerak sangat bebas",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ciri-makhluk-hidup",
    title: "Ciri-Ciri Makhluk Hidup",
    icon: "🌱",
    sections: [
      {
        subtitle: "6 Ciri Makhluk Hidup",
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              "Bergerak — berpindah tempat atau menggerakkan sebagian tubuhnya (contoh: tumbuhan mengikuti arah cahaya)",
              "Bernapas (Respirasi) — mengambil O₂ dan mengeluarkan CO₂ untuk menghasilkan energi",
              "Membutuhkan Makanan (Nutrisi) — untuk pertumbuhan dan sumber energi",
              "Tumbuh dan Berkembang — bertambah ukuran dan mencapai kedewasaan",
              "Berkembang Biak (Reproduksi) — menghasilkan keturunan untuk melestarikan jenisnya",
              "Peka terhadap Rangsang (Iritabilitas) — merespons perubahan lingkungan (contoh: putri malu menutup daun saat disentuh)",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "jaringan-tumbuhan",
    title: "Jaringan Tumbuhan (Daun dan Batang)",
    icon: "🍃",
    sections: [
      {
        subtitle: "Susunan Jaringan pada Daun",
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              "Epidermis atas — pelindung permukaan atas daun, dilapisi kutikula",
              "Jaringan palisade (pagar) — sel-sel tegak rapat, banyak kloroplas, tempat utama fotosintesis",
              "Jaringan spons (bunga karang) — sel-sel longgar dengan ruang antar sel, tempat pertukaran gas",
              "Berkas pembuluh (xilem & floem) — transportasi air dan hasil fotosintesis",
              "Epidermis bawah — terdapat stomata (mulut daun) untuk pertukaran gas",
            ],
          },
        ],
      },
      {
        subtitle: "Susunan Jaringan pada Batang",
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              "Epidermis — lapisan terluar pelindung batang",
              "Korteks — jaringan dasar di bawah epidermis",
              "Floem — mengangkut hasil fotosintesis (gula) ke seluruh tubuh",
              "Kambium (dikotil) — jaringan meristematik yang membuat batang membesar",
              "Xilem — mengangkut air dan mineral dari akar ke daun",
              "Empulur — jaringan dasar di bagian tengah batang",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "enzim-pencernaan",
    title: "Enzim Pencernaan Lambung dan Pankreas",
    icon: "🫁",
    sections: [
      {
        subtitle: "Enzim di Lambung",
        content: [
          {
            type: "table",
            headers: ["Enzim", "Fungsi"],
            rows: [
              ["Pepsin", "Memecah protein menjadi pepton (polipeptida)"],
              [
                "Renin",
                "Mengendapkan kasein (protein susu) — terutama pada bayi",
              ],
              ["Lipase lambung", "Mencerna lemak secara terbatas"],
              [
                "HCl (asam klorida)",
                "Membunuh bakteri, mengaktifkan pepsinogen menjadi pepsin, menciptakan suasana asam",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "Enzim di Pankreas",
        content: [
          {
            type: "table",
            headers: ["Enzim", "Fungsi"],
            rows: [
              [
                "Amilase pankreas",
                "Mengubah amilum/pati menjadi maltosa (gula sederhana)",
              ],
              [
                "Lipase pankreas",
                "Memecah lemak (trigliserida) menjadi asam lemak dan gliserol",
              ],
              ["Tripsin", "Memecah protein/pepton menjadi asam amino"],
              ["Kimotripsin", "Membantu pencernaan protein"],
              ["Nuklease", "Memecah asam nukleat (DNA/RNA)"],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "pembuluh-darah",
    title: "Perbedaan Arteri dan Vena",
    icon: "🩸",
    sections: [
      {
        subtitle: "Perbandingan Arteri (Nadi) vs Vena (Balik)",
        content: [
          {
            type: "table",
            headers: ["Aspek", "Arteri (Nadi)", "Vena (Balik)"],
            rows: [
              [
                "Arah aliran",
                "Dari jantung ke seluruh tubuh",
                "Dari seluruh tubuh ke jantung",
              ],
              [
                "Kandungan darah",
                "Darah kaya O₂ (kecuali arteri pulmonalis)",
                "Darah kaya CO₂ (kecuali vena pulmonalis)",
              ],
              [
                "Dinding pembuluh",
                "Tebal, kuat, elastis",
                "Tipis, kurang elastis",
              ],
              [
                "Katup",
                "Tidak ada (hanya di pangkal aorta)",
                "Ada di sepanjang pembuluh",
              ],
              ["Tekanan darah", "Tinggi", "Rendah"],
              [
                "Letak",
                "Di dalam tubuh (lebih dalam)",
                "Dekat permukaan kulit",
              ],
              ["Denyut", "Terasa berdenyut", "Tidak berdenyut"],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "monokotil-dikotil",
    title: "Ciri Tanaman Monokotil dan Dikotil",
    icon: "🌾",
    sections: [
      {
        subtitle: "Perbandingan Monokotil vs Dikotil",
        content: [
          {
            type: "table",
            headers: ["Ciri", "Monokotil", "Dikotil"],
            rows: [
              ["Keping biji (kotiledon)", "1 keping", "2 keping"],
              ["Akar", "Serabut", "Tunggang"],
              [
                "Batang",
                "Tidak bercabang, tidak ada kambium",
                "Bercabang, ada kambium",
              ],
              [
                "Daun",
                "Tulang daun sejajar/melengkung",
                "Tulang daun menyirip/menjari",
              ],
              ["Bunga", "Mahkota kelipatan 3", "Mahkota kelipatan 4 atau 5"],
              [
                "Berkas pembuluh",
                "Tersebar tidak teratur",
                "Teratur membentuk lingkaran",
              ],
              [
                "Contoh",
                "Padi, jagung, kelapa, bambu",
                "Mangga, kacang, mawar, bayam",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "simbiosis-ekosistem",
    title: "Simbiosis dan Interaksi Ekosistem",
    icon: "🦁",
    sections: [
      {
        subtitle: "Jenis Simbiosis dan Interaksi",
        content: [
          {
            type: "table",
            headers: ["Jenis", "Pengertian", "Contoh di Hutan"],
            rows: [
              [
                "Mutualisme",
                "Kedua organisme saling menguntungkan (+/+)",
                "Lebah membantu penyerbukan bunga hutan, lebah mendapat nektar",
              ],
              [
                "Komensalisme",
                "Satu untung, satu tidak untung/rugi (+/0)",
                "Anggrek menempel di pohon besar — pohon tidak terpengaruh, anggrek mendapat cahaya",
              ],
              [
                "Parasitisme",
                "Satu untung, satu rugi (+/−)",
                "Benalu hidup di pohon inang — benalu untung, pohon dirugikan",
              ],
              [
                "Kompetisi",
                "Dua organisme bersaing untuk sumber daya yang sama",
                "Singa dan harimau bersaing memperebutkan mangsa atau wilayah",
              ],
              [
                "Predasi",
                "Satu organisme memangsa organisme lain (predator/mangsa)",
                "Elang (predator) memangsa ular (mangsa) di hutan",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "kecepatan-dan-waktu",
    title: "Kecepatan, Jarak, dan Waktu",
    icon: "🚗",
    sections: [
      {
        subtitle: "Rumus",
        content: [
          {
            type: "highlight",
            content: "v = s / t   →   t = s / v   →   s = v × t",
          },
          {
            type: "table",
            headers: ["Simbol", "Keterangan", "Satuan"],
            rows: [
              ["v", "Kecepatan rata-rata", "km/jam atau m/s"],
              ["s", "Jarak", "km atau m"],
              ["t", "Waktu", "jam atau sekon"],
            ],
          },
          {
            type: "highlight",
            content: "Soal: t = 160 km / 80 km/jam = 2 jam",
          },
        ],
      },
    ],
  },
  {
    id: "penyakit-pembuluh-darah",
    title: "Penyakit pada Pembuluh Darah",
    icon: "❤️",
    sections: [
      {
        subtitle: "3 Penyakit Utama Pembuluh Darah",
        content: [
          {
            type: "table",
            headers: ["Penyakit", "Penyebab", "Pencegahan"],
            rows: [
              [
                "Aterosklerosis (pengerasan arteri)",
                "Penumpukan plak kolesterol dan lemak di dinding arteri hingga menyempitkan pembuluh",
                "Kurangi makanan berlemak jenuh, olahraga teratur, tidak merokok",
              ],
              [
                "Hipertensi (tekanan darah tinggi)",
                "Stres, konsumsi garam berlebih, obesitas, kurang olahraga, faktor genetik",
                "Kurangi garam & kafein, olahraga rutin, kelola stres, berat badan ideal",
              ],
              [
                "Varises",
                "Kelemahan katup vena sehingga darah menggenang dan pembuluh membesar, sering akibat lama berdiri",
                "Hindari berdiri terlalu lama, angkat kaki saat istirahat, pakai kaus kaki khusus",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "penyaringan-darah-ginjal",
    title: "Proses Penyaringan Darah di Ginjal",
    icon: "🫘",
    sections: [
      {
        subtitle: "Tahapan Pembentukan Urin",
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              "Filtrasi (penyaringan) — Darah disaring di glomerulus (bola kapiler dalam kapsul Bowman). Hasil: urin primer (filtrat glomerulus) mengandung air, glukosa, asam amino, urea, garam mineral",
              "Reabsorpsi (penyerapan kembali) — Zat-zat berguna (glukosa, asam amino, air, garam) diserap kembali di tubulus proksimal, lengkung Henle, dan tubulus distal. Hasil: urin sekunder",
              "Augmentasi (penambahan zat) — Zat sisa yang tidak diperlukan (kreatinin, ion H⁺, amonia) ditambahkan ke urin sekunder di tubulus distal dan tubulus kolektivus. Hasil: urin sesungguhnya",
              "Urin mengalir dari tubulus kolektivus → pelvis ginjal → ureter → kandung kemih → uretra → dikeluarkan",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "jaring-makanan-sawah",
    title: "Jaring-Jaring Makanan di Ekosistem Sawah",
    icon: "🌾",
    sections: [
      {
        subtitle: "Komponen Ekosistem Sawah",
        content: [
          {
            type: "text",
            content:
              "Jaring-jaring makanan merupakan kumpulan rantai makanan yang saling berhubungan dalam suatu ekosistem.",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Produsen: Padi, rumput sawah, ganggang",
              "Konsumen I (Herbivora): Belalang, tikus, ulat, wereng, keong sawah",
              "Konsumen II (Karnivora): Katak, burung pipit, ular",
              "Konsumen III (Karnivora puncak): Elang, ular besar",
              "Pengurai: Bakteri, jamur, cacing tanah",
            ],
          },
          {
            type: "highlight",
            content:
              "Contoh rantai makanan: Padi → Tikus → Ular → Elang → Pengurai",
          },
          {
            type: "highlight",
            content:
              "Contoh rantai makanan 2: Padi → Belalang → Katak → Ular → Elang → Pengurai",
          },
        ],
      },
    ],
  },
  {
    id: "sonar-kedalaman-laut",
    title: "Sonar dan Kedalaman Laut",
    icon: "🌊",
    sections: [
      {
        subtitle: "Rumus Sonar",
        content: [
          {
            type: "text",
            content:
              "Sonar menggunakan gelombang bunyi ultrasonik yang dipantulkan dari dasar laut. Karena gelombang pergi dan kembali, waktu dibagi 2.",
          },
          { type: "highlight", content: "d = (v × t) / 2" },
          {
            type: "highlight",
            content: "Soal: d = (340 × 10) / 2 = 3400 / 2 = 1700 meter",
          },
        ],
      },
    ],
  },
  {
    id: "organ-pernapasan",
    title: "Organ Pernapasan Manusia",
    icon: "🫁",
    sections: [
      {
        subtitle: "Urutan Organ Pernapasan",
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              "Hidung — menyaring (rambut hidung), menghangatkan, dan melembabkan udara masuk",
              "Faring (tekak) — persimpangan saluran napas dan saluran makan",
              "Laring (kotak suara) — mengandung pita suara dan epiglotis (mencegah makanan masuk saluran napas)",
              "Trakea (tenggorokan) — saluran berbentuk pipa bertulung rawan berbentuk C, dilapisi silia untuk menjebak debu",
              "Bronkus — percabangan trakea menjadi dua, menuju paru-paru kanan dan kiri",
              "Bronkiolus — percabangan halus bronkus di dalam paru-paru",
              "Alveolus — kantung udara kecil tempat pertukaran O₂ dan CO₂ antara udara dan darah (kapiler)",
            ],
          },
        ],
      },
      {
        subtitle: "Penyakit Sistem Pernapasan",
        content: [
          {
            type: "table",
            headers: ["Penyakit", "Keterangan"],
            rows: [
              [
                "Asma",
                "Penyempitan saluran napas akibat alergi/iritasi, menyebabkan sesak napas dan mengi",
              ],
              [
                "Bronkitis",
                "Peradangan pada bronkus, biasanya disebabkan infeksi bakteri/virus atau asap rokok",
              ],
              [
                "TBC (Tuberkulosis)",
                "Infeksi bakteri Mycobacterium tuberculosis pada paru-paru, ditandai batuk berdarah",
              ],
              [
                "Pneumonia",
                "Infeksi paru-paru yang menyebabkan alveolus terisi cairan/nanah",
              ],
              [
                "Emfisema",
                "Kerusakan dinding alveolus akibat rokok, mengurangi luas permukaan pertukaran gas",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "pemisahan-campuran",
    title: "Pemisahan Campuran",
    icon: "🧪",
    sections: [
      {
        subtitle: "Filtrasi (Penyaringan)",
        content: [
          {
            type: "text",
            content:
              "Filtrasi adalah pemisahan campuran berdasarkan perbedaan ukuran partikel menggunakan kertas saring atau filter.",
          },
          {
            type: "highlight",
            content:
              "Contoh: Menyaring air berlumpur — lumpur tertahan di kertas saring, air jernih lolos",
          },
        ],
      },
      {
        subtitle: "Evaporasi (Penguapan)",
        content: [
          {
            type: "text",
            content:
              "Evaporasi adalah pemisahan campuran dengan cara menguapkan pelarut (biasanya air) sehingga zat terlarut tertinggal.",
          },
          {
            type: "highlight",
            content:
              "Contoh: Pembuatan garam dapur — air laut diuapkan, garam tertinggal",
          },
        ],
      },
      {
        subtitle: "Sublimasi",
        content: [
          {
            type: "text",
            content:
              "Sublimasi adalah pemisahan campuran memanfaatkan sifat zat yang dapat menyublim (berubah dari padat langsung ke gas) tanpa melalui fase cair.",
          },
          {
            type: "highlight",
            content:
              "Contoh: Pemurnian kapur barus (naftalena) dari kotoran — kapur barus dipanaskan menyublim lalu didinginkan kembali menjadi padatan murni",
          },
        ],
      },
    ],
  },
  {
    id: "glbb-gerak",
    title: "GLBB Dipercepat dan Diperlambat",
    icon: "🏎️",
    sections: [
      {
        subtitle: "Gerak Lurus Berubah Beraturan (GLBB)",
        content: [
          {
            type: "text",
            content:
              "GLBB adalah gerak lurus dengan percepatan (a) yang konstan/tetap. Kecepatan berubah secara teratur.",
          },
        ],
      },
      {
        subtitle: "GLBB Dipercepat",
        content: [
          {
            type: "text",
            content:
              "Kecepatan benda bertambah secara teratur (percepatan positif).",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Bola yang menggelinding menuruni bidang miring",
              "Mobil yang menekan gas dari kondisi diam",
              "Benda yang dijatuhkan bebas dari ketinggian tertentu (gerak jatuh bebas)",
            ],
          },
        ],
      },
      {
        subtitle: "GLBB Diperlambat",
        content: [
          {
            type: "text",
            content:
              "Kecepatan benda berkurang secara teratur (percepatan negatif/perlambatan).",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Bola yang dilempar ke atas (kecepatannya berkurang hingga nol)",
              "Mobil yang menginjak rem",
              "Benda yang meluncur di permukaan kasar dan perlahan berhenti",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "jenis-otot",
    title: "Perbedaan Otot Polos, Lurik, dan Jantung",
    icon: "💪",
    sections: [
      {
        subtitle: "Perbandingan Ketiga Jenis Otot",
        content: [
          {
            type: "table",
            headers: [
              "Aspek",
              "Otot Polos",
              "Otot Lurik (Rangka)",
              "Otot Jantung",
            ],
            rows: [
              [
                "Bentuk sel",
                "Gelondong, ujung runcing",
                "Silindris panjang, bercabang tidak ada",
                "Silindris pendek, bercabang",
              ],
              ["Inti sel", "1, di tengah", "Banyak, di tepi", "1–2, di tengah"],
              [
                "Garis lintang",
                "Tidak ada (polos)",
                "Ada (lurik)",
                "Ada (lurik)",
              ],
              [
                "Kerja",
                "Involunter (tidak sadar)",
                "Volunter (sadar/kemauan)",
                "Involunter (tidak sadar)",
              ],
              [
                "Kecepatan kontraksi",
                "Lambat, tidak mudah lelah",
                "Cepat, mudah lelah",
                "Sedang, tidak pernah lelah",
              ],
              [
                "Lokasi",
                "Organ dalam (usus, lambung, pembuluh darah)",
                "Menempel pada tulang (rangka)",
                "Hanya di jantung",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sendi-gerak",
    title: "Macam-Macam Sendi Gerak",
    icon: "🦴",
    sections: [
      {
        subtitle: "Jenis Sendi dan Contohnya",
        content: [
          {
            type: "table",
            headers: ["Jenis Sendi", "Arah Gerak", "Contoh"],
            rows: [
              [
                "Sendi Peluru (Ball and Socket)",
                "Ke segala arah (multiarah)",
                "Sendi bahu (lengan-bahu), sendi panggul (paha-pinggul)",
              ],
              [
                "Sendi Engsel",
                "Satu arah (seperti engsel pintu)",
                "Sendi siku, sendi lutut, sendi jari tangan",
              ],
              [
                "Sendi Putar (Pivot)",
                "Berputar pada satu sumbu",
                "Sendi antara tulang atlas & aksis (kepala bisa menoleh), sendi pengumpil-hasta",
              ],
              [
                "Sendi Pelana",
                "Dua arah (maju-mundur & kanan-kiri)",
                "Sendi di pangkal ibu jari tangan",
              ],
              [
                "Sendi Geser (Luncur)",
                "Menggeser satu bidang ke bidang lain",
                "Sendi antar tulang pergelangan tangan & kaki",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "revolusi-rotasi-bumi",
    title: "Akibat Revolusi dan Rotasi Bumi",
    icon: "🌍",
    sections: [
      {
        subtitle: "Akibat Rotasi Bumi",
        content: [
          {
            type: "text",
            content:
              "Rotasi bumi adalah perputaran bumi pada porosnya sendiri (satu putaran = ±24 jam).",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Terjadinya siang dan malam — sisi bumi yang menghadap matahari = siang, yang membelakangi = malam",
              "Gerak semu harian matahari — matahari seolah bergerak dari timur ke barat setiap hari",
              "Perbedaan waktu di berbagai wilayah — setiap 15° bujur berbeda 1 jam (dasar pembagian zona waktu)",
              "Pembelokan arah angin dan arus laut (efek Coriolis)",
            ],
          },
        ],
      },
      {
        subtitle: "Akibat Revolusi Bumi",
        content: [
          {
            type: "text",
            content:
              "Revolusi bumi adalah perputaran bumi mengelilingi matahari (satu putaran = ±365,25 hari).",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Pergantian musim — belahan bumi utara dan selatan bergantian mengalami musim panas, gugur, dingin, dan semi",
              "Gerak semu tahunan matahari — posisi matahari seolah bergerak antara 23,5°LU dan 23,5°LS sepanjang tahun",
              "Perbedaan lama siang dan malam — saat musim panas siang lebih panjang, saat musim dingin malam lebih panjang",
              "Penetapan kalender Masehi — satu tahun = 365 hari (tahun kabisat setiap 4 tahun = 366 hari)",
            ],
          },
        ],
      },
    ],
  },
];

export default ipaData;
