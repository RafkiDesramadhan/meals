class SearchBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
         return this.querySelector("#inputSearch").value; 
    }

    render() {
        this.innerHTML = `
            <input id="inputSearch" type="search" placeholder="cari...">
            <br>
            <button id="searchButton">Search</button>
        `;
        this.querySelector("#searchButton").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);