const C = {
  ja: {
    sub: '// ようこそ、Ranekovのウェブサイトへ',
    badgeFrom: '日本出身', badgeLang: 'ロシア語学習中',
    desc: '日本出身のコンピューターサイエンス学生。ハッキング、マルウェア解析、コンピューターウイルスに情熱を注ぐ。ロシア語を独学中で、ロシア技術コミュニティと繋がりたい。',
    cta1: '$ explore', cta2: 'git clone', cta2Copied: 'copied ✓', tStatus: '    学生',
    s1label: '// 01 — 興味', s1title: '何が好きか',
    c1t:'ハッキング', c1d:'倫理的ハッキング、ペネトレーションテスト、CTF。システムの穴を探るのが楽しい。',
    c2t:'コンピューターウイルス', c2d:'ウイルス・ワーム・ランサムウェアの仕組みを研究。逆アセンブリ解析が専門。',
    c3t:'AIモデル研究', c3d:'機械学習モデルの仕組みとセキュリティへの応用を研究している。',
    c4t:'ロシア語・文化', c4d:'キリル文字、スラブ文化、ロシアの技術コミュニティに魅了されている。',
    s2label: '// 02 — スキル', s2title: '技術スタック',
    cat1:'🌐 Web', cat2:'🔗 ネットワーク', cat3:'🕵️ 匿名化・サイバーセキュリティ', cat4:'🤖 AIモデル研究',
    langLabel:'🗣️ 言語', lvlJa:'ネイティブ', lvlRu:'学習中', lvlEn:'初級',
    blogNav: 'ブログ', linkNav: '相互リンク',
    slinklabel: '// 04 — リンク', slinktitle: '相互リンク', linkDesc: '相互リンクしているサイトの一覧です。ぜひ覗いてみてください。', linkViewAll: 'リンク一覧を見る →',
    sblabel: '// 03 — ブログ', sbtitle: '最新の投稿', blogEmpty: 'まだ投稿はありません', blogViewAll: 'すべての投稿を見る →',
    s3label: '// 05 — コンタクト', s3title: '連絡先',
  },
  en: {
    sub: '// Welcome to Ranekov\'s Website',
    badgeFrom: 'From Japan', badgeLang: 'Learning Russian',
    desc: 'Computer science student from Japan. Passionate about hacking, malware analysis, and computer viruses. Self-studying Russian to connect with the Russian tech community.',
    cta1: '$ explore', cta2: 'git clone', cta2Copied: 'copied ✓', tStatus: '    Student',
    s1label: '// 01 — Interests', s1title: 'What I love',
    c1t:'Hacking', c1d:'Ethical hacking, penetration testing, CTF competitions. Love finding vulnerabilities.',
    c2t:'Computer Viruses', c2d:'Studying viruses, worms and ransomware. Specializing in reverse engineering.',
    c3t:'AI Research', c3d:'Researching machine learning models and their applications in cybersecurity.',
    c4t:'Russian Language & Culture', c4d:'Fascinated by Cyrillic, Slavic culture, and the Russian hacker community.',
    s2label: '// 02 — Skills', s2title: 'Tech Stack',
    cat1:'🌐 Web', cat2:'🔗 Network', cat3:'🕵️ Anonymity & Cybersecurity', cat4:'🤖 AI Research',
    langLabel:'🗣️ Languages', lvlJa:'Native', lvlRu:'Learning', lvlEn:'Beginner',
    blogNav: 'Blog', linkNav: 'Links',
    slinklabel: '// 04 — Links', slinktitle: 'Link Exchange', linkDesc: 'Sites I exchange links with. Take a look at the friends of this site.', linkViewAll: 'View links →',
    sblabel: '// 03 — Blog', sbtitle: 'Latest posts', blogEmpty: 'No posts yet', blogViewAll: 'View all posts →',
    s3label: '// 05 — Contact', s3title: 'Get in touch',
  },
  ru: {
    sub: '// Добро пожаловать на сайт Ranekov',
    badgeFrom: 'Из Японии', badgeLang: 'Учу русский язык',
    desc: 'Студент из Японии, изучающий компьютерные науки. Увлечён хакингом, анализом вредоносных программ и вирусами. Самостоятельно учу русский, хочу познакомиться с русским тех-сообществом.',
    cta1: '$ исследовать', cta2: 'git clone', cta2Copied: 'скопировано ✓', tStatus: '    Студент',
    s1label: '// 01 — Интересы', s1title: 'Что мне нравится',
    c1t:'Хакинг', c1d:'Этичный хакинг, пентестинг, CTF-соревнования. Люблю находить уязвимости.',
    c2t:'Компьютерные вирусы', c2d:'Изучаю вирусы, черви и программы-вымогатели. Специализируюсь на реверс-инжиниринге.',
    c3t:'Исследование ИИ', c3d:'Изучаю модели машинного обучения и их применение в кибербезопасности.',
    c4t:'Русский язык и культура', c4d:'Восхищён кириллицей, славянской культурой и русским хакер-сообществом.',
    s2label: '// 02 — Навыки', s2title: 'Технологии',
    cat1:'🌐 Web', cat2:'🔗 Сеть', cat3:'🕵️ Анонимизация и кибербезопасность', cat4:'🤖 Исследование ИИ',
    langLabel:'🗣️ Языки', lvlJa:'Родной', lvlRu:'Учу', lvlEn:'Начинающий',
    blogNav: 'Блог', linkNav: 'Ссылки',
    slinklabel: '// 04 — Ссылки', slinktitle: 'Обмен ссылками', linkDesc: 'Сайты, с которыми я обмениваюсь ссылками. Загляните к друзьям этого сайта.', linkViewAll: 'Смотреть ссылки →',
    sblabel: '// 03 — Блог', sbtitle: 'Последние посты', blogEmpty: 'Пока нет постов', blogViewAll: 'Смотреть все посты →',
    s3label: '// 05 — Контакт', s3title: 'Связаться',
  }
};

