const C = {
  ja: {
    pageLabel: '// リンク',
    pageTitle: '相互リンク',
    linkDesc: '相互リンクしているサイトの一覧です。ぜひ覗いてみてください。',
    empty: 'まだリンクはありません',
    blog: 'ブログ',
  },
  en: {
    pageLabel: '// Links',
    pageTitle: 'Link Exchange',
    linkDesc: 'Sites I exchange links with. Take a look at the friends of this site.',
    empty: 'No links yet',
    blog: 'Blog',
  },
  ru: {
    pageLabel: '// Ссылки',
    pageTitle: 'Обмен ссылками',
    linkDesc: 'Сайты, с которыми я обмениваюсь ссылками. Загляните к друзьям этого сайта.',
    empty: 'Пока нет ссылок',
    blog: 'Блог',
  }
};

function detectInitialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved && C[saved]) return saved;
  } catch (e) {}
  const langs = navigator.languages || [navigator.language || 'en'];
  for (const l of langs) {
    const code = l.slice(0, 2).toLowerCase();
    if (C[code]) return code;
  }
  return 'en';
}

function setLang(lang) {
  const d = C[lang];
  try { localStorage.setItem('lang', lang); } catch (e) {}
  document.documentElement.lang = lang;
  document.title = d.pageTitle + ' — Ranekov';
  document.getElementById('page-label').textContent = d.pageLabel;
  document.getElementById('page-title').textContent = d.pageTitle;
  document.getElementById('link-desc').textContent = d.linkDesc;
  document.getElementById('blog-nav-btn').textContent = d.blog;
  const emptyEl = document.getElementById('link-empty');
  if (emptyEl) emptyEl.textContent = d.empty;
  document.querySelectorAll('.link-card').forEach(card => {
    const note = card.dataset[lang] || card.dataset.en || card.dataset.ja || card.dataset.ru || '';
    const noteEl = card.querySelector('.link-note');
    noteEl.textContent = note;
    noteEl.hidden = !note;
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.toLowerCase() === lang);
  });
}

document.querySelectorAll('.link-icon img').forEach(img => {
  const drop = () => img.remove();
  img.addEventListener('error', drop);
  if (img.complete && img.naturalWidth === 0) drop();
});

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
