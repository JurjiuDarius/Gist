import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GistFile } from 'src/app/models/gist-file';
import { GistsService } from '../service/gists.service';

@Component({
  selector: 'app-gist-details',
  templateUrl: './gist-details.component.html',
  styleUrls: ['./gist-details.component.scss'],
})
export class GistDetailsComponent {
  files: GistFile[] = [];
  constructor(
    private gistsService: GistsService,
    private route: ActivatedRoute
  ) {
    const gistId = this.route.snapshot.params['id'];

    this.gistsService.getGistDetails(gistId).subscribe((response) => {
      Object.keys(response.files).forEach((key) => {
        this.gistsService
          .getFileContent(response.files[key].raw_url)
          .subscribe((content) => {
            this.files.push({
              filename: key,
              content: content,
            });
          });
      });
    });
  }
}
