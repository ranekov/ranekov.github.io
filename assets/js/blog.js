const C = {
  ja: {
    linkNav: '相互リンク',
    pageLabel: '// ブログ',
    pageTitle: 'すべての投稿',
    empty: 'まだ投稿はありません',
    loading: '読み込み中...',
    loadingMore: '読み込み中...',
    searchPlaceholder: '検索...',
    noResults: '該当する投稿がありません',
  },
  en: {
    linkNav: 'Links',
    pageLabel: '// Blog',
    pageTitle: 'All posts',
    empty: 'No posts yet',
    loading: 'Loading...',
    loadingMore: 'Loading...',
    searchPlaceholder: 'Search...',
    noResults: 'No matching posts',
  },
  ru: {
    linkNav: 'Ссылки',
    pageLabel: '// Блог',
    pageTitle: 'Все посты',
    empty: 'Пока нет постов',
    loading: 'Загрузка...',
    loadingMore: 'Загрузка...',
    searchPlaceholder: 'Поиск...',
    noResults: 'Совпадений не найдено',
  }
};

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

function setLang(lang) {
  const d = C[lang];
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.title = d.pageTitle + ' — Ranekov';
  document.getElementById('link-nav-btn').textContent = d.linkNav;
  document.getElementById('page-label').textContent = d.pageLabel;
  document.getElementById('page-title').textContent = d.pageTitle;
  document.getElementById('search-input').placeholder = d.searchPlaceholder;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.toLowerCase() === lang);
  });
  renderCurrentPosts(true);
}

const PAGE_SIZE = 100;
let blogPostsCache = null;
let filteredPosts = [];
let renderedCount = 0;
let isLoadingMore = false;
let searchQuery = '';

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

function getFilteredPosts() {
  if (!searchQuery) return blogPostsCache || [];
  const q = searchQuery.toLowerCase();
  return (blogPostsCache || []).filter(p => p.name.toLowerCase().includes(q));
}



function renderCurrentPosts(reset) {
  const listEl = document.getElementById('blog-list');
  const loadingMoreEl = document.getElementById('blog-loading-more');
  const d = C[currentLang];

  if (reset) {
    filteredPosts = getFilteredPosts();
    renderedCount = 0;
    listEl.innerHTML = '';
  }

  if (!filteredPosts.length) {
    listEl.innerHTML = '<div class="blog-empty">' + (searchQuery ? d.noResults : d.empty) + '</div>';
    loadingMoreEl.style.display = 'none';
    return;
  }

  const nextSlice = filteredPosts.slice(renderedCount, renderedCount + PAGE_SIZE);
  const html = nextSlice.map(p =>
    '<a class="blog-item" href="' + p.url + '"><span class="blog-item-title">' + p.name + '</span></a>'
  ).join('');
  listEl.insertAdjacentHTML('beforeend', html);
  renderedCount += nextSlice.length;

  loadingMoreEl.style.display = renderedCount < filteredPosts.length ? 'block' : 'none';
}

function maybeLoadMore() {
  if (isLoadingMore) return;
  if (renderedCount >= filteredPosts.length) return;
  const scrollBottom = window.innerHeight + window.scrollY;
  const threshold = document.body.offsetHeight - 300;
  if (scrollBottom < threshold) return;

  isLoadingMore = true;
  const loadingMoreEl = document.getElementById('blog-loading-more');
  loadingMoreEl.textContent = C[currentLang].loadingMore;
  loadingMoreEl.style.display = 'block';

  setTimeout(() => {
    renderCurrentPosts(false);
    isLoadingMore = false;
  }, 150);
}

async function renderAllBlogPosts() {
  const listEl = document.getElementById('blog-list');
  const d = C[currentLang];
  listEl.innerHTML = '<div class="blog-empty">' + d.loading + '</div>';
  if (!blogPostsCache) {
    blogPostsCache = await fetchAllBlogPosts();
  }
  renderCurrentPosts(true);
}

document.getElementById('search-input').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderCurrentPosts(true);
});

window.addEventListener('scroll', maybeLoadMore);

setLang(detectInitialLang());
renderAllBlogPosts();

document.getElementById('footer-year').textContent = '© ' + new Date().getFullYear() + ' Ranekov';

(function() {
  const nav = document.querySelector('nav');
  function adjustNavOffset() {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  }
  adjustNavOffset();
  window.addEventListener('resize', adjustNavOffset);
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
