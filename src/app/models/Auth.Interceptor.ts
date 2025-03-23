
import { HttpInterceptorFn } from '@angular/common/http';
// import { isPlatformBrowser } from '@angular/common';
// import { Component, Inject, inject, OnInit,PLATFORM_ID  } from '@angular/core';


export const AuthInterceptor: HttpInterceptorFn = (request, next) => {
  // const platformId = inject(PLATFORM_ID);
  const token = localStorage.getItem('token')
  console.log('This is the te AuthInterceptor')
  console.log(token)
  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  

  return next(request)
//   .pipe(
//     catchError((error: HttpErrorResponse) => {
//       if (error.status === 401 || error.status === 403) {
//         console.warn('Unauthorized! Redirecting to login...');
//         authService.clearToken();
//         router.navigate(['/login']);
//       }
//       return throwError(() => error);
//     })
//   );
};
