import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {TodoService} from "../todo.service";
import {Router} from "@angular/router";
import {priorityArray} from "../enums";
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo = new Todo();
  @Input() todoList!: TodoListComponent;
  priosArray = priorityArray;

  usersList: User[] = [];
  constructor(public todoService: TodoService
              , private router: Router
              , private userService: UserService,) { }
  ngOnInit(): void {
    this.getUsers();
  }
  add() {
    this.todoService.save(this.todo).subscribe(
      () => this.router.navigate(['/todo'])
    );
  }
  getUsers(): void {
    this.userService.getAll().subscribe(
      data => this.usersList = data
    );
  }

  cancel() {
    this.router.navigate(['/todo'])
  }
}

