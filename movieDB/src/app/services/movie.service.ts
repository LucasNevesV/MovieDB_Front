
import { BaseService } from './base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }


  getDiscover(param: String) {
    return this._httpClient.get(`${this.URL}movies/movies?size=` + param)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}movies/${id}`)
  }

  getCast(id: String){
    return this._httpClient.get(`${this.URL}movieperson/${id}`)
  }
}
