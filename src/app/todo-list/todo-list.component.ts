import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  show_selected_date = false;
  // selected_date_string = this.route.snapshot.queryParamMap.get('duedate')!.toString();

  date_now = new Date();
  selected_date = new Date( this.route.snapshot.queryParamMap.get('duedate')! );

  ngOnInit(): void {

    if (this.route.snapshot.queryParamMap.get('duedate')) {
      this.show_selected_date = true;

      // this.selected_date = this.route.snapshot.queryParamMap.get('duedate');
      console.log("de doorgegegeven duedate is nu: " + this.route.snapshot.queryParamMap.get('duedate') );
      console.log("de getransformeerde Date:duedate is nu: " + new Date( this.route.snapshot.queryParamMap.get('duedate')!) );
      console.log("de date_now is nu: "+ this.date_now);
      console.log("de selected_date is nu: "+ this.selected_date);
      console.log("NU BEN IK HIER");

      this.getByDate(new Date(Date.parse(this.selected_date.toString()) ));

    }
    else {
      this.getAll();
    }

  }
  constructor(
    public todoService: TodoService,
    private route: ActivatedRoute) {}
  getAll() {
    this.todoService.getAll().subscribe(
      data => this.todos = data
    )}
  delete(id: number) {
    this.todoService.delete(id).subscribe(
      () => this.getAll()
    )}

  getByDate(selected_date: Date | null){
    this.todoService.getByDate(selected_date).subscribe(
      data => this.todos = data
    )}
}

