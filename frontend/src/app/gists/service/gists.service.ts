import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments';
@Injectable({
  providedIn: 'root',
})
export class GistsService {
  private apiUrl = environment.gitApiUrl;
  constructor(private http: HttpClient) {}

  getGistsForUser(username: string): Observable<any> {
    return this.http.get(this.apiUrl + `users/${username}/gists`);
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
}
