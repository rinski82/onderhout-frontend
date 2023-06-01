import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(public http: HttpClient, private messageService: MessageService) { }
  getAll() {
    this.messageService.add('TodoService: fetched all todos');
    return this.http.get<Todo[]>(
      'http://localhost:8080/todo');
  }
  save(todo: Todo) {
    this.messageService.add('TodoService: saved todo: ' + todo.id + "|" + todo.task);
    return this.http.post(
      'http://localhost:8080/todo', todo);
  }
  delete(id: number) {
    this.messageService.add('TodoService: deleted todo: ' + id);
    return this.http.delete(
      'http://localhost:8080/todo/' + id);
  }
  getTodo(id: number): Observable<Todo[]> {
    this.messageService.add('TodoService: fetched todo: ' + id);
    return this.http.get<Todo[]>(
      'http://localhost:8080/todo/' + id);
  }
}
