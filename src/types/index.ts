// Интерфесы для проекта
export interface IPage {
  formContainer: HTMLElement;
  toDoContainer: HTMLElement[] | null;
}

export interface IForm {
  buttonText: string;
  placeholder: string;
  setHandler(handleFormSubmit: Function): void;
  render(): HTMLFormElement;
  setValue(data: string): void;
  getValue(): string;
  clearValue(): void;
}

export interface IItem {
  id: string;
  name: string;
}

export interface IViewItem {
  id: string;
  name: string;
  render(item: IItem): HTMLElement;
  setCopyHandler(handlerCopy: Function): void;
  setDeleteHandler(handlerDeleteItem: Function): void; 
}

export interface IViewItemConstructor {
  new (template: HTMLTemplateElement): IViewItem;
}

export interface IToDoModel {
  items: IItem[];
  addItem: (data: string) => IItem;
  removeItem: (id: string) => void;
  getItem: (name: string) => IItem;
}
