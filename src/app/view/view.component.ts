import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  show_selected_date = false;
  selected_date?: string | null;
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.selected_date = this.route.snapshot.paramMap.get('selected_date');
    // console.log("selected_date vooraf: " + this.selected_date );
    // console.log("show_selected_date vooraf: " + this.show_selected_date);
    if (this.selected_date !== null) {
      this.show_selected_date = true;
    }
    // console.log("show_selected_date achteraf: " + this.show_selected_date);

  }

}
