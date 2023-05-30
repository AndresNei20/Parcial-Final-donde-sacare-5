import { Screens } from "./navigation";
import { Receta } from "./Receta";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recetas: Receta [],
  screen: Screens
};
export enum NavigationActions{
  "NAVIGATE" = "NAVIGATE"
}

export enum SomeActions {
  "SAVE_RECETA" = "SAVE_RECETA",
}

export interface SaveResetaAction {
  action: SomeActions.SAVE_RECETA;
  payload: Receta;
}

export interface NavigateAction {
  action: NavigationActions.NAVIGATE;
  payload: Screens;
}

export type Actions = SaveResetaAction | NavigateAction;
