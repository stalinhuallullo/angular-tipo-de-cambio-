import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './login-page.component.html',
})
export default class LoginPageComponent {
  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required, Validators.minLength(6)],
  });

  login() {
    console.log(this.myForm.value);
  }
}
