// Импорты
import { IEvents } from "../components/EventEmmiter";

// Интерфесы для проекта
export interface IPage {
  formContainer: HTMLElement;
  toDoContainer: HTMLElement[] | null;
}

export interface IForm extends IEvents {
  buttonText: string;
  placeholder: string;
  render(): HTMLFormElement;
  setValue(data: string): void;
  getValue(): string;
  clearValue(): void;
}

export interface IItem {
  id: string;
  name: string;
}

export interface IViewItem extends IEvents {
  id: string;
  name: string;
  render(item: IItem): HTMLElement;
}

export interface IViewItemConstructor {
  new (template: HTMLTemplateElement): IViewItem;
}

export interface IToDoModel extends IEvents{
  items: IItem[];
  addItem: (data: string) => IItem;
  removeItem: (id: string) => void;
  getItem: (name: string) => IItem;
  editItem: (id: string, name: string) => void;
}

export interface IPopup {
  content: HTMLElement;
  open(): void;
  close(): void;
}
