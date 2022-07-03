let nav = document.querySelectorAll('main header nav ul li');
let lists = document.querySelectorAll('main header nav ul li list')

nav.forEach(e => e.addEventListener('click', () => {lists.forEach(j => j.classList.remove('actvie')); e.classList.toggle('active') }))

let menu = document.getElementById('menu');
menu.addEventListener('click', () => {
  menu.classList.toggle('close');
  let nav = document.querySelector('main header nav');
  nav.classList.toggle('active');
  document.querySelector('.overloay').classList.toggle('active')
})