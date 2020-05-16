import {HttpEvent, HttpHandler,HttpRequest,HttpErrorResponse,HttpInterceptor} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // catch errors like bad formatting or missing keys
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // Fatal Http errors..
                        errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                    }
                    console.log(errorMessage);
                    return throwError(errorMessage);
                })
            )
    }
}