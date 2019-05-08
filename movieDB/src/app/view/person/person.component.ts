import { PersonService } from './../../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _personService: PersonService, private _router: Router) { }

  person = {};

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._personService.getById(id)
        .subscribe(response => {
          this.person = response;
          console.log(this.person)
        })
    });
  }

}
