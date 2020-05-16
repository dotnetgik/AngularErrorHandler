import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error-component/error-component.component';
import { DemoComponent } from './demo/demo.component';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';


const routes: Routes = [
  { path: 'error', component: ErrorComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'emp', component: EmpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
