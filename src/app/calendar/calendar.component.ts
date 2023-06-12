import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {Router} from "@angular/router";
import {MessageService} from "../message.service";
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
})
export class CalendarComponent {
  selected_date: Date | null = new Date(Date.now());
  constructor (private router : Router, private messageService: MessageService) {

    console.log("log dit maar es; vandaag is het: " + this.selected_date?.toLocaleDateString());
    this.messageService.add("Calendar; vandaag is het: " + this.selected_date?.toLocaleDateString());
  }
  openView(){
    this.router.navigate(['/todo'], { queryParams: { duedate: this.selected_date?.toJSON() } });

  }
}
