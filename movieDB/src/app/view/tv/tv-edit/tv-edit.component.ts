import { TvService } from './../../../services/tv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-edit',
  templateUrl: './tv-edit.component.html',
  styleUrls: ['./tv-edit.component.css']
})
export class TvEditComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _tvService: TvService, private _router: Router) { }

  show = {};

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._tvService.getById(id)
        .subscribe(response => {
          this.show = response;
        })
    });
  }

  updateMovie(show){
    this._activatedRoute.params.subscribe(params => {

    this._tvService.putById(this.show)
      .subscribe(response => {
        this.show = response;
        console.log(this.show)
      })
  });

  this._router.navigate(['tv', show])

  }

  goEdit(movie){
    this._router.navigate(['tv/edit', movie.id])
  }

}
