const box = document.getElementById('box');
const btn = document.getElementById('toggleBtn');
const title = document.getElementById('overlayTitle');
const text = document.getElementById('overlayText');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

btn.addEventListener('click', () => {
  const isSignup = box.classList.toggle('signup');

  if (isSignup) {
    title.textContent = 'Welcome back!';
    text.textContent = 'Already have an account? Sign in to continue.';
    btn.textContent = 'Sign in';
    loginForm.setAttribute('inert', '');
    signupForm.removeAttribute('inert');
  } else {
    title.textContent = 'New here?';
    text.textContent = 'Create an account and join us for a great cup of coffee.';
    btn.textContent = 'Sign up';
    signupForm.setAttribute('inert', '');
    loginForm.removeAttribute('inert');
  }
});