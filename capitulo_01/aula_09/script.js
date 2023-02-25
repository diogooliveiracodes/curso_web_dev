let name = 'Pedro Henrique';
const btn = document.getElementById('btn');

if (btn) {
  btn.addEventListener('click', () => {
    alert(`Hello, ${name}!`);
  });
}
