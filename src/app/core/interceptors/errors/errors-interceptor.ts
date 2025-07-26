import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);
  return next(req).pipe(
    catchError((err) => {
      messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: err.error.message,
      });
      console.log('interceptor', err.error.message);

      return throwError(() => err);
    })
  );
};
