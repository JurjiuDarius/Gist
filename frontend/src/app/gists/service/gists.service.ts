import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/environments';
import { Gist } from 'src/app/models/gist';
@Injectable({
  providedIn: 'root',
})
export class GistsService {
  private apiUrl = environment.gitApiUrl;
  gists: Gist[] = [];
  constructor(private http: HttpClient) {}

  getGistsForUser(username: string): Observable<any> {
    return this.http
      .get(this.apiUrl + `users/${username}/gists`)
      .pipe(
        tap(
          (gists: any) => (this.gists = gists.slice(0, environment.MAX_GISTS))
        )
      );
  }

  getGistForks(gistId: string): Observable<any> {
    return this.http.get(this.apiUrl + `gists/${gistId}/forks`);
  }
  getFileContent(url: string): Observable<any> {
    return this.http.get(url, { responseType: 'text' });
  }
  getGistDetails(gistId: string): Observable<any> {
    return this.http.get(this.apiUrl + `gists/${gistId}`);
  }
  getGists(): Gist[] {
    return this.gists;
  }
  setGists(gists: Gist[]) {
    this.gists = gists;
  }
}
