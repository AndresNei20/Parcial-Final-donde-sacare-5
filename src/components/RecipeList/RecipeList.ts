import { appState } from "../../store";

export default class RecipeList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        appState.recetas.forEach((r)=>{


             const oneRecipe = this.ownerDocument.createElement('section');


             const nameRecipe = this.ownerDocument.createElement('h2');
            nameRecipe.textContent = r.name

             const ingredientsRecipe = this.ownerDocument.createElement('h3');
             ingredientsRecipe.textContent = r.ingredientes

             const instructionsRecipe = this.ownerDocument.createElement('p');
             instructionsRecipe.textContent = r.instrucciones

             const imageRecipe = this.ownerDocument.createElement('img');
             imageRecipe.src = r.image

             const btnBack = this.ownerDocument.createElement('button')
             btnBack.textContent = "Addanother recipe"

            oneRecipe.appendChild(nameRecipe)
            oneRecipe.appendChild(ingredientsRecipe)
            oneRecipe.appendChild(instructionsRecipe)
            oneRecipe.appendChild(imageRecipe)
             this.shadowRoot?.appendChild(oneRecipe);
        })
    }
}

customElements.define('recipe-list', RecipeList)