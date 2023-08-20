class Pricecard extends HTMLElement {

    constructor() {
        super();
        console.log();
    }

    connectedCallback() {
        this.innerHTML = `
        `;
    }

}
customElements.define('pricecard-component', Pricecard);