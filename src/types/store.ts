import { Receta } from "./Receta";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recetas: Receta [];
};

export enum SomeActions {
  "SAVE_RECETA" = "SAVE_RECETA",
}

export interface SaveResetaAction {
  action: SomeActions.SAVE_RECETA;
  payload: Receta;
}

export type Actions = SaveResetaAction;
