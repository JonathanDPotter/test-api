class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const linkOne = this.getAttribute("link-one") || "broken";
    const linkTwo = this.getAttribute("link-two") || "broken";

    this.innerHTML = `
    <header>
      <h1>MY API</h1>
      <nav>
        <a href="/${linkOne}">${linkOne}</a>
        <a href="/${linkTwo}">${linkTwo}</a>
      </nav>
    </header>
    `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <span>Jonathan Potter 2023</span>
    </footer>`;
  }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);
