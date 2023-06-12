import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {MessagesComponent} from "./messages/messages.component";
import {ViewComponent} from "./view/view.component";
import {MapComponent} from "./map/map.component";
import {CalendarComponent} from "./calendar/calendar.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'todo/add', component: TodoFormComponent },
  { path: 'todo/:id', component: TodoFormComponent },
  { path: 'todo-detail/:id', component: TodoDetailComponent },
  { path: 'user', component: UserListComponent },
  { path: 'user/add', component: UserFormComponent },
  { path: 'user/:id', component: UserFormComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'view', component: ViewComponent },
  { path: 'view/todo', component: ViewComponent },
  { path: 'map', component: MapComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'messages', component: MessagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
