import { Injectable, Input, OnInit } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  add(text: string): void {
    this.todos.unshift({
      id: this.nextId(),
      text,
      completed: false,
      edit: false,
    });
    this.updateLocalStorage();
  }

  remove(id: number): void {
    this.todos = this.todos.filter(el => el.id !== id);
    this.updateLocalStorage();
  }

  toggleEdit(id: number): void {
    this.todos = this.todos.map(el => {
      if (el.id !== id) return el;
      else return { ...el, edit: !el.edit }
    });
    this.updateLocalStorage();
  }

  toggleCompleted(id: number): void {
    if (this.todos.find(el => el.id === id).edit) return;
    try {
      this.todos = this.todos.map(el => {
        if (el.id !== id) return el
        else return { ...el, completed: !el.completed }
      });
      this.updateLocalStorage();
    } catch (err) {
      console.log(err);
    }
  }

  updateLocalStorage(): void {
    window.localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getLocalStorage(): void {
    const data = window.localStorage.getItem('todos');
    if (data) this.todos = JSON.parse(data);
  }

  nextId(): number {
    return this.todos.length ? this.todos[0].id + 1 : 1
  }
}
