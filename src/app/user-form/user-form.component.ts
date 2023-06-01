import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {UserListComponent} from "../user-list/user-list.component";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = new User();
  @Input() userList!: UserListComponent;
  constructor(public userService: UserService, private router: Router) { }
  ngOnInit(): void {}
  add() {
    this.userService.save(this.user).subscribe(
      () => this.userList.getAll()
    );
    this.router.navigate(['/user']);
  }
}
