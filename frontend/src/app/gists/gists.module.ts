import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AllGistsComponent } from './all-gists/all-gists.component';
import { GistsRoutingModule } from './gists-routing.module';

@NgModule({
  declarations: [AllGistsComponent],
  imports: [CommonModule, GistsRoutingModule, FormsModule],
})
export class GistsModule {}
