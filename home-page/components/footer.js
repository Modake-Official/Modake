class Footer extends HTMLElement {

    constructor() {
        super();
        console.log("Footer created");
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
        footer {
            bottom: 0;
            width: 100%;
            text-align: center;
        }
        
        .footer-container {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        
        footer li {
            list-style: none;
            margin-left: 0;
        }
        
        .product-footer ul, .company-footer ul, .resource-footer ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        
        .footer-container img {
            height: 50px;
        }
        
        .icon-footer {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
`;

    connectedCallback() {
        this.innerHTML = this.style + `<!-- FOOTER -->
<footer class="footer-container">
    <div class="icon-footer">
        <img src="${this.getTrueSrc()}assets/modake-icon.svg" alt="RemNote Logo">
    </div>
    <div class="product-footer">

        <ul>
            <li>
                <h2>Product</h2>
            </li>
            <li>
                <a href="https://www.remnote.com/privacy">Overview</a>
            </li>
            <li>
                <a href="https://www.remnote.com/terms">Pricing</a>
            </li>
            <li>
                <a href="https://www.remnote.com/faq">Download</a>
            </li>
            <li>
                <a href="https://www.remnote.com/contact">Resources</a>
            </li>
            <li>
                <a href="https://www.remnote.com/contact">Modake Clipper</a>
            </li>
        </ul>
    </div>
    <div class="company-footer">

        <ul>
            <li>
                <h2>Company</h2>
            </li>
            <li>
                <a href="https://www.remnote.com/privacy">About us</a>
            </li>
            <li>
                <a href="https://www.remnote.com/terms">Careers</a>
            </li>
            <li>
                <a href="https://www.remnote.com/faq">Media Kit</a>
            </li>
            <li>
                <a href="https://www.remnote.com/contact">Contact us</a>
            </li>
            <li>
                <a href="https://www.remnote.com/contact">Terms</a>
            </li>
            <li>
                <a href="https://www.remnote.com/contact">Privacy</a>
            </li>
        </ul>
    </div>
    <div class="resource-footer">

        <ul>
            <li>
                <h2>Resource</h2>
            </li>
            <li>
                <a href="https://www.remnote.com/privacy">Forum</a>
            </li>
            <li>
                <a href="https://www.remnote.com/terms">Tutorial</a>
            </li>
            <li>
                <a href="https://www.remnote.com/faq">Help Center</a>
            </li>
            <li>
                <a href="https://www.remnote.com/contact">What's New</a>
            </li>
        </ul>
    </div>
</footer>`
    }
}

customElements.define('footer-component', Footer);