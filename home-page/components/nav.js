class Nav extends HTMLElement {
    hrefToHome = "";
    hrefToDownload = "";
    hrefToPricing = "";
    hrefToLogin = "";
    hrefToSignUp = "";
    hrefToAbout = "";

    constructor() {
        super();
        console.log("Nav created");
        this.hrefToHome = this.getTrueHref() + "index.html";
        console.log("this.hrefToHome: ", this.hrefToHome);
        this.hrefToDownload = this.getTrueHref() + "download/download.html";
        console.log("this.hrefToDownload: ", this.hrefToDownload);
        this.hrefToPricing = this.getTrueHref() + "pricing/pricing.html";
        console.log("this.hrefToPricing: ", this.hrefToPricing);
        this.hrefToLogin = this.getTrueHref() + "login/login.html";
        console.log("this.hrefToLogin: ", this.hrefToLogin);
        this.hrefToSignUp = this.getTrueHref() + "signup/signup.html";
        console.log("this.hrefToSignUp: ", this.hrefToSignUp);
        this.hrefToAbout = this.getTrueHref() + "company/aboutus.html";
        console.log("this.hrefToAbout: ", this.hrefToAbout);
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

    

    style = `
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
            .dropdown {
                position: absolute; //Changed
                display: block; 
                visibility: collapse;
                z-index: 1;
                top: 100%;
                background: #ffffff;
                border-radius: 5px 5px 5px 5px;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
                padding: 20px;
            }
            .dropdown-content {
                left-margin: 2;
            }
            .fa-angle-down {
                padding-left: 10px; /* Thêm khoảng cách giữa icon và chữ */
            }
            
            #nav__container {
                display: inline-flex;
                width: 100%;
            }
            
            .nav__main {
                display: inline-flex;
            }
            
            #nav-left {
                justify-content: right;
            }
            
            #nav-right {
                justify-content: right;
            }
            
            .nav__item {
                padding: 0.5rem 1rem;
                margin: 10px;
                font-weight: 500;
                cursor: pointer;
            }
            
            .nav__item--down-arrow {
                height: 20px;
                width: 20px;
                min-height: 20px;
                min-width: 20px;
                padding-top: 2px;
                padding-left: 0.1rem;
            }
            .nav__item--expend {
                flex-direction: column;
                justify-content: center;
            }
            
            .nav__button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 0.5rem 1rem;
                margin: 10px;
                border-radius: 0.5rem;
            
                font-family: Inter,-apple-system, BlinkMacSystemFont,"Segoe UI", Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            }
            
            .nav__button:hover {
                background-color: #f2f2f2;
            }
            
            /* Chọn các nút <button> có class là .nav__button
             * - bg-color: trong suốt
             * - border: không
             */
            button.nav__button {
                background-color: transparent;
                border: none;
            }
            
            /*
             * Chọn logo của remnote
             * - để margin-right  thật lớn, kết hợp với max-width của nav
             * tạo ra kết qua là nav sẽ nằm sát qua bên phải
             */
            .remnote-logo {
                text-decoration-line: none;
                margin-right: auto; /* auto giúp #nav-right nằm sát bên phải */
            }
            /* Chọn nút màu xanh dương
             * - Bo góc
             * - ẩn đường viền
             */
            .btn--blue {
                cursor: pointer;
                color: white;
                background-color: #3668FF;
                margin: auto;
                border-radius: 0.5rem;
                border: none;
                height: 40px;
                font-weight: 500;
                font-size: 16px;
                padding-left: 1rem;
                padding-right: 1rem;
                text-align: center
            }
            .btn--blue:hover {
                background-color: #2156DB;
            }
            .btn--nav {
                padding-left: 1rem;
                padding-right: 1rem;
            }
            a {
                text-decoration-line: none;
                color: inherit;
            }
        </style>
    `;

    connectedCallback() {
        
        this.innerHTML = this.style + `
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
                    <div id="product-dropdown" class="dropdown">
                        <div class="dropdown-content">
                            <p>Overview</p>
                            <p>Integrations</p>
                            <p>Modake Clipper</p>
                            <p>Feature Requests</p>
                            <p>Updates</p>
                        </div>
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
                        <a href="${this.hrefToAbout}">Company</a>
                    </div>
                    <div id="logout" class="nav__item nav__button">
                        Logout
                    </div>
                    <div id="login" class="nav__item nav__button">
                        <a href="${this.hrefToLogin}">Log in</a>
                    </div>
                </div>
                <button id="go-to-app" class="btn--blue nav__item">
                    Go to app
                </button>
                <button id="signup-on-nav" class="btn--blue nav__item">
                    <a href="${this.hrefToSignUp}">Sign up</a>
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
