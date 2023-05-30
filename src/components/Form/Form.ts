import { dispatch } from "../../store";
import { navigate, saveReceta } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { Receta } from "../../types/Receta";
import FormStyle from '../Form/FormStyle.css'

const formReceta: Receta = {
    name: "",
    ingredientes: "",
    instrucciones: "",
    image: "",
}
export default class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot)this.shadowRoot.innerHTML = "";


        const formContainer = this.ownerDocument.createElement('section');
        formContainer.id = "formContainer"

        const lName = this.ownerDocument.createElement('label');
        lName.textContent = "Name of your recipe"
        const name = this.ownerDocument.createElement('input');
        name.addEventListener('change', (r: any) => {
            console.log(r.target.value)
            formReceta.name = r.target.value
        })


        const lIngredientes = this.ownerDocument.createElement('label');
        lIngredientes.textContent = "Ingredients"
        const ingredientes = this.ownerDocument.createElement('input');
        ingredientes.addEventListener('change', (r: any) => {
            console.log(r.target.value)
            formReceta.ingredientes = r.target.value
        })



        const linstrucciones = this.ownerDocument.createElement('label');
        linstrucciones.textContent = "Instructions"
        const instrucciones = this.ownerDocument.createElement('input');
        instrucciones.addEventListener('change', (r: any) => {
            console.log(r.target.value)
            formReceta.instrucciones = r.target.value
        })



        const lImage = this.ownerDocument.createElement('section');
        lImage.textContent = "URL of your recipe"
        const imageinp = this.ownerDocument.createElement('input');
        imageinp.addEventListener('change', (r: any) => {
            console.log(r.target.value)
            formReceta.image = r.target.value
        })


        const btn = this.ownerDocument.createElement('button');
        btn.textContent = "Save your Recipe"
        btn.addEventListener('click', async () => {
            console.log(formReceta);
            dispatch(await saveReceta(formReceta))
        })

        const btnOut = this.ownerDocument.createElement('button');
        btnOut.textContent = "Watch another recipes"
        btnOut.addEventListener('click', () => {
            dispatch(navigate(Screens.RECIPES))
        })



        formContainer.appendChild(lName);
        formContainer.appendChild(name);
        formContainer.appendChild(lIngredientes);
        formContainer.appendChild(ingredientes);
        formContainer.appendChild(linstrucciones);
        formContainer.appendChild(instrucciones);
        formContainer.appendChild(lImage);
        formContainer.appendChild(imageinp);
        formContainer.appendChild(btn);
        formContainer.appendChild(btnOut);
        this.shadowRoot?.appendChild(formContainer);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = FormStyle;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define('app-form', Form)