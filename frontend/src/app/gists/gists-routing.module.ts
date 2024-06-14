import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGistsComponent } from './all-gists/all-gists.component';
import { GistDetailsComponent } from './gist-details/gist-details.component';

const routes: Routes = [
  {
    path: '',
    component: AllGistsComponent,
  },
  {
    path: 'gist-details/:id',
    component: GistDetailsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GistsRoutingModule {}
