import paiData from "../subjects/pai/paiData";
import bindoData from "../subjects/pai/bindo";
import ipaData from "../subjects/ipa/ipaData";
import barabData from "../subjects/barabdata";
import { ppdata } from "../subjects/ppdata";
import { mtkdata } from "../subjects/mtkdata";

export const subjectsData = [
  {
    title: "Bahasa Indonesia",
    slug: "bahasa-indonesia",
    description: "Ringkasan materi + latihan soal Bahasa Indonesia",
    icon: "BookOpenText",
    color: "#EC4899",
    topics: bindoData,
  },
  {
    title: "PAI",
    slug: "pai",
    description: "Ringkasan materi + latihan soal Pendidikan Agama Islam",
    icon: "Scroll",
    color: "#1A7D42",
    topics: paiData,
  },
  {
    title: "IPA",
    slug: "ipa",
    description: "Ringkasan materi + latihan soal Ilmu Pengetahuan Alam",
    icon: "FlaskConical",
    color: "#22C55E",
    topics: ipaData,
  },
  {
    title: "Bahasa Arab",
    slug: "bahasa-arab",
    description: "Ringkasan materi + latihan soal Bahasa Arab",
    icon: "BookMarked",
    color: "#F59E0B",
    topics: barabData,
  },
  {
    title: "Matematika",
    slug: "matematika",
    description: "Ringkasan materi + latihan soal Matematika",
    icon: "Calculator",
    color: "#2B3990",
    topics: mtkdata,
  },
  {
    title: "PP",
    slug: "pp",
    description: "Ringkasan materi + latihan soal Pendidikan Pancasila",
    icon: "Scale",
    color: "#EF4444",
    topics: ppdata,
  },
  {
    title: "Bahasa Inggris",
    slug: "bahasa-inggris",
    description: "Ringkasan materi + latihan soal Bahasa Inggris",
    icon: "Languages",
    color: "#0EA5E9",
    topics: [],
  },
  {
    title: "IPS",
    slug: "ips",
    description: "Ringkasan materi + latihan soal Ilmu Pengetahuan Sosial",
    icon: "Globe2",
    color: "#8B5CF6",
    topics: [],
  },
];

export const examSchedule = [
  {
    id: "1",
    date: "Senin, 20 April",
    exams: [
      { id: "1a", time: "07.30 - 09.30", subject: "Bahasa Indonesia" },
      { id: "1b", time: "10.00 - 12.00", subject: "PAI" },
    ],
  },
  {
    id: "2",
    date: "Selasa, 21 April",
    exams: [
      { id: "2a", time: "07.30 - 09.30", subject: "IPA" },
      { id: "2b", time: "10.00 - 12.00", subject: "Bahasa Arab" },
    ],
  },
  {
    id: "3",
    date: "Rabu, 22 April",
    exams: [
      { id: "3a", time: "07.30 - 09.30", subject: "Matematika" },
      { id: "3b", time: "10.00 - 12.00", subject: "Pendidikan Pancasila (PP)" },
    ],
  },
  {
    id: "4",
    date: "Kamis, 23 April",
    exams: [
      { id: "4a", time: "07.30 - 09.30", subject: "Bahasa Inggris" },
      { id: "4b", time: "10.00 - 12.00", subject: "IPS" },
    ],
  },
];
