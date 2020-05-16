import { Injectable, ErrorHandler, NgZone, EventEmitter, Injector } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
      providedIn: 'root'
      })
export class GlobalExceptionHandler implements ErrorHandler {
     
      isInErrorState:boolean = false;
  errorEvent:EventEmitter<boolean> = new EventEmitter<boolean>(true);
    constructor(private router:Router, private zone:NgZone){

    }
      handleError(error) {
            console.log(error);
            this.zone.run(()=>{
                  this.router.navigate(['error'],{state:{data:{error}}});
                }); 
      }

}