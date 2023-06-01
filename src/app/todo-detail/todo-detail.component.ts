import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../todo.service";
import {Todo} from "../todo";
import {TodoListComponent} from "../todo-list/todo-list.component";
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  // @ts-ignore
  todo: Todo;
  @Input() todoList!: TodoListComponent;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
  ) {}
  ngOnInit(): void {
    this.getTodo();
  }
  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id)
      .subscribe(todo => {
        this.todo = todo[0];
      });
  }
  save() {
    this.todoService.save(this.todo).subscribe(
      () => this.todoList.getAll()
    );
    this.router.navigate(['/todo']);
  }
}
