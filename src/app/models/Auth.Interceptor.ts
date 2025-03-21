
import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (request, next) => {
  
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
