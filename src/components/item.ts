// Импорты
import { IItem } from "../types";
import { IViewItem } from "../types";
import { EventEmitter } from "./EventEmmiter";

// Класс элемента разметки
// Слой представления отвечает за отображение результата пользователю
export class Item extends EventEmitter implements IViewItem {
  protected _id: string;
  protected itemElement: HTMLElement;
  protected title: HTMLElement;
  protected copyButton: HTMLButtonElement;
  protected deleteButton: HTMLButtonElement;
  protected editButton: HTMLButtonElement;

  constructor(template: HTMLTemplateElement) {
    super();
    this.itemElement = template.content
      .querySelector(".todo-item")
      .cloneNode(true) as HTMLElement;
    this.title = this.itemElement.querySelector(
      ".todo-item__text"
    ) as HTMLElement;
    this.copyButton = this.itemElement.querySelector(".todo-item__copy");
    this.deleteButton = this.itemElement.querySelector(".todo-item__del");
    this.editButton = this.itemElement.querySelector(".todo-item__edit");

    this.deleteButton.addEventListener("click", () =>
      this.emit("delete", { id: this._id })
    );
    this.copyButton.addEventListener("click", () =>
      this.emit("copy", { id: this._id })
    );
    this.editButton.addEventListener("click", () =>
      this.emit("edit", { id: this._id })
    );
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
