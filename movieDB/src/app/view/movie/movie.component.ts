import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService, private _router: Router) { }

  movie = {}
  cast = {}
  urlb: String;

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._movieService.getById(id)
        .subscribe(response => {
          this.movie = response;
          console.log(this.movie)
        })

      this._movieService.getCast(id)
        .subscribe(response => {
          this.cast = response['cast'];
        })
    });
  }

  goPerson(person) {
    this._router.navigate(['person', person.id])
  }

  getBackdrop(path: String) {
    this.urlb = 'linear-gradient(rgba(0,0,0,0.5), rgba(100,100,100,0.5)),url("https://image.tmdb.org/t/p/original' + path + '")';
    return this.urlb;

  }

}
