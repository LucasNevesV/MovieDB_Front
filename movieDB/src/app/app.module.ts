import { TvService } from './services/tv.service';
import { PersonService } from './services/person.service';
import { MovieComponent } from './view/movie/movie.component';
import { MovieService } from './services/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './view/person/person.component';
import { TvComponent } from './view/tv/tv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    PersonComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    PersonService,
    TvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
