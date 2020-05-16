import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalExceptionHandler } from './Handlers/errorHandler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: ErrorHandler, useClass: GlobalExceptionHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
