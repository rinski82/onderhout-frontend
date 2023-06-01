import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpClient, private messageService: MessageService) { }
  getAll() {
    this.messageService.add('UserService: fetched all users');
    return this.http.get<User[]>(
      'http://localhost:8080/user');
  }
  save(user: User) {
    this.messageService.add('UserService: saved user: ' + user.id + "|"+ user.username);
    return this.http.post(
      'http://localhost:8080/user', user);
  }
  delete(id: number) {
    this.messageService.add('TodoService: deleted user: ' + id);
    return this.http.delete(
      'http://localhost:8080/user/' + id);
  }
  getUser(id: number): Observable<User[]> {
    this.messageService.add('TodoService: fetched user: ' + id);
    return this.http.get<User[]>(
      'http://localhost:8080/user/' + id);
  }
}
