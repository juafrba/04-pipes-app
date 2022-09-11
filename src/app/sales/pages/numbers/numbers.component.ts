import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent {
  netSales: number = 120000.544;
  grossSales: number = 200000.724;
  percentage: number = 0.45;
}
