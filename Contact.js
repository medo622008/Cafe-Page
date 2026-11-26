const form = document.getElementById('contactForm');
const status = document.getElementById('status');
const shopEmail = document.getElementById('mailText').textContent.trim();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = 'Message from ' + data.get('name');
  const body = data.get('message') + '\n\n' + data.get('name') + '\n' + data.get('email');

  window.location.href = 'mailto:' + shopEmail +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);

  status.textContent = 'Opening your email app to send the message...';
  status.hidden = false;
});