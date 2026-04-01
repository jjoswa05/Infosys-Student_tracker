// ═══════════════════════════════════════════════════════
//  CompanyConnect – St. Joseph's College of Engineering
//  Shared Data Layer (localStorage)
// ═══════════════════════════════════════════════════════

const DB = {
  get: (key) => JSON.parse(localStorage.getItem(key) || 'null'),
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
  getArr: (key) => JSON.parse(localStorage.getItem(key) || '[]'),
  push: (key, item) => {
    const arr = DB.getArr(key);
    arr.push(item);
    DB.set(key, arr);
    return arr;
  }
};

// ── SEED DEFAULT DATA ──────────────────────────────────
function seedData() {
  // Seed programs
  if (!DB.get('programs') || DB.getArr('programs').length === 0) {
    DB.set('programs', [
      { id:'P1', name:'Infosys Springboard Student Enablement Program', type:'Training',
        desc:'Skill-based learning program designed to build technical and professional skills.',
        start:'2026-01-01', end:'2026-03-31', eligibility:'All Students', duration:'4 Weeks' },
      { id:'P2', name:'Infosys Virtual Internship', type:'Internship',
        desc:'Real-world virtual internship experience with live projects and mentorship.',
        start:'2026-02-01', end:'2026-04-30', eligibility:'3rd & 4th Year Students', duration:'8 Weeks' },
      { id:'P3', name:'Infosys Python Certification', type:'Certification',
        desc:'Python programming certification covering core concepts and applications.',
        start:'2026-01-15', end:'2026-02-15', eligibility:'All Students', duration:'2 Weeks' },
      { id:'P4', name:'Infosys Soft Skills Workshop', type:'Workshop',
        desc:'Communication, leadership, and aptitude skills development workshop.',
        start:'2026-03-01', end:'2026-03-15', eligibility:'All Students', duration:'2 Weeks' },
    ]);
  }

  // Seed admin account
  if (!DB.get('admins')) {
    DB.set('admins', [
      { email: 'admin@stjosephs.ac.in', pass: 'admin123', name: 'Placement Coordinator', role: 'coordinator' },
      { email: 'faculty@stjosephs.ac.in', pass: 'faculty123', name: 'Department Faculty', role: 'faculty' }
    ]);
  }

  // Seed demo students + participations
  if (DB.getArr('users').length === 0) {
    const demoStudents = [
      { email:'chandru.s@stjosephs.ac.in', pass:'pass123', name:'CHANDRU S', reg:'312323205041', dept:'CSE', year:'2022-26', section:'A', phone:'6384781788', gender:'Male', college:'St. Joseph\'s College of Engineering', domain:'Full Stack Web Development', cgpa:'8.04', arrears:'0', courses:'3', certs:'1', accommodation:'Dayscholar', native:'Chennai', bus:'Thiruporur', plan:'HOPE', role:'student' },
      { email:'naveen.k@stjosephs.ac.in', pass:'pass123', name:'NAVEEN RAJ K', reg:'312324247068', dept:'IT', year:'2023-27', section:'B', phone:'7904145281', gender:'Male', college:'St. Joseph\'s College of Engineering', domain:'AIML', cgpa:'8.04', arrears:'0', courses:'1', certs:'1', accommodation:'Dayscholar', native:'Chennai', bus:'Thiruporur', plan:'PEP', role:'student' },
      { email:'priya.s@stjosephs.ac.in', pass:'pass123', name:'PRIYA S', reg:'312323205082', dept:'IT', year:'2022-26', section:'A', phone:'9876543210', gender:'Female', college:'St. Joseph\'s College of Engineering', domain:'Data Science Analytics', cgpa:'8.9', arrears:'0', courses:'4', certs:'2', accommodation:'Hosteller', native:'Chennai', bus:'NA', plan:'PEP', role:'student' },
      { email:'arun.k@stjosephs.ac.in', pass:'pass123', name:'ARUN K', reg:'312323215033', dept:'ECE', year:'2022-26', section:'A', phone:'8765432109', gender:'Male', college:'St. Joseph\'s Institute of Technology', domain:'Cloud/DevOps', cgpa:'7.5', arrears:'1', courses:'2', certs:'1', accommodation:'Dayscholar', native:'Chennai', bus:'Perungudi', plan:'HOPE', role:'student' },
    ];
    DB.set('users', demoStudents);
  }

  if (DB.getArr('participation').length === 0) {
    DB.set('participation', [
      { id:'SUB001', studentEmail:'chandru.s@stjosephs.ac.in', name:'CHANDRU S', dept:'CSE', year:'2022-26', program:'Infosys Virtual Internship', programType:'Internship', regId:'INF2026CSE041', enrollDate:'2026-02-10', status:'Completed', startDate:'2026-02-10', endDate:'2026-03-20', project:'Student Placement Portal', feedback:'Excellent experience with real-world exposure.', certLink:'https://springboard.infosys.com/cert/001', remarks:'', verification:'Verified', submittedOn:'2026-03-21' },
      { id:'SUB002', studentEmail:'priya.s@stjosephs.ac.in', name:'PRIYA S', dept:'IT', year:'2022-26', program:'Infosys Springboard Student Enablement Program', programType:'Training', regId:'INF2026IT082', enrollDate:'2026-01-15', status:'Doing', startDate:'2026-01-15', endDate:'', project:'', feedback:'', certLink:'', remarks:'', verification:'Under Review', submittedOn:'2026-02-01' },
      { id:'SUB003', studentEmail:'arun.k@stjosephs.ac.in', name:'ARUN K', dept:'ECE', year:'2022-26', program:'Infosys Python Certification', programType:'Certification', regId:'INF2026ECE033', enrollDate:'2026-01-20', status:'Completed', startDate:'2026-01-20', endDate:'2026-02-18', project:'', feedback:'Very helpful for Python skills.', certLink:'https://springboard.infosys.com/cert/003', remarks:'', verification:'Verified', submittedOn:'2026-02-20' },
    ]);
  }

  if (DB.getArr('proofs').length === 0) {
    DB.set('proofs', [
      { id:'PRF001', studentEmail:'chandru.s@stjosephs.ac.in', name:'CHANDRU S', dept:'CSE', program:'Infosys Virtual Internship', proofType:'Internship Certificate', fileName:'chandru_certificate.pdf', fileType:'application/pdf', status:'Verified', remark:'', uploadedDate:'2026-03-21' },
      { id:'PRF002', studentEmail:'priya.s@stjosephs.ac.in', name:'PRIYA S', dept:'IT', program:'Infosys Springboard Student Enablement Program', proofType:'Registration Screenshot', fileName:'priya_screenshot.jpg', fileType:'image/jpeg', status:'Under Review', remark:'', uploadedDate:'2026-02-01' },
      { id:'PRF003', studentEmail:'arun.k@stjosephs.ac.in', name:'ARUN K', dept:'ECE', program:'Infosys Python Certification', proofType:'Course Completion Certificate', fileName:'arun_python_cert.pdf', fileType:'application/pdf', status:'Verified', remark:'', uploadedDate:'2026-02-20' },
    ]);
  }
}

