import { Screens } from "../types/navigation";
import { Receta } from "../types/Receta";
import { Actions, NavigationActions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

export const saveReceta = async (receta: Receta): Promise<Actions> => {
    await firebase.saveRecetaInDB(receta)
    return{
        action: SomeActions.SAVE_RECETA ,
        payload: receta,
    }
}

export const navigate = (screen: Screens) => {
    return{
        action: NavigationActions.NAVIGATE,
        payload: screen,
    }
}