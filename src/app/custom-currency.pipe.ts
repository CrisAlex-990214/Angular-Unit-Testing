import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true
})
export class CustomCurrencyPipe implements PipeTransform {

  constructor(private cp: CurrencyPipe) { }

  transform(value: number, currency: string) {
    return currency === 'CLP' ?
      this.cp.transform(value, currency, 'symbol-narrow', '1.0-0')! :
      this.cp.transform(value, currency, 'symbol-narrow', '1.1-2')!;
  }
}
