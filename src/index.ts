// Импорт стилей
import "./styles/styles.css";

// Импорты компонентов
import { todos } from "./utils/constants";

// DOM-узлы
const todoList = document.querySelector(".todos__list") as HTMLElement;
const todoTemplate = document.querySelector(
  "#todo-item-template"
) as HTMLTemplateElement;

// Функция отрисовки элемента на странице

const createItem = (name: string) => {
  // Константы для элемента todo-листа
  const itemElement = todoTemplate.content
    .querySelector(".todo-item")
    .cloneNode(true) as HTMLElement;
  const title = itemElement.querySelector(".todo-item__text") as HTMLElement;
  title.textContent = name;
  return itemElement;
};

todos.forEach((item) => {
  const itemElement = createItem(item);
  todoList.prepend(itemElement);
});
