import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }            from './app.component';
import { ApisService }             from './service/apis.service';
import { MatCardModule }           from '@angular/material/card';
import { MatIconModule }           from '@angular/material/icon';
import { AppRoutingModule }        from './app-routing.module';
import { MatInputModule }          from '@angular/material/input';
import { MatButtonModule }         from  '@angular/material/button';
import { MatGridListModule }       from "@angular/material/grid-list";
import { MatFormFieldModule }      from "@angular/material/form-field";
import { AlbunsComponent }         from './component/albuns/albuns.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AlbunsComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ApisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
