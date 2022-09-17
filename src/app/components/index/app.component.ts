/**
 * Created By : Adireddi Charan Teja
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Student Management By Adireddi Charan Teja';

  // Add few students for initial listing
  studentsList = [
    {
      id: 1,
      first_name: 'Charan',
      last_name: 'Gawande',
      email: 'Charan@gmail.com',
      phone: 9503733178,
      department: 'Science',
    },
    {
      id: 2,
      first_name: 'Oman',
      last_name: 'Umir',
      email: 'oman@gmail.com',
      phone: 8574889658,
      department: 'Commerce',
    },
    {
      id: 3,
      first_name: 'Tina',
      last_name: 'Dillon',
      email: 'tina@gmail.com',
      phone: 7485889658,
      department: 'Science',
    },
    {
      id: 4,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@gmail.com',
      phone: 9685589748,
      department: 'Arts',
    },
    {
      id: 5,
      first_name: 'Peter',
      last_name: 'Parker',
      email: 'peter@gmail.com',
      phone: 8595856547,
      department: 'Engineering',
    },
  ];

  constructor() {
    // Save students to localStorage
    localStorage.setItem('students', JSON.stringify(this.studentsList));
  }
}

/**
 * Created By : Adireddi Charan Teja
 */
