// Импорты
import { IForm } from "../types";
import { EventEmitter } from "./EventEmmiter";

export interface IFormConstructor {
  new (formTemplate: HTMLTemplateElement): IForm;
}

// Слой представления отвечает за отображение результата пользователю
export class Form extends EventEmitter implements IForm {
  protected formElement: HTMLFormElement;
  protected inputElement: HTMLInputElement;
  protected handleFormSubmit: Function;
  protected submitButton: HTMLButtonElement;

  constructor(formTemplate: HTMLTemplateElement) {
    super();
    this.formElement = formTemplate.content
      .querySelector(".todos__form")
      .cloneNode(true) as HTMLFormElement;
    this.inputElement = this.formElement.querySelector(".todo-form__input");
    this.submitButton = this.formElement.querySelector(".todo-form__input-btn");
    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.emit("submit", { value: this.inputElement.value });
    });
  }

  // Рендеринг результата
  render() {
    return this.formElement;
  }

  // Установка результата
  setValue(data: string) {
    this.inputElement.value = data;
  }

  // Получение результата
  getValue() {
    return this.inputElement.value;
  }

  // Очистка формы
  clearValue() {
    this.formElement.reset();
  }

  set buttonText(data: string) {
    this.submitButton.textContent = data;
  }

  set placeholder(data: string) {
    this.inputElement.placeholder = data;
  }
}
