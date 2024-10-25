class HeaderBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
         <div class="navbar">
        <div class="nav-title">
          <a href="#home">Muk<span>Bang</span></a>
        </div>
        <nav>
          <ul class="nav-daftar">
            <li><a href="#home" class="nav-item">Home</a></li>
            <li><a href="#about" class="nav-item">Favorite</a></li>
            <li>
              <a href="https://www.instagram.com/" class="nav-item">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define("header-bar", HeaderBar);
