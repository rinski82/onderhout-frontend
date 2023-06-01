import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
})
export class CalendarComponent {
  selected: Date | null = new Date(Date.now());
  constructor (private router : Router) {

    console.log("log dit maar es: " + this.selected?.toDateString());

  }
  openView(){
    this.router.navigate(['/view/'+ this.selected?.toLocaleDateString()])

  }
}
