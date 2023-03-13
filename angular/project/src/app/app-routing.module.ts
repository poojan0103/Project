import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddemployeeComponent
  },
  {
    path:'list',
    component:ListemployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
