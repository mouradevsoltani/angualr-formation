import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, args?: any): any {
    console.log(value);
    if (value) {
      if (args === 'HT') {
        return value.total_HT();
      }
      if (args === 'TTC') {
        return value.total_TTC();
      }
    }
    return '';
  }

}
