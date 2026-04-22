export const ipsdata = [
  {
    id: "letak-indonesia",
    title: "Letak dan Kondisi Indonesia",
    icon: "🗺️",
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
];
