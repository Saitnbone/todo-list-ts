// Импорты
import { IItem } from "../types";
import { IViewItem } from "../types";

// Класс элемента разметки
// Слой представления отвечает за отображение результата пользователю
export class Item implements IViewItem {
  protected _id: string;
  protected itemElement: HTMLElement;
  protected title: HTMLElement;
  protected copyButton: HTMLButtonElement;
  protected deleteButton: HTMLButtonElement;
  protected editButton: HTMLButtonElement;
  protected handleCopyItem: Function;
  protected handlerDeleteItem: Function;
  protected handleEditItem: Function;

  constructor(template: HTMLTemplateElement) {
    this.itemElement = template.content
      .querySelector(".todo-item")
      .cloneNode(true) as HTMLElement;
    this.title = this.itemElement.querySelector(
      ".todo-item__text"
    ) as HTMLElement;
    this.copyButton = this.itemElement.querySelector(".todo-item__copy");
    this.deleteButton = this.itemElement.querySelector(".todo-item__del");
    this.editButton = this.itemElement.querySelector(".todo-item__edit");
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

  setCopyHandler(handleCopyItem: Function) {
    this.handleCopyItem = handleCopyItem;
    this.copyButton.addEventListener("click", (event) => {
      this.handleCopyItem(this);
    });
  }

  setDeleteHandler(handlerDeleteItem: Function) {
    this.handlerDeleteItem = handlerDeleteItem;
    this.deleteButton.addEventListener("click", (event) => {
      this.handlerDeleteItem(this);
    });
  }

  setEditHandler(handleEditItem: Function) {
    this.handleEditItem = handleEditItem;
    this.editButton.addEventListener("click", (event) => {
      this.handleEditItem(this);
    });
  }

  render(item: IItem): HTMLElement {
    this.name = item.name;
    this.id = item.id;
    return this.itemElement;
  }
}
