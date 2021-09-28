import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: any[] = []; //Empty array list
  public title: String = 'My tasks';

  constructor() {
    this.todos.push('Task 01'); //class scope
    this.todos.push('Task 02');
    this.todos.push('Task 03');
    this.todos.push({ message: 'teste' });
    this.todos.push(new Date());
  }

  changeText() {
    this.title = 'Test';
  }
}
