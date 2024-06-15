// Импорт стилей
import "./styles/styles.css";

// Импорты компонентов
import { todos } from "./utils/constants";
import { Item } from "./components/Item";

// DOM-узлы
const todoList = document.querySelector(".todos__list") as HTMLElement;
const todoTemplate = document.querySelector(
  "#todo-item-template"
) as HTMLTemplateElement;

todos.forEach((item) => {
  const todoObject = new Item(todoTemplate);
  const itemElement = todoObject.render(item);
  todoList.prepend(itemElement);
});
