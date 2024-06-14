import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AllGistsComponent } from './all-gists/all-gists.component';
import { GistsRoutingModule } from './gists-routing.module';
import { GistDetailsComponent } from './gist-details/gist-details.component';

@NgModule({
  declarations: [AllGistsComponent, GistDetailsComponent],
  imports: [CommonModule, GistsRoutingModule, FormsModule],
})
export class GistsModule {}
