import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'fly'
})
export class FlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'pi pi-thumbs-up' : 'pi pi-thumbs-down';
  }
}