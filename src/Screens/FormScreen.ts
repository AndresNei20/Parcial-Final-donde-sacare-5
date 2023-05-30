import '../components/export'

export default class FormScreen extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const form = this.ownerDocument.createElement('app-form');
        this.shadowRoot?.appendChild(form);
    }
}

customElements.define('form-screen', FormScreen)