function setLang(lang) {
  const d = C[lang];
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  scrambleTitle(d.sub);
  scrambleText(document.getElementById('hero-sub'), d.sub);
  document.getElementById('badge-from').textContent = d.badgeFrom;
  document.getElementById('badge-lang').textContent = d.badgeLang;
  document.querySelector('.hero-desc').textContent = d.desc;
  document.getElementById('cta1').textContent = d.cta1;
  document.getElementById('cta2').textContent = d.cta2;
  const tStatusEl = document.getElementById('t-status');
  if (tStatusEl) tStatusEl.textContent = d.tStatus;
  document.getElementById('sec1-label').textContent = d.s1label;
  document.getElementById('sec1-title').textContent = d.s1title;
  document.getElementById('c1-title').textContent = d.c1t;
  document.getElementById('c1-title').nextElementSibling.textContent = d.c1d;
  document.getElementById('c2-title').textContent = d.c2t;
  document.getElementById('c2-title').nextElementSibling.textContent = d.c2d;
  document.getElementById('c3-title').textContent = d.c3t;
  document.getElementById('c3-title').nextElementSibling.textContent = d.c3d;
  document.getElementById('c4-title').textContent = d.c4t;
  document.getElementById('c4-title').nextElementSibling.textContent = d.c4d;
  document.getElementById('sec2-label').textContent = d.s2label;
  document.getElementById('sec2-title').textContent = d.s2title;
  document.getElementById('cat1').textContent = d.cat1;
  document.getElementById('cat2').textContent = d.cat2;
  document.getElementById('cat3').textContent = d.cat3;
  document.getElementById('cat4').textContent = d.cat4;
  document.getElementById('lang-label').textContent = d.langLabel;
  document.getElementById('lvl-ja').textContent = d.lvlJa;
  document.getElementById('lvl-ru').textContent = d.lvlRu;
  document.getElementById('lvl-en').textContent = d.lvlEn;
  document.getElementById('sec3-label').textContent = d.s3label;
  document.getElementById('sec3-title').textContent = d.s3title;
  document.getElementById('blog-nav-btn').textContent = d.blogNav;
  document.getElementById('link-nav-btn').textContent = d.linkNav;
  document.getElementById('seclink-label').textContent = d.slinklabel;
  document.getElementById('seclink-title').textContent = d.slinktitle;
  document.getElementById('link-desc').textContent = d.linkDesc;
  document.getElementById('link-view-all').textContent = d.linkViewAll;
  document.getElementById('secblog-label').textContent = d.sblabel;
  document.getElementById('secblog-title').textContent = d.sbtitle;
  document.getElementById('blog-view-all').textContent = d.blogViewAll;
  currentLang = lang;
  const blogEmptyEl = document.getElementById('blog-empty');
  if (blogEmptyEl) blogEmptyEl.textContent = d.blogEmpty;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.toLowerCase() === lang);
  });
}

let currentLang = 'en';
let titleScrambleTimer = null;
const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const SCRAMBLE_CHARS = '0123456789ABCDEFabcdef#$%&*+/<>[]{}АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩ';

