import { PersonService } from './../../services/person.service';
import { TvService } from './../../services/tv.service';
import { MovieService } from './../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService,private _tvService: TvService,
    private _personService: PersonService, private _router: Router) { }

    shows = []

    type:String = '';

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.type = params['type'];

      if(this.type == 'movies'){
        this._movieService.getDiscover('20')
        .subscribe(response => {
          console.log(response);
          this.shows = response['content'];
        })
      }else if(this.type == 'tv'){
        this._tvService.getDiscover('20')
        .subscribe(response => {
          console.log(response);
          this.shows = response['content'];
        })
      }else if(this.type == 'people'){
        this._personService.getDiscover('20')
        .subscribe(response => {
          console.log(response);
          this.shows = response['content'];
        })
      }


    });
  }

  goPerson(person, type:string) {
    console.log(type)
    this._router.navigate([type, person.id])
  }

}
