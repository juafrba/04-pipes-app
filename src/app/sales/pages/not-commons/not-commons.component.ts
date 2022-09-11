import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [ ]
})
export class NotCommonsComponent {
  //  i18nSelect
  name: string = 'Angular';
  gender: string = 'male';

  invitationMapping = {
    'male': 'invitarlo',
    'female': 'invitarla',
  };

  changeGender(): void {
    if (this.gender === 'male') {
      this.gender = 'female';
      return;
    }

    this.gender = 'male';
  }

  // i18nPlural
  clients: string[] = ['Alba', 'Pedro', 'Fernando', 'Raul'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  };


  //  i18nSelect
  deleteClient(): void {
    this.clients.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Raul',
    age: 24,
    adress: 'Madrid, Spain'
  };

  // JSON Pipe
  heroes = [
    {
      name: 'Superman',
      fly: true,
    },
    {
      name: 'Batman',
      fly: false,
    },
    {
      name: 'Flash',
      fly: false,
    },
  ];

  // Async Pipe
  observable = interval(1000);
}
