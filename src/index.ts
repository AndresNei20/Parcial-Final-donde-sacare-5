import "./Screens/export"
import { appState } from "./store";
import { Screens } from "./types/navigation";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot)this.shadowRoot.innerHTML = "";
        switch (appState.screen) {
            case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement('dashboard-screen');
                this.shadowRoot?.appendChild(dashboard);               
                break;
                case Screens.FORM:
                    const form = this.ownerDocument.createElement('form-screen');
                    this.shadowRoot?.appendChild(form);               
                    break;
                    case Screens.RECIPES:
                        const recipes = this.ownerDocument.createElement('receta-screen');
                        this.shadowRoot?.appendChild(recipes);               
                        break;
        
            default:
                break;
        }

/*         const form = this.ownerDocument.createElement('form-screen');
        this.shadowRoot?.appendChild(form);  
        const RecipeScreen = this.ownerDocument.createElement('recipe-list');
        this.shadowRoot?.appendChild(RecipeScreen); */
    }
}

customElements.define('app-container', AppContainer)