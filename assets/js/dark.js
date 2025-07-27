const toggleBtn = document.getElementById('dark-mode-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change icon
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️'; // Light mode icon
  } else {
    toggleBtn.textContent = '🌙'; // Dark mode icon
  }
});
