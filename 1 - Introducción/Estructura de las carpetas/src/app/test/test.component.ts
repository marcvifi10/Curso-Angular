import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngIf="displayName; else nameElseBlock">
      Ejemplo
    </h2>
    <ng-template #nameElseBlock>
      <h2>
        El nombre esta oculto
      </h2>
    </ng-template>

    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Ejemplo</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Oculto</h2>    
    </ng-template>



    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">Rojo</div>
      <div *ngSwitchCase="'blue'">Azul</div>
      <div *ngSwitchCase="'green'">Verde</div>
      <div *ngSwitchDefault>Otra vez</div>
    </div>


    <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
    </div>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public displayName = false;
  public color = "red";
  public colors = ["red","blue","green","yellow"]

  constructor() { }

  ngOnInit() {
  }

}
