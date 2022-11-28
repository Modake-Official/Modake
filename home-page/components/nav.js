class Nav extends HTMLElement {
    hrefToHome = "";
    hrefToDownload = "";
    hrefToPricing = "";

    constructor() {
        super();
        console.log("Nav created");
        this.hrefToHome = this.getTrueHref() + "index.html";
        this.hrefToDownload = this.getTrueHref() + "download/download.html";
        this.hrefToPricing = this.getTrueHref() + "pricing/pricing.html";
    }

    getTrueHref() {
        const href = window.location.href.split('?')[0];
        const hrefArray = href.split("/");

        let slashLocationFirst= href.lastIndexOf("/");
        let firstHref = href.substring(0, slashLocationFirst);
        console.log("firstHref", firstHref);

        let slashLocationSecond = firstHref.lastIndexOf("/");
        let secondHref = firstHref.substring(0, slashLocationSecond + 1);
        console.log("secondHref: ", secondHref);
        
        let fileName = hrefArray[hrefArray.length - 1]
        console.log("fileName: ", fileName);
        
        if ( fileName === "index.html" ) {
            return firstHref + "/";
        } else {
            return secondHref ;
        }
    }

    getTrueSrc() {
        const href = window.location.href.split('?')[0];
        const hrefArray = href.split("/");

        let fileName = hrefArray[hrefArray.length - 1]
        console.log("fileName: ", fileName);

        if ( fileName === "index.html" ) {
            return "../";
        } else {
            return "../../" ;
        }
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
        #nav-left a img {
            height: 30px;
        }
    </style>
    <nav>
    <div id="nav__container">
        <div id="nav-left" class="nav__item remnote-logo">
            <a href="${this.hrefToHome}">
                <img src="${this.getTrueSrc()}assets/modake-icon.svg" alt="RemNote Logo">
            </a>
        </div>
        <div id="nav-right">
            <div id="items-box" class="nav__main">
                <div id="product"
                     class="nav__item nav__item--product nav__button">
                    Product
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div id="download" class="nav__button nav__item">
                    <a href="${this.hrefToDownload}">Download</a>
                </div>
                <div id="pricing" class="nav__item nav__button">
                    <a href="${this.hrefToPricing}">Pricing</a>
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