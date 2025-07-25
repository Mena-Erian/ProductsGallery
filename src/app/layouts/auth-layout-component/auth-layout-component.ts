import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer-component/footer-component';
import { NavbarComponent } from '../navbar-component/navbar-component';

@Component({
  selector: 'app-auth-layout-component',
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './auth-layout-component.html',
  styleUrl: './auth-layout-component.scss',
})
export class AuthLayoutComponent {}
