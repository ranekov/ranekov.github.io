const C = {
  ja: {
    pageLabel: '// リンク',
    pageTitle: '相互リンク',
    linkDesc: '相互リンクしているサイトの一覧です。ぜひ覗いてみてください。',
    empty: 'まだリンクはありません',
    blog: 'ブログ',
    modalLabel: '// 外部リンク',
    modalTitle: '外部サイトへ移動します',
    modalDesc: 'ここから先は外部のサイトです。移動先の内容や安全性について当サイトは責任を負いかねますが、移動しますか？',
    modalCancel: 'キャンセル',
    modalConfirm: '移動する →',
  },
  en: {
    pageLabel: '// Links',
    pageTitle: 'Link Exchange',
    linkDesc: 'Sites I exchange links with. Take a look at the friends of this site.',
    empty: 'No links yet',
    blog: 'Blog',
    modalLabel: '// External Link',
    modalTitle: "Leaving Ranekov's Website",
    modalDesc: 'You are about to visit an external website. I am not responsible for the content or safety of external sites. Do you want to continue?',
    modalCancel: 'Cancel',
    modalConfirm: 'Continue →',
  },
  ru: {
    pageLabel: '// Ссылки',
    pageTitle: 'Обмен ссылками',
    linkDesc: 'Сайты, с которыми я обмениваюсь ссылками. Загляните к друзьям этого сайта.',
    empty: 'Пока нет ссылок',
    blog: 'Блог',
    modalLabel: '// Внешняя ссылка',
    modalTitle: 'Переход на внешний сайт',
    modalDesc: 'Вы переходите на сторонний сайт. Я не несу ответственности за содержание и безопасность внешних ресурсов. Продолжить?',
    modalCancel: 'Отмена',
    modalConfirm: 'Перейти →',
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
  document.getElementById('modal-label').textContent = d.modalLabel;
  document.getElementById('modal-title').textContent = d.modalTitle;
  document.getElementById('modal-desc').textContent = d.modalDesc;
  document.getElementById('modal-cancel').textContent = d.modalCancel;
  document.getElementById('modal-confirm').textContent = d.modalConfirm;
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

const leaveModal = document.getElementById('leave-modal');
const modalTargetName = document.getElementById('modal-target-name');
const modalTargetUrl = document.getElementById('modal-target-url');
const modalCancel = document.getElementById('modal-cancel');
const modalConfirm = document.getElementById('modal-confirm');

function openLeaveModal(name, url) {
  modalTargetName.textContent = name;
  modalTargetUrl.textContent = url;
  modalConfirm.href = url;
  leaveModal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalCancel.focus();
}

function closeLeaveModal() {
  leaveModal.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('.link-card').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const nameEl = card.querySelector('.link-name');
    const name = nameEl ? nameEl.textContent : '';
    openLeaveModal(name, card.href);
  });
});

modalCancel.addEventListener('click', closeLeaveModal);
modalConfirm.addEventListener('click', closeLeaveModal);
leaveModal.addEventListener('click', (e) => {
  if (e.target === leaveModal) closeLeaveModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !leaveModal.hidden) closeLeaveModal();
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
  window.addEventListener('load', updateProgress);
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
