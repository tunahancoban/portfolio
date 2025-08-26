import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Link as LinkIcon, Gamepad2, Globe, ChevronRight } from "lucide-react";

// ———————————————————————————————————————————
// KİŞİSEL VERİLER (düzenle)
// ———————————————————————————————————————————
const PROFILE = {
  name: "Tunahan Çoban",
  title: "Computer Engineering 3rd Year · Unity & ML",
  summary:
    "Ankara'da yaşayan, 22 yaşında, Unity ve Machine Learning ile ilgilenen bir bilgisayar mühendisliği öğrencisiyim. Oyun projelerimi ve öğrenme yolculuğumu burada paylaşıyorum.",
  location: "Ankara, Türkiye",
  email: "tunahancbnn@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/tunahancoban", icon: <Github className="h-5 w-5" /> },
    { label: "Itch.io", href: "https://tunahancoban.itch.io", icon: <Gamepad2 className="h-5 w-5" /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tunahan-çoban-060295313", icon: <Linkedin className="h-5 w-5" /> },
    { label: "Instagram", href: "https://instagram.com/tunahancbnn", icon: <LinkIcon className="h-5 w-5" /> },
    { label: "E‑posta", href: "mailto:tunahancbnn@gmail.com", icon: <Mail className="h-5 w-5" /> },
  ],
};

// ———————————————————————————————————————————
// Projeler (düzenle)
// ———————————————————————————————————————————
const PROJECTS = [
  {
    title: "2D Platformer",
    description:
      "Klasik platform mekaniği, 32x32 pixel‑art tilemap ve düşman AI içeren 2D oyun prototipi.",
    role: "Solo Dev",
    year: "2025",
    tags: ["Unity", "C#", "2D", "Platformer"],
    links: [
      { label: "Itch.io", href: "https://tunahancoban.itch.io" },
      { label: "GitHub", href: "https://github.com/tunahancoban" },
    ],
  },
  {
    title: "3D FPS Sci‑Fi Horror",
    description:
      "Bilim‑kurgu atmosferinde geçen, karanlık koridorlar ve ses tabanlı AI ile gerilim odaklı FPS deneyimi.",
    role: "Solo Dev",
    year: "2025",
    tags: ["Unity", "C#", "3D", "FPS", "Horror"],
    links: [],
  },
  {
    title: "TPS Shooter",
    description:
      "Omuz üstü kamera, hedef alma/cover mekaniği ve temel envanter sistemine sahip TPS prototipi.",
    role: "Solo Dev",
    year: "2025",
    tags: ["Unity", "C#", "3D", "TPS"],
    links: [],
  },
  {
    title: "2D Puzzle",
    description:
      "Mantık tabanlı bulmacalar, buton‑kapı mekanikleri ve çok kademeli seviye tasarımı.",
    role: "Solo Dev",
    year: "2025",
    tags: ["Unity", "C#", "2D", "Puzzle"],
    links: [],
  },
  {
    title: "2D Bullet Hell",
    description:
      "Zorlayıcı dalga yapısı, mermi desenleri ve power‑up sistemi ile hızlı tempolu bullet hell.",
    role: "Solo Dev",
    year: "2025",
    tags: ["Unity", "C#", "2D", "Bullet Hell"],
    links: [],
  },
];

