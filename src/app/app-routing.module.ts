import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './shared/component/dashbord/dashbord.component';
import { GooglecardComponent } from './shared/component/googlecard/googlecard.component';

const routes: Routes = [
  {
    path : '', component : DashbordComponent
  },
  {
    path : 'link/:name', component : GooglecardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
