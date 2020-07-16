import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Albuns} from '../model/albuns.model';
import {Observable} from 'rxjs';
import {Artists} from "../model/artists.model";


@Injectable({
  providedIn: 'root'
})
export class ApisService {

url = 'http://ws.audioscrobbler.com/2.0/';
apiKey = '997d8d682dd5f5a5205b0f7e9aa9e75f';


constructor(private httpClient: HttpClient) { }

  getAlbuns(username : string, period: string): Observable<Albuns> {
    return this.httpClient.get<Albuns>(this.url + '?method=user.gettopalbums' +
      '&user=' + username +
      '&limit=12' +
      '&api_key='+ this.apiKey +'&format=json' +
      '&period=' + period
    )
  }

  getArtists(artist: string): Observable<Artists> {
    return this.httpClient.get<Artists>(this.url + '?method=artist.getinfo' +
      '&artist=' + artist +
      '&api_key=' + this.apiKey +'&format=json&lang=pt')
  }
}
