const PAGE_LANG = "en";
const SUPPORTED_LANGS = ['en', 'ja', 'ru'];

const C = {
  ja: {
    blog: 'ブログ',
    link: '相互リンク',
    errorTitle: 'ページが見つかりません',
    errorDesc: 'お探しのページは存在しないか、移動された可能性があります。',
    errorHome: 'ホームに戻る',
  },
  en: {
    blog: 'Blog',
    link: 'Links',
    errorTitle: 'Page not found',
    errorDesc: "The page you're looking for doesn't exist or has been moved.",
    errorHome: 'Back to home',
  },
  ru: {
    blog: 'Блог',
    link: 'Ссылки',
    errorTitle: 'Страница не найдена',
    errorDesc: 'Страница, которую вы ищете, не существует или была перемещена.',
    errorHome: 'На главную',
  }
};

function detectInitialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (e) {}

  const browserLangs = (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || ''];
  for (const bl of browserLangs) {
    if (!bl) continue;
    const code = bl.toLowerCase().split('-')[0];
    if (SUPPORTED_LANGS.includes(code)) return code;
  }

  const pageCode = (PAGE_LANG || 'en').toLowerCase().split('-')[0];
  if (SUPPORTED_LANGS.includes(pageCode)) return pageCode;

  return 'en';
}

let currentLang = detectInitialLang();

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  applyLang();
}

function applyLang() {
  const d = C[currentLang];
  document.documentElement.lang = currentLang;
  document.getElementById('blog-btn').textContent = d.blog;
  document.getElementById('link-btn').textContent = d.link;
  document.getElementById('error-title').textContent = d.errorTitle;
  document.getElementById('error-desc').textContent = d.errorDesc;
  document.getElementById('error-home-btn').textContent = d.errorHome;

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.id === 'lang-btn-' + currentLang);
  });
}

applyLang();

document.getElementById('footer-year').textContent = '© ' + new Date().getFullYear() + ' Ranekov';

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
