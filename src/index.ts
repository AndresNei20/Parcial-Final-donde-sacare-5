import "./Screens/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const FormScreen = this.ownerDocument.createElement('form-screen');
        this.shadowRoot?.appendChild(FormScreen);
        
        const RecipeScreen = this.ownerDocument.createElement('recipe-screen');
        this.shadowRoot?.appendChild(RecipeScreen);
    }
}

customElements.define('app-container', AppContainer)