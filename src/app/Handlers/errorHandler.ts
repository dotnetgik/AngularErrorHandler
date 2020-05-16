import { Injectable, ErrorHandler } from "@angular/core";

@Injectable()
export class GlobalExceptionHandler implements ErrorHandler {
    
      handleError(error) {
          console.log(error);
             console.log("Exception Handling is been done from the Global Exception Handler" + error);   
      }

}