import { EditComponent } from './edit/edit.component';
import { MovieComponent } from './movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {  path: '', component: MovieComponent },
    {  path: 'edit', component: EditComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }
