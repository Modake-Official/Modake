class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<style>
    nav {
        margin: auto;
        max-width: 1600px;
        border-style: solid;
        border-color: rgb(231 231 239 / 1);
        border-width: 0px;
        border-bottom-width: 1px;
        position: sticky;
        top: 0;
        background: white;
        z-index: 3;
    }
</style>
<nav>
<div id="nav__container">
    <div id="nav-left" class="nav__item remnote-logo">
        <a>
            <img src="https://www.remnote.com/assets/homepage/images/logoText.svg" alt="RemNote Logo">
        </a>
    </div>
    <div id="nav-right">
        <div id="items-box" class="nav__main">
            <div id="product"
                 class="nav__item nav__item--product nav__button">
                <a href="../index.html">Product</a>
                <i class="fa-solid fa-angle-down"></i>
            </div>
            <div id="download" class="nav__button nav__item">
                <a href="download/download.html">Download</a>
            </div>
            <div id="pricing" class="nav__item nav__button">
                Pricing
            </div>
            <div id="solution" class="nav__item nav__item--expend nav__button">
                Solution
            </div>
            <div id="blog" class="nav__item nav__button">
                Blog
            </div>
            <div id="company" class="nav__item nav__button">
                Company
            </div>
            <div id="logout" class="nav__item nav__button">
                Logout
            </div>
        </div>
        <button id="go-to-app" class="btn--blue nav__item">
            Go to app
        </button>
        <div id="burger" class="nav__item">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
</nav>
    `;
    }
}

customElements.define('nav-component', Nav);