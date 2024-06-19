// Импорт стилей
import "./styles/styles.css";

// Импорты компонентов
import { todos } from "./utils/constants";
import { Item } from "./components/Item";
import { Form } from "./components/Form";
import { ToDoModel } from "./components/ToDoModel";
import { Page } from "./components/Page";
import { ItemPresenter } from "./components/ToDoPresenter";
import { Popup } from "./components/Popup";

// DOM-узлы
const contentElement = document.querySelector(".content") as HTMLElement;
const popupElement = document.querySelector(".popup") as HTMLElement;

// Константы для проекта
const page = new Page(contentElement);

const todoArray = new ToDoModel();
todoArray.items = todos;

const modal = new Popup(popupElement)

const itemPresenter = new ItemPresenter(todoArray, Form, page, Item, modal);

itemPresenter.init();
itemPresenter.renderView();
