import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode'
})
export class CountrycodePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return '+92' + value;
  }

}
