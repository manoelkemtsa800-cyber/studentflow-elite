/* ═══════════════════════════════════════════════
   STUDENTFLOW ELITE — script.js
   JavaScript Vanilla — Aucun framework
═══════════════════════════════════════════════ */

"use strict";

/* ══════════════════════════════════════
   1. DONNÉES INITIALES
══════════════════════════════════════ */
const DEFAULT_STUDENTS = [
  {
    id: 1,
    name: "Amine Kouassi",
    field: "Génie Logiciel",
    level: "Master 2",
    category: "dev",
    bio: "Passionné par le développement web full-stack, je crée des applications modernes et performantes. Toujours à la recherche de nouvelles technologies.",
    skills: ["React", "Node.js", "Python", "PostgreSQL", "Docker"],
    cv: "#",
    projects: "#",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "",
    initials: "AK"
  },
  {
    id: 2,
    name: "Fatima Mbarga",
    field: "UI/UX Design",
    level: "Licence 3",
    category: "design",
    bio: "Designer créative spécialisée dans l'expérience utilisateur. Je conçois des interfaces intuitives qui enchantent les utilisateurs.",
    skills: ["Figma", "Adobe XD", "CSS3", "Illustrator", "Prototypage"],
    cv: "#",
    projects: "#",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "",
    initials: "FM"
  },
  {
    id: 3,
    name: "Jean-Pierre Bello",
    field: "Data Science",
    level: "Master 1",
    category: "data",
    bio: "Analyste données et ML engineer. Je transforme des données brutes en insights actionnables grâce à l'IA et au machine learning.",
    skills: ["Python", "TensorFlow", "SQL", "Power BI", "Pandas"],
    cv: "#",
    projects: "#",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "",
    initials: "JB"
  },
  {
    id: 4,
    name: "Aïssatou Diallo",
    field: "Développement Mobile",
    level: "Licence 3",
    category: "mobile",
    bio: "Développeuse mobile Flutter/React Native. Je crée des applications mobiles cross-platform élégantes et performantes.",
    skills: ["Flutter", "Dart", "React Native", "Firebase", "UI Mobile"],
    cv: "#",
    projects: "#",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "",
    initials: "AD"
  },
  {
    id: 5,
    name: "Koffi Mensah",
    field: "Cybersécurité",
    level: "Master 1",
    category: "dev",
    bio: "Expert en sécurité informatique. Je protège les systèmes et développe des solutions sécurisées contre les cybermenaces.",
    skills: ["Linux", "Python", "Kali", "Réseaux", "Cryptographie"],
    cv: "#",
    projects: "#",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "",
    initials: "KM"
  },
  {
    id: 6,
    name: "Sophie Nganga",
    field: "Intelligence Artificielle",
    level: "Master 2",
    category: "data",
    bio: "Chercheuse en IA et NLP. Je développe des modèles de traitement du langage naturel pour des applications innovantes.",
    skills: ["PyTorch", "NLP", "Hugging Face", "Python", "Deep Learning"],
    cv: "#",
    projects: "#",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "",
    initials: "SN"
  },
  {
    id: 7,
    name: "Ibrahim Touré",
    field: "Développement Web",
    level: "Licence 2",
    category: "dev",
    bio: "Développeur front-end créatif. Je donne vie aux maquettes avec des animations soignées et une attention minutieuse aux détails.",
    skills: ["HTML/CSS", "JavaScript", "Vue.js", "GSAP", "Sass"],
    cv: "#",
    projects: "#",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "",
    initials: "IT"
  },
  {
    id: 8,
    name: "Marie-Claire Essam",
    field: "Systèmes & Réseaux",
    level: "Master 1",
    category: "dev",
    bio: "Administratrice systèmes et réseaux. J'architecture des infrastructures cloud robustes et hautement disponibles.",
    skills: ["AWS", "Linux", "Docker", "Kubernetes", "Cisco"],
    cv: "#",
    projects: "#",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "",
    initials: "ME"
  }
];

