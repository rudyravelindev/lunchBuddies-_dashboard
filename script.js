document.addEventListener('DOMContentLoaded', () => {
  // Make navigation items interactive
  const navItems = document.querySelectorAll('nav li');
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navItems.forEach((i) => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Make project action buttons interactive
  const starButtons = document.querySelectorAll(
    '.project-actions .icon:nth-child(1)'
  );
  starButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      button.textContent = button.textContent === '★' ? '☆' : '★';
    });
  });

  // Add hover effect to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    card.addEventListener('click', () => {
      console.log(`Opening project: ${card.querySelector('h4').textContent}`);
    });
  });
});
