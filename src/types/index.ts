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

export interface IToDoModel {
  items: IItem[];
  addItem: (data: string) => IItem;
  removeItem: (id: string) => void;
}
