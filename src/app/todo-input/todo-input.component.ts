import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  standalone: true,
  imports: [],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.sass'
})
export class TodoInputComponent {

  todoInput: string = '';
  @Output() onTodoAdded: EventEmitter<string> = new EventEmitter();

  addTodo() {
    this.onTodoAdded.emit(this.todoInput);

  }

  inputChange(event: any) {
    this.todoInput = event.target.value;
  }

}
