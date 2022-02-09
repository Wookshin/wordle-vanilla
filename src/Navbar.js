class Navbar {
  constructor({ target }) {
    const $nav = document.createElement('nav');
    this.$nav = $nav;
    $nav.id = 'navbar';
    $nav.innerHTML = `
    <div class="navbar__container">
    <div class="navbar__container-help"></div>
    <div class="navbar__container-title">WORDLE</div>
    <div class="navbar__container-statistics"></div>
    <div class="navbar__container-setting"></div>
    </div>
    
    <div class="navbar__line"></div>
    `;
    target.appendChild($nav);
  }
}

export default Navbar;
