import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todos: Todo[] = [];

  piet = 'dashboard-item-critical' // || dashboard-item-critical

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.todoService.getAll()
      .subscribe(todos => this.todos = todos.slice(0, 4));
  }
}
