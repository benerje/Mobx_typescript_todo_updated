import { observable, action, computed, reaction } from "mobx";


export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
  isedit:boolean
}

export interface TodoList {
  total: [];
  completed: [];
  notCompleted:[]
}


export class TodoStore {
  constructor() {
    reaction(
      () => this.todos,
      _ => console.log(this.todos.length)
    );
  }

  @observable todos: Todo[] = [];

  @action addTodo = (todo: Todo) => { 
    this.todos.unshift({ ...todo, id: Date.now() });
  };

  @action toggleTodo = (id: number) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
  };

  
  @action editTodo = (id: number) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isedit:!todo.isedit
        };
      }
      return todo;
    });
  };

  @action saveTodo = (id:number,title:string) =>{
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isedit:false,
          title: title
        };
      }
      return todo;
    });

  }

  @action removeTodo = (id: number) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  };

  @computed get info() {
    return {
      total: this.todos,
      Completed: this.todos.filter(todo => todo.completed),
      notCompleted: this.todos.filter(todo => !todo.completed)
    };
  }
}

export default new TodoStore();
