import { IPage } from "../types";

// Класс для страницы приложения
export class Page implements IPage {
  _formContainer: HTMLElement;
  _toDoContainer: HTMLElement;

  constructor(protected container: HTMLElement) {
    this._formContainer = this.container.querySelector(
      ".todo-form-container"
    ) as HTMLElement;
    this._toDoContainer = this.container.querySelector(
      ".todos__list"
    ) as HTMLElement;

    if (!this._formContainer) {
      throw new Error("Form container element not found");
    }

    if (!this._toDoContainer) {
      throw new Error("To-do container element not found");
    }
  }

  set toDoContainer(items: HTMLElement[]) {
    if (this._toDoContainer) {
      this._toDoContainer.replaceChildren(...items);
    }
  }

  set formContainer(formElement: HTMLElement | null) {
    if (this._formContainer) {
      if (formElement) {
        this._formContainer.replaceChildren(formElement);
      } else {
        this._formContainer.innerHTML = "";
      }
    }
  }
}
