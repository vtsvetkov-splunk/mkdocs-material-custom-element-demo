// Create a class for the element
class MyCustomElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "closed" });

        const form = document.createElement("form");
        const input = document.createElement("input");

        shadow.appendChild(form);
        form.appendChild(input);
    }
}

customElements.define("my-custom-element", MyCustomElement);