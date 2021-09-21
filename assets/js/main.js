const showMenu = (toggleId, navId) => {

  const toggle = document.getElementById(toggleId);
  const nav = document.getElementsByClassName(navId)[0];

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle("show");
    })
  }
}

showMenu("menu-toggle", "nav__menu");

