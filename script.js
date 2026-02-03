/* ===============================
   薇璽生技 Weixi Biotech
   官網互動腳本（穩定・高級）
================================ */

/* 導覽列：滾動時加陰影 */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('header-shadow');
  } else {
    header.classList.remove('header-shadow');
  }
});


/* 平滑捲動（點導覽列不會硬跳） */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


/* 區塊淡入動畫（很克制，不浮誇） */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.section, .card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});


/* 保險：避免 JS 錯誤中斷 */
window.addEventListener('error', e => {
  console.warn('JS error suppressed:', e.message);
});
