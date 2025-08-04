import { NgClass } from '@angular/common';
import { Component, effect, HostListener, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { DarkModeService } from '../../shared/services/darkMode/dark-mode-service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increaseCounter } from '../../store/counter.action';
@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink, RouterLinkActive, FormsModule, ToggleSwitch, NgClass],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent implements OnInit {
  private readonly darkModeService = inject(DarkModeService);
  private readonly store = inject(Store);
  counter: Observable<number>;
  isDark: boolean = false;
  constructor() {
    this.counter = this.store.select((state) => state.counter);
    console.log(this.counter);

    effect(() => {
      this.isDark = this.darkModeService.isDark();
    });
  }
  @HostListener('change') onChangeDarkModeSwitchss() {
    this.darkModeService.toggleDarkMode();
    this.darkModeService.isDark.set(this.isDark);
  }
  ngOnInit(): void {
    this.darkModeService.darkModeCheck();
  }
  dispatchActionOrIncreasCounter() {
    this.store.dispatch(increaseCounter());
  }
}
