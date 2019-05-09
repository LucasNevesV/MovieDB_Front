import { TvModule } from './view/tv/tv.module';
import { TvService } from './services/tv.service';
import { PersonService } from './services/person.service';
import { MovieService } from './services/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './view/person/person.component';
import { SearchComponent } from './view/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent,
    SearchComponent
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
