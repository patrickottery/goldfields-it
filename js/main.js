// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links  = document.getElementById('nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
}

// Footer year
document.querySelectorAll('#yr').forEach(el => el.textContent = new Date().getFullYear());

// Services filter
const filterBtns = document.querySelectorAll('[data-filter]');
if (filterBtns.length) {
  const blocks = document.querySelectorAll('.services-block');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.filter;
      blocks.forEach(block => {
        block.style.display = (target === 'all' || block.id === target) ? '' : 'none';
      });
    });
  });
}
