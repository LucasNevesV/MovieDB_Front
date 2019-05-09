import { MovieRoutingModule } from './movie.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [MovieComponent, EditComponent],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
