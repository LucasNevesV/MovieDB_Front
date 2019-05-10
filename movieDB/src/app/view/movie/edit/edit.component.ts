import { MovieService } from './../../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService,private _router: Router) { }

  movie = {}
  date;

  alert:Boolean = false;

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._movieService.getById(id)
        .subscribe(response => {
          this.movie = response;
          this.date = this.movie;
        })
    });

    
  }
  
  updateMovie(movie){
    this._activatedRoute.params.subscribe(params => {
    //let movie = params['movie'];

    this._movieService.putById(this.movie)
      .subscribe(response => {
        this.movie = response;
        console.log(this.movie)
        this.alert = true;
      })
  });

  this._router.navigate(['movie', movie])

  }
}
