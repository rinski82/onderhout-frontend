import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {UserListComponent} from "../user-list/user-list.component";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  // @ts-ignore
  user: User;
  @Input() userList!: UserListComponent;
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private userService: UserService,
  ) {}
  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id)
      .subscribe(user => {
        this.user = user[0];
      });
  }
  save() {
    this.userService.save(this.user).subscribe(
      () => this.userList.getAll()
    );
    this.router.navigate(['/user']);
  }


}
