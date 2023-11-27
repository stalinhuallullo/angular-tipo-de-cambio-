import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component'),
    children: [
      {
        path: 'login',
        title: 'Login Page',
        loadComponent: () => import('./auth/login-page/login-page.component'),
      },

      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'change-currency',
    title: 'Change Page',
    loadComponent: () => import('./count/count.component'),
  },
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
];
