import { TvService } from './../../services/tv.service';
import { Router } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageUrl: String = `https://image.tmdb.org/t/p`;

  posterURL = this.imageUrl + `/w185/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg`;

  images = [1, 2, 3].map(() => this.imageUrl +`/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg`);

  movies = [];
  shows = [];

  constructor(private _movieService: MovieService, private _router: Router, private _tvService: TvService) { }

  ngOnInit() {
    this._movieService.getDiscover(`5`).subscribe(
      response => {
        this.movies = response['content'];
      }
    )
    this._tvService.getDiscover(`5`).subscribe(
      response => {
        this.shows = response['content'];
      }
    )
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  goDetail(movie) {
    console.log(movie.id)
    this._router.navigate(['movie',movie.id])
  }

  goDetailTv(show) {
    console.log(show.id)
    this._router.navigate(['tv',show.id])
  }
  

}
