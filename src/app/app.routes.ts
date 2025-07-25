import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout-component/auth-layout-component';
import { MainLayoutComponent } from './layouts/main-layout-component/main-layout-component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login-component/login-component').then(
            (c) => c.LoginComponent
          ),
        title: 'Login',
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register-component/register-component').then(
            (c) => c.RegisterComponent
          ),
        title: 'Register',
      },
    ],
  },
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products-component/products-component').then(
            (c) => c.ProductsComponent
          ),
        title: 'Products',
      },
      {
        path: 'product-details/:productId',
        loadComponent: () =>
          import(
            './pages/product-details-component/product-details-component'
          ).then((c) => c.ProductDetailsComponent),
        title: 'Product Details',
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart-component/cart-component').then(
            (c) => c.CartComponent
          ),
        title: 'Cart',
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found-component/not-found-component').then(
        (c) => c.NotFoundComponent
      ),
    title: 'Not Found',
  },
];
