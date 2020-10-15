import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  value: string = '';

  constructor(
    private todoService: TodosService,
    private notificationService: NotificationService,
  ) { }

  addTodo(): void {
    if (!this.value || this.value === '') {
      this.notificationService.notify('Field can not be empty')
      return;
    }
    this.todoService.add(this.value);
    this.value = ''
  }
}
