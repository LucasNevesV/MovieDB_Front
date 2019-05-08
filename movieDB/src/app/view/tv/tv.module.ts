import { TvRoutingModule } from './tv.routing.module';
import { TvComponent } from './tv.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TvComponent],
  imports: [
    CommonModule,
    TvRoutingModule
  ]
})
export class TvModule { }
