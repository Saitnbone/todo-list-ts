// Презентер для todo
import { IToDoModel } from "../types";
import { IViewItem, IViewItemConstructor } from "../types";
import { IForm, IPage } from "../types";
import { IFormConstructor } from "./Form";

export class ItemPresenter {
  protected itemTemplate: HTMLTemplateElement;
  protected formTemplate: HTMLTemplateElement;
  protected todoForm: IForm;
  protected todoEditForm: IForm;

  constructor(
    protected model: IToDoModel,
    protected formConstructor: IFormConstructor,
    protected viewPageContainer: IPage,
    protected viewItemConstructor: IViewItemConstructor
  ) {
    this.itemTemplate = document.querySelector(
      "#todo-item-template"
    ) as HTMLTemplateElement;
    this.formTemplate = document.querySelector(
      "#todo-form-template"
    ) as HTMLTemplateElement;
  }

  init() {
    this.todoForm = new this.formConstructor(this.formTemplate);
    this.todoForm.setHandler(this.handleFormSubmit.bind(this));
    this.viewPageContainer.formContainer = this.todoForm.render();
  }

  handleFormSubmit(data: string) {
    this.model.addItem(data);
    this.renderView();
    this.todoForm.clearValue();
  }

  handleCopyItem(item: IViewItem) {
    const copyedItem = this.model.getItem(item.id);
    if (copyedItem && copyedItem.name) {
      this.model.addItem(copyedItem.name);
      this.renderView();
    } else {
      console.error("Invalid item provided to handleCopyItem:", item);
    }
  }

  handleDeleteItem(item: IViewItem) {
    this.model.removeItem(item.id);
    this.renderView();
  }

  renderView() {
    const itemList = this.model.items
      .map((item) => {
        const todoItem = new this.viewItemConstructor(this.itemTemplate);
        todoItem.setCopyHandler(this.handleCopyItem.bind(this));
        todoItem.setDeleteHandler(this.handleDeleteItem.bind(this));
        const itemElement = todoItem.render(item);
        return itemElement;
      })
      .reverse();

    this.viewPageContainer.toDoContainer = itemList;
  }
}
