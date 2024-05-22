import { CurrencyPipe } from '@angular/common';
import { CustomCurrencyPipe } from './custom-currency.pipe';

describe('CustomCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomCurrencyPipe(new CurrencyPipe('en-US'));
    expect(pipe).toBeTruthy();
  });
});
