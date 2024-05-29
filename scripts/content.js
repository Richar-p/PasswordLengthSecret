document.querySelectorAll('input[type="password"]').forEach(input => {
  input.style.color = window.getComputedStyle(input).backgroundColor;
})
