import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceService } from "./service.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    constructor(private service:ServiceService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq=req;
        let token=this.service.getToken();
        console.log(token);
        console.log("Interceptor",token);
        if(token!=null)
        {
            console.log("inside interccept");
            newReq=newReq.clone({setHeaders: {Authorization :`Bearer ${token}` },
        });
        }

        return next.handle(newReq);
    }
}

export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    },
];