function scrambleTitle(finalText) {
  if (titleScrambleTimer) {
    clearInterval(titleScrambleTimer);
    titleScrambleTimer = null;
  }
  if (reducedMotion) {
    document.title = finalText;
    return;
  }
  const len = finalText.length;
  const start = performance.now();
  const duration = Math.min(540, Math.max(300, len * 16));
  titleScrambleTimer = setInterval(() => {
    const progress = Math.min(1, (performance.now() - start) / duration);
    const revealed = Math.floor(progress * len);
    let out = '';
    for (let i = 0; i < len; i++) {
      if (i < revealed || finalText[i] === ' ') {
        out += finalText[i];
      } else {
        out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
    }
    document.title = out;
    if (progress >= 1) {
      document.title = finalText;
      clearInterval(titleScrambleTimer);
      titleScrambleTimer = null;
    }
  }, 45);
}

function scrambleText(el, finalText) {
  if (!el) return;
  if (el._scrambleId) cancelAnimationFrame(el._scrambleId);
  if (reducedMotion) {
    el.textContent = finalText;
    return;
  }
  const len = finalText.length;
  const start = performance.now();
  const duration = Math.min(480, Math.max(240, len * 14));
  function frame(now) {
    const progress = Math.min(1, (now - start) / duration);
    const revealed = Math.floor(progress * len);
    let out = '';
    for (let i = 0; i < len; i++) {
      if (i < revealed || finalText[i] === ' ') {
        out += finalText[i];
      } else {
        out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
    }
    el.textContent = out;
    if (progress < 1) {
      el._scrambleId = requestAnimationFrame(frame);
    } else {
      el.textContent = finalText;
      el._scrambleId = null;
    }
  }
  el._scrambleId = requestAnimationFrame(frame);
}

function detectInitialLang() {
  const saved = localStorage.getItem('lang');
  if (saved && C[saved]) return saved;
  const langs = navigator.languages || [navigator.language || 'en'];
  for (const l of langs) {
    const code = l.slice(0, 2).toLowerCase();
    if (C[code]) return code;
  }
  return 'en';
}

setLang(detectInitialLang());
scrambleText(document.querySelector('.hero-name'), 'Ranekov');

(function() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
    bar.style.width = pct + '%';
  }
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
})();

(function() {
  const sections = document.querySelectorAll('section');
  if (!('IntersectionObserver' in window) || reducedMotion) {
    sections.forEach(s => s.classList.add('is-visible'));
    return;
  }
  sections.forEach(s => s.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  sections.forEach(s => io.observe(s));
})();

document.querySelectorAll('.card, .skill-panel, .contact-card').forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
    el.style.setProperty('--my', (e.clientY - rect.top) + 'px');
  });
});

