import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments';
import { Gist } from 'src/app/models/gist';
import { extractFileExtension } from 'src/app/utils/string-utils';
import { GistsService } from '../service/gists.service';
@Component({
  selector: 'app-all-gists',
  templateUrl: './all-gists.component.html',
  styleUrls: ['./all-gists.component.scss'],
})
export class AllGistsComponent {
  // This is an account suggestion to showcase how the app works
  currentUsername: string = 'octocat';
  gists: Gist[] = [];

  constructor(private gistsService: GistsService, private router: Router) {
    this.checkCachedGists();
  }

  searchGistsForCurrentUser() {
    this.gistsService
      .getGistsForUser(this.currentUsername)
      .subscribe((gists) => {
        this.gists = gists.slice(0, environment.MAX_GISTS);
        this.gists.forEach((gist) => {
          this.gistsService.getGistForks(gist.id).subscribe((response) => {
            gist.forks = this.getLatestForks(response);
          });
        });
      });
  }

  getLatestForks(forks: any[], limit: number = 3) {
    forks.sort((a: any, b: any) => {
      return a.created_at - b.created_at;
    });
    const ownerNames: string[] = forks.splice(-limit).map((fork: any) => {
      return fork.owner.login;
    });
    return ownerNames;
  }
  checkCachedGists() {
    if (this.gistsService.getGists().length > 0) {
      this.gists = this.gistsService.getGists();
    } else {
      this.searchGistsForCurrentUser();
    }
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
