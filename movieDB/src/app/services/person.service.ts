
import { BaseService } from './base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersonService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }


  getDiscover(param: String,page:String) {
    return this._httpClient.get(`${this.URL}people?page=` + page + '&size=' + param)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}people/${id}`)
  }

  getCast(id: String){
    return this._httpClient.get(`${this.URL}movieperson/${id}`)
  }

  getWithFilter(title: String){
    return this._httpClient.get(`${this.URL}people/filter/?title=` + title)
  }

  putById(person) {

    return this._httpClient.put(`${this.URL}people/update`,person)
  }
}
