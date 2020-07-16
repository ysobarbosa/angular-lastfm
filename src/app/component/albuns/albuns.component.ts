import {Component, OnInit} from '@angular/core';
import {Artists} from "../../model/artists.model";
import {Albuns} from 'src/app/model/albuns.model';
import {FormControl, FormGroup} from "@angular/forms";
import {ApisService} from 'src/app/service/apis.service';


@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})

export class AlbunsComponent implements OnInit {

  periods: any[] = [
    {name: '7 dias', data: '7day'},
    {name: '1 mês', data: '1month'},
    {name: '3 meses', data: '3month'},
    {name: '6 meses', data: '6month'},
    {name: '12 meses', data: '12month'},
    {name: 'Geral', data: 'overall'}
  ];

  albuns;
  artistBio;
  alb: Albuns;
  artists: any;
  input = new FormGroup({
    username: new FormControl('Yasminio'),
    period: new FormControl('')
  });

  constructor(private apisService: ApisService) {

  }

  ngOnInit(): void {

  }

  objetoLista = (objeto) => {
    const lista = [];
    const keys = Object.keys(objeto);
    keys.forEach(element => {
      const obj = {... objeto[element]};
      lista.push(obj);
    });
    return lista;
  };

  getAlbuns() {
    const period = this.input.controls.period.value;
    const username = this.input.controls.username.value;
    this.apisService.getAlbuns(username, period)
      .subscribe(
        (alb: any) => {
          this.alb = alb;
          this.albuns = this.objetoLista(this.alb.topalbums.album);
        });
  };

  getArtists(artistName: string) {
    this.apisService.getArtists(artistName)
      .subscribe(
        (artists: Artists) => {
          this.artists = this.objetoLista(artists);
          this.artistBio = this.artists[0].bio.summary;
        }
      );
  };
}
