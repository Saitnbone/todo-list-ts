import { IItem, IToDoModel } from "../types";

// Слой моделей отвечает за работу с данными
export class ToDoModel implements IToDoModel {
  protected _items: IItem[];

  constructor() {
    this._items = [];
  }

  set items(data: IItem[]) {
    this._items = data;
  }

  get items() {
    return this._items;
  }

  addItem(data: string): IItem {
    const uniqueId: number =
      Math.max(0, ...this._items.map((item) => Number(item.id))) + 1;
    const newItem: IItem = { id: String(uniqueId), name: data };
    this._items.push(newItem);
    return newItem;
  }

  removeItem(id: string): void {
    this._items = this._items.filter((item) => item.id !== id);
  }

  editItem(id: string, name: string) {
    const editedItem = this._items.find((item) => item.id === id);
    editedItem.name = name;
  }

  getItem(id: string): IItem | undefined {
    return this._items.find((item) => item.id === id);
  }
}
