import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AllGistsComponent } from './all-gists/all-gists.component';
import { GistsRoutingModule } from './gists-routing.module';

@NgModule({
  declarations: [AllGistsComponent],
  imports: [CommonModule, GistsRoutingModule],
})
export class GistsModule {}
