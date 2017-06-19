import { Component, OnInit } from '@angular/core';

import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any = [];

  todo = {};

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService
      .list()
      .subscribe(todos => {
        this.todos = todos
      });
  }

  done($event, todo): void {
    const todo_done = todo;
    todo_done.done = $event.target.checked;

    this.todoService
      .update(todo_done)
      .subscribe(res => {
        todo.done = res.done;
      });
  }

  save(): void {
    if (this.todo.hasOwnProperty('_id')) {
      this.todoService
        .update(this.todo)
        .subscribe(todo => {
          this.todo = {};
        });
    }
    else {
      this.todoService
        .create(this.todo)
        .subscribe(todo => {
          this.todos.push(todo);
          this.todo = {};
        });
    }
  }

  delete(todo) {
    this.todoService
      .delete(todo._id)
      .subscribe(r => {
        let i = this.todos.findIndex(t => t._id === r._id);
        this.todos.splice(i, 1);
      });
  }

  select(todo) {
    this.todo = todo;
  }

}
