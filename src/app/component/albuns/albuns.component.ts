import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { ApisService }       from 'src/app/service/apis.service';
import { Albuns, Artists }   from 'src/app/model/albuns.model';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})

export class AlbunsComponent implements OnInit {
  albuns;
  alb: Albuns;
  artists: Artists;
  input = new FormGroup ({
    user: new FormControl(''),
  })
;

  constructor(private apisService: ApisService) {}

  ngOnInit(): void {
    this.getAlbuns();
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
    this.apisService.getAlbuns()
      .subscribe(
        (alb: any) => {
          this.alb = alb;
          this.albuns = this.objetoLista(this.alb.topalbums.album);
        });
  };

  getUser() {
    const user = this.input.controls.user.value; // retorna o usuario
    console.log(this.input.controls.user.value);
  }

  getArtists() {
    this.apisService.getArtists()
      .subscribe(
        (artists: Artists) => {
          this.artists = artists;
        }
      )
  };

}
