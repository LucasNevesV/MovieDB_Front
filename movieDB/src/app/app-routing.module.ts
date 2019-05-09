import { SearchComponent } from './view/search/search.component';
import { TvComponent } from './view/tv/tv.component';
import { PersonComponent } from './view/person/person.component';
import { MovieComponent } from './view/movie/movie.component';

import { HomeComponent } from './view/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: 'movie/:id', loadChildren: './view/movie/movie.module#MovieModule'},
  { path: 'search/:type', component: SearchComponent},
  { path: 'tv/:id', loadChildren: './view/tv/tv.module#TvModule'},
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
