import { TvComponent } from './view/tv/tv.component';
import { PersonComponent } from './view/person/person.component';
import { MovieComponent } from './view/movie/movie.component';

import { HomeComponent } from './view/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: 'movie/:id', component: MovieComponent},
  { path: 'tv/:id', component: TvComponent},
  { path: 'person/:id', component: PersonComponent},
  { path: 'Home', component: HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: 'Home'},
  { path: '**', redirectTo: 'Home' }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
