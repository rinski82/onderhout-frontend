import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  ngOnInit(): void { this.getAll(); }
  constructor(public userService: UserService) {}
  getAll() {
    this.userService.getAll().subscribe(
      data => this.users = data
    )}
  delete(id: number) {
    this.userService.delete(id).subscribe(
      () => this.getAll()
    )}

}