const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: "EduConnect Platform",
    category: "web",
    desc: "Plateforme e-learning collaborative permettant aux étudiants de partager des cours et collaborer en temps réel.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    demo: "#",
    emoji: "🎓",
    color: "#1a1a2e"
  },
  {
    id: 2,
    title: "AgriSmart Mobile",
    category: "mobile",
    desc: "Application mobile Flutter d'aide aux agriculteurs avec IA pour la détection de maladies des plantes par photo.",
    tech: ["Flutter", "Python", "TensorFlow", "Firebase"],
    demo: "#",
    emoji: "🌿",
    color: "#0a1628"
  },
  {
    id: 3,
    title: "HealthDash Analytics",
    category: "data",
    desc: "Dashboard analytique de données de santé publique avec visualisations interactives et prédictions ML.",
    tech: ["Python", "D3.js", "FastAPI", "PostgreSQL"],
    demo: "#",
    emoji: "❤️",
    color: "#1a0a0a"
  },
  {
    id: 4,
    title: "FinTrack Pro",
    category: "web",
    desc: "Application de gestion financière personnelle avec prévisions budgétaires et conseils IA personnalisés.",
    tech: ["Vue.js", "Express", "MySQL", "Chart.js"],
    demo: "#",
    emoji: "💰",
    color: "#0a1a0a"
  },
  {
    id: 5,
    title: "SecureVault",
    category: "web",
    desc: "Gestionnaire de mots de passe chiffré avec authentification biométrique et partage sécurisé en équipe.",
    tech: ["React", "Node.js", "AES-256", "WebAuthn"],
    demo: "#",
    emoji: "🔐",
    color: "#1a1a0a"
  },
  {
    id: 6,
    title: "StyleAI",
    category: "design",
    desc: "Application de recommandation vestimentaire basée sur l'IA avec génération de tenues personnalisées.",
    tech: ["Flutter", "Python", "TensorFlow", "Figma"],
    demo: "#",
    emoji: "✨",
    color: "#1a0a1a"
  }
];

/* ══════════════════════════════════════
   2. ÉTAT DE L'APP
══════════════════════════════════════ */
let state = {
  students: [],
  projects: [],
  theme: 'day',
  adminUnlocked: false,
  filter: 'all'
};

/* ══════════════════════════════════════
   3. LOCALSTORAGE
══════════════════════════════════════ */
function loadData() {
  const saved = localStorage.getItem('sfe_data');
  if (saved) {
    const parsed = JSON.parse(saved);
    state.students = parsed.students || DEFAULT_STUDENTS;
    state.projects = parsed.projects || DEFAULT_PROJECTS;
  } else {
    state.students = [...DEFAULT_STUDENTS];
    state.projects = [...DEFAULT_PROJECTS];
  }
  const savedTheme = localStorage.getItem('sfe_theme');
  if (savedTheme) state.theme = savedTheme;
}

function saveData() {
  localStorage.setItem('sfe_data', JSON.stringify({
    students: state.students,
    projects: state.projects
  }));
}

/* ══════════════════════════════════════
   4. LOADER
══════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    startRevealObserver();
    animateStats();
  }, 1800);
});

/* ══════════════════════════════════════
   5. CURSEUR
══════════════════════════════════════ */
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');

if (window.matchMedia('(pointer: fine)').matches) {
  let ringX = 0, ringY = 0;
  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  (function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  })();
}

/* ══════════════════════════════════════
   6. PARTICULES DORÉES
══════════════════════════════════════ */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = -Math.random() * 0.6 - 0.2;
      this.opacity = Math.random() * 0.6 + 0.1;
      this.life = 1;
      this.decay = Math.random() * 0.003 + 0.001;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life -= this.decay;
      if (this.life <= 0 || this.y < -10) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.life * this.opacity;
      ctx.fillStyle = '#C9A84C';
      ctx.shadowBlur = 6;
      ctx.shadowColor = '#C9A84C';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }

  animate();
})();

/* ══════════════════════════════════════
   7. NAVBAR
══════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ══════════════════════════════════════
   8. THEME TOGGLE
══════════════════════════════════════ */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  themeToggle.querySelector('.theme-icon').textContent = theme === 'day' ? '☽' : '☀';
  localStorage.setItem('sfe_theme', theme);
  // Redraw radar on theme change
  drawRadar();
}

