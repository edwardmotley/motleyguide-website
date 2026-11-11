(() => {
  const dialog = document.getElementById('human-check');
  const form = document.getElementById('human-form');
  const input = document.getElementById('human-answer');
  const question = document.getElementById('human-question');
  const error = document.getElementById('check-error');
  if (!dialog || !form || !input || !question || !error) return;

  let expected = 0;
  document.querySelectorAll('.email-contact').forEach(button => {
    button.addEventListener('click', () => {
      const first = Math.floor(Math.random() * 8) + 2;
      const second = Math.floor(Math.random() * 8) + 1;
      expected = first + second;
      question.textContent = `What is ${first} + ${second}?`;
      input.value = '';
      error.textContent = '';
      dialog.showModal();
      input.focus();
    });
  });

  document.getElementById('check-cancel')?.addEventListener('click', () => dialog.close());
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (Number(input.value.trim()) !== expected) {
      error.textContent = 'That answer did not match. Please try again.';
      input.select();
      return;
    }
    dialog.close();
    const email = 'edward.motley' + '@' + 'themotleyguide.com';
    window.location.href = `mailto:${email}?subject=Travel%20planning%20inquiry`;
  });
})();