(function() {
  const termBody = document.getElementById('term-body');
  const termOutput = document.getElementById('term-output');
  const termForm = document.getElementById('term-form');
  const termInput = document.getElementById('term-input');
  if (!termBody || !termOutput || !termForm || !termInput) return;

  const history = [];
  let histIdx = -1;

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, ch => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
  }

  function appendLine(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    termOutput.appendChild(div);
    termBody.scrollTop = termBody.scrollHeight;
  }

  function runCommand(raw) {
    const cmd = raw.trim();
    if (!cmd) return;
    history.unshift(cmd);
    if (history.length > 30) history.pop();
    histIdx = -1;

    appendLine('<span class="tg">ranekov</span><span class="td">@</span><span class="tr">ubuntu</span><span class="td">:~$ </span><span class="tw">' + escapeHtml(cmd) + '</span>');

    const lower = cmd.toLowerCase();
    if (lower === 'clear') {
      termOutput.innerHTML = '';
      return;
    }
    if (lower === 'help') {
      appendLine('<span class="tb">Available commands:</span>');
      appendLine('  <span class="tg">whoami</span>           show identity');
      appendLine('  <span class="tg">neofetch</span>         system info');
      appendLine('  <span class="tg">skills</span>           jump to tech stack');
      appendLine('  <span class="tg">ls blog</span>          list latest posts');
      appendLine('  <span class="tg">links</span>            open link exchange');
      appendLine('  <span class="tg">uname -a</span>         kernel signature');
      appendLine('  <span class="tg">clear</span>            clear screen');
      return;
    }
    if (lower === 'whoami') {
      appendLine('<span class="tw">ranekov</span> <span class="td">— CS student / malware analysis / RU learner</span>');
      return;
    }
    if (lower === 'uname -a' || lower === 'uname') {
      appendLine('<span class="tw">Linux ranekov 6.12.0-kali-amd64 #1 SMP x86_64 GNU/Linux</span>');
      return;
    }
    if (lower === 'date') {
      appendLine('<span class="tw">' + escapeHtml(new Date().toUTCString()) + '</span>');
      return;
    }
    if (lower === 'neofetch') {
      appendLine('<span class="tg">  ____  </span>  <span class="tg">ranekov</span><span class="td">@</span><span class="tr">ubuntu</span>');
      appendLine('<span class="tg"> |  _ \\ </span>  <span class="td">───────────────────</span>');
      appendLine('<span class="tg"> | |_) |</span>  <span class="ty">OS</span>:     Ubuntu / Kali Linux');
      appendLine('<span class="tg"> |  _ &lt; </span>  <span class="ty">LANG</span>:   JA · RU · EN');
      appendLine('<span class="tg"> |_| \\_\\</span>  <span class="ty">STACK</span>:  PHP · Rust · C · Bash');
      appendLine('<span class="tg">        </span>  <span class="ty">FOCUS</span>:  RE · Sec · AI');
      return;
    }
    if (lower === 'skills') {
      appendLine('<span class="tg">→ scrolling to #skills...</span>');
      const el = document.getElementById('skills');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (lower === 'links') {
      appendLine('<span class="tb">→ opening /link ...</span>');
      window.location.href = '/link';
      return;
    }
    if (lower === 'ls' || lower === 'ls blog') {
      const items = Array.from(document.querySelectorAll('#blog-list .blog-item'));
      if (!items.length) {
        appendLine('<span class="td">(no posts)</span>');
        return;
      }
      items.forEach(a => {
        const t = a.querySelector('.blog-item-title');
        const d = a.querySelector('.blog-item-date');
        const href = a.getAttribute('href') || '#';
        appendLine('<span class="td">' + escapeHtml(d ? d.textContent : '----') + '</span>  <a class="term-link" href="' + escapeHtml(href) + '">' + escapeHtml(t ? t.textContent : '') + '</a>');
      });
      return;
    }
    if (lower === 'sudo' || lower.startsWith('sudo ')) {
      appendLine('<span class="tr">ranekov is not in the sudoers file. This incident will be reported.</span>');
      return;
    }
    if (lower === 'cat profile.json') {
      appendLine('<span class="ty">NAME</span>: Ranekov | <span class="ty">ORIGIN</span>: Japan | <span class="ty">LEARNING</span>: Русский');
      return;
    }
    appendLine('<span class="tr">bash: ' + escapeHtml(cmd.split(/\s+/)[0]) + ': command not found</span> <span class="td">(try \'help\')</span>');
  }

  termForm.addEventListener('submit', (e) => {
    e.preventDefault();
    runCommand(termInput.value);
    termInput.value = '';
  });

  termBody.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    if (window.getSelection && window.getSelection().toString()) return;
    termInput.focus();
  });

  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      if (histIdx + 1 < history.length) {
        e.preventDefault();
        histIdx++;
        termInput.value = history[histIdx];
      }
    } else if (e.key === 'ArrowDown') {
      if (histIdx > 0) {
        e.preventDefault();
        histIdx--;
        termInput.value = history[histIdx];
      } else if (histIdx === 0) {
        e.preventDefault();
        histIdx = -1;
        termInput.value = '';
      }
    }
  });

  document.querySelectorAll('.term-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      runCommand(chip.dataset.cmd || '');
      termInput.focus();
    });
  });
})();

document.getElementById('cta1').addEventListener('click', () => {
  const target = document.getElementById('interests');
  if (target) target.scrollIntoView({ behavior: 'smooth' });
});

let cloneResetTimer = null;
document.getElementById('cta2').addEventListener('click', async () => {
  const btn = document.getElementById('cta2');
  const cmd = 'git clone https://github.com/ranekov/ranekov.github.io.git';
  try {
    await navigator.clipboard.writeText(cmd);
  } catch (e) {
    window.open('https://github.com/ranekov/ranekov.github.io', '_blank', 'noopener,noreferrer');
    return;
  }
  btn.textContent = C[currentLang].cta2Copied;
  clearTimeout(cloneResetTimer);
  cloneResetTimer = setTimeout(() => {
    btn.textContent = C[currentLang].cta2;
  }, 1800);
});

document.getElementById('footer-year').textContent = '© ' + new Date().getFullYear() + ' Ranekov';

(function() {
  const nav = document.querySelector('nav');
  function adjustNavOffset() {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  }
  adjustNavOffset();
  window.addEventListener('resize', adjustNavOffset);
  window.addEventListener('load', adjustNavOffset);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(adjustNavOffset);
})();

fetch('https://api.github.com/repos/ranekov/ranekov.github.io/commits/main')
  .then(res => res.ok ? res.json() : null)
  .then(data => {
    const el = document.getElementById('footer-commit');
    if (data && data.sha) {
      el.textContent = data.sha.slice(0, 7);
    } else {
      el.textContent = 'unknown';
    }
  })
  .catch(() => {
    document.getElementById('footer-commit').textContent = 'unknown';
  });
