import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  minDate = new Date()
  maxDate = new Date(2019, 10, 15)

  dateFilter = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

}