// ── AUTH HELPERS ──────────────────────────────────────
function getCurrentUser() { return DB.get('currentUser'); }
function getCurrentAdmin() { return DB.get('currentAdmin'); }
function requireStudent() {
  const u = getCurrentUser();
  if (!u) { window.location.href = 'login.html'; return null; }
  return u;
}
function requireAdmin() {
  const a = getCurrentAdmin();
  if (!a) { window.location.href = 'admin-login.html'; return null; }
  return a;
}

// ── STATS CALCULATOR ──────────────────────────────────
function getStats() {
  const users = DB.getArr('users');
  const parts = DB.getArr('participation');
  const proofs = DB.getArr('proofs');
  return {
    totalStudents: users.length,
    enrolled: parts.length,
    completed: parts.filter(p => p.status === 'Completed').length,
    verified: proofs.filter(p => p.status === 'Verified').length,
  };
}

// ── FORMAT HELPERS ────────────────────────────────────
function formatDate(d) {
  if (!d) return '—';
  const dt = new Date(d);
  return dt.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
}

function badgeHTML(status) {
  const map = {
    'Submitted':    'badge-submitted',
    'Under Review': 'badge-review',
    'Verified':     'badge-verified',
    'Completed':    'badge-completed',
    'Rejected':     'badge-rejected',
    'Need Re-upload': 'badge-reupload',
    'Doing':        'badge-review',
    'Not Started':  'badge-submitted',
  };
  return `<span class="badge ${map[status] || 'badge-submitted'}">${status}</span>`;
}

function typeBadge(type) {
  const map = {
    'Training': 'badge-training',
    'Internship': 'badge-internship',
    'Certification': 'badge-certification',
    'Workshop': 'badge-workshop',
  };
  return `<span class="badge ${map[type] || ''}">${type}</span>`;
}

function showAlert(containerId, msg, type = 'success') {
  const icons = { success:'✅', error:'❌', info:'ℹ️', warning:'⚠️' };
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `<div class="alert alert-${type}">${icons[type]} ${msg}</div>`;
  setTimeout(() => { el.innerHTML = ''; }, 4000);
}

function genId(prefix) {
  return prefix + Date.now().toString(36).toUpperCase();
}

// ── NAV BUILDER ───────────────────────────────────────
function buildStudentNav(active) {
  const nav = [
    { href: 'dashboard.html', icon: '📊', label: 'Dashboard' },
    { href: 'profile.html', icon: '👤', label: 'My Profile' },
    { href: 'programs.html', icon: '📚', label: 'Programs' },
    { href: 'participation.html', icon: '📝', label: 'Submit Participation' },
    { href: 'upload.html', icon: '📎', label: 'Upload Proof' },
    { href: 'status.html', icon: '🔍', label: 'Track Status' },
  ];
  return nav.map(n => `<a href="${n.href}" class="${active===n.href?'active':''}" ><span class="icon">${n.icon}</span>${n.label}</a>`).join('');
}

function buildAdminNav(active) {
  const nav = [
    { href: 'admin-dashboard.html', icon: '📊', label: 'Dashboard' },
    { href: 'admin-students.html', icon: '👥', label: 'Students' },
    { href: 'admin-programs.html', icon: '📚', label: 'Programs' },
    { href: 'admin-verify.html', icon: '✅', label: 'Verify Proofs' },
    { href: 'admin-search.html', icon: '🔍', label: 'Search & Filter' },
    { href: 'admin-reports.html', icon: '📄', label: 'Reports' },
  ];
  return nav.map(n => `<a href="${n.href}" class="${active===n.href?'active':''}"><span class="icon">${n.icon}</span>${n.label}</a>`).join('');
}

// Run seed on every page
seedData();