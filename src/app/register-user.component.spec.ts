import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserComponent } from './register-user.component';
import { FormBuilder } from '@angular/forms';
import { ProductService } from './product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('RegisterUserComponent', () => {
  let component: RegisterUserComponent;
  let fixture: ComponentFixture<RegisterUserComponent>;

  let service: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterUserComponent, HttpClientTestingModule],
      providers: [FormBuilder, ProductService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterUserComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(ProductService);
  });

  it('should not call create method by invalid form', () => {
    //Arrange
    spyOn(service, 'create');

    //Act
    component.addUser();

    //Assert
    expect(component.form.invalid).toBeTrue();
    expect(service.create).not.toHaveBeenCalled();
  });

  it('should call create method', () => {
    //Arrange
    const id = 1;
    spyOn(service, 'create').and.returnValue(of(id));
    component.form.patchValue({ name: 'Shoe' });

    //Act
    component.addUser();

    //Assert
    expect(component.form.controls['id'].value).toBe(id);
    expect(service.create).toHaveBeenCalled();
  });

  it('should call create method by throwing an exception', () => {
    //Arrange
    const id = 1;
    const errorMessage = 'Api failure';
    spyOn(service, 'create').and.returnValue(throwError(() => errorMessage));
    component.form.patchValue({ name: 'Shoe' });

    //Act
    component.addUser();

    //Assert
    expect(component.errorMessage).toBe(errorMessage);
    expect(service.create).toHaveBeenCalledWith(component.form.value);
  });
});
