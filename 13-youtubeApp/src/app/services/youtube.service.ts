import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'APIKEY';
  private playlist = 'PLAYLIST_ID';
  private nextPageToken = '';
  
  constructor(public http: HttpClient) { }

  getVideos() {
    const url = `${ this.youtubeUrl}/playlistItems`;
    let params = new HttpParams();
    params = params.append('part', 'snippet');
    params = params.append('maxResults', '10');
    params = params.append('playlistId', this.playlist);
    params = params.append('key', this.apikey);

    if ( this.nextPageToken ) {
      params = params.append('pageToken', this.nextPageToken);
    }

    return this.http.get(url, { params }).pipe(
      map( (res: any) => {
        console.log(res);
        this.nextPageToken = res.nextPageToken;

        let videos: any[] = [];
        for (const video of res.items) {
          let snippet = video.snippet;
          videos.push(snippet);
        }
        return videos;
      })
    );
  }
}
