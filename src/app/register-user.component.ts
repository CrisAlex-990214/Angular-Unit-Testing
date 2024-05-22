import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export class RegisterUserComponent {

  form: FormGroup = this.fb.group({
    id: [],
    name: [, Validators.required]
  });
  errorMessage!: string;

  constructor(private fb: FormBuilder, private productService: ProductService) { }

  addUser() {
    if (this.form.invalid) return;

    this.productService.create(this.form.value).subscribe({
      next: (id) => {
        this.form.controls['id'].setValue(id);
      },
      error: (e) => this.errorMessage = e
    });
  }
}
