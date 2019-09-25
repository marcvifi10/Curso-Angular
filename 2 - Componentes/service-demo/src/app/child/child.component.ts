import { Component, OnInit } from '@angular/core';
import { GreetService } from '../greet.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor(private _greetService: GreetService) { }

  ngOnInit() {
    this._greetService.teacherGreeted$.subscribe(
      message => {
        if (message === 'Buenos dias') {
          alert('Buenos dias!');
        } else if (message === 'Bien') {
          alert('Gracias Profesor!');
        }
      }
    );
  }

}
