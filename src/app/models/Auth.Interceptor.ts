import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const AuthInterceptor : HttpInterceptorFn = (request: HttpRequest<unknown>,next : HttpHandlerFn) : Observable<HttpEvent<unknown>> => 
    {
        const token = localStorage.getItem('token') ?? ''
        const modified = request.clone({
            setHeaders: {
                Authorization: token ?`Token ${token}`:''
            },
        })

        return next(modified)

    };