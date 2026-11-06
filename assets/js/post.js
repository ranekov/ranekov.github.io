const SUPPORTED_LANGS = ['en', 'ja', 'ru'];

const C = {
  ja: {
    blog: 'ブログ',
    link: '相互リンク',
    pageLabel: '// ブログ',
    morePostsLabel: '// もっと見る',
    searchPlaceholder: '検索...',
    empty: 'まだ投稿はありません',
    noResults: '該当する投稿がありません',
    loading: '読み込み中...',
    prevLabel: '// 前へ',
    nextLabel: '// 次へ',
    prevBtn: '前へ',
    nextBtn: '次へ',
  },
  en: {
    blog: 'Blog',
    link: 'Links',
    pageLabel: '// Blog',
    morePostsLabel: '// More posts',
    searchPlaceholder: 'Search...',
    empty: 'No posts yet',
    noResults: 'No matching posts',
    loading: 'Loading...',
    prevLabel: '// Prev',
    nextLabel: '// Next',
    prevBtn: 'Prev',
    nextBtn: 'Next',
  },
  ru: {
    blog: 'Блог',
    link: 'Ссылки',
    pageLabel: '// Блог',
    morePostsLabel: '// Ещё посты',
    searchPlaceholder: 'Поиск...',
    empty: 'Пока нет постов',
    noResults: 'Совпадений не найдено',
    loading: 'Загрузка...',
    prevLabel: '// Назад',
    nextLabel: '// Далее',
    prevBtn: 'Назад',
    nextBtn: 'Далее',
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
  currentPage = 0;
  renderPosts();
}

function applyLang() {
  const d = C[currentLang];
  document.documentElement.lang = currentLang;
  document.getElementById('blog-btn').textContent = d.blog;
  document.getElementById('link-btn').textContent = d.link;
  document.getElementById('page-label').textContent = d.pageLabel;
  document.getElementById('more-posts-label').textContent = d.morePostsLabel;
  document.getElementById('search-input').placeholder = d.searchPlaceholder;

  const prevLabelEl = document.getElementById('post-nav-prev-label');
  if (prevLabelEl) prevLabelEl.textContent = d.prevLabel;
  const nextLabelEl = document.getElementById('post-nav-next-label');
  if (nextLabelEl) nextLabelEl.textContent = d.nextLabel;

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.id === 'lang-btn-' + currentLang);
  });
}

const LATEST_COUNT = 5;
const SEARCH_PAGE_SIZE = 10;
let allPosts = null;
let searchQuery = '';
let currentPage = 0;

async function fetchAllBlogPosts() {
  try {
    const res = await fetch('/search.json', { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data.map(p => ({ name: p.title, url: p.url })) : [];
  } catch (e) {
    return [];
  }
}

function renderPosts() {
  const listEl = document.getElementById('blog-list');
  const pagEl = document.getElementById('search-pagination');
  const d = C[currentLang];
  const posts = (allPosts || []).filter(p => p.url !== CURRENT_URL);

  if (!searchQuery) {
    pagEl.style.display = 'none';
    pagEl.innerHTML = '';
    const toShow = posts.slice(0, LATEST_COUNT);
    listEl.innerHTML = toShow.length
      ? toShow.map(p => '<a class="blog-item" href="' + p.url + '"><span class="blog-item-title">' + p.name + '</span></a>').join('')
      : '<div class="blog-empty">' + d.empty + '</div>';
    return;
  }

  const q = searchQuery.toLowerCase();
  const results = posts.filter(p => p.name.toLowerCase().includes(q));

  if (!results.length) {
    listEl.innerHTML = '<div class="blog-empty">' + d.noResults + '</div>';
    pagEl.style.display = 'none';
    pagEl.innerHTML = '';
    return;
  }

  const start = currentPage * SEARCH_PAGE_SIZE;
  const pageItems = results.slice(start, start + SEARCH_PAGE_SIZE);
  listEl.innerHTML = pageItems.map(p =>
    '<a class="blog-item" href="' + p.url + '"><span class="blog-item-title">' + p.name + '</span></a>'
  ).join('');

  const hasPrev = currentPage > 0;
  const hasNext = start + SEARCH_PAGE_SIZE < results.length;
  let pagHtml = '';
  if (hasPrev) pagHtml += '<button id="search-prev-btn">' + d.prevBtn + '</button>';
  if (hasNext) pagHtml += '<button id="search-next-btn">' + d.nextBtn + '</button>';
  pagEl.innerHTML = pagHtml;
  pagEl.style.display = pagHtml ? 'flex' : 'none';

  if (hasPrev) document.getElementById('search-prev-btn').addEventListener('click', () => { currentPage--; renderPosts(); });
  if (hasNext) document.getElementById('search-next-btn').addEventListener('click', () => { currentPage++; renderPosts(); });
}

async function initMorePosts() {
  const listEl = document.getElementById('blog-list');
  listEl.innerHTML = '<div class="blog-empty">' + C[currentLang].loading + '</div>';
  allPosts = await fetchAllBlogPosts();
  renderPosts();
}

document.getElementById('search-input').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  currentPage = 0;
  renderPosts();
});

applyLang();
initMorePosts();

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
