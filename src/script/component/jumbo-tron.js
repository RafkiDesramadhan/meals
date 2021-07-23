class Jumbo extends HTMLElement {
    consturctor() {
        console.log("constructured!");
    }

    connectedCallback() {
        console.log("connected!");
    }
    disconnectedCallback() {
        console.log("disonnected!");
    }
    adoptedCallback() {
        console.log("adopted!");
    }
}

customElements.define("jumbo-tron", Jumbo);