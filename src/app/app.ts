import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  display=true;
  x=10;
  togglediv=true;

   hide() {
     this.display = false;
   }
   show() {
     this.display = true;
   }

  toggle() {
    this.display = !this.display;
  }
  toggletwo() {
    this.togglediv = !this.togglediv;
  }
}
