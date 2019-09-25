import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  // private _loggedIn: boolean;
  message: string;
  name = 'Vishwas';

  @Input() loggedIn: boolean;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const loggedInValue = changes['loggedIn'];
    if (loggedInValue.currentValue === true) {
      this.message = 'Welcome back Marc!!';
    } else {
      this.message = 'Please log in';
    }
  }

  greetMarc() {
    alert('Hey Marc!');
  }

}
