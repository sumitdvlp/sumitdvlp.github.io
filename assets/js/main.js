// ── Copy-to-clipboard for code blocks ──────────────────────
document.querySelectorAll('pre').forEach(pre => {
  const wrap = document.createElement('div');
  wrap.className = 'code-wrap';
  pre.parentNode.insertBefore(wrap, pre);
  wrap.appendChild(pre);

  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.textContent = 'Copy';
  wrap.appendChild(btn);

  btn.addEventListener('click', () => {
    const code = pre.querySelector('code')?.innerText ?? pre.innerText;
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = 'Copy'), 2000);
    });
  });
});

// ── Active nav link ─────────────────────────────────────────
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// ── Smooth reading progress bar ─────────────────────────────
if (document.querySelector('.article-body')) {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position: fixed; top: 60px; left: 0; height: 2px;
    background: #5afa8e; width: 0%; z-index: 999;
    transition: width .1s linear;
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
    bar.style.width = pct + '%';
  });
}
