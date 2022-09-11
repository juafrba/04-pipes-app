import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'customuppercase'
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return typeof args[0] === 'boolean' && !args[0]
      ? value : value.toUpperCase();
  }
}