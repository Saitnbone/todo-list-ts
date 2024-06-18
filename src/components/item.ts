// Импорты
import { IItem } from "../types";

// Класс элемента разметки
// Слой представления отвечает за отображение результата пользователю
export class Item {
  protected _id: string;
  protected itemElement: HTMLElement;
  protected title: HTMLElement;

  constructor(template: HTMLTemplateElement) {
    this.itemElement = template.content
      .querySelector(".todo-item")
      .cloneNode(true) as HTMLElement;
    this.title = this.itemElement.querySelector(
      ".todo-item__text"
    ) as HTMLElement;
  }

  set id(value: string) {
    this._id = value;
  }

  get id(): string {
    return this._id || "";
  }

  set name(value: string) {
    this.title.textContent = value;
  }

  get name(): string {
    return this.title.textContent || "";
  }

  render(item: IItem): HTMLElement {
    this.name = item.name;
    this.id = item.id;
    return this.itemElement;
  }
}
