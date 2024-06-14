import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGistsComponent } from './all-gists/all-gists.component';

const routes: Routes = [
  {
    path: '',
    component: AllGistsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GistsRoutingModule {}
