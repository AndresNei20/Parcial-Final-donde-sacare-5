import { dispatch } from "../store";
import { navigate } from "../store/actions";
import { Screens } from "../types/navigation";

export default class DashboardScreen extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot)this.shadowRoot.innerHTML = "";

        const travelBtn = this.ownerDocument.createElement('button');
        travelBtn.textContent = "I want to create my recipe"
        travelBtn.addEventListener('click', () => {
            console.log("hola funciono")
            dispatch(navigate(Screens.DASHBOARD))
        })
        this.shadowRoot?.appendChild(travelBtn);
    }
}

customElements.define('dashboard-screen', DashboardScreen)