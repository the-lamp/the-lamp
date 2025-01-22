const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Add dark theme styles
const darkThemeStyles = document.createElement('style');
darkThemeStyles.innerHTML = `
  .dark-theme {
    --primary-color: #333;
    --secondary-color: #222;
    --text-color: #fff;
  }
`;
document.head.appendChild(darkThemeStyles);
