import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import LoginPageComponent from './login-page/login-page.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, LoginPageComponent],
  templateUrl: './auth.component.html',
})
export default class AuthComponent {}
