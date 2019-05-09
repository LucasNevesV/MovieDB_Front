import { TvService } from './../../../services/tv.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-edit',
  templateUrl: './tv-edit.component.html',
  styleUrls: ['./tv-edit.component.css']
})
export class TvEditComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _tvService: TvService) { }

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

}
