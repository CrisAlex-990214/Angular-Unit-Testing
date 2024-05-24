import { CurrencyPipe } from '@angular/common';
import { CustomCurrencyPipe } from './custom-currency.pipe';
import { TestBed } from '@angular/core/testing';

describe('CustomCurrencyPipe', () => {

  let pipe: CustomCurrencyPipe;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      providers: [CurrencyPipe, CustomCurrencyPipe]
    });

    pipe = TestBed.inject(CustomCurrencyPipe);
  })

  it('should not return any decimal digit', () => {
    //Arrange
    const value = 56.89;

    //Act
    const transformedValue = pipe.transform(value, 'CLP');

    //Assert
    expect(transformedValue.split('.').length == 1).toBeTrue();
  });

  it('should return any decimal digit', () => {
    //Arrange
    const value = 56.89;

    //Act
    const transformedValue = pipe.transform(value, 'USD');

    //Assert
    expect(transformedValue.split('.').length > 1).toBeTrue();
  });
});
