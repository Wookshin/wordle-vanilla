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
      <div class="navbar__help">?</div>
      <div class="navbar__title">WORDLE</div>
      <div class="navbar__statistics">S</div>
      <div class="navbar__setting">T</div>
    `
  }
}

export default Navbar;
