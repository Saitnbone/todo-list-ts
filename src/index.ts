// Импорт стилей
import "./styles/styles.css";

// Импорты компонентов
import { todos } from "./utils/constants";
import { Item } from "./components/Item";
import { Form } from "./components/Form";
import { ToDoModel } from "./components/ToDoModel";
import { Page } from "./components/Page";

// DOM-узлы
const contentBlock = document.querySelector(".content") as HTMLElement;

const todoTemplate = document.querySelector(
  "#todo-item-template"
) as HTMLTemplateElement;
const formTemplate = document.querySelector(
  "#todo-form-template"
) as HTMLTemplateElement;

const page = new Page(contentBlock);
const todoForm = new Form(formTemplate);
const todoArray = new ToDoModel();
todoArray.items = todos;

// Функция добавления новых дел в массив
const handleFormSubmit = (data: string) => {
  todoArray.addItem(data);
  todoForm.clearValue();
  renderElements();
};

todoForm.setHandler(handleFormSubmit);
page.formContainer = todoForm.render();

// Функция рендеринга элементов дел на странице
const renderElements = () => {
  page.toDoContainer = todoArray.items
    .map((item) => {
      const todoObject = new Item(todoTemplate);
      const itemElement = todoObject.render(item);
      return itemElement;
    })
    .reverse();
};

// Вызов фнкции рендеринга
renderElements();
