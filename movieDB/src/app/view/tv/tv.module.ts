import { TvRoutingModule } from './tv.routing.module';
import { TvComponent } from './tv.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvEditComponent } from './tv-edit/tv-edit.component';

@NgModule({
  declarations: [TvComponent, TvEditComponent],
  imports: [
    CommonModule,
    TvRoutingModule
  ]
})
export class TvModule { }
