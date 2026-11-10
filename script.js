const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '打开导航');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  const message = link.dataset.topic === '产品了解'
    ? '你好 Debbie，我从你的网站看到 AmLife / DeepZleep 的分享，想了解产品详情与体验安排。'
    : '你好 Debbie，我从你的网站认识了你，想聊聊睡眠养生关怀。';
  link.href = `https://wa.me/60149318827?text=${encodeURIComponent(message)}`;
});
document.querySelector('#year').textContent = new Date().getFullYear();
