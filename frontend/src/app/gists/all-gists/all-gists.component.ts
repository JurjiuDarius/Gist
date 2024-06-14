import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private gistsService: GistsService, private router: Router) {}

  searchGistsForCurrentUser() {
    this.gistsService
      .getGistsForUser(this.currentUsername)
      .subscribe((gists) => {
        console.log(gists);
        this.gists = gists.slice(0, 3);
        this.gists.forEach((gist) => {
          this.gistsService.getGistForks(gist.id).subscribe((response) => {
            //Sort the forks in ascending order and get latest 3
            response.sort((a: any, b: any) => {
              return a.created_at - b.created_at;
            });
            const forks: string[] = response.splice(-3).map((fork: any) => {
              return fork.owner.login;
            });

            gist.forks = forks;
          });
        });
      });
  }
  onGistClick(id: string) {
    this.router.navigate(['/gist-details/' + id]);
  }
  getFileExtension(filename: string) {
    return extractFileExtension(filename);
  }
  objectKeys(obj: any) {
    return Object.keys(obj);
  }
}
