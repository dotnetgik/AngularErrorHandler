import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalExceptionHandler } from './Handlers/errorHandler';
import { ErrorComponent } from './error-component/error-component.component';
import { DemoComponent } from './demo/demo.component';
import { HttpErrorInterceptor } from './Interceptors/errorInterceptors';
import { EmpComponent } from './emp/emp.component';
import { EmployeeDataService } from './dataservice/employee.data.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    DemoComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalExceptionHandler},
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor,multi: true},
    EmployeeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
