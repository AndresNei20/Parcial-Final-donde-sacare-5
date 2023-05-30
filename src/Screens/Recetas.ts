import '../components/export'

export default class RecetasScreen extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const RecipeList = this.ownerDocument.createElement('recipe-list');
        this.shadowRoot?.appendChild(RecipeList);
    }
}

customElements.define('receta-screen', RecetasScreen)