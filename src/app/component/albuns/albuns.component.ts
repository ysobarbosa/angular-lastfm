import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/service/apis.service';
import {Albuns, Artists} from 'src/app/model/albuns.model';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {
  alb: Albuns;
  artists: Artists;

  constructor(private apisService: ApisService) {}

  ngOnInit(): void {
    this.getAlbuns();
    this.getArtists();
  }

  getAlbuns() {
    this.apisService.getAlbuns()
      .subscribe(
        (alb: Albuns) => {
          this.alb = alb;
          console.log(this.alb.topalbums.album[2].artist.name);
          console.log(this.alb.topalbums.album[2].image[2].text);
          console.log(this.alb.topalbums.album[2].url);
        });
  }

  getArtists() {
    this.apisService.getArtists()
      .subscribe(
        (artists: Artists) => {
          this.artists = artists;
          // console.log(this.artists);
          // console.log(this.artists.artist.name);
          // console.log(this.artists.artist.url);
          // console.log(this.artists.artist.similar.artist[1].name);
        }
      )
  }

}

// (data: Albuns) => {
//       this.albuns = data;
//       console.log("a variavel dsd", this.albuns);
//       console.log("a variavel", this.albuns.topalbuns.album);
//       console.log("o data que recebemos: ", data);
//     }, error => {
//         this.erro = error;
//         console.error("Erro")
// ;    })
