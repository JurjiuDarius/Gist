import { Component } from '@angular/core';
import { Gist } from 'src/app/models/gist';
import { extractFileExtension } from 'src/app/utils/string-utils';
import { GistsService } from '../service/gists.service';
@Component({
  selector: 'app-all-gists',
  templateUrl: './all-gists.component.html',
  styleUrls: ['./all-gists.component.scss'],
})
export class AllGistsComponent {
  currentUsername: string = 'matthewmueller';
  gists: Gist[] = [];

  constructor(private gistsService: GistsService) {}

  searchGistsForCurrentUser() {
    this.gistsService
      .getGistsForUser(this.currentUsername)
      .subscribe((gists) => {
        this.gists = gists;
        console.log(gists);
      });
  }
  getFileExtension(filename: string) {
    return extractFileExtension(filename);
  }
  objectKeys(obj: any) {
    return Object.keys(obj);
  }
}
