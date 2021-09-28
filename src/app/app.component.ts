import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = []; //Component Todo
  public title: String = 'My tasks';

  constructor() {
    this.todos.push(new Todo(1, 'Task 01', false));
    this.todos.push(new Todo(2, 'Task 02', false));
    this.todos.push(new Todo(3, 'Task 03', true));
  }

  changeText() {
    this.title = 'Test';
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1); // Remove one register
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }
}
