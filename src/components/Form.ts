// Импорты
import { IForm } from "../types";

// Слой представления отвечает за отображение результата пользователю
export class Form implements IForm {
  protected formElement: HTMLFormElement;
  protected inputElement: HTMLInputElement;
  protected handleFormSubmit: Function;
  protected submitButton: HTMLButtonElement;

  constructor(formTemplate: HTMLTemplateElement) {
    this.formElement = formTemplate.content
      .querySelector(".todos__form")
      .cloneNode(true) as HTMLFormElement;
    this.inputElement = this.formElement.querySelector(".todo-form__input");
    this.submitButton = this.formElement.querySelector(".todo-form__input-btn");
    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleFormSubmit(this.inputElement.value);
    });
  }

  setHandler(handleFormSubmit: Function) {
    this.handleFormSubmit = handleFormSubmit;
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
