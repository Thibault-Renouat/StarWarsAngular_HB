import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initiales'
})
export class InitialesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const nameInitiales= value.split(' ');
    return nameInitiales[0][0] + ' ' + nameInitiales[1][0];
  }

}
