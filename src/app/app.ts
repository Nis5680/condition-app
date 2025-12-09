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
  hide() {
    this.display = false;
  }
  show() {
    this.display = true;
  }
}