themeToggle.addEventListener('click', () => {
  state.theme = state.theme === 'day' ? 'night' : 'day';
  applyTheme(state.theme);
});

/* ══════════════════════════════════════
   9. REVEAL SCROLL OBSERVER
══════════════════════════════════════ */
function startRevealObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Skills observer
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(fill => {
          const pct = fill.dataset.pct;
          fill.style.width = pct + '%';
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const skillsSection = document.querySelector('.skills-bars');
  if (skillsSection) skillObserver.observe(skillsSection);
}

/* ══════════════════════════════════════
   10. ANIMATE STATS COUNTER
══════════════════════════════════════ */
function animateStats() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    let count = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      count = Math.min(count + increment, target);
      el.textContent = Math.floor(count);
      if (count >= target) clearInterval(timer);
    }, 40);
  });
}

/* ══════════════════════════════════════
   11. CARD 3D HOVER EFFECT
══════════════════════════════════════ */
function add3DEffect(card) {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = (y - cy) / cy * -8;
    const rotY = (x - cx) / cx * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;

    // Glow position
    const glow = card.querySelector('.card-glow');
    if (glow) {
      glow.style.setProperty('--mx', (x / rect.width * 100) + '%');
      glow.style.setProperty('--my', (y / rect.height * 100) + '%');
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
}

/* ══════════════════════════════════════
   12. RENDER STUDENTS
══════════════════════════════════════ */
function renderStudents(filter = 'all') {
  const grid = document.getElementById('studentsGrid');
  const filtered = filter === 'all' ? state.students : state.students.filter(s => s.category === filter);

  grid.innerHTML = '';

  filtered.forEach((student, i) => {
    const card = document.createElement('div');
    card.className = 'student-card reveal';
    card.style.animationDelay = (i * 0.1) + 's';

    const initials = student.initials || student.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase();

    card.innerHTML = `
      <div class="card-glow"></div>
      <div class="card-badge">${student.level}</div>
      <div class="card-avatar">${student.avatar ? `<img src="${student.avatar}" alt="${student.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : initials}</div>
      <div class="card-name">${student.name}</div>
      <div class="card-field">${student.field}</div>
      <div class="card-level">${student.category.toUpperCase()}</div>
      <div class="card-bio">${student.bio}</div>
      <div class="card-skills">
        ${student.skills.slice(0,5).map(s => `<span class="skill-badge">${s}</span>`).join('')}
      </div>
      <div class="card-actions">
        <button class="card-btn card-btn-cv" onclick="openCVModal(${student.id})">📄 Voir CV</button>
        <a class="card-btn card-btn-proj" href="${student.projects || '#'}" target="_blank">🚀 Projets</a>
      </div>
      <div class="card-socials">
        ${student.github ? `<a class="social-link" href="${student.github}" target="_blank">GitHub</a>` : ''}
        ${student.linkedin ? `<a class="social-link" href="${student.linkedin}" target="_blank">LinkedIn</a>` : ''}
      </div>
    `;

    grid.appendChild(card);
    add3DEffect(card);

    // Trigger reveal
    setTimeout(() => card.classList.add('visible'), i * 100 + 100);
  });

  // Update stats
  document.querySelectorAll('.stat-num').forEach(el => {
    if (el.dataset.target === '12') el.dataset.target = state.students.length;
  });
}

/* ══════════════════════════════════════
   13. FILTER BUTTONS
══════════════════════════════════════ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.filter = btn.dataset.filter;
    renderStudents(state.filter);
  });
});

/* ══════════════════════════════════════
   14. RENDER PROJECTS
══════════════════════════════════════ */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  state.projects.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';

    card.innerHTML = `
      <div class="project-img" style="background:${proj.color || 'var(--bg3)'}">
        <div class="project-img-overlay"></div>
        <div class="project-img-emoji">${proj.emoji || '🚀'}</div>
      </div>
      <div class="project-body">
        <div class="project-cat">${proj.category || 'WEB'}</div>
        <div class="project-title">${proj.title}</div>
        <div class="project-desc">${proj.desc}</div>
        <div class="project-techs">
          ${(proj.tech || []).map(t => `<span class="tech-badge">${t}</span>`).join('')}
        </div>
        <a class="btn-gold" href="${proj.demo || '#'}" target="_blank" style="display:inline-flex;font-size:0.6rem;padding:10px 22px;">
          <span>Voir la démo</span>
          <div class="btn-shine"></div>
        </a>
      </div>
    `;

    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), i * 120 + 100);
  });
}

/* ══════════════════════════════════════
   15. SKILLS CLOUD
══════════════════════════════════════ */
const SKILLS_LIST = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "Python", level: 82 },
  { name: "React", level: 70 },
  { name: "Flutter", level: 75 },
  { name: "SQL", level: 85 },
  { name: "Node.js", level: 68 },
  { name: "Figma", level: 79 },
  { name: "Git", level: 92 },
  { name: "Docker", level: 65 },
  { name: "Machine Learning", level: 60 },
  { name: "UI/UX", level: 79 },
  { name: "TypeScript", level: 72 },
  { name: "MongoDB", level: 70 },
];

function renderSkillsCloud() {
  const cloud = document.getElementById('skillsCloud');
  cloud.innerHTML = '';
  SKILLS_LIST.forEach(skill => {
    const badge = document.createElement('div');
    badge.className = 'cloud-badge';
    const size = 0.75 + (skill.level / 100) * 0.4;
    badge.style.fontSize = size + 'rem';
    badge.textContent = skill.name;
    cloud.appendChild(badge);
  });
}

/* ══════════════════════════════════════
   16. RADAR CHART
══════════════════════════════════════ */
function drawRadar() {
  const canvas = document.getElementById('radarChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  const r = Math.min(W, H) / 2 - 40;

  const isDark = html.getAttribute('data-theme') === 'day';
  const textColor = isDark ? 'rgba(240,237,230,0.8)' : 'rgba(26,23,18,0.8)';
  const gridColor = isDark ? 'rgba(201,168,76,0.15)' : 'rgba(154,114,40,0.15)';

  ctx.clearRect(0, 0, W, H);

  const labels = ["JS", "Python", "UI/UX", "SQL", "Flutter", "HTML"];
  const values = [0.88, 0.82, 0.79, 0.85, 0.75, 0.95];
  const n = labels.length;

  // Draw grid rings
  for (let ring = 1; ring <= 5; ring++) {
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const x = cx + (r * ring / 5) * Math.cos(angle);
      const y = cy + (r * ring / 5) * Math.sin(angle);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw axes
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
    ctx.strokeStyle = gridColor;
    ctx.stroke();
  }

  // Draw data polygon
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const x = cx + r * values[i] * Math.cos(angle);
    const y = cy + r * values[i] * Math.sin(angle);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(201,168,76,0.2)';
  ctx.fill();
  ctx.strokeStyle = '#C9A84C';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw points
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const x = cx + r * values[i] * Math.cos(angle);
    const y = cy + r * values[i] * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#C9A84C';
    ctx.fill();
    ctx.strokeStyle = '#F0D080';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // Labels
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const x = cx + (r + 28) * Math.cos(angle);
    const y = cy + (r + 28) * Math.sin(angle);
    ctx.font = '600 12px "DM Sans", sans-serif';
    ctx.fillStyle = '#C9A84C';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(labels[i], x, y);
  }
}

/* ══════════════════════════════════════
   17. CV MODAL
══════════════════════════════════════ */
function openCVModal(id) {
  const student = state.students.find(s => s.id === id);
  if (!student) return;

  const modal = document.getElementById('cvModal');
  const content = document.getElementById('modalContent');
  const initials = student.initials || student.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase();

  content.innerHTML = `
    <div class="modal-avatar">${student.avatar ? `<img src="${student.avatar}" alt="${student.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : initials}</div>
    <div class="modal-name">${student.name}</div>
    <div class="modal-field">${student.field}</div>
    <div class="modal-level">${student.level} — ${student.category.toUpperCase()}</div>
    <div class="modal-bio">${student.bio}</div>
    <div class="modal-section-label">Compétences Techniques</div>
    <div class="modal-skills">
      ${student.skills.map(s => `<span class="skill-badge" style="border-color:rgba(201,168,76,0.3);color:var(--text);">${s}</span>`).join('')}
    </div>
    <div class="modal-actions">
      <a class="btn-gold" href="${student.cv || '#'}" target="_blank">
        <span>📄 Télécharger CV</span>
        <div class="btn-shine"></div>
      </a>
      <a class="btn-outline" href="${student.projects || '#'}" target="_blank">🚀 Voir Projets</a>
    </div>
    <div class="modal-socials">
      ${student.github ? `<a class="social-link" href="${student.github}" target="_blank">⌥ GitHub</a>` : ''}
      ${student.linkedin ? `<a class="social-link" href="${student.linkedin}" target="_blank">in LinkedIn</a>` : ''}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', closeModal);

function closeModal() {
  document.getElementById('cvModal').classList.remove('active');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════
   18. ADMIN PANEL
══════════════════════════════════════ */
const ADMIN_PASSWORD = 'elite2025';

// Secret trigger: footer dot
document.getElementById('footerSecret').addEventListener('click', openAdmin);

// Keyboard shortcut: Ctrl + Shift + A
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.shiftKey && e.key === 'A') {
    e.preventDefault();
    openAdmin();
  }
});

function openAdmin() {
  const panel = document.getElementById('adminPanel');
  panel.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (!state.adminUnlocked) {
    document.getElementById('adminLogin').classList.remove('hidden');
    document.getElementById('adminDashboard').classList.add('hidden');
  } else {
    document.getElementById('adminLogin').classList.add('hidden');
    document.getElementById('adminDashboard').classList.remove('hidden');
    renderAdminStudentList();
  }
}

function closeAdmin() {
  document.getElementById('adminPanel').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('adminClose').addEventListener('click', closeAdmin);
document.getElementById('adminOverlay').addEventListener('click', closeAdmin);

window.checkAdminPass = function () {
  const pass = document.getElementById('adminPass').value;
  if (pass === ADMIN_PASSWORD) {
    state.adminUnlocked = true;
    document.getElementById('adminLogin').classList.add('hidden');
    document.getElementById('adminDashboard').classList.remove('hidden');
    renderAdminStudentList();
    showToast('✅ Accès accordé — Bienvenue Admin !');
  } else {
    showToast('❌ Mot de passe incorrect');
    document.getElementById('adminPass').style.borderColor = '#e74c3c';
    setTimeout(() => document.getElementById('adminPass').style.borderColor = '', 1500);
  }
};

// Enter to submit password
document.getElementById('adminPass').addEventListener('keydown', e => {
  if (e.key === 'Enter') window.checkAdminPass();
});

// Admin tabs
document.querySelectorAll('.admin-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(c => {
      c.classList.remove('active');
      c.classList.add('hidden');
    });
    tab.classList.add('active');
    const target = document.getElementById('tab-' + tab.dataset.tab);
    if (target) {
      target.classList.add('active');
      target.classList.remove('hidden');
    }
    if (tab.dataset.tab === 'manageStudents') renderAdminStudentList();
  });
});

/* ── ADD STUDENT ── */
window.addStudent = function () {
  const name = document.getElementById('s-name').value.trim();
  const field = document.getElementById('s-field').value.trim();
  const level = document.getElementById('s-level').value;
  const category = document.getElementById('s-category').value;
  const skills = document.getElementById('s-skills').value.split(',').map(s => s.trim()).filter(Boolean);
  const github = document.getElementById('s-github').value.trim();
  const linkedin = document.getElementById('s-linkedin').value.trim();
  const cv = document.getElementById('s-cv').value.trim();
  const projects = document.getElementById('s-projects').value.trim();
  const bio = document.getElementById('s-bio').value.trim();
  const avatar = document.getElementById('s-avatar').value.trim();

  if (!name || !field || !level || !category) {
    showToast('⚠️ Remplissez les champs obligatoires');
    return;
  }

  const student = {
    id: Date.now(),
    name, field, level, category, skills, github, linkedin, cv, projects, bio, avatar,
    initials: name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  };

  state.students.push(student);
  saveData();
  renderStudents(state.filter);
  showToast(`✅ ${name} ajouté(e) avec succès !`);

  // Reset form
  ['s-name','s-field','s-skills','s-github','s-linkedin','s-cv','s-projects','s-bio','s-avatar'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('s-level').value = '';
  document.getElementById('s-category').value = '';
};

/* ── MANAGE STUDENTS ── */
function renderAdminStudentList() {
  const list = document.getElementById('adminStudentList');
  list.innerHTML = '';
  if (state.students.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:20px;">Aucun étudiant.</p>';
    return;
  }
  state.students.forEach(student => {
    const item = document.createElement('div');
    item.className = 'admin-student-item';
    item.innerHTML = `
      <div class="card-avatar" style="width:40px;height:40px;font-size:0.9rem;">${student.initials || '?'}</div>
      <div class="admin-student-name">${student.name}<br><small style="color:var(--text-muted)">${student.field} — ${student.level}</small></div>
      <button class="admin-del-btn" onclick="deleteStudent(${student.id})">Supprimer</button>
    `;
    list.appendChild(item);
  });
}

window.deleteStudent = function (id) {
  const student = state.students.find(s => s.id === id);
  if (!student) return;
  if (!confirm(`Supprimer ${student.name} ?`)) return;
  state.students = state.students.filter(s => s.id !== id);
  saveData();
  renderStudents(state.filter);
  renderAdminStudentList();
  showToast(`🗑 ${student.name} supprimé(e)`);
};

/* ── ADD PROJECT ── */
window.addProject = function () {
  const title = document.getElementById('p-title').value.trim();
  const tech = document.getElementById('p-tech').value.split(',').map(t => t.trim()).filter(Boolean);
  const demo = document.getElementById('p-demo').value.trim();
  const img = document.getElementById('p-img').value.trim();
  const desc = document.getElementById('p-desc').value.trim();
  const category = document.getElementById('p-category').value;

  if (!title || !desc) {
    showToast('⚠️ Titre et description requis');
    return;
  }

  const emojis = { web: '🌐', mobile: '📱', data: '📊', design: '🎨' };

  const project = {
    id: Date.now(),
    title, tech, demo, img, desc, category,
    emoji: emojis[category] || '🚀',
    color: '#0f0f0f'
  };

  state.projects.push(project);
  saveData();
  renderProjects();
  showToast(`✅ Projet "${title}" ajouté !`);

  ['p-title','p-tech','p-demo','p-img','p-desc'].forEach(id => {
    document.getElementById(id).value = '';
  });
};

/* ── EXPORT / RESET ── */
window.exportData = function () {
  const data = JSON.stringify({ students: state.students, projects: state.projects }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'studentflow_data.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('💾 Données exportées !');
};

window.resetData = function () {
  if (!confirm('⚠️ Réinitialiser TOUTES les données ? Cette action est irréversible.')) return;
  localStorage.removeItem('sfe_data');
  state.students = [...DEFAULT_STUDENTS];
  state.projects = [...DEFAULT_PROJECTS];
  saveData();
  renderStudents(state.filter);
  renderProjects();
  renderAdminStudentList();
  showToast('🔄 Données réinitialisées');
};

/* ══════════════════════════════════════
   19. TOAST NOTIFICATION
══════════════════════════════════════ */
let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ══════════════════════════════════════
   20. SMOOTH SCROLL ACTIVE NAV
══════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinksAll.forEach(link => {
    link.classList.toggle('active-nav', link.getAttribute('href') === '#' + current);
  });
});

/* ══════════════════════════════════════
   21. INIT
══════════════════════════════════════ */
(function init() {
  loadData();
  applyTheme(state.theme);
  renderStudents();
  renderProjects();
  renderSkillsCloud();

  // Radar chart after small delay
  setTimeout(() => {
    drawRadar();

    // Animate radar on scroll
    const radarObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          drawRadar();
          radarObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const radarEl = document.getElementById('radarChart');
    if (radarEl) radarObserver.observe(radarEl);
  }, 500);
})();

/* ══════════════════════════════════════
   22. EASTER EGG KONAMI CODE
══════════════════════════════════════ */
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIdx = 0;

document.addEventListener('keydown', e => {
  if (e.key === KONAMI[konamiIdx]) {
    konamiIdx++;
    if (konamiIdx === KONAMI.length) {
      konamiIdx = 0;
      showToast('🌟 KONAMI CODE — Admin déverrouillé !');
      openAdmin();
    }
  } else {
    konamiIdx = 0;
  }
});

/* ═══════════════════════════════════════════════
   OPTIMISATIONS MOBILE SUPPLÉMENTAIRES
═══════════════════════════════════════════════ */

/* ── 1. Theme color de la barre navigateur ── */
function updateThemeColor(theme) {
  const meta = document.getElementById('metaThemeColor');
  if (meta) meta.setAttribute('content', theme === 'day' ? '#080808' : '#f8f6f1');
}

// Patch le themeToggle existant
const _origApplyTheme = applyTheme;
// On surcharge en réappliquant après
document.getElementById('themeToggle').addEventListener('click', () => {
  updateThemeColor(state.theme);
});
updateThemeColor(state.theme);

/* ── 2. Swipe horizontal sur les cartes (mobile) ── */
(function initSwipeFilter() {
  const filterBar = document.querySelector('.filter-bar');
  if (!filterBar) return;
  let startX = 0;
  filterBar.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  filterBar.addEventListener('touchmove', e => {
    const diff = startX - e.touches[0].clientX;
    filterBar.scrollLeft += diff * 0.5;
    startX = e.touches[0].clientX;
  }, { passive: true });
})();

/* ── 3. Modal : fermeture par swipe bas (mobile) ── */
(function initModalSwipe() {
  const modalBox = document.getElementById('modalBox');
  if (!modalBox) return;
  let startY = 0;
  modalBox.addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive: true });
  modalBox.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientY - startY;
    if (diff > 80) closeModal(); // swipe vers le bas ferme
  }, { passive: true });
})();

/* ── 4. Désactiver effet 3D sur mobile ── */
(function patchMobile3D() {
  if (window.matchMedia('(hover: none)').matches) {
    // Réécrit add3DEffect pour ne rien faire sur mobile
    window.add3DEffect = function(card) {
      // Touch feedback léger
      card.addEventListener('touchstart', () => {
        card.style.opacity = '0.85';
        card.style.transition = 'opacity 0.1s';
      }, { passive: true });
      card.addEventListener('touchend', () => {
        card.style.opacity = '1';
      }, { passive: true });
    };
  }
})();

/* ── 5. Lazy loading des cartes (performance mobile) ── */
(function initLazyCards() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.student-card, .project-card').forEach(card => {
    observer.observe(card);
  });
})();

/* ── 6. Vibration haptic sur boutons (Android) ── */
document.querySelectorAll('.btn-gold, .card-btn-cv').forEach(btn => {
  btn.addEventListener('touchstart', () => {
    if (navigator.vibrate) navigator.vibrate(10);
  }, { passive: true });
});

/* ── 7. Fix hauteur 100vh sur iOS (Safari) ── */
(function fixIOSHeight() {
  function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', () => setTimeout(setVH, 300));
})();

/* ── 8. Empêcher zoom double-tap iOS ── */
let lastTouchEnd = 0;
document.addEventListener('touchend', e => {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) e.preventDefault();
  lastTouchEnd = now;
}, { passive: false });

/* ── 9. Fermeture menu mobile en cliquant hors ── */
document.addEventListener('touchstart', e => {
  const nav = document.getElementById('navLinks');
  const burger = document.getElementById('hamburger');
  if (nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove('open');
    burger.classList.remove('open');
  }
}, { passive: true });

/* ── 10. Orientation change : re-render ── */
window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    drawRadar();
    renderStudents(state.filter);
  }, 400);
});

