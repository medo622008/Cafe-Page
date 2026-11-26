// Order logic. The items themselves are written in Menu.html
const root = document.getElementById("menu");
root.addEventListener("click", e => {
  const b = e.target.closest(".price");
  if (!b) return;
  const on = b.getAttribute("aria-pressed") === "true";
  b.setAttribute("aria-pressed", String(!on));
  b.textContent = (on ? "" : "✓ ") + b.dataset.price + "$";
  done.hidden = true;
  renderOrder();
});

const list = document.getElementById("order-list");
const empty = document.getElementById("empty");
const totalEl = document.getElementById("total");
const confirmBtn = document.getElementById("confirm");
const done = document.getElementById("done");
const bar = document.getElementById("bar");

function picked() { return [...root.querySelectorAll('.price[aria-pressed="true"]')]; }

function renderOrder() {
  const items = picked();
  const total = items.reduce((s, b) => s + Number(b.dataset.price), 0);
  list.innerHTML = items.map(b => `<li><span>${b.dataset.name}</span><span>${b.dataset.price}$</span></li>`).join("");
  empty.hidden = items.length > 0;
  totalEl.textContent = total + "$";
  confirmBtn.disabled = items.length === 0;
  bar.hidden = items.length === 0;
  bar.textContent = items.length + (items.length === 1 ? " item" : " items") + " · " + total + "$ · Review order";
}

confirmBtn.addEventListener("click", () => {
  const items = picked();
  const total = items.reduce((s, b) => s + Number(b.dataset.price), 0);
  items.forEach(b => { b.setAttribute("aria-pressed", "false"); b.textContent = b.dataset.price + "$"; });
  renderOrder();
  done.textContent = "Order confirmed: " + items.length + (items.length === 1 ? " item, " : " items, ") + total + "$ in total. Thank you!";
  done.hidden = false;
});