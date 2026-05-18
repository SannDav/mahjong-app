export const projects = [
  {
    slug: 'pengaduan-sekolah',
    title: 'Pengaduan Sekolah',
    type: 'Laravel / Full-Stack',
    shortDesc: 'Sistem pengaduan sekolah berbasis web. Platform untuk melaporkan dan mengelola keluhan di lingkungan sekolah.',
    fullDesc: 'Aplikasi web pengaduan sekolah yang dibangun dengan Laravel. Memungkinkan siswa dan guru untuk melaporkan keluhan, masalah fasilitas, atau kejadian di lingkungan sekolah secara terstruktur. Sistem ini mencakup autentikasi pengguna, dashboard admin, dan manajemen laporan yang efisien.',
    techStack: ['Laravel', 'Blade', 'MySQL', 'Bootstrap', 'PHP'],
    features: [
      'Sistem login & registrasi multi-level (admin, user)',
      'Form pengaduan dengan kategori',
      'Dashboard admin untuk mengelola laporan',
      'Status tracking: pending, diproses, selesai',
      'Notifikasi respon dari admin',
      'Riwayat pengaduan per pengguna'
    ],
    githubUrl: 'https://github.com/SannDav/pengaduan-sekolah',
    demoUrl: null,
    image: '/images/pengaduan-sekolah.jpg'
  },
  {
    slug: 'web-gallery',
    title: 'Web Gallery',
    type: 'PHP / Back-End',
    shortDesc: 'Galeri web PHP untuk mengelola dan menampilkan koleksi gambar secara dinamis.',
    fullDesc: 'Aplikasi galeri web berbasis PHP yang memungkinkan pengguna untuk mengunggah, mengelola, dan menampilkan koleksi gambar dalam tampilan grid yang rapi. Dibangun dengan arsitektur PHP prosedural murni tanpa framework, cocok untuk pemula yang ingin memahami fundamental back-end development.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Upload gambar dengan preview',
      'Kategorisasi gambar',
      'Tampilan grid responsif',
      'Hapus & edit gambar',
      'Pencarian gambar',
      'Lightbox viewer untuk melihat gambar ukuran penuh'
    ],
    githubUrl: 'https://github.com/SannDav/Web-Gallery',
    demoUrl: null,
    image: '/images/web-gallery.jpg'
  },
  {
    slug: 'mahjong-app',
    title: 'Mahjong App',
    type: 'Vue / Front-End',
    shortDesc: 'Aplikasi mahjong interaktif dengan Vue 3, animasi cinematic, dan Tailwind CSS.',
    fullDesc: 'Aplikasi mahjong interaktif yang dibangun dengan Vue 3, Vite, dan Tailwind CSS. Menampilkan animasi cinematic modern dengan per-word text reveal, scroll-triggered animations, dan smooth scrolling menggunakan Lenis. Proyek ini adalah portofolio pribadi yang mengeksplorasi motion design dan frontend development.',
    techStack: ['Vue 3', 'Vite', 'Tailwind CSS', 'Lenis', 'JavaScript'],
    features: [
      'Per-word text reveal animation dengan IntersectionObserver',
      'Scroll-triggered staggered card animations',
      'Smooth scrolling dengan Lenis',
      'Cinematic blur-to-clear transitions',
      'Floating animation pada skill cards',
      'Responsive design (mobile-first)'
    ],
    githubUrl: 'https://github.com/SannDav/mahjong-app',
    demoUrl: null,
    image: '/images/mahjong-app.jpg'
  }
]

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug) || null
}
