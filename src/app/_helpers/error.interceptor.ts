import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../login';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            console.log('Request == ', request)
            console.log('next == ', next)

            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authenticationService.logout();
                location.reload(true);
                let errorMessage = "Mot de passe ou nom d'utilisateur invalide";
                return throwError(errorMessage);
            }

            let errorMessage = '';
            if (err.error instanceof ErrorEvent) { // client-side error
                errorMessage = `Error: ${err.error.message}`;
            } else { // server-side error
                errorMessage = `Error Status: ${err.status}. Message: ${err.message}`;
            }
            window.alert(errorMessage);

            return throwError(errorMessage);
        }))
    }
}