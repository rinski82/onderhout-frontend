import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  ngOnInit(): void { this.getAll(); }
  constructor(public todoService: TodoService) {}
  getAll() {
    this.todoService.getAll().subscribe(
      data => this.todos = data
    )}
  delete(id: number) {
    this.todoService.delete(id).subscribe(
      () => this.getAll()
    )}
}

