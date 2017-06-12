import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selectedOption;
  options: Array<object>;

  selectedGender;

  constructor() {
    this.options = [
      { id: 1, name: 'Carlo'},
      { id: 2, name: 'Jorge'},
      { id: 3, name: 'Peter'},
    ];
  }

}
