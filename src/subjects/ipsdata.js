export const ipsdata = [
  {
    id: "letak-indonesia",
    title: "Letak dan Kondisi Indonesia",
    icon: "🗺️",
    image: "/image.png",
    sections: [
      {
        subtitle: "Jenis Letak Indonesia",
        content: [
          {
            type: "text",
            content:
              "Indonesia memiliki tiga jenis letak yang memengaruhi kondisi wilayah dan kehidupan masyarakatnya.",
          },
          {
            type: "image",
            src: "/image.png",
            alt: "Peta Letak Indonesia",
          },
          {
            type: "table",
            headers: ["Jenis Letak", "Keterangan", "Pengaruh"],
            rows: [
              [
                "Astronomis",
                "95°–141° BT dan 6° LU–11° LS",
                "Beriklim tropis, pembagian 3 zona waktu, penyinaran matahari sepanjang tahun",
              ],
              [
                "Geografis",
                "Di antara Benua Asia & Australia; Samudra Hindia & Pasifik",
                "Keberagaman budaya, jalur perdagangan internasional, dua musim",
              ],
              [
                "Geologis",
                "Pertemuan 3 lempeng tektonik: Indo-Australia, Eurasia, Pasifik",
                "Tanah subur, rawan gempa dan gunung meletus",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "Faktor Interaksi Antarruang",
        content: [
          {
            type: "text",
            content:
              "Tiga faktor utama yang mendorong terjadinya interaksi antarwilayah:",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Complementarity (Saling Melengkapi): setiap wilayah memiliki komoditas berbeda sehingga saling membutuhkan — contoh: Wilayah X penghasil beras berinteraksi dengan Wilayah Y penghasil daging.",
              "Intervening Opportunity (Kesempatan Antara): adanya wilayah lain yang menawarkan alternatif lebih baik sehingga melemahkan interaksi asal.",
              "Transferability (Kemudahan Transfer): kemudahan akses pemindahan barang, jasa, manusia, dan informasi melalui infrastruktur transportasi dan komunikasi.",
            ],
          },
          {
            type: "highlight",
            content:
              "Mahalnya ongkos transportasi = melemahkan interaksi. Dekatnya jarak dan banyaknya pilihan transportasi = memperkuat interaksi.",
          },
        ],
      },
      {
        subtitle: "Iklim dan Kenampakan Alam Indonesia",
        content: [
          { type: "text", content: "Iklim Indonesia dipengaruhi angin muson:" },
          {
            type: "list",
            ordered: false,
            items: [
              "Angin Muson Barat (Oktober–April): membawa musim hujan di sebagian besar wilayah Indonesia.",
              "Angin Muson Timur (Mei–September): membawa musim kemarau di sebagian besar wilayah Indonesia.",
            ],
          },
          {
            type: "table",
            headers: ["Kenampakan Alam", "Aktivitas Ekonomi Penduduk"],
            rows: [
              [
                "Gunung & Pegunungan",
                "Budidaya buah, sayuran, tanaman hias, objek wisata",
              ],
              [
                "Dataran Tinggi",
                "Perkebunan teh, kopi, kina, tembakau; vila; pariwisata",
              ],
              [
                "Dataran Rendah",
                "Pertanian, peternakan, industri, perdagangan, pemukiman",
              ],
              ["Sungai & DAS", "Pertanian dan perikanan"],
              ["Danau & Rawa", "Budi daya ikan, olahraga air, PLTA"],
              [
                "Pantai & Laut",
                "Nelayan, pertanian garam, pariwisata pantai, tambak udang",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "asean-kerjasama",
    title: "ASEAN dan Kerja Sama Antarnegara",
    icon: "🌏",
    sections: [
      {
        subtitle: "Faktor Pendorong Kerja Sama ASEAN",
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              "Persamaan dan perbedaan sumber daya alam",
              "Persamaan dan perbedaan kondisi geografis",
              "Perbedaan perkembangan teknologi",
              "Perbedaan dan persamaan budaya",
            ],
          },
        ],
      },
      {
        subtitle: "Bidang Kerja Sama ASEAN",
        content: [
          {
            type: "table",
            headers: ["Bidang", "Bentuk Kerja Sama"],
            rows: [
              ["Ekonomi", "MEA / ASEAN Economic Community (AEC)"],
              [
                "Politik & Keamanan",
                "SEANWFZ (kawasan bebas senjata nuklir), ACCT (pemberantasan terorisme)",
              ],
              [
                "Pendidikan",
                "SEAMEO (South East Asian Ministers of Education)",
              ],
              [
                "Sosial Budaya",
                "Penyelenggaraan SEA Games, program peningkatan kesehatan",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "Pengaruh Interaksi Antarnegara",
        content: [
          {
            type: "table",
            headers: ["Bidang", "Dampak Positif", "Dampak Negatif"],
            rows: [
              [
                "Ekonomi",
                "Pertumbuhan ekonomi, peningkatan daya saing, terbukanya investasi",
                "Produk asing mendominasi pasar dalam negeri",
              ],
              [
                "Sosial Budaya",
                "Peningkatan pariwisata, peningkatan mobilitas sosial",
                "Terpengaruhnya budaya asli, kesenjangan sosial",
              ],
              [
                "Politik",
                "Peningkatan kerja sama antarnegara, pemerintahan lebih transparan",
                "Konflik di wilayah perbatasan",
              ],
              [
                "Pendidikan",
                "Peningkatan taraf pendidikan, beasiswa antarnegara",
                "Ketergantungan pada teknologi asing",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "Pasar Bebas: MEA, AFTA, APEC",
        content: [
          {
            type: "table",
            headers: ["Nama", "Kawasan", "Tujuan Utama"],
            rows: [
              [
                "MEA",
                "ASEAN (Regional)",
                "Meminimalisasi hambatan ekonomi antarnegara ASEAN",
              ],
              [
                "AFTA",
                "ASEAN (Regional)",
                "Meningkatkan daya saing produk ASEAN, menarik investasi asing",
              ],
              [
                "APEC",
                "Asia Pasifik (Multilateral)",
                "Kerja sama perdagangan, investasi & pariwisata kawasan Asia Pasifik",
              ],
            ],
          },
          {
            type: "highlight",
            content:
              "Dampak positif MEA bagi konsumen: memiliki banyak pilihan barang konsumsi dengan harga lebih terjangkau.",
          },
        ],
      },
    ],
  },
  {
    id: "lembaga-dinamika-sosial",
    title: "Lembaga dan Dinamika Sosial",
    icon: "🏛️",
    sections: [
      {
        subtitle: "Interaksi Sosial",
        content: [
          {
            type: "text",
            content:
              "Syarat interaksi sosial: kontak sosial dan komunikasi. Bentuknya: individu–individu, individu–kelompok, kelompok–kelompok.",
          },
          {
            type: "text",
            content: "Faktor yang memengaruhi interaksi sosial:",
          },
          {
            type: "table",
            headers: ["Faktor", "Contoh"],
            rows: [
              ["Imitasi", "Pelajar meniru sikap guru yang selalu tepat waktu"],
              [
                "Sugesti",
                "Pasien merasa lebih cepat sembuh karena percaya kepada dokternya",
              ],
              [
                "Identifikasi",
                "Penggemar K-Pop meniru penampilan artis idolanya",
              ],
              [
                "Simpati",
                "Membagikan postingan kasus kejahatan di media sosial sebagai bentuk kepedulian",
              ],
              [
                "Empati",
                "Mengunjungi teman yang sakit dan membawakan kebutuhannya",
              ],
              ["Motivasi", "Nilai bagus mendorong semangat belajar lebih giat"],
            ],
          },
        ],
      },
      {
        subtitle: "Proses Sosial Asosiatif dan Disosiatif",
        content: [
          {
            type: "highlight",
            content:
              "Asosiatif = mengarah pada PENYATUAN. Disosiatif = mengarah pada PERPECAHAN.",
          },
          {
            type: "table",
            headers: ["Jenis", "Bentuk", "Contoh"],
            rows: [
              [
                "Asosiatif",
                "Kerja sama",
                "Koalisi, joint venture, gotong royong",
              ],
              [
                "Asosiatif",
                "Akomodasi",
                "Mediasi, arbitrase, toleransi, konsiliasi",
              ],
              [
                "Asosiatif",
                "Akulturasi",
                "Penerimaan budaya asing menjadi bagian budaya lokal",
              ],
              [
                "Asosiatif",
                "Asimilasi",
                "Peleburan dua kebudayaan menjadi satu",
              ],
              ["Disosiatif", "Kontravensi", "Fitnah, provokasi, intimidasi"],
              ["Disosiatif", "Kompetisi", "Lomba sepakbola, lomba akademik"],
              [
                "Disosiatif",
                "Pertentangan",
                "Tawuran, bentrok antarmasyarakat",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "Jenis dan Fungsi Lembaga Sosial",
        content: [
          {
            type: "table",
            headers: ["Lembaga", "Fungsi Utama"],
            rows: [
              [
                "Keluarga",
                "Proteksi, afeksi, sosialisasi nilai, biologis, ekonomi, religius, pengendalian sosial",
              ],
              [
                "Pendidikan",
                "Membekali pengetahuan & keterampilan, mengajarkan nilai & norma, mengembangkan kreativitas",
              ],
              ["Ekonomi", "Produksi, konsumsi, distribusi"],
              ["Politik", "Menyalurkan aspirasi masyarakat"],
              [
                "Agama",
                "Pedoman hidup dan mengajarkan kebenaran bagi pemeluknya",
              ],
              [
                "Hukum",
                "Melindungi masyarakat dan memberikan sanksi bagi pelanggar",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "Penyimpangan Sosial",
        content: [
          { type: "text", content: "Faktor penyebab penyimpangan sosial:" },
          {
            type: "list",
            ordered: false,
            items: [
              "Pemberian julukan (labelling)",
              "Disorganisasi keluarga",
              "Pengaruh mental yang tidak sehat",
              "Proses belajar yang menyimpang",
              "Sosialisasi yang tidak sempurna",
            ],
          },
          {
            type: "text",
            content:
              "Upaya pencegahan penyimpangan di sekolah: penguatan nilai-moral melalui BK, pengembangan minat-bakat lewat ekstrakulikuler, dan menciptakan suasana kondusif dengan keterbukaan.",
          },
        ],
      },
      {
        subtitle: "Keragaman Budaya dan Perubahan Sosial",
        content: [
          {
            type: "text",
            content:
              "Faktor penyebab keragaman sosial budaya Indonesia: keadaan alam, persebaran nenek moyang, interaksi dengan bangsa asing.",
          },
          {
            type: "text",
            content: "Bentuk perubahan sosial berdasarkan klasifikasinya:",
          },
          {
            type: "table",
            headers: ["Dasar Klasifikasi", "Jenis", "Contoh"],
            rows: [
              [
                "Kecepatan",
                "Evolusi (lambat)",
                "Transaksi barter → uang kertas → uang digital",
              ],
              [
                "Kecepatan",
                "Revolusi (cepat)",
                "Revolusi Industri di Inggris mengganti tenaga manusia dengan mesin",
              ],
              [
                "Pengaruh",
                "Perubahan besar",
                "Mata pencaharian warga Kinahrejo pasca letusan Merapi",
              ],
              [
                "Pengaruh",
                "Perubahan kecil",
                "Perubahan mode pakaian dan rambut",
              ],
              [
                "Proses",
                "Direncanakan",
                "Pembangunan bandara, program KB, pemerataan internet",
              ],
              [
                "Proses",
                "Tidak direncanakan",
                "Penyebaran informasi hoax akibat perkembangan internet",
              ],
              [
                "Hasil",
                "Progress (kemajuan)",
                "Pembangunan listrik ke pelosok desa",
              ],
              [
                "Hasil",
                "Regress (kemunduran)",
                "Penyalahgunaan narkoba, terorisme",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sejarah-indonesia",
    title: "Sejarah Indonesia: Praaksara hingga Kemerdekaan",
    icon: "📜",
    sections: [
      {
        subtitle: "Masa Praaksara",
        content: [
          {
            type: "table",
            headers: ["Masa", "Ciri Kehidupan", "Peralatan"],
            rows: [
              [
                "Berburu & Mengumpulkan Makanan",
                "Nomaden, kelompok kecil, mengonsumsi makanan langsung dari alam",
                "Kapak penetak, kapak perimbas, kapak genggam, alat serpih (flakes), alat tulang",
              ],
              [
                "Bercocok Tanam & Beternak",
                "Menetap, mengolah lahan, memelihara ternak",
                "Kapak persegi, kapak lonjong, mata panah, gerabah, perhiasan",
              ],
              [
                "Perundagian",
                "Menetap, pengolahan logam, sistem pembagian kerja",
                "Nekara, bejana perunggu, arca perunggu",
              ],
            ],
          },
          { type: "text", content: "Peninggalan megalitikum masa praaksara:" },
          {
            type: "table",
            images: [
              "/sarkofagus.png",
              "/dolmen.png",
              "/waruga.png",
              "/menhir.png",
              "/punden.png",
            ],
            headers: ["Nama", "Fungsi"],
            rows: [
              ["Menhir", "Tugu batu sebagai tempat pemujaan"],
              ["Dolmen", "Meja batu untuk menaruh sesajen"],
              ["Sarkofagus", "Bangunan berbentuk lesung menyerupai peti mati"],
              ["Punden Berundak", "Bangunan bertingkat-tingkat untuk pemujaan"],
              ["Waruga", "Kubur batu berbentuk kubus tempat menyimpan mayat"],
            ],
          },
        ],
      },
      {
        subtitle: "Masa Hindu-Buddha dan Islam",
        content: [
          {
            type: "table",
            headers: ["Agama", "Peninggalan Candi"],
            rows: [
              ["Buddha", "Candi Borobudur, Candi Mendut"],
              ["Hindu", "Candi Prambanan, Candi Dieng"],
            ],
          },
          { type: "text", content: "Pengaruh Islam di Indonesia:" },
          {
            type: "list",
            ordered: false,
            items: [
              "Politik: raja bergelar sultan/sunan",
              "Sosial: aturan kasta menghilang, penggunaan nama Arab, penanggalan saka → hijriah",
              "Pendidikan: berkembangnya pesantren",
              "Sastra & Bahasa: hikayat, babak, suluk, syair",
              "Arsitektur: Masjid Demak, Masjid Banten",
            ],
          },
        ],
      },
      {
        subtitle: "Kolonialisme dan Pergerakan Nasional",
        content: [
          {
            type: "text",
            content:
              "Faktor internal pergerakan nasional: penderitaan rakyat akibat penjajahan, kenangan kejayaan masa lalu (Sriwijaya, Majapahit), lahirnya kaum intelektual, diskriminasi rasial.",
          },
          {
            type: "text",
            content:
              "Faktor eksternal: masuknya paham baru (nasionalisme, demokrasi, liberalisme), gerakan Turki Muda, kemenangan Jepang atas Rusia (1905).",
          },
          {
            type: "highlight",
            content:
              "Politik Etis Belanda mencakup 3 program: Irigasi, Emigrasi (transmigrasi), dan Edukasi (pendidikan). Program edukasi melahirkan kaum intelektual yang menjadi pemimpin pergerakan nasional.",
          },
        ],
      },
      {
        subtitle: "Proklamasi dan Peristiwa Heroik",
        content: [
          {
            type: "text",
            content:
              "Peristiwa Rengasdengklok (16 Agustus 1945): perbedaan pendapat golongan tua (proklamasi melalui PPKI, menunggu keputusan Jepang) dengan golongan muda (proklamasi segera, lepas dari pengaruh Jepang).",
          },
          {
            type: "text",
            content: "Sidang PPKI menghasilkan keputusan penting:",
          },
          {
            type: "table",
            headers: ["Tanggal Sidang", "Hasil"],
            rows: [
              [
                "18 Agustus 1945",
                "Mengesahkan UUD 1945; memilih Soekarno sebagai presiden & Hatta sebagai wakil presiden; membentuk Komite Nasional",
              ],
              [
                "19 Agustus 1945",
                "Menetapkan 12 kementerian; membagi Indonesia menjadi 8 provinsi; membentuk Komite Nasional Daerah",
              ],
              [
                "22 Agustus 1945",
                "Pembentukan KNIP, Partai Nasional Indonesia, dan Badan Keamanan Rakyat",
              ],
            ],
          },
          {
            type: "table",
            headers: ["Pertempuran", "Latar Belakang", "Tokoh"],
            rows: [
              [
                "Surabaya",
                "Tewasnya Brigjen AWS Mallaby dari pihak Inggris",
                "Bung Tomo",
              ],
              [
                "Medan Area",
                "Pemasangan papan 'Fixed Boundaries Medan Area' oleh sekutu",
                "Achmad Tahir",
              ],
              [
                "Ambarawa",
                "Sekutu membebaskan tawanan Belanda secara sepihak",
                "Letkol Isdiman & Jenderal Soedirman",
              ],
              [
                "Bandung Lautan Api",
                "Ultimatum sekutu agar Bandung dikosongkan",
                "M. Toha & Ramdan",
              ],
              [
                "5 Hari di Semarang",
                "Meninggalnya dr. Kariadi saat memeriksa sumur yang diracun Jepang",
                "-",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "Diplomasi dan Peristiwa Pasca Kemerdekaan",
        content: [
          {
            type: "table",
            headers: ["Perjanjian/Peristiwa", "Hasil/Isi Penting"],
            rows: [
              [
                "Linggajati",
                "Belanda mengakui RI atas Jawa, Madura & Sumatra; dibentuk RIS & Uni Indonesia-Belanda",
              ],
              [
                "Renville",
                "Wilayah RI hanya Jawa Tengah, Yogyakarta & Sumatera; dipisahkan Garis Van Mook",
              ],
              [
                "Pemilu 1955",
                "Memilih anggota DPR dan Konstituante; pemenang: PNI, Masyumi, NU, PKI",
              ],
              [
                "Dekrit Presiden 5 Juli 1959",
                "UUD 1945 berlaku kembali; UUDS 1950 tidak berlaku; Konstituante dibubarkan; dibentuk MPRS & DPAS",
              ],
              [
                "Pembebasan Irian Barat",
                "Tiga fase: Infiltrasi → Eksploitasi → Konsolidasi",
              ],
              [
                "G30S/PKI",
                "Bertujuan menjadikan Indonesia berlandaskan komunisme; dampak: ajaran komunis dilarang berkembang",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "perekonomian",
    title: "Perekonomian Indonesia dan Internasional",
    icon: "💰",
    sections: [
      {
        subtitle: "Kebutuhan dan Klasifikasinya",
        content: [
          {
            type: "table",
            headers: ["Dasar Pengelompokan", "Jenis Kebutuhan"],
            rows: [
              ["Intensitas / Kepentingan", "Primer, Sekunder, Tersier"],
              ["Sifat", "Jasmani (fisik) & Rohani (jiwa)"],
              ["Waktu", "Kebutuhan sekarang & masa mendatang"],
              ["Subjek", "Pribadi (individu) & Kelompok (kolektif)"],
            ],
          },
          {
            type: "highlight",
            content:
              "Benda bebas = tersedia melimpah di alam, tidak perlu pengorbanan untuk mendapatkannya (contoh: udara, sinar matahari). Benda ekonomi = langka dan memerlukan pengorbanan.",
          },
        ],
      },
      {
        subtitle: "Hukum Permintaan dan Penawaran",
        content: [
          {
            type: "highlight",
            content:
              "Hukum Permintaan: harga naik → permintaan turun. Harga turun → permintaan naik. (Berbanding terbalik)",
          },
          {
            type: "highlight",
            content:
              "Hukum Penawaran: harga naik → penawaran bertambah. Harga turun → penawaran berkurang. (Berbanding lurus)",
          },
          {
            type: "text",
            content:
              "Faktor yang memengaruhi permintaan: harga barang itu sendiri, harga barang lain terkait, tingkat pendapatan, selera masyarakat, jumlah penduduk, prediksi konsumen.",
          },
          {
            type: "text",
            content:
              "Faktor yang memengaruhi penawaran: harga, biaya produksi, tingkat teknologi, jumlah produsen, kebijakan pemerintah, faktor alam, prediksi produsen.",
          },
          {
            type: "text",
            content:
              "Harga pasar terbentuk saat kurva permintaan (D) bertemu kurva penawaran (S) di titik keseimbangan (equilibrium).",
          },
        ],
      },
      {
        subtitle: "Pelaku Ekonomi",
        content: [
          {
            type: "table",
            headers: ["Pelaku", "Peran Utama"],
            rows: [
              [
                "Rumah Tangga Konsumen (RTK)",
                "Pemakai barang/jasa; menyediakan faktor produksi; membayar pajak",
              ],
              [
                "Rumah Tangga Produsen (RTP)",
                "Menghasilkan barang/jasa; menggunakan faktor produksi; agen pembangunan",
              ],
              [
                "Pemerintah",
                "Mengatur perekonomian; memungut pajak; menyediakan barang publik; membuat kebijakan",
              ],
              [
                "Masyarakat Luar Negeri",
                "Menyediakan barang impor; membeli ekspor; menyediakan kredit pinjaman",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "Perdagangan Antarnegara",
        content: [
          {
            type: "text",
            content: "Faktor pendorong perdagangan antarnegara:",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Perbedaan sumber daya alam antarnegara",
              "Perbedaan kemajuan ilmu pengetahuan dan teknologi",
              "Memenuhi kebutuhan dalam negeri yang tidak bisa diproduksi sendiri",
              "Penghematan biaya produksi (efisiensi)",
              "Kemajuan telekomunikasi, informasi, dan transportasi",
              "Meningkatkan kerja sama antarnegara",
            ],
          },
          {
            type: "highlight",
            content:
              "Manfaat perdagangan antarnegara: menambah devisa, memperluas pasar, memperoleh teknologi modern, menjalin persahabatan antarnegara, dan memenuhi kebutuhan barang/jasa.",
          },
        ],
      },
      {
        subtitle: "IPTEK, Kewirausahaan, dan Ekonomi Kreatif",
        content: [
          {
            type: "text",
            content:
              "Peran IPTEK dalam kegiatan ekonomi: meningkatkan kualitas & kuantitas produksi, memperlancar distribusi, dan memudahkan konsumsi (contoh: layanan pesan antar/GoFood).",
          },
          {
            type: "text",
            content: "Peran kewirausahaan bagi ekonomi nasional:",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Memperluas lapangan kerja",
              "Mendorong pertumbuhan ekonomi",
              "Meningkatkan kesejahteraan masyarakat",
              "Mendorong inovasi produk baru",
              "Meningkatkan penerimaan negara",
            ],
          },
          {
            type: "text",
            content:
              "16 subsektor ekonomi kreatif antara lain: aplikasi & game, arsitektur, fashion, desain produk, film & animasi, fotografi, kriya, musik, penerbitan, periklanan, seni rupa, televisi & radio.",
          },
        ],
      },
    ],
  },
  {
    id: "mobilitas-sosial-konflik",
    title: "Mobilitas Sosial, Konflik, dan Integrasi",
    icon: "🔄",
    sections: [
      {
        subtitle: "Mobilitas Sosial",
        content: [
          {
            type: "text",
            content:
              "Mobilitas sosial adalah gerak perpindahan seseorang atau kelompok dari status sosial satu ke status sosial lain.",
          },
          {
            type: "table",
            headers: ["Jenis Mobilitas", "Penjelasan", "Contoh"],
            rows: [
              [
                "Vertikal Naik",
                "Perpindahan ke status sosial yang lebih tinggi",
                "Seseorang dari keluarga biasa berhasil menjadi artis terkenal (Lesty Kejora)",
              ],
              [
                "Vertikal Turun",
                "Perpindahan ke status sosial yang lebih rendah",
                "Pejabat yang dicopot dari jabatannya",
              ],
              [
                "Horizontal",
                "Perpindahan status sosial yang setara/sejajar",
                "Pindah pekerjaan dengan jabatan yang sama",
              ],
              [
                "Antargenerasi",
                "Perubahan status sosial antara orang tua dan anak",
                "Anak petani berhasil menjadi dokter",
              ],
            ],
          },
          {
            type: "highlight",
            content:
              "Saluran mobilitas sosial: pendidikan, angkatan bersenjata, lembaga keagamaan, organisasi politik, perkawinan, dan lembaga ekonomi. Pendidikan merupakan saluran paling efektif karena meningkatkan pengetahuan dan keterampilan seseorang.",
          },
        ],
      },
      {
        subtitle: "Konflik Sosial",
        content: [
          {
            type: "text",
            content:
              "Faktor penyebab konflik: perbedaan individu, perbedaan nilai & norma, kesenjangan sosial, perubahan sosial yang terlalu cepat.",
          },
          {
            type: "table",
            headers: [
              "Jenis Konflik (berdasarkan skala wilayah)",
              "Keterangan",
            ],
            rows: [
              [
                "Lokal",
                "Terjadi di lingkungan kecil seperti RT, RW, atau desa",
              ],
              ["Regional", "Terjadi dalam lingkup provinsi atau antardaerah"],
              ["Nasional", "Terjadi dalam skala satu negara"],
              ["Internasional", "Melibatkan dua negara atau lebih"],
            ],
          },
        ],
      },
      {
        subtitle: "Kependudukan Indonesia",
        content: [
          { type: "text", content: "Jenis migrasi penduduk:" },
          {
            type: "table",
            headers: ["Jenis Migrasi", "Pengertian"],
            rows: [
              [
                "Imigrasi",
                "Perpindahan penduduk dari negara lain masuk ke suatu negara",
              ],
              [
                "Emigrasi",
                "Perpindahan penduduk dari suatu negara ke negara lain (keluar)",
              ],
              ["Urbanisasi", "Perpindahan penduduk dari desa ke kota"],
              ["Ruralisasi", "Perpindahan penduduk dari kota ke desa"],
              [
                "Transmigrasi",
                "Perpindahan penduduk dari pulau padat ke pulau yang jarang penduduknya",
              ],
            ],
          },
          {
            type: "highlight",
            content:
              "Penyebab padatnya penduduk Jakarta: tingginya angka kelahiran (natalitas) dan tingginya arus urbanisasi dari berbagai daerah.",
          },
        ],
      },
    ],
  },
  {
    id: "lembaga-keuangan",
    title: "Lembaga Keuangan dan Distribusi",
    icon: "🏦",
    sections: [
      {
        subtitle: "Jenis Lembaga Keuangan",
        content: [
          {
            type: "table",
            headers: ["Lembaga", "Fungsi Utama"],
            rows: [
              [
                "Bank Sentral (Bank Indonesia)",
                "Menjaga stabilitas nilai mata uang dan stabilitas sektor perbankan",
              ],
              [
                "Bank Umum",
                "Menghimpun dana dari masyarakat (tabungan/deposito) dan menyalurkan kredit",
              ],
              [
                "Asuransi",
                "Memberikan perlindungan dari kerugian finansial akibat kerusakan aset, kecelakaan, atau kematian",
              ],
              [
                "Pegadaian",
                "Memberikan pinjaman kepada masyarakat dengan jaminan barang tertentu",
              ],
              [
                "Koperasi",
                "Membantu masyarakat memperoleh modal usaha berdasarkan asas kekeluargaan",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "Kegiatan Distribusi",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Distribusi Langsung: produsen menjual langsung kepada konsumen tanpa perantara (contoh: petani berkeliling menawarkan hasil panennya).",
              "Distribusi Semi Langsung: produsen menitipkan produk melalui toko/warung tertentu (contoh: perajin tempe menitipkan di warung).",
              "Distribusi Tidak Langsung: melalui banyak perantara seperti agen, grosir, dan pengecer.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "komponen-peta",
    title: "Komponen Peta",
    icon: "🗺️",
    sections: [
      {
        subtitle: "Komponen-Komponen Peta",
        content: [
          {
            type: "text",
            content:
              "Komponen peta adalah bagian-bagian yang menyusun peta agar mudah dibaca dan dipahami.",
          },
          {
            type: "list",
            items: [
              "Judul peta → menunjukkan isi peta",
              "Skala → menunjukkan perbandingan jarak di peta dengan jarak sebenarnya",
              "Legenda → menjelaskan simbol pada peta",
              "Orientasi (arah mata angin) → menunjukkan arah",
              "Garis astronomis → menunjukkan koordinat lintang dan bujur",
              "Sumber peta → menunjukkan asal data peta",
            ],
          },
        ],
      },
      {
        subtitle: "Jenis Lokasi",
        content: [
          {
            type: "list",
            items: [
              "Lokasi absolut → berdasarkan lintang dan bujur",
              "Lokasi relatif → berdasarkan posisi terhadap wilayah lain",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "agen-sosialisasi",
    title: "Agen Sosialisasi",
    icon: "👨‍👩‍👧",
    sections: [
      {
        subtitle: "Pengertian",
        content: [
          {
            type: "text",
            content:
              "Agen sosialisasi adalah pihak yang membantu individu mempelajari nilai dan norma dalam masyarakat.",
          },
        ],
      },
      {
        subtitle: "Jenis Agen Sosialisasi",
        content: [
          {
            type: "list",
            items: [
              "Keluarga → agen sosialisasi pertama dan utama",
              "Sekolah → membentuk kedisiplinan dan pengetahuan",
              "Teman sebaya → membentuk kepribadian sosial",
              "Media massa → memberikan informasi luas",
              "Lingkungan masyarakat → membentuk sikap sosial",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "kedatangan-barat",
    title: "Kedatangan Bangsa Barat ke Indonesia",
    icon: "🚢",
    sections: [
      {
        subtitle: "Faktor Kedatangan Bangsa Barat",
        content: [
          {
            type: "list",
            items: [
              "Mencari rempah-rempah",
              "Motivasi 3G (Gold, Glory, Gospel)",
              "Revolusi Industri",
              "Jatuhnya Konstantinopel tahun 1453",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "pendudukan-jepang",
    title: "Pendudukan Jepang di Indonesia",
    icon: "⚔️",
    sections: [
      {
        subtitle: "Eksploitasi Jepang",
        content: [
          {
            type: "list",
            items: [
              "Kerja paksa Romusha",
              "Penyerahan hasil pertanian secara wajib",
              "Pengawasan ketat kegiatan masyarakat",
              "Pemanfaatan SDA untuk kepentingan perang",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "tokoh-perlawanan-daerah",
    title: "Tokoh Perlawanan Daerah",
    icon: "🛡️",
    sections: [
      {
        subtitle: "Tokoh-Tokoh Penting",
        content: [
          {
            type: "list",
            items: [
              "Sultan Hasanuddin → Ayam Jantan dari Timur",
              "Tuanku Imam Bonjol → Perang Padri",
              "Pattimura → Perlawanan Maluku",
              "Pangeran Diponegoro → Perang Jawa",
              "Cut Nyak Dien → Perlawanan Aceh",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "keruntuhan-voc",
    title: "Keruntuhan VOC",
    icon: "🏴‍☠️",
    sections: [
      {
        subtitle: "Penyebab Keruntuhan VOC",
        content: [
          {
            type: "list",
            items: [
              "Korupsi pegawai VOC",
              "Biaya perang yang besar",
              "Persaingan dengan kongsi dagang lain",
              "Pengawasan pusat yang lemah",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "sumber-daya-alam",
    title: "Sumber Daya Alam dan Pelestarian",
    icon: "🌳",
    sections: [
      {
        subtitle: "Jenis Sumber Daya Alam",
        content: [
          {
            type: "list",
            items: [
              "SDA dapat diperbarui → air, hutan, tanah",
              "SDA tidak dapat diperbarui → minyak bumi, batu bara",
            ],
          },
        ],
      },
      {
        subtitle: "Pemanfaatan Berkelanjutan",
        content: [
          {
            type: "list",
            items: [
              "Menggunakan SDA secara hemat",
              "Reboisasi hutan",
              "Mengurangi pencemaran lingkungan",
              "Menggunakan teknologi ramah lingkungan",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "pemanfaatan-sungai",
    title: "Pemanfaatan Sungai",
    icon: "🌊",
    sections: [
      {
        subtitle: "Fungsi Sungai",
        content: [
          {
            type: "list",
            items: [
              "Transportasi",
              "Irigasi pertanian",
              "Pembangkit listrik tenaga air (PLTA)",
              "Perikanan",
              "Sumber air kebutuhan sehari-hari",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "tenaga-pembentuk-muka-bumi",
    title: "Tenaga Pembentuk Muka Bumi",
    icon: "🌋",
    sections: [
      {
        subtitle: "Tenaga Endogen",
        content: [
          {
            type: "text",
            content:
              "Tenaga endogen adalah tenaga yang berasal dari dalam bumi yang membentuk permukaan bumi.",
          },
          {
            type: "table",
            headers: ["Jenis", "Pengertian", "Contoh Dampak"],
            rows: [
              ["Tektonisme", "Pergerakan lempeng bumi", "Lipatan dan patahan"],
              ["Vulkanisme", "Aktivitas magma dari dalam bumi", "Gunung api"],
              [
                "Seisme",
                "Getaran atau gempa bumi",
                "Gempa tektonik dan vulkanik",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "Tenaga Eksogen",
        content: [
          {
            type: "table",
            headers: ["Jenis", "Contoh"],
            rows: [
              ["Pelapukan", "Penghancuran batuan oleh cuaca"],
              ["Erosi", "Pengikisan tanah oleh air/angin"],
              ["Abrasi", "Pengikisan pantai oleh gelombang laut"],
              ["Sedimentasi", "Pengendapan material hasil erosi"],
            ],
          },
        ],
      },
    ],
  },

  {
    id: "interaksi-desa-kota",
    title: "Interaksi Desa dan Kota",
    icon: "🏙️",
    sections: [
      {
        subtitle: "Pengaruh Interaksi Desa ke Kota",
        content: [
          {
            type: "list",
            items: [
              "Urbanisasi meningkat",
              "Pasokan bahan pangan dari desa",
              "Tenaga kerja berasal dari desa",
            ],
          },
        ],
      },
      {
        subtitle: "Pengaruh Interaksi Kota ke Desa",
        content: [
          {
            type: "list",
            items: [
              "Masuknya teknologi modern",
              "Perubahan pola pikir masyarakat desa",
              "Meningkatnya pendidikan masyarakat desa",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "status-peran-sosial",
    title: "Status dan Peran Sosial",
    icon: "👤",
    sections: [
      {
        subtitle: "Jenis Status Sosial",
        content: [
          {
            type: "table",
            headers: ["Jenis", "Pengertian", "Contoh"],
            rows: [
              ["Ascribed Status", "Status sejak lahir", "Anak bangsawan"],
              ["Achieved Status", "Status karena usaha", "Dokter"],
              [
                "Assigned Status",
                "Status karena penghargaan",
                "Pahlawan nasional",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "Peran Sosial",
        content: [
          {
            type: "text",
            content:
              "Peran sosial adalah perilaku yang diharapkan sesuai dengan status yang dimiliki seseorang.",
          },
        ],
      },
    ],
  },

  {
    id: "integrasi-sosial",
    title: "Integrasi Sosial",
    icon: "🤝",
    sections: [
      {
        subtitle: "Bentuk Integrasi Sosial",
        content: [
          {
            type: "table",
            headers: ["Jenis", "Pengertian"],
            rows: [
              ["Integrasi Normatif", "Berdasarkan norma yang berlaku"],
              ["Integrasi Fungsional", "Karena saling membutuhkan"],
              ["Integrasi Koersif", "Karena adanya kekuasaan"],
            ],
          },
        ],
      },
    ],
  },

  {
    id: "jenis-konflik-sosial",
    title: "Jenis Konflik Sosial",
    icon: "⚠️",
    sections: [
      {
        subtitle: "Konflik Berdasarkan Penyebab",
        content: [
          {
            type: "table",
            headers: ["Jenis Konflik", "Contoh"],
            rows: [
              ["Konflik Pribadi", "Pertengkaran antarindividu"],
              ["Konflik Rasial", "Perbedaan ras"],
              ["Konflik Politik", "Perselisihan partai politik"],
              ["Konflik Ekonomi", "Persaingan usaha"],
            ],
          },
        ],
      },
    ],
  },

  {
    id: "jenis-pasar",
    title: "Jenis-Jenis Pasar",
    icon: "🛒",
    sections: [
      {
        subtitle: "Berdasarkan Waktu",
        content: [
          {
            type: "list",
            items: ["Pasar harian", "Pasar mingguan", "Pasar tahunan"],
          },
        ],
      },
      {
        subtitle: "Berdasarkan Wujud",
        content: [
          {
            type: "list",
            items: ["Pasar konkret (tradisional)", "Pasar abstrak (online)"],
          },
        ],
      },
      {
        subtitle: "Berdasarkan Wilayah",
        content: [
          {
            type: "list",
            items: ["Pasar lokal", "Pasar nasional", "Pasar internasional"],
          },
        ],
      },
    ],
  },

  {
    id: "fungsi-bank-sentral",
    title: "Fungsi Bank Sentral",
    icon: "🏛️",
    sections: [
      {
        subtitle: "Peran Bank Indonesia",
        content: [
          {
            type: "list",
            items: [
              "Menetapkan kebijakan moneter",
              "Mengatur sistem pembayaran",
              "Menjaga stabilitas nilai rupiah",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "materi-dari-dosen-wana-rangkuti",
    title: "Rangkuman dari dosen Wana Rangkuti S.Pd",
    icon: "🎓",
    sections: [
      {
        subtitle: "📍 Letak Indonesia & Dampaknya",
        content: [
          {
            type: "text",
            content:
              "Indonesia memiliki tiga jenis letak yang masing-masing membawa dampak berbeda bagi kehidupan bangsa.",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "🌍 Astronomis (6°LU–11°LS, 95°–141°BT): Menghasilkan iklim tropis (panas & hujan) dan 3 zona waktu (WIB, WITA, WIT).",
              "🤝 Geografis (Antara 2 Benua & 2 Samudra): Indonesia menjadi 'titik silang' dunia dan jalur perdagangan internasional.",
              "🌋 Geologis (Pertemuan 3 Lempeng): Banyak gunung api membuat tanah subur, namun rawan gempa.",
            ],
          },
        ],
      },
      {
        subtitle: "💰 Pengaruh Letak Geografis",
        content: [
          {
            type: "highlight",
            content:
              "Letak geografis Indonesia memberikan keuntungan besar di bidang ekonomi dan budaya.",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "🚢 Ekonomi: Jadi jalur transit kapal dunia (devisa meningkat), kaya hasil laut, dan mudah berdagang dengan negara luar.",
              "🕌 Budaya: Terjadi akulturasi (campuran budaya) karena pedagang asing sering singgah, sehingga Indonesia kaya suku, bahasa, dan agama.",
            ],
          },
        ],
      },
      {
        subtitle: "🗺️ Lokasi Absolut vs Lokasi Relatif",
        content: [
          {
            type: "table",
            headers: ["Jenis Lokasi", "Sifat", "Contoh"],
            rows: [
              [
                "📌 Absolut",
                "Tetap, tidak bisa berubah",
                "Koordinat GPS / garis astronomis",
              ],
              [
                "🏃 Relatif",
                "Berubah sesuai lingkungan sekitar",
                '"Rumah gue deket warung"',
              ],
            ],
          },
        ],
      },
      {
        subtitle: "🎨 10 Komponen Wajib Peta",
        content: [
          {
            type: "text",
            image: "/image.png",
            content:
              "Setiap peta yang baik harus memiliki 10 komponen berikut agar dapat dibaca dan dipahami dengan benar.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "📛 Judul — Identitas wilayah yang digambar.",
              "📏 Skala — Angka perbandingan jarak peta vs aslinya.",
              "🧭 Orientasi — Arah mata angin / petunjuk Utara.",
              "🖍️ Simbol — Tanda objek: Titik, Garis, Area, Warna.",
              "📖 Legenda — 'Kamus' penjelas arti setiap simbol.",
              "🌐 Garis Astronomis — Garis khayal Lintang & Bujur.",
              "🖼️ Inset — Peta kecil untuk menunjukkan posisi wilayah di peta lebih luas.",
              "📅 Sumber & Tahun — Agar tahu data masih baru atau sudah usang.",
              "🔠 Lettering — Cara penulisan huruf/angka agar rapi & jelas.",
              "🖼️ Garis Tepi — Bingkai agar peta terlihat profesional.",
            ],
          },
        ],
      },
      {
        subtitle: "🌍 Interaksi Antarwilayah: 3 Faktor Utama",
        content: [
          {
            type: "highlight",
            content:
              "Interaksi antarwilayah terjadi karena setiap daerah memiliki kekayaan alam yang berbeda-beda.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "🍎 Complementarity (Saling Melengkapi): Perbedaan sumber daya mendorong tukar-menukar. Contoh: daerah pegunungan punya sayur, daerah pesisir punya ikan — keduanya saling berdagang.",
              "🚀 Transferability (Kemudahan Transfer): Interaksi bergantung pada kemudahan pengiriman barang. Infrastruktur jalan yang bagus dan biaya angkut murah sangat menentukan.",
              "🛑 Intervening Opportunity (Kesempatan Antara): Jika ada lokasi alternatif yang lebih dekat/murah, wilayah asal bisa berpindah mitra dagang.",
            ],
          },
        ],
      },
      {
        subtitle: "⚠️ Penghambat Interaksi Antarwilayah",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "💸 Biaya transportasi terlalu mahal.",
              "🚧 Akses jalan terputus atau rusak parah.",
              "🏔️ Kondisi geografis sulit (terhalang gunung tinggi atau laut ganas).",
            ],
          },
        ],
      },
      {
        subtitle: "🗣️ Interaksi Sosial",
        content: [
          {
            type: "text",
            content:
              "Interaksi sosial membutuhkan dua syarat utama: Kontak Sosial (bertemu langsung atau lewat HP) dan Komunikasi (pesan berhasil tersampaikan).",
          },
          {
            type: "highlight",
            content:
              "Interaksi sosial dibagi dua arah: Asosiatif (menyatukan) dan Disosiatif (merenggang).",
          },
        ],
      },
      {
        subtitle: "🤝 Interaksi Asosiatif (Menyatukan)",
        content: [
          {
            type: "text",
            content:
              "Bentuk interaksi yang mengarah pada persatuan, kerja sama, dan keharmonisan antar individu atau kelompok.",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "🤝 Kerjasama: Bekerja bersama demi tujuan yang sama. Contoh: gotong royong.",
              "⚖️ Akomodasi: Cara menyelesaikan masalah secara damai. Contoh: kompromi, mediasi.",
              "🍛 Akulturasi: Budaya bercampur tetapi ciri asli masih ada. Contoh: masjid bermenara ala pura.",
              "🎭 Asimilasi: Budaya bercampur hingga membentuk budaya baru dan ciri asli hilang. Contoh: musik dangdut.",
            ],
          },
        ],
      },
      {
        subtitle: "⚔️ Interaksi Disosiatif (Merenggang)",
        content: [
          {
            type: "text",
            content:
              "Bentuk interaksi yang mengarah pada perpecahan dan menjauhnya hubungan antar individu atau kelompok.",
          },
          {
            type: "list",
            ordered: false,
            items: [
              "⚔️ Persaingan (Kompetisi): Rebutan sesuatu dengan cara sehat tanpa kekerasan. Contoh: lomba lari, peringkat kelas.",
              "😒 Kontravensi: Perasaan tidak suka yang disembunyikan. Contoh: menyebar gosip, bersikap sinis, atau menghasut.",
              "🔥 Pertentangan (Konflik): Sudah menggunakan ancaman atau kekerasan fisik untuk menjatuhkan lawan.",
            ],
          },
        ],
      },
      {
        subtitle: "📢 Agen Sosialisasi",
        content: [
          {
            type: "text",
            content:
              "Agen sosialisasi adalah pihak-pihak yang membentuk kepribadian dan nilai seseorang sejak dini.",
          },
          {
            type: "table",
            headers: ["Agen", "Peran Utama"],
            rows: [
              [
                "🏠 Keluarga",
                "Tempat belajar pertama tentang sopan santun dan kasih sayang",
              ],
              [
                "🏫 Sekolah",
                "Tempat belajar ilmu formal, aturan, dan disiplin",
              ],
              [
                "🎮 Teman Sebaya",
                "Belajar solidaritas dan cara bergaul di luar rumah",
              ],
              [
                "📱 Media Massa",
                "Memberi informasi luas yang memengaruhi tren dan gaya hidup",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "🏛️ Lembaga Sosial",
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              "👨‍👩‍👧‍👦 Lembaga Keluarga: Mengurus keturunan (reproduksi) dan memberikan perlindungan (proteksi).",
              "🕌 Lembaga Agama: Pedoman hidup, sumber moral, dan aturan ibadah.",
              "💰 Lembaga Ekonomi: Mengatur cara mendapatkan barang (Produksi, Distribusi, Konsumsi).",
              "📜 Lembaga Pendidikan: Membentuk skill, menambah pengetahuan, dan mengubah pola pikir.",
              "⚖️ Lembaga Politik: Mengatur kekuasaan, membuat hukum, dan menjaga keamanan warga.",
            ],
          },
        ],
      },
      {
        subtitle: "⚠️ Kelangkaan (Scarcity) & Jenis Benda",
        content: [
          {
            type: "highlight",
            content:
              "Kelangkaan terjadi karena keinginan manusia tidak terbatas, sedangkan alat pemuas (barang/jasa) sangat terbatas.",
          },
          {
            type: "table",
            headers: ["Jenis Benda", "Keterangan", "Contoh"],
            rows: [
              [
                "🆓 Benda Bebas",
                "Gratis dari alam, tidak perlu uang",
                "Sinar matahari, udara",
              ],
              [
                "💸 Benda Ekonomi",
                "Butuh modal/uang untuk mendapatkannya",
                "Buku, makanan",
              ],
            ],
          },
        ],
      },
      {
        subtitle: "🚚 Saluran Distribusi",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Langsung: Produsen → Konsumen (contoh: jual masakan sendiri).",
              "Semi Langsung: Lewat toko resmi milik sendiri (contoh: outlet brand tertentu).",
              "Tidak Langsung: Lewat agen → grosir → pengecer/warung → konsumen.",
            ],
          },
        ],
      },
      {
        subtitle: "📉 Kurva Permintaan & Penawaran",
        content: [
          {
            type: "table",
            headers: [
              "Kurva",
              "Pelaku",
              "Hubungan Harga & Jumlah",
              "Arah Garis",
            ],
            rows: [
              [
                "🛒 Permintaan",
                "Pembeli",
                "Harga naik → jumlah diminta turun",
                "Turun (kiri atas → kanan bawah)",
              ],
              [
                "📦 Penawaran",
                "Penjual",
                "Harga naik → jumlah ditawarkan naik",
                "Naik (kiri bawah → kanan atas)",
              ],
            ],
          },
          {
            type: "highlight",
            content:
              "⚖️ Titik Equilibrium (E): Titik temu harga yang disepakati oleh penjual dan pembeli.",
          },
        ],
      },
      {
        subtitle: "🌏 Perdagangan Internasional",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "🚢 Ekspor: Menjual barang ke luar negeri → uang masuk 💰",
              "🛬 Impor: Membeli barang dari luar negeri → uang keluar 💸",
              "Faktor pendorong: Perbedaan Sumber Daya Alam (SDA), perbedaan teknologi, dan mencari keuntungan lebih besar.",
            ],
          },
        ],
      },
      {
        subtitle: "🏛️ Peran Pemerintah dalam Ekonomi",
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              "⚖️ Regulator: Membuat aturan ekonomi dan menetapkan Harga Eceran Tertinggi (HET) agar rakyat tidak kesulitan.",
              "🏗️ Produsen (BUMN): Mengelola sektor vital lewat PLN, Pertamina, PT KAI.",
              "🛒 Konsumen: Berbelanja kebutuhan operasional negara.",
              "💰 Pajak & Subsidi: Menarik pajak dari yang mampu untuk memberikan subsidi (BBM, Bansos) kepada yang membutuhkan.",
            ],
          },
        ],
      },
      {
        subtitle: "👥 Rangkuman: Pelaku Ekonomi & Perannya (Circular Flow)",
        image: "/image2.png",
        content: [
          {
            type: "text",
            content:
              "Dalam kegiatan ekonomi terdapat empat pelaku utama yang saling berinteraksi dalam sistem circular flow untuk memenuhi kebutuhan masyarakat dan menjaga kestabilan ekonomi.",
          },
        ],
      },
      {
        subtitle: "🏠 RTK (Rumah Tangga Konsumen)",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Sebagai konsumen barang dan jasa.",
              "Sebagai penyedia faktor produksi (tenaga kerja, lahan, modal).",
              "Mendapat pendapatan berupa upah/gaji, sewa, bunga, atau laba dari RTP.",
            ],
          },
        ],
      },
      {
        subtitle: "🏭 RTP (Rumah Tangga Produsen / Perusahaan)",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Sebagai penghasil barang dan jasa.",
              "Menggunakan faktor produksi dari RTK.",
              "Bertujuan memperoleh keuntungan maksimal.",
              "Membantu masyarakat memenuhi kebutuhan.",
            ],
          },
        ],
      },
      {
        subtitle: "🏛️ RTN (Rumah Tangga Negara / Pemerintah)",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Sebagai regulator (pembuat kebijakan ekonomi).",
              "Sebagai konsumen dalam kegiatan pemerintahan.",
              "Sebagai produsen melalui BUMN.",
              "Sumber pendapatan utama berasal dari pajak RTK dan RTP.",
            ],
          },
        ],
      },
      {
        subtitle: "🌏 RTLN (Rumah Tangga Luar Negeri)",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Melakukan kegiatan ekspor dan impor.",
              "Melakukan investasi antarnegara.",
              "Terlibat dalam pertukaran tenaga kerja internasional.",
            ],
          },
        ],
      },
      {
        subtitle: "💡 Catatan Penting",
        content: [
          {
            type: "highlight",
            content:
              "RTK = masyarakat (pembeli & penyedia tenaga kerja), RTP = perusahaan (produsen), RTN = pemerintah (pengatur), RTLN = pihak luar negeri (ekspor-impor & investasi).",
          },
        ],
      },
      {
        subtitle: "🏹 Paleolitikum (Zaman Batu Tua) — Masa Berburu Awal",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Gaya hidup nomaden (berpindah mengikuti hewan buruan).",
              "Menggunakan alat batu yang masih kasar.",
              "Contoh alat: Kapak Perimbas.",
            ],
          },
        ],
      },
      {
        subtitle: "🐚 Mesolitikum (Zaman Batu Madya) — Masa Berburu Lanjut",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Kjokkenmoddinger: Tumpukan sampah dapur berupa kulit kerang yang telah membatu.",
              "Abris Sous Roche: Gua alami sebagai tempat tinggal sementara.",
            ],
          },
        ],
      },
      {
        subtitle: "🌾 Neolitikum (Zaman Batu Muda) — Masa Bercocok Tanam",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Gaya hidup sedenter (menetap di desa).",
              "Mulai bertani, beternak, dan melakukan barter.",
              "Alat batu sudah diasah halus.",
              "Contoh alat: Beliung Persegi dan Kapak Lonjong.",
            ],
          },
        ],
      },
      {
        subtitle: "🔨 Zaman Logam — Masa Perundagian",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Masyarakat mulai memiliki keahlian khusus (undagi).",
              "Pembagian kerja sudah jelas.",
              "Contoh peninggalan: Nekara, Moko, Mata Sabit, Mata Bajak, Kapak Corong.",
            ],
          },
        ],
      },
      {
        subtitle: "🪨 Tradisi Megalitikum (Batu Besar)",
        images: [
          "/sarkofagus.png",
          "/dolmen.png",
          "/waruga.png",
          "/menhir.png",
          "/punden.png",
        ],
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Menhir: Tugu batu untuk pemujaan.",
              "Dolmen: Meja batu tempat sesaji.",
              "Punden Berundak: Bangunan bertingkat tempat pemujaan.",
              "Sarkofagus: Peti mati batu berbentuk lesung.",
              "Waruga: Peti mati batu berbentuk kubus khas Minahasa.",
            ],
          },
        ],
      },
      {
        subtitle: "💡 Catatan Penting Masa Praaksara",
        content: [
          {
            type: "highlight",
            content:
              "Zaman Batu/Logam menunjukkan bahan alat, sedangkan masa berburu, bercocok tanam, dan perundagian menunjukkan cara hidup manusia.",
          },
        ],
      },
      {
        subtitle: "🚢 Teori Masuknya Hindu-Buddha",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Teori Brahmana: Dibawa pendeta atas undangan penguasa lokal.",
              "Teori Ksatria: Dibawa bangsawan atau prajurit dari India.",
              "Teori Waisya: Dibawa pedagang India yang berdagang di Nusantara.",
              "Teori Arus Balik: Orang Nusantara belajar ke India lalu kembali menyebarkan.",
            ],
          },
        ],
      },
      {
        subtitle: "👤 Sistem Kasta (Struktur Sosial Hindu)",
        content: [
          {
            type: "list",
            ordered: true,
            items: [
              "Brahmana: Pendeta dan pemimpin agama.",
              "Ksatria: Raja, bangsawan, dan prajurit.",
              "Waisya: Pedagang dan petani.",
              "Sudra: Pekerja kasar dan pelayan.",
            ],
          },
        ],
      },
      {
        subtitle: "🏰 Kerajaan-Kerajaan Besar Masa Hindu-Buddha",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Kutai: Raja terkenal Mulawarman, peninggalan Yupa.",
              "Tarumanegara: Raja terkenal Purnawarman, peninggalan Prasasti Ciaruteun.",
              "Sriwijaya: Raja terkenal Balaputradewa, peninggalan Prasasti Kedukan Bukit dan Candi Muara Takus.",
              "Mataram Kuno: Peninggalan Candi Borobudur dan Prambanan.",
              "Majapahit: Raja terkenal Hayam Wuruk, peninggalan Kitab Negarakertagama dan Candi Penataran.",
            ],
          },
        ],
      },
      {
        subtitle: "📜 Warisan Budaya Masa Hindu-Buddha",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Candi: Tempat ibadah atau makam bangsawan.",
              "Prasasti: Tulisan pada batu menggunakan huruf Pallawa dan bahasa Sanskerta.",
              "Relief: Seni pahat pada dinding candi yang menceritakan kisah tertentu.",
            ],
          },
        ],
      },
      {
        subtitle: "💡 Catatan Penting Masa Hindu-Buddha",
        content: [
          {
            type: "highlight",
            content:
              "Contoh cepat mengingat: Mulawarman = Kutai, Gajah Mada = Majapahit.",
          },
        ],
      },
      {
        subtitle: "🚢 Jalur Masuknya Islam ke Indonesia",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Perdagangan oleh pedagang Gujarat, Arab, dan Persia.",
              "Perkawinan antara pedagang Muslim dan masyarakat lokal.",
              "Pendidikan melalui pesantren.",
              "Kesenian seperti wayang kulit dan gamelan.",
            ],
          },
        ],
      },
      {
        subtitle: "👳 Wali Songo",
        content: [
          {
            type: "text",
            content:
              "Wali Songo adalah sembilan tokoh penyebar Islam di Pulau Jawa yang menggunakan pendekatan budaya lokal agar mudah diterima masyarakat.",
          },
        ],
      },
      {
        subtitle: "🏰 Kesultanan-Kesultanan Besar di Indonesia",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Samudera Pasai: Sultan Malik As-Saleh.",
              "Aceh Darussalam: Sultan Iskandar Muda.",
              "Demak: Raden Patah dan Sultan Trenggono.",
              "Banten: Sultan Ageng Tirtayasa.",
              "Mataram Islam: Sultan Agung.",
              "Gowa-Tallo: Sultan Hasanuddin.",
              "Ternate dan Tidore: Sultan Baabullah.",
            ],
          },
        ],
      },
      {
        subtitle: "📜 Warisan Akulturasi Budaya Islam",
        content: [
          {
            type: "list",
            ordered: false,
            items: [
              "Seni bangunan masjid beratap tumpang.",
              "Tradisi Sekaten dan Grebeg Maulud.",
              "Sastra seperti Hikayat, Babad, dan Suluk.",
            ],
          },
        ],
      },
      {
        subtitle: "💡 Catatan Penting Masa Islam",
        content: [
          {
            type: "highlight",
            content: "Iskandar Muda = Aceh, Ageng Tirtayasa = Banten.",
          },
        ],
      },
    ],
  },
];
