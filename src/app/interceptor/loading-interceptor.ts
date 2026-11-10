import { inject } from '@angular/core';
import { LoadingService } from '../services/loading-service';
import { HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { finalize } from 'rxjs';

export function loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const started = performance.now();
  return next(req).pipe(
    finalize(() => console.log(
      `${req.method} ${req.urlWithParams} ${Math.round(performance.now() - started)}ms`)),
  );
private loadingService = inject(LoadingService);

};




