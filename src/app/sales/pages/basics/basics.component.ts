import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  lowerName: string = 'angular';
  upperName: string = 'Angular';
  fullName: string = 'Angular app';
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
