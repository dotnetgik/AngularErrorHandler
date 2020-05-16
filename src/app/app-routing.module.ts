import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error-component/error-component.component';
import { DemoComponent } from './demo/demo.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'error', component: ErrorComponent },
  { path: 'demo', component: DemoComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
