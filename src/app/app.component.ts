import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Candidates';

  data = [
    {
      id: 1,
      first_name: 'Jeanettle',
      last_name: 'Penddreth',
      email: 'jpenddreth@census.gov',
      gender: 'Female'
    },
    {
      id: 2,
      first_name: 'Giavani',
      last_name: 'Fredlani',
      email: 'gfredlani@census.gov',
      gender: 'Male'
    },
    {
      id: 3,
      first_name: 'Noell',
      last_name: 'Bea',
      email: 'nbea@census.gov',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Willard',
      last_name: 'Valek',
      email: 'wvalek@census.gov',
      gender: 'Male'
    }
  ];
}
