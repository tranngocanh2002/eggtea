// Shared header + footer injection. Each page sets <body data-page="..."> to mark active nav.
(function () {
  const NAV = [
    { key: 'home', label: 'Trang chủ', href: 'index.html' },
    { key: 'menu', label: 'Thực đơn', href: 'thuc-don.html' },
    { key: 'story', label: 'Về chúng tôi', href: 'cau-chuyen.html' },
    { key: 'promo', label: 'Khuyến mãi', href: 'khuyen-mai.html' },
    { key: 'stores', label: 'Cửa hàng', href: 'cua-hang.html' }
  ];

  function buildHeader(active) {
    const links = NAV.map(item => {
      const isActive = item.key === active;
      const cls = isActive
        ? 'font-body-lg text-body-lg text-primary font-bold border-b-2 border-primary'
        : 'font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors';
      return `<a class="${cls}" href="${item.href}">${item.label}</a>`;
    }).join('');

    const mobileLinks = NAV.map(item => {
      const isActive = item.key === active;
      const cls = isActive
        ? 'block px-4 py-3 rounded-xl bg-primary-container/40 text-primary font-bold'
        : 'block px-4 py-3 rounded-xl text-on-surface hover:bg-surface-container-low transition-colors';
      return `<a class="${cls}" href="${item.href}">${item.label}</a>`;
    }).join('');

    return `
      <header class="bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm sticky top-0 z-50">
        <div class="flex justify-between items-center px-gutter py-3 md:py-4 max-w-7xl mx-auto gap-2">
          <a class="font-headline-lg text-xl sm:text-2xl md:text-headline-lg font-black tracking-tight text-primary" href="index.html">EGG TEA</a>
          <nav class="hidden md:flex gap-md items-center">${links}</nav>
          <div class="flex items-center gap-2">
            <div class="hidden md:flex items-center gap-2">
              <a href="tel:0888836556" class="inline-flex items-center gap-2 bg-surface text-primary border-2 border-primary hover:bg-primary-container/30 hover:shadow-md font-bold px-4 py-2 rounded-full transition-all text-sm whitespace-nowrap">
                <span class="material-symbols-outlined text-[18px]" style="font-variation-settings:'FILL' 1;">call</span>
                <span>0888 836 556</span>
                <span class="text-[11px] font-medium opacity-70">(Chính)</span>
              </a>
              <a href="tel:0886565638" class="inline-flex items-center gap-2 bg-surface text-primary border-2 border-primary/50 hover:border-primary hover:bg-primary-container/30 font-bold px-4 py-2 rounded-full transition-all text-sm whitespace-nowrap">
                <span class="material-symbols-outlined text-[18px]">call</span>
                <span>0886 565 638</span>
                <span class="text-[11px] font-medium opacity-70"></span>
              </a>
            </div>
            <button id="mobile-menu-toggle" type="button" aria-label="Mở menu" aria-expanded="false" class="md:hidden w-10 h-10 rounded-full hover:bg-surface-container-low transition-colors flex items-center justify-center text-on-surface shrink-0">
              <span class="material-symbols-outlined" id="mobile-menu-icon">menu</span>
            </button>
          </div>
        </div>
        <div id="mobile-menu-panel" class="md:hidden hidden border-t border-outline-variant/30 bg-surface">
          <nav class="px-gutter py-3 flex flex-col gap-1">
            ${mobileLinks}
          </nav>
        </div>
      </header>`;
  }

  function buildFooter() {
    return `
      <footer class="bg-surface-container dark:bg-surface-dim rounded-t-xl mt-lg">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-md px-gutter py-lg max-w-7xl mx-auto">
          <div class="space-y-md">
            <div class="font-headline-md text-headline-md text-primary">EGG TEA</div>
            <p class="font-body-md text-body-md text-on-surface-variant">Mang hương vị trà sữa Việt vươn tầm quốc tế. Tận hưởng sự tươi mát từ nguyên liệu 100% tự nhiên mỗi ngày.</p>
            <div class="flex gap-sm pt-2">
              <a href="https://www.facebook.com/profile.php?id=61550794163893" target="_blank" class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-all">
                <svg xmlns="http://w3.org" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@eegteavietnam?is_from_webapp=1&sender_device=pc" target="_blank" class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-all">
                <svg xmlns="http://w3.org" width="18" height="18" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5 class="font-bold text-on-surface mb-sm">Khám phá</h5>
            <ul class="space-y-sm font-body-md text-body-md text-on-surface-variant">
              ${NAV.map(i => `<li><a class="hover:text-primary transition-colors" href="${i.href}">${i.label}</a></li>`).join('')}
            </ul>
          </div>
          <div>
            <h5 class="font-bold text-on-surface mb-sm">Liên hệ đặt hàng</h5>
            <ul class="space-y-sm font-body-md text-body-md text-on-surface-variant">
              <li class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[18px]">call</span>
                <a class="hover:text-primary transition-colors font-bold text-on-surface" href="tel:0888836556">0888 836 556</a>
                <span class="text-xs text-on-surface-variant">(Số chính)</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[18px]">call</span>
                <a class="hover:text-primary transition-colors" href="tel:0886565638">0886 565 638</a>
                <span class="text-xs text-on-surface-variant"></span>
              </li>
              <li class="flex items-center gap-2 pt-1">
                <span class="material-symbols-outlined text-primary text-[18px]">schedule</span>
                <span>Mở cửa 08:00 — 22:30 hằng ngày</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 class="font-bold text-on-surface mb-sm">Hệ thống cửa hàng</h5>
            <ul class="space-y-sm font-body-md text-body-md text-on-surface-variant">
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">location_on</span>
                <div>
                  <p class="font-bold text-on-surface">Egg Tea — Hùng Vương</p>
                  <p>152 Hùng Vương, P.Nam Định</p>
                  <p class="text-sm">Mở 08:00 — 22:30</p>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">location_on</span>
                <div>
                  <p class="font-bold text-on-surface">Egg Tea — Trần Hưng Đạo</p>
                  <p>173 Trần Hưng Đạo, P.Nam Định</p>
                  <p class="text-sm">Mở 08:00 — 22:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-outline-variant/20 py-md text-center">
          <p class="font-body-md text-body-md text-on-surface-variant">© 2026 Egg Tea Vietnam. Handcrafted Freshness Daily.</p>
        </div>
      </footer>`;
  }

  function buildMobileFab() {
    return `
      <div id="mobile-fab" class="md:hidden fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-2 pointer-events-none">
        <div id="mobile-fab-card" class="hidden flex-col gap-1 bg-white rounded-2xl shadow-2xl border border-outline-variant/40 p-2 w-[230px] pointer-events-auto origin-bottom-right">
          <div class="px-2 pt-1 pb-2 flex items-center justify-between">
            <span class="font-bold text-on-surface text-sm">Liên hệ đặt hàng</span>
            <button type="button" id="mobile-fab-close" aria-label="Đóng" class="w-7 h-7 rounded-full hover:bg-surface-container-low flex items-center justify-center text-on-surface-variant">
              <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          <a href="tel:0888836556" class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary-container text-on-primary-container font-bold active:scale-95 transition-transform">
            <span class="material-symbols-outlined text-[22px]" style="font-variation-settings:'FILL' 1;">call</span>
            <div class="flex-1 leading-tight">
              <div>0888 836 556</div>
              <div class="text-[11px] font-normal opacity-70">Số chính</div>
            </div>
            <span class="material-symbols-outlined text-[18px] opacity-60">arrow_forward</span>
          </a>
          <a href="tel:0886565638" class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-outline-variant text-on-surface font-medium active:scale-95 transition-transform">
            <span class="material-symbols-outlined text-[22px] text-primary" style="font-variation-settings:'FILL' 1;">call</span>
            <div class="flex-1 leading-tight">
              <div>0886 565 638</div>
            </div>
            <span class="material-symbols-outlined text-[18px] opacity-60">arrow_forward</span>
          </a>
        </div>
        <button id="mobile-fab-btn" type="button" aria-label="Liên hệ" aria-expanded="false" class="pointer-events-auto relative fab-bob w-14 h-14 rounded-full bg-primary text-on-primary shadow-2xl flex items-center justify-center active:scale-95 transition-all ring-4 ring-primary/20">
          <span class="fab-pulse"></span>
          <span id="mobile-fab-icon" class="fab-ring-icon material-symbols-outlined text-[26px]" style="font-variation-settings:'FILL' 1;">call</span>
        </button>
      </div>`;
  }

  function inject() {
    const active = document.body.dataset.page || '';
    const headerSlot = document.getElementById('site-header');
    const footerSlot = document.getElementById('site-footer');
    if (headerSlot) headerSlot.outerHTML = buildHeader(active);
    if (footerSlot) footerSlot.outerHTML = buildFooter();
    // FAB only injected once
    if (!document.getElementById('mobile-fab')) {
      document.body.insertAdjacentHTML('beforeend', buildMobileFab());
    }
  }

  function bindSizeSelectors() {
    document.querySelectorAll('.size-selector').forEach(sel => {
      if (sel.dataset.bound) return;
      sel.dataset.bound = '1';
      const priceEl = sel.querySelector('.size-price');
      const btns = sel.querySelectorAll('.size-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.classList.contains('is-disabled')) return;
          btns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const price = btn.dataset.price;
          if (priceEl && price) {
            priceEl.textContent = parseInt(price, 10).toLocaleString('vi-VN') + 'đ';
          }
        });
      });
    });
  }

  function bindMobileMenu() {
    const btn = document.getElementById('mobile-menu-toggle');
    const panel = document.getElementById('mobile-menu-panel');
    const icon = document.getElementById('mobile-menu-icon');
    if (!btn || !panel) return;
    btn.addEventListener('click', () => {
      const isOpen = !panel.classList.contains('hidden');
      panel.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!isOpen));
      if (icon) icon.textContent = isOpen ? 'menu' : 'close';
    });
    // Close menu when crossing to md+ to avoid the panel hanging open
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => {
      if (e.matches) {
        panel.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
        if (icon) icon.textContent = 'menu';
      }
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
  }

  function bindMobileFab() {
    const btn = document.getElementById('mobile-fab-btn');
    const card = document.getElementById('mobile-fab-card');
    const icon = document.getElementById('mobile-fab-icon');
    const closeBtn = document.getElementById('mobile-fab-close');
    if (!btn || !card) return;

    function setOpen(open) {
      if (open) {
        card.classList.remove('hidden');
        card.classList.add('flex');
        btn.setAttribute('aria-expanded', 'true');
        if (icon) icon.textContent = 'close';
      } else {
        card.classList.add('hidden');
        card.classList.remove('flex');
        btn.setAttribute('aria-expanded', 'false');
        if (icon) icon.textContent = 'call';
      }
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !card.classList.contains('hidden');
      setOpen(!isOpen);
    });
    if (closeBtn) closeBtn.addEventListener('click', () => setOpen(false));
    document.addEventListener('click', (e) => {
      if (card.classList.contains('hidden')) return;
      if (e.target.closest('#mobile-fab')) return;
      setOpen(false);
    });
  }

  function init() {
    inject();
    bindSizeSelectors();
    bindMobileMenu();
    bindMobileFab();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
