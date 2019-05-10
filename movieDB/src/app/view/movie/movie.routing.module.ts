import { EditComponent } from './edit/edit.component';
import { MovieComponent } from './movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {  path: ':id', component: MovieComponent },
    {  path: 'edit/:id', component: EditComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }
