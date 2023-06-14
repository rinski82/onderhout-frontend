import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../todo.service";
import {UserService} from "../user.service";
import {Todo} from "../todo";
import {TodoListComponent} from "../todo-list/todo-list.component";
// @ts-ignore
import {priorityArray, priorityEnum} from "../enums.ts"
import {User} from "../user";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  // @ts-ignore
  todo: Todo;
  @Input() todoList!: TodoListComponent;
  prios = Object.entries(priorityEnum);
  priosArray = priorityArray;

  usersList: User[] = [];

    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
    private userService: UserService,
  ) {}
  ngOnInit(): void {
    this.getTodo();
    this.getUsers();
    // console.log(Object.keys(priorityEnum));
  }
  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id)
      .subscribe(todo => {
        this.todo = todo[0];
      });
  }
  save(): void {
    this.todoService.save(this.todo).subscribe(
      () => this.router.navigate(['/todo'])
    );

  }
  getUsers(): void {
    this.userService.getAll().subscribe(
      data => this.usersList = data
    );
  }
}
