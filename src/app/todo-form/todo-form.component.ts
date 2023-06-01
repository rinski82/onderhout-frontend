import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {TodoService} from "../todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo = new Todo();
  @Input() todoList!: TodoListComponent;
  constructor(public todoService: TodoService, private router: Router) { }
  ngOnInit(): void {}
  add() {
    this.todoService.save(this.todo).subscribe(
      () => this.todoList.getAll()
    );
    this.router.navigate(['/todo']);
  }
}
