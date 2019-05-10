
import { BaseService } from './base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TvService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }


  getDiscover(param: String,page:string) {
    return this._httpClient.get(`${this.URL}tvs/tvs?page=` + page + '&size=' + param)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}tvs/${id}`)
  }

  getCast(id: String){
    return this._httpClient.get(`${this.URL}movieperson/${id}`)
  }

  getWithFilter(title: String){
    return this._httpClient.get(`${this.URL}tvs/filter/?title=` + title)
  }

  putById(show) {

    return this._httpClient.put(`${this.URL}tvs/update`,show)
  }
}
