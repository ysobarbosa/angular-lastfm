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
  albuns;
  constructor(private apisService: ApisService) {}

  ngOnInit(): void {
    this.getAlbuns();
    this.getArtists();
  }

  objetoLista = (objeto) => {
    const lista = [];
    const keys = Object.keys(objeto);
    keys.forEach(element => {
      const obj = {... objeto[element]};
      lista.push(obj);
    });
    return lista;
  }

  getAlbuns() {
    this.apisService.getAlbuns()
      .subscribe(
        (alb: any) => {
          this.alb = alb;
          this.albuns = this.objetoLista(this.alb.topalbums.album);
        });
  }

  getArtists() {
    this.apisService.getArtists()
      .subscribe(
        (artists: Artists) => {
          this.artists = artists;
        }
      )
  }

}
