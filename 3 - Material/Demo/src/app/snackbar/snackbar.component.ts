import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  openSnackBar(message, action) {
    let snackBarRef = this.snackBar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('El snack-bar ha estado reducido');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('El snack-bar action ha estado aumentado!');
    });
  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration: 2000})
  }
}

@Component({
  selector: 'custom-snackbar',
  template: `<span style='color: orange'>Snackbar Personalizado</span>`
})
export class CustomSnackBarComponent {}