const SKILLS = [
  { group: "Game Dev", items: ["Unity", "C#", "NavMesh", "Cinemachine", "Aseprite"] },
  { group: "Frontend", items: ["React", "TailwindCSS", "Vite", "Framer Motion"] },
  { group: "AI/Backend", items: ["Python", "NumPy", "Pandas", "Java", "Node.js"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
];

// ———————————————————————————————————————————
// Yardımcı UI parçaları
// ———————————————————————————————————————————
function Section({ id, title, children, icon }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center gap-3 mb-8">
        {icon}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm backdrop-blur">
      {children}
    </span>
  );
}

function ProjectCard({ p }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="group rounded-2xl border shadow-sm hover:shadow-md bg-white/70 dark:bg-zinc-900/60">
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
          </div>
          <div className="shrink-0 text-right">
            <Pill>{p.year} · {p.role}</Pill>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 border">{t}</span>
          ))}
        </div>
        {p.links?.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:no-underline">
                <LinkIcon className="h-4 w-4" />{l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function NavItem({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white">
      {children}
    </a>
  );
}

// ———————————————————————————————————————————
// Basit testler (UI içine gömülü)
// ———————————————————————————————————————————
function runDataTests() {
  const tests = [];
  // Test 1: Profil alanları
  tests.push({
    name: "PROFILE alanları dolu",
    pass: Boolean(PROFILE?.name && PROFILE?.email && PROFILE?.title),
    message: `${PROFILE.name || "?"}, ${PROFILE.email || "?"}`,
  });
  // Test 2: Sosyaller
  tests.push({
    name: "En az bir sosyal link var",
    pass: Array.isArray(PROFILE.socials) && PROFILE.socials.length > 0,
    message: `Sosyal sayısı: ${PROFILE.socials?.length ?? 0}`,
  });
  // Test 3: Projeler mevcut
  tests.push({
    name: "Projeler listesi boş değil",
    pass: Array.isArray(PROJECTS) && PROJECTS.length >= 1,
    message: `Proje sayısı: ${PROJECTS.length}`,
  });
  // Test 4: Her projede başlık ve etiketler var
  tests.push({
    name: "Projelerde title ve tags alanları var",
    pass: PROJECTS.every((p) => p.title && Array.isArray(p.tags) && p.tags.length > 0),
    message: PROJECTS.map((p) => `${p.title}:${p.tags.length}`).join(", "),
  });
  return tests;
}

// ———————————————————————————————————————————
// Ana BİLEŞEN
// ———————————————————————————————————————————
export default function PortfolioSite() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const tags = useMemo(() => ["All", ...new Set(PROJECTS.flatMap((p) => p.tags))], []);
  const topRef = useRef(null);

  // Smooth scroll
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const q = query.toLowerCase();
      const matchText = [p.title, p.description, p.role, p.year, ...(p.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(q);
      const matchTag = activeTag === "All" || p.tags.includes(activeTag);
      return matchText && matchTag;
    });
  }, [query, activeTag]);

  // (İsteğe bağlı) DOM hazır olduğunda küçük bir uyarı (geliştiriciye)
  useEffect(() => {
    // console.log("PortfolioSite mounted");
  }, []);

  return (
    <div ref={topRef} className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur border-b bg-white/60 dark:bg-zinc-900/40">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#top" onClick={(e)=>{e.preventDefault();scrollTo('top')}} className="font-semibold">
            {PROFILE.name}
          </a>
          <div className="hidden sm:flex items-center gap-6">
            <NavItem href="#about" onClick={(e)=>{e.preventDefault();scrollTo('about')}}>Hakkımda</NavItem>
            <NavItem href="#projects" onClick={(e)=>{e.preventDefault();scrollTo('projects')}}>Projeler</NavItem>
            <NavItem href="#skills" onClick={(e)=>{e.preventDefault();scrollTo('skills')}}>Yetenekler</NavItem>
            <NavItem href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}}>İletişim</NavItem>
          </div>
          <div className="flex items-center gap-3">
            {PROFILE.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="p-2 rounded-xl border hover:bg-zinc-100 dark:hover:bg-zinc-800">
                {s.icon}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {PROFILE.title}
            </motion.h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">{PROFILE.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" onClick={(e)=>{e.preventDefault();scrollTo('projects')}} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border shadow-sm hover:shadow bg-white dark:bg-zinc-900">
                <Gamepad2 className="h-4 w-4" /> Projelerimi Gör
              </a>
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border">
                <Mail className="h-4 w-4" /> Benimle İletişime Geç
              </a>
            </div>
          </div>
          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="aspect-square rounded-3xl border bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
              <Globe className="h-24 w-24" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="Hakkımda" icon={<ChevronRight className="h-6 w-6" />}>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 leading-relaxed">
            <p>
              Selam! Ben {PROFILE.name}. Oyun geliştirme (Unity 2D/3D) ve yapay zekâ alanlarında çalışıyorum. Üniversitede aldığım dersler dışında, kendi projelerimle pratik yapmayı seviyorum.
            </p>
            <p>
            </p>
          </div>
          <aside className="space-y-3">
            <div className="rounded-2xl border p-4">
              <h3 className="font-semibold">Bilgiler</h3>
              <ul className="mt-2 text-sm space-y-1">
                <li><b>Konum:</b> {PROFILE.location}</li>
                <li><b>E‑posta:</b> <a className="underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
              </ul>
            </div>
            <div className="rounded-2xl border p-4">
              <h3 className="font-semibold">Bağlantılar</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {PROFILE.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-xl border px-3 py-1.5">
                    {s.icon}<span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projeler" icon={<ChevronRight className="h-6 w-6" />}>
        <div className="mb-6 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ara: Unity, AI, Python…"
            className="w-full md:w-80 rounded-xl border px-3 py-2 bg-white/70 dark:bg-zinc-900/60"
          />
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`rounded-xl border px-3 py-1.5 text-sm ${
                  activeTag === t ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : ""
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        {filtered.length === 0 ? (
          <p className="text-sm text-zinc-500">Sonuç bulunamadı. Filtreleri temizlemeyi deneyin.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        )}
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Yetenekler" icon={<ChevronRight className="h-6 w-6" />}>
        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((s) => (
            <div key={s.group} className="rounded-2xl border p-5">
              <h3 className="font-semibold">{s.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <Pill key={i}>{i}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="İletişim" icon={<ChevronRight className="h-6 w-6" />}>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const payload = Object.fromEntries(fd.entries());
                alert("Gönderilecek örnek payload:\n" + JSON.stringify(payload, null, 2));
              }}
              className="space-y-3 rounded-2xl border p-5">
              <div className="grid sm:grid-cols-2 gap-3">
                <input name="name" required placeholder="Ad Soyad" className="rounded-xl border px-3 py-2 bg-white/70 dark:bg-zinc-900/60" />
                <input name="email" type="email" required placeholder="E‑posta" className="rounded-xl border px-3 py-2 bg-white/70 dark:bg-zinc-900/60" />
              </div>
              <input name="subject" placeholder="Konu" className="w-full rounded-xl border px-3 py-2 bg-white/70 dark:bg-zinc-900/60" />
              <textarea name="message" rows={6} placeholder="Mesajın" className="w-full rounded-2xl border px-3 py-2 bg-white/70 dark:bg-zinc-900/60" />
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border shadow-sm hover:shadow">
                Gönder <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          <aside className="space-y-3">
            <div className="rounded-2xl border p-4">
              <h3 className="font-semibold">E‑posta</h3>
              <a className="mt-1 block underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            </div>
            <div className="rounded-2xl border p-4">
              <h3 className="font-semibold">Sosyal</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {PROFILE.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-xl border px-3 py-1.5">
                    {s.icon}<span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* TEST PANELİ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <details className="rounded-2xl border p-4 text-sm bg-white/60 dark:bg-zinc-900/40">
          <summary className="cursor-pointer font-semibold">Kendini Test Et (veri kontrolleri)</summary>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            {runDataTests().map((t) => (
              <li key={t.name} className={t.pass ? "text-green-600" : "text-red-600"}>
                {t.pass ? "✔" : "✖"} {t.name} — <span className="text-zinc-500">{t.message}</span>
              </li>
            ))}
          </ul>
        </details>
      </div>

      {/* FOOTER */}
      <footer className="mt-4 py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {PROFILE.name}. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
