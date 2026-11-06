const C = {
  ja: {
    sub: '// ようこそ、Ranekovのウェブサイトへ',
    badgeFrom: '日本出身', badgeLang: 'ロシア語学習中',
    desc: '日本出身のコンピューターサイエンス学生。ハッキング、マルウェア解析、コンピューターウイルスに情熱を注ぐ。ロシア語を独学中で、ロシア技術コミュニティと繋がりたい。',
    cta1: '$ explore', cta2: 'git clone', tStatus: '    学生',
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
    cta1: '$ explore', cta2: 'git clone', tStatus: '    Student',
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
    cta1: '$ исследовать', cta2: 'git clone', tStatus: '    Студент',
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
  document.title = d.sub;
  document.getElementById('hero-sub').textContent = d.sub;
  document.getElementById('badge-from').textContent = d.badgeFrom;
  document.getElementById('badge-lang').textContent = d.badgeLang;
  document.querySelector('.hero-desc').textContent = d.desc;
  document.getElementById('cta1').textContent = d.cta1;
  document.getElementById('cta2').textContent = d.cta2;
  document.getElementById('t-status').textContent = d.tStatus;
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
