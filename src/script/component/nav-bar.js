class NavBar extends HTMLElement {
    constructor() {
        super();
        console.log("constructured!");
    }
    connectedCallbacK() {
        console.log("connected!");
    }

    disconnectedCallback() {
        console.log("disconnected!");
    }
    adoptedCallbac() {
        console.log("adopted!");
    }
}

customElements.define("nav-bar", NavBar);