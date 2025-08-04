import { MyPreset } from './../../mypreset';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { errorsInterceptor } from './core/interceptors/errors/errors-interceptor';
import { loadingInterceptor } from './core/interceptors/loading/loading-interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),
      withInterceptors([loadingInterceptor, errorsInterceptor])
    ),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: ['.dark'],
          cssLayer: {
            name: 'primeng',
            order: 'base, theme, primeng',
          },
        },
      },
    }),
    importProvidersFrom(NgxSpinnerModule),
    MessageService,
    ConfirmationService,
    provideStore({
      counter: counterReducer,
    }),
  ],
};
