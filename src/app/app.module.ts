import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';

import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ViewsComponent } from './views/views.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MapComponent } from './map/map.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    UserFormComponent,
    UserListComponent,
    DashboardComponent,
    TodoDetailComponent,
    MessagesComponent,
    ViewsComponent,
    CalendarComponent,
    MapComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
