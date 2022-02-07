class Navbar {
  constructor({ target }) {
    const nav = document.createElement('nav');
    this.nav = nav;
    nav.id = 'navbar';
    target.appendChild(nav);
    this.render();
  }

  render () {
    this.nav.innerHTML = `
      <div class="navbar__container">
        <div class="navbar__container-help">?</div>
        <div class="navbar__container-title">WORDLE</div>
        <div class="navbar__container-statistics">S</div>
        <div class="navbar__container-setting">T</div>
      </div>

      <div class="navbar__line"></div>
    `
  }
}

export default Navbar;
