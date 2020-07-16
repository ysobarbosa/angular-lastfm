import { NgModule }                         from '@angular/core';
import { HttpClientModule }                 from '@angular/common/http'
import { BrowserModule }                    from '@angular/platform-browser';

import { ApisService }                      from './service/apis.service';
import { AppComponent }                     from './app.component';
import { MatIconModule }                    from '@angular/material/icon';
import { MatCardModule }                    from '@angular/material/card';
import { MatInputModule }                   from '@angular/material/input';
import { MatSelectModule }                  from "@angular/material/select";
import { MatButtonModule }                  from  '@angular/material/button';
import { AlbunsComponent }                  from './component/albuns/albuns.component';
import { MatDividerModule }                 from '@angular/material/divider';
import { AppRoutingModule }                 from './app-routing.module';
import { MatGridListModule }                from '@angular/material/grid-list';
import { MatExpansionModule }               from "@angular/material/expansion";
import { MatFormFieldModule }               from '@angular/material/form-field';
import { MatSlideToggleModule }             from "@angular/material/slide-toggle";
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    MatDividerModule,
    AppRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [ApisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
