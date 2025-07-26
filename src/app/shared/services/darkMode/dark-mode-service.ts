import { isPlatformBrowser } from '@angular/common';
import { DocumentFragment } from './../../../../../node_modules/@angular/cdk/node_modules/parse5/dist/tree-adapters/default.d';
import {
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  isDark: WritableSignal<boolean> = signal<boolean>(false);
  pLATFORM_ID = inject(PLATFORM_ID);
  html: HTMLElement = {} as HTMLElement;
  toggleDarkMode() {
    if (isPlatformBrowser(this.pLATFORM_ID)) {
      // const html = document.documentElement;
      this.html = document.documentElement;
      this.isDark.set(this.html.classList.contains('dark'));
      if (this.isDark()) {
        this.html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        this.html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
  }
  setDarkMode() {
    this.isDark.set(true);
    this.html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  setLightMode() {
    this.isDark.set(false);
    this.html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  darkModeCheck() {
    if (isPlatformBrowser(this.pLATFORM_ID)) {
      this.html = document.documentElement;

      if (localStorage.getItem('theme') === 'dark') this.setDarkMode();
      else if (localStorage.getItem('theme') === 'light') this.setLightMode();
    }
  }
}
