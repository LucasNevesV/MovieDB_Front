import { TvService } from './../../services/tv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _tvService: TvService, private _router: Router) { }

  show = {};
  urlb: String;
  cast = {};
  seasonSelected: String = '';

  ngOnInit() {
    
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._tvService.getById(id)
        .subscribe(response => {
          this.show = response;
          console.log(this.show)
        })

      this._tvService.getCast(id)
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
