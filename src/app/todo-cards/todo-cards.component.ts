import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-cards',
  templateUrl: './todo-cards.component.html',
  styleUrls: ['./todo-cards.component.css']
})
export class TodoCardsComponent implements OnInit {

  constructor(
    public todoService: TodosService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.todoService.getLocalStorage();
  }

  handleKeypress(todo: Todo): void {
    if (todo.text === '') {
      this.notificationService.notify('Field can not be empty');
      return;
    }
    this.todoService.toggleEdit(todo.id)
  }
}
