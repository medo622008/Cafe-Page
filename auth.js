(() => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');

  const getUsers = () => JSON.parse(localStorage.getItem('users') || '[]');

  let busy = false;

  function showDone() {
    busy = true;

    const toast = document.createElement('div');
    toast.className = 'done-toast';
    toast.setAttribute('role', 'status');
    toast.innerHTML = '<span>Done</span><span class="done-check">✓</span>';
    document.body.appendChild(toast);

    setTimeout(() => document.body.classList.add('leaving'), 1100);
    setTimeout(() => { window.location.href = 'index.html'; }, 1500);
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (busy) return;

      const [name, email, password] = signupForm.querySelectorAll('input');
      const users = getUsers();
      const mail = email.value.trim().toLowerCase();

      if (users.some((u) => u.email === mail)) {
        alert('This email is already registered');
        return;
      }

      users.push({ name: name.value.trim(), email: mail, password: password.value });
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', name.value.trim());

      showDone();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (busy) return;

      const [email, password] = loginForm.querySelectorAll('input');
      const mail = email.value.trim().toLowerCase();

      const user = getUsers().find(
        (u) => u.email === mail && u.password === password.value
      );

      if (!user) {
        alert('Wrong email or password');
        return;
      }

      localStorage.setItem('currentUser', user.name);
      showDone();
    });
  }
})();