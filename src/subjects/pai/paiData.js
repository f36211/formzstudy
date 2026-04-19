const paiData = [
    {
      id: "sholat",
      title: "1. Sholat",
      icon: "🕌",
      sections: [
        {
          subtitle: "a. Rukun Sholat",
          content: [
            {
              type: "text",
              content:
                "Rukun sholat adalah bagian-bagian wajib dalam sholat yang harus dilaksanakan. Jika salah satu rukun ditinggalkan, sholat menjadi tidak sah.",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Niat",
                "Takbiratul Ihram",
                "Berdiri bagi yang mampu",
                "Membaca Al-Fatihah",
                "Ruku'",
                "I'tidal (bangkit dari ruku')",
                "Sujud",
                "Duduk di antara dua sujud",
                "Duduk pada akhir sholat (tasyahud akhir)",
                "Membaca tasyahud akhir",
                "Salam",
              ],
            },
          ],
        },
        {
          subtitle: "b. Sunnah Sholat",
          content: [
            {
              type: "text",
              content:
                "Sunnah sholat adalah perkara yang dianjurkan dalam sholat. Dikerjakan mendapat pahala, ditinggalkan tidak membatalkan sholat.",
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Doa iftitah",
                "Membaca surat setelah Al-Fatihah",
                "Takbir ketika berpindah dari satu rukun ke rukun lain",
                "Membaca dzikir dalam ruku' dan sujud",
                "Tasyahud awal",
                "Doa qunut (pada sholat Subuh)",
                "Doa antara dua sujud",
                "Doa setelah salam",
              ],
            },
          ],
        },
        {
          subtitle: "c. Yang Membatalkan Sholat",
          content: [
            {
              type: "text",
              content: "Perkara-perkara berikut dapat membatalkan sholat:",
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Makan dan minum dengan sengaja",
                "Berbicara dengan sengaja",
                "Tertawa terbahak-bahak",
                "Berbuat hadas besar (keluar air mani, haid, nifas)",
                "Meninggalkan salah satu rukun sholat",
                "Berpaling dari kiblat dengan sengaja",
                "Menjual beli dengan sengaja",
              ],
            },
          ],
        },
        {
          subtitle: "d. Doa Iftitah dan Artinya",
          content: [
            {
              type: "arabic",
              content:
                "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلاَ إِلَهَ غَيْرُكَ",
            },
            {
              type: "text",
              content:
                "Artinya: 'Maha Suci Engkau ya Allah, dan dengan memuji-Mu, dan nama-Mu diberkahi, dan keagungan-Mu Maha Tinggi, dan tidak ada ilah selain Engkau.'",
            },
            {
              type: "text",
              content:
                "Doa iftitah dibaca setelah takbiratul ihram sebelum membaca Al-Fatihah.",
            },
          ],
        },
        {
          subtitle: "e. Duduk di Antara Dua Sujud",
          content: [
            {
              type: "text",
              content:
                "Duduk di antara dua sujud adalah rukun sholat yang wajib dilaksanakan setelah sujud pertama sebelum melakukan sujud kedua.",
            },
            {
              type: "highlight",
              content: "Bacaan yang dianjurkan:",
            },
            {
              type: "arabic",
              content: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي",
            },
            {
              type: "text",
              content:
                "Artinya: 'Ya Tuhanku, ampunilah aku, ya Tuhanku ampunilah aku.'",
            },
          ],
        },
        {
          subtitle: "f. I'tidal",
          content: [
            {
              type: "text",
              content:
                "I'tidal adalah bangkit dari ruku' untuk berdiri tegak kembali. I'tidal merupakan rukun sholat yang wajib dilaksanakan.",
            },
            {
              type: "highlight",
              content: "Bacaan dalam i'tidal:",
            },
            {
              type: "arabic",
              content:
                "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ",
            },
            {
              type: "text",
              content:
                "Artinya: 'Semoga Allah mendengar orang yang memuji-Nya, ya Tuhan kami, bagi-Mu segala puji.'",
            },
          ],
        },
      ],
    },
    {
      id: "asmaul-husna",
      title: "2. Asmaul Husna",
      icon: "✨",
      sections: [
        {
          subtitle: "a. Al-'Alim (العليم)",
          content: [
            {
              type: "text",
              content:
                "Al-'Alim berarti 'Yang Maha Mengetahui'. Allah SWT mengetahui segala sesuatu, baik yang terlihat maupun yang tersembunyi, baik yang lampau, sekarang, maupun yang akan datang.",
            },
            {
              type: "highlight",
              content:
                "Makna: Allah mengetahui segala sesuatu tanpa terkecuali, termasuk isi hati manusia.",
            },
          ],
        },
        {
          subtitle: "b. As-Sami' (السميع)",
          content: [
            {
              type: "text",
              content:
                "As-Sami' berarti 'Yang Maha Mendengar'. Allah SWT mendengar segala suara dan bisikan, meskipun dilakukan secara rahasia.",
            },
            {
              type: "highlight",
              content:
                "Makna: Allah mendengar doa, keluhan, dan permohonan hamba-Nya di mana pun mereka berada.",
            },
          ],
        },
        {
          subtitle: "c. Al-Bashir (البصير)",
          content: [
            {
              type: "text",
              content:
                "Al-Bashir berarti 'Yang Maha Melihat'. Allah SWT melihat segala sesuatu, tidak ada yang tersembunyi dari penglihatan-Nya.",
            },
            {
              type: "highlight",
              content:
                "Makna: Allah melihat segala perbuatan hamba-Nya, baik yang dilakukan di siang hari maupun di malam hari.",
            },
          ],
        },
        {
          subtitle: "d. Al-Khabir (الخبير)",
          content: [
            {
              type: "text",
              content:
                "Al-Khabir berarti 'Yang Maha Mengetahui Rinci'. Allah SWT mengetahui segala sesuatu dengan detail dan mendalam.",
            },
            {
              type: "highlight",
              content:
                "Makna: Allah mengetahui rahasia dan yang lebih tersembunyi lagi, mengetahui keadaan batin dan lahir makhluk-Nya.",
            },
          ],
        },
      ],
    },
    {
      id: "macam-sujud",
      title: "3. Macam-macam Sujud",
      icon: "🙏",
      sections: [
        {
          subtitle: "a. Sujud Sahwi",
          content: [
            {
              type: "text",
              content:
                "Pengertian: Sujud sahwi adalah sujud yang dilakukan untuk menebus kesalahan atau kekhilafan dalam sholat.",
            },
            {
              type: "highlight",
              content:
                "Bacaan: سُبْحَانَ رَبِّيَ الأَعْلَى (Subhana rabbiyal a'la) - 'Maha Suci Tuhanku yang Maha Tinggi'",
            },
            {
              type: "text",
              content:
                "Dilakukan ketika: Menambah atau mengurangi rukun sholat, ragu-ragu dalam menghitung rakaat. Dilakukan sebelum salam atau sesudah salam tergantung jenis kesalahannya.",
            },
          ],
        },
        {
          subtitle: "b. Sujud Tilawah",
          content: [
            {
              type: "text",
              content:
                "Pengertian: Sujud tilawah adalah sujud yang dilakukan ketika membaca atau mendengar ayat sajdah dalam Al-Qur'an.",
            },
            {
              type: "highlight",
              content:
                "Bacaan: سَمِعْتُ لِمَنْ حَمِدَهُ، سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ وَصَوَّرَهُ...",
            },
            {
              type: "text",
              content:
                "Artinya: 'Aku mendengar orang yang memuji-Nya. Aku sujudkan wajahku kepada Tuhan yang menciptakannya...'",
            },
          ],
        },
        {
          subtitle: "c. Sujud Syukur",
          content: [
            {
              type: "text",
              content:
                "Pengertian: Sujud syukur adalah sujud yang dilakukan sebagai ungkapan rasa syukur kepada Allah SWT ketika mendapatkan nikmat atau kebaikan.",
            },
            {
              type: "highlight",
              content:
                "Bacaan: سُبْحَانَ رَبِّيَ الأَعْلَى (Subhana rabbiyal a'la)",
            },
            {
              type: "text",
              content:
                "Dilakukan ketika: Mendapatkan nikmat besar, selamat dari musibah. Boleh dilakukan kapan saja kecuali waktu terlarang.",
            },
          ],
        },
        {
          subtitle: "d. Sujud Shalat",
          content: [
            {
              type: "text",
              content:
                "Pengertian: Sujud shalat adalah sujud yang dilakukan sebagai rukun dalam sholat, yaitu meletakkan dahi di tempat sujud.",
            },
            {
              type: "highlight",
              content:
                "Bacaan dalam sujud: سُبْحَانَ رَبِّيَ الأَعْلَى (Subhana rabbiyal a'la) - dibaca 3 kali atau lebih.",
            },
          ],
        },
      ],
    },
    {
      id: "malaikat",
      title: "4. Sepuluh Malaikat, Sifat dan Tugasnya",
      icon: "👼",
      sections: [
        {
          subtitle: "Malaikat dan Tugasnya",
          content: [
            {
              type: "list",
              ordered: true,
              items: [
                "Jibril (AS) - Menyampaikan wahyu dari Allah kepada para nabi",
                "Mikail (AS) - Mengatur rezeki dan hujan",
                "Israfil (AS) - Meniup sangkakala pada hari kiamat",
                "Izrail (AS) - Mencabut nyawa makhluk",
                "Munkar dan Nakir - Menanyai orang mati di kubur",
                "Ridwan - Mengatur surga",
                "Malik - Mengatur neraka",
                "Raqib - Mencatat amal baik manusia",
                "Atid - Mencatat amal buruk manusia",
              ],
            },
            {
              type: "highlight",
              content: "Sifat-sifat Malaikat:",
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Diciptakan dari cahaya (nur)",
                "Tidak memiliki nafsu seperti manusia",
                "Tidak makan dan minum",
                "Tidak beranak dan berketurunan",
                "Taat sepenuhnya kepada Allah tanpa melawan",
                "Memiliki sayap (jumlahnya berbeda-beda)",
                "Bersih dan suci",
                "Tidak terlihat oleh manusia (kecuali dengan izin Allah)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "dalil-ayat",
      title: "5. Dalil Ayat dan Nama Surat",
      icon: "📖",
      sections: [
        {
          subtitle: "a. Allah Menciptakan Segalanya dari Air",
          content: [
            {
              type: "arabic",
              content:
                "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ أَفَلَا يُؤْمِنُونَ",
            },
            {
              type: "text",
              content:
                "Artinya: 'Dan Kami jadikan dari air setiap sesuatu yang hidup. Maka apakah mereka tidak beriman?' (QS. Al-Anbiya': 30)",
            },
            {
              type: "highlight",
              content: "Nama Surat: Al-Anbiya' (Surat ke-21)",
            },
          ],
        },
        {
          subtitle: "b. Allah Menciptakan Alam dalam 6 Masa",
          content: [
            {
              type: "arabic",
              content:
                "إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ",
            },
            {
              type: "text",
              content:
                "Artinya: 'Sesungguhnya Tuhan kamu adalah Allah yang telah menciptakan langit dan bumi dalam enam masa...' (QS. Al-A'raf: 54)",
            },
            {
              type: "highlight",
              content: "Nama Surat: Al-A'raf (Surat ke-7)",
            },
          ],
        },
      ],
    },
    {
      id: "sunnah-wudhu-mandi-tayamum",
      title: "6. Sunnah Wudhu, Mandi Wajib, dan Rukun Tayamum",
      icon: "💧",
      sections: [
        {
          subtitle: "a. Sunnah Wudhu",
          content: [
            {
              type: "list",
              ordered: false,
              items: [
                "Membaca basmalah (Bismillahirrahmanirrahim)",
                "Mencuci kedua tangan sampai pergelangan tangan sebelum berwudhu",
                "Berkumur-kumur",
                "Membersihkan hidung (istinsyaq dan istintsar)",
                "Menyapu seluruh kepala (bukan hanya sebagian)",
                "Menyapu kedua telinga (bagian luar dan dalam)",
                "Mengulangi setiap anggota wudhu sebanyak 3 kali",
                "Mengerjakan wudhu secara berurutan (tertib)",
                "Membaca doa setelah wudhu",
              ],
            },
            {
              type: "arabic",
              content:
                "أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
            },
            {
              type: "text",
              content:
                "Artinya: 'Aku bersaksi bahwa tidak ada ilah selain Allah, satu-satunya, tidak ada sekutu bagi-Nya, dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya.'",
            },
          ],
        },
        {
          subtitle: "b. Sunnah Mandi Wajib (Mandi Junub)",
          content: [
            {
              type: "list",
              ordered: false,
              items: [
                "Membaca basmalah sebelum mandi",
                "Mencuci kedua tangan sampai pergelangan",
                "Mencuci aurat terlebih dahulu",
                "Mengerjakan wudhu terlebih dahulu",
                "Mengalirkan air ke seluruh tubuh",
                "Menggosok seluruh tubuh",
                "Memulai dari kepala, lalu bahu kanan, lalu bahu kiri",
                "Membaca doa setelah mandi",
              ],
            },
            {
              type: "highlight",
              content:
                "Hal-hal yang menyebabkan mandi wajib: Keluar mani, berjimak (hubungan suami istri), haid berakhir, nifas berakhir.",
            },
          ],
        },
        {
          subtitle: "c. Rukun Tayamum",
          content: [
            {
              type: "text",
              content:
                "Rukun tayamum adalah hal-hal wajib yang harus dilaksanakan dalam tayamum. Jika salah satu ditinggalkan, tayamum tidak sah.",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Niat",
                "Mengusap seluruh wajah",
                "Mengusap kedua tangan sampai siku",
              ],
            },
            {
              type: "highlight",
              content:
                "Syarat melakukan tayamum: Tidak ada air, atau ada air tetapi tidak mampu menggunakannya (sakit, air terlalu dingin, dll).",
            },
          ],
        },
      ],
    },
    {
      id: "thoharoh",
      title: "7. Thoharoh (Bersuci)",
      icon: "🌊",
      sections: [
        {
          subtitle: "a. Jenis Air",
          content: [
            {
              type: "list",
              ordered: false,
              items: [
                "Air mutlak (air murni) - Air yang tidak berubah sifatnya dan suci serta menyucikan",
                "Air musta'mal (air bekas) - Air yang telah digunakan untuk bersuci dan tidak berubah sifatnya",
                "Air yang berubah sifatnya karena tercampur najis - Air ini menjadi najis dan tidak dapat digunakan untuk bersuci",
                "Air yang terkena najis - Air yang tercampur dengan najis sehingga berubah sifatnya",
              ],
            },
          ],
        },
        {
          subtitle: "b. Macam-macam Air yang Bisa Dipakai Bersuci",
          content: [
            {
              type: "list",
              ordered: false,
              items: [
                "Air hujan",
                "Air sumur",
                "Air sungai",
                "Air laut",
                "Air salju",
                "Air es",
                "Air mata air",
                "Air dari awan",
              ],
            },
            {
              type: "highlight",
              content:
                "Ketentuan: Air harus dalam jumlah minimal 2 qullah (sekitar 216 liter) jika ada kemungkinan terkena najis. Air laut suci dan menyucikan meskipun asin.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah-islam",
      title: "8. Sejarah Islam",
      icon: "🏛️",
      sections: [
        {
          subtitle: "a. Khulafaur Rasyidin",
          content: [
            {
              type: "list",
              ordered: true,
              items: [
                "Abu Bakar As-Siddiq (632-634 M) - Khalifah pertama, dikenal dengan kejujurannya",
                "Umar bin Khattab (634-644 M) - Khalifah kedua, dikenal dengan keadilannya",
                "Utsman bin Affan (644-656 M) - Khalifah ketiga, dikenal dengan kepemimpinan yang lemah",
                "Ali bin Abi Thalib (656-661 M) - Khalifah keempat, terjebak dalam konflik internal dan Fitnah Pertama",
              ],
            },
            {
              type: "highlight",
              content:
                "Ciri khas: Dipilih oleh majelis syura (para pemimpin Muslim), bukan sistem warisan. Masa pemerintahan mereka menjadi teladan dalam keadilan dan moralitas.",
            },
          ],
        },
        {
          subtitle: "b. Dinasti Umayyah",
          content: [
            {
              type: "text",
              content:
                "Dinasti Umayyah (661-750 M) adalah kekhalifahan Islam pertama yang mampu memperluas kekuasaan ke berbagai penjuru dunia. Berpusat di Damaskus, Suriah.",
            },
            {
              type: "highlight",
              content:
                "Pendiri: Muawiyah bin Abu Sufyan (661-680 M), menggantikan sistem pemilihan dengan sistem monarki warisan.",
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Ekspansi wilayah terluas dalam sejarah Islam (Timur Tengah, Afrika Utara, Spanyol, Transoxiana, India)",
                "Pembangunan Masjid Umayyah di Damaskus",
                "Sistem administrasi terorganisir (pajak, pos)",
                "Penerjemahan karya Yunani ke bahasa Arab",
                "Kemajuan maritim dan perdagangan internasional",
              ],
            },
            {
              type: "text",
              content:
                "Kekalahan: Dijatuhkan oleh Dinasti Abbasiyah pada tahun 750 M. Namun, cabangnya di Andalusia (Spanyol) bertahan hingga 1031 M dipimpin oleh Abdurrahman I.",
            },
          ],
        },
      ],
    },
    {
      id: "sifat-mahmudah-madzmumah",
      title: "9. Sifat Mahmudah dan Madzmumah",
      icon: "⚖️",
      sections: [
        {
          subtitle: "Pengertian",
          content: [
            {
              type: "text",
              content:
                "Sifat Mahmudah adalah sifat-sifat terpuji yang harus dimiliki oleh setiap Muslim. Sifat Madzmumah adalah sifat-sifat tercela yang harus dijauhi.",
            },
          ],
        },
        {
          subtitle: "Jenis-jenis Sifat Mahmudah (Terpuji)",
          content: [
            {
              type: "list",
              ordered: false,
              items: [
                "Shiddiq (Jujur) - Mengatakan yang benar dalam ucapan dan perbuatan",
                "Amanah (Dapat dipercaya) - Menjaga amanat dan tanggung jawab",
                "Tabligh (Menyampaikan) - Menyampaikan kebenaran dengan jelas",
                "Fathanah (Cerdas/Pandai) - Memiliki kecerdasan dan kebijaksanaan",
                "Shabr (Sabar) - Menahan diri dari kemarahan dan kesedihan",
                "Tawadhu' (Rendah hati) - Tidak sombong dan merendahkan diri",
                "Syukur (Bersyukur) - Mensyukuri nikmat Allah",
                "Ikhlas (Tulus) - Melakukan ibadah hanya karena Allah",
                "Adil (Adil) - Berlaku adil kepada semua pihak",
              ],
            },
          ],
        },
        {
          subtitle: "Jenis-jenis Sifat Madzmumah (Tercela)",
          content: [
            {
              type: "list",
              ordered: false,
              items: [
                "Kadzib (Dustaan) - Berbohong dan tidak jujur",
                "Ghadab (Pemarah) - Mudah marah dan tidak bisa menahan emosi",
                "Hasad (Dengki) - Tidak senang dengan kebaikan orang lain",
                "Riya' (Pamer) - Melakukan ibadah untuk dilihat orang",
                "Ujub (Bangga diri) - Merasa hebat dengan amal sendiri",
                "Takabbur (Sombong) - Merasa lebih baik dari orang lain",
                "Bakhil (Kikir) - Tidak mau berinfak dan membantu",
                "Khiyanah (Khianat) - Mengkhianati amanat",
                "Zalim (Zalim) - Berbuat aniaya kepada orang lain",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "rukhsoh-jama-qoshor",
      title: "10. Rukhsoh, Sholat Jama' dan Qoshor",
      icon: "🕐",
      sections: [
        {
          subtitle: "Pengertian Rukhsoh",
          content: [
            {
              type: "text",
              content:
                "Rukhsoh adalah keringanan atau kemudahan yang diberikan oleh syariat Islam dalam melaksanakan ibadah, biasanya diberikan dalam keadaan tertentu seperti safar (bepergian), sakit, atau keadaan darurat.",
            },
            {
              type: "highlight",
              content: "Macam-macam Rukhsoh dalam Ibadah:",
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Jama' dan Qoshor sholat",
                "Tayamum sebagai pengganti wudhu/mandi",
                "Membaca Al-Fatihah dengan isyarat (bagi yang tidak bisa berdiri)",
                "Mengqodho' sholat yang ditinggalkan",
                "Tidak berpuasa bagi yang sakit atau musafir",
              ],
            },
          ],
        },
        {
          subtitle: "Sholat Jama'",
          content: [
            {
              type: "text",
              content:
                "Sholat Jama' adalah melaksanakan dua sholat waktu dalam satu waktu, baik jama' taqdim (dimajukan) atau jama' ta'khir (dimundurkan).",
            },
            {
              type: "highlight",
              content:
                "Syarat Jama': Musafir (bepergian jarak minimal 84 km atau 2 marhalah), Niat jama' pada sholat pertama, Berurutan (tidak ada sholat sunnah di antara keduanya)",
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Jama' Taqdim: Sholat Dhuhur dan Ashar pada waktu Dhuhur, atau Sholat Maghrib dan Isya pada waktu Maghrib",
                "Jama' Ta'khir: Sholat Dhuhur dan Ashar pada waktu Ashar, atau Sholat Maghrib dan Isya pada waktu Isya",
              ],
            },
          ],
        },
        {
          subtitle: "Sholat Qoshor",
          content: [
            {
              type: "text",
              content:
                "Sholat Qoshor adalah meringkas sholat fardhu dari 4 rakaat menjadi 2 rakaat.",
            },
            {
              type: "highlight",
              content:
                "Sholat yang bisa diqoshor: Dhuhur, Ashar, dan Isya (menjadi 2 rakaat). Sholat Subuh tetap 2 rakaat, Maghrib tetap 3 rakaat.",
            },
            {
              type: "text",
              content:
                "Syarat Qoshor: Sama dengan syarat jama', yaitu musafir dengan jarak minimal 84 km. Cara: Melaksanakan sholat seperti biasa tetapi hanya 2 rakaat. Bisa dilakukan bersamaan dengan jama' atau sendiri-sendiri.",
            },
          ],
        },
      ],
    },
    {
      id: "dalil-iman-kitab",
      title: "11. Dalil Iman Kepada Kitab Allah",
      icon: "📚",
      sections: [
        {
          subtitle: "Nama Kitab Samawi dan Nabi Penerimanya",
          content: [
            {
              type: "table",
              content: [
                { Kitab: "Taurat (Torah)", Nabi: "Nabi Musa (AS)" },
                { Kitab: "Zabur (Psalms)", Nabi: "Nabi Daud (AS)" },
                { Kitab: "Injil (Gospel)", Nabi: "Nabi Isa (AS)" },
                { Kitab: "Al-Qur'an", Nabi: "Nabi Muhammad SAW" },
              ],
            },
            {
              type: "arabic",
              content:
                "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ",
            },
            {
              type: "text",
              content:
                "Artinya: 'Rasul telah beriman kepada apa yang diturunkan kepadanya dari Tuhannya, dan orang-orang mukmin. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, dan rasul-rasul-Nya...' (QS. Al-Baqarah: 285)",
            },
            {
              type: "highlight",
              content: "Nama Surat: Al-Baqarah (Surat ke-2)",
            },
          ],
        },
      ],
    },
    {
      id: "iman-nabi-rasul",
      title: "12. Iman kepada Nabi dan Rasul",
      icon: "🌟",
      sections: [
        {
          subtitle: "Nama-nabi dan Mukjizatnya",
          content: [
            {
              type: "table",
              content: [
                {
                  Nabi: "Nabi Adam (AS)",
                  Mukjizat:
                    "Diciptakan tanpa ayah dan ibu, diberi ilmu pengetahuan",
                },
                {
                  Nabi: "Nabi Nuh (AS)",
                  Mukjizat:
                    "Membuat bahtera besar yang selamat dari banjir besar",
                },
                {
                  Nabi: "Nabi Ibrahim (AS)",
                  Mukjizat: "Tidak terbakar dalam api yang menyala-nyala",
                },
                {
                  Nabi: "Nabi Musa (AS)",
                  Mukjizat: "Tongkat yang berubah menjadi ular, membelah laut",
                },
                {
                  Nabi: "Nabi Isa (AS)",
                  Mukjizat:
                    "Dilahirkan tanpa ayah, menghidupkan orang mati, menyembuhkan buta",
                },
                {
                  Nabi: "Nabi Muhammad SAW",
                  Mukjizat:
                    "Al-Qur'an (mukjizat abadi), Isra' Mi'raj, membelah bulan",
                },
              ],
            },
          ],
        },
        {
          subtitle: "Empat Sifat Rasul",
          content: [
            {
              type: "list",
              ordered: true,
              items: [
                "Shiddiq (Jujur) - Rasul selalu berkata benar dalam menyampaikan wahyu dan dalam kehidupannya",
                "Amanah (Dapat dipercaya) - Rasul dapat dipercaya dalam menyampaikan wahyu dan menjalankan tugasnya",
                "Tabligh (Menyampaikan) - Rasul menyampaikan seluruh wahyu yang diterimanya dengan jelas dan lengkap",
                "Fathanah (Cerdas/Bijaksana) - Rasul memiliki kecerdasan luar biasa dalam mengemban tugas kenabian",
              ],
            },
            {
              type: "highlight",
              content:
                "Dalil: Allah SWT berfirman dalam QS. As-Syu'ara': 107 tentang sifat Nabi Nuh: 'Sesungguhnya aku adalah rasul Allah yang dapat dipercaya (amanah) kepadamu.'",
            },
          ],
        },
      ],
    },
  ];
export default paiData;
