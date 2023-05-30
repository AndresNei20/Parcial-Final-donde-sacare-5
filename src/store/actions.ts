import { Receta } from "../types/Receta";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

export const saveReceta = async (receta: Receta): Promise<Actions> => {
    await firebase.saveRecetaInDB(receta)
    return{
        action: SomeActions.SAVE_RECETA ,
        payload: receta,
    }
}