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
    private _movieService: MovieService, private _tvService: TvService,
    private _personService: PersonService, private _router: Router) { }

  shows = []

  type: String = '';
  page = '1';
  searchValue: String;
  qtd;

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.type = params['type'];
      if (this.type == 'movies') {
        this._movieService.getDiscover('12', this.page)
          .subscribe(response => {
            console.log(response);
            this.qtd = response['totalElements'];
            this.shows = response['content'];
          })
      } else if (this.type == 'tv') {
        this._tvService.getDiscover('12', this.page)
          .subscribe(response => {
            console.log(response);
            this.qtd = response['totalElements'];
            this.shows = response['content'];
          })
      } else if (this.type == 'people') {
        this._personService.getDiscover('12', this.page)
          .subscribe(response => {
            console.log(response);
            this.qtd = response['totalElements'];

            this.shows = response['content'];
          })
      }


    });
  }

  goPerson(person, type: string) {
    console.log(type)
    this._router.navigate([type, person.id])
  }

  changePage() {
    console.log(this.page)
    this._activatedRoute.params.subscribe(params => {
      this.type = params['type'];

      if (this.type == 'movies') {
        this._movieService.getDiscover('12', this.page)
          .subscribe(response => {
            console.log(response);
            this.shows = response['content'];
          })
      } else if (this.type == 'tv') {
        this._tvService.getDiscover('12', this.page)
          .subscribe(response => {
            console.log(response);
            this.shows = response['content'];
          })
      } else if (this.type == 'people') {
        this._personService.getDiscover('12', this.page)
          .subscribe(response => {
            console.log(response);
            this.shows = response['content'];
          })
      }


    });
  }

  performSearch(title) {
    console.log(this.type);
    if (this.type == 'movies') {
      this._movieService.getWithFilter(this.searchValue)
        .subscribe(response => {
          console.log(response);
          this.qtd = response['totalElements'];
          this.shows = response['content'];

        })
    }else if(this.type == 'tv'){
      this._tvService.getWithFilter(this.searchValue)
      .subscribe(response => {
        console.log(response);
        this.qtd = response['totalElements'];
        this.shows = response['content'];
      })
    }else if(this.type == 'people'){
      this._personService.getWithFilter(this.searchValue)
      .subscribe(response => {
        console.log(response);
        this.qtd = response['totalElements'];
        this.shows = response['content'];
      })
    }
  }

}
