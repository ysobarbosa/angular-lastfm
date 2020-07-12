import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApisService } from './service/apis.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from  '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbunsComponent } from './component/albuns/albuns.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AlbunsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [ApisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
