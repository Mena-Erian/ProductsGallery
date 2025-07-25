import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar-component/navbar-component';
import { FooterComponent } from '../footer-component/footer-component';

@Component({
  selector: 'app-main-layout-component',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.scss',
})
export class MainLayoutComponent {}
