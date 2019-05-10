import { TvEditComponent } from './tv-edit/tv-edit.component';
import { TvComponent } from './tv.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {  path: ':id', component: TvComponent },
    {  path: 'edit/:id', component: TvEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TvRoutingModule { }
