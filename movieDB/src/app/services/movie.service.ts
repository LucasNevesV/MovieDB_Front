
import { BaseService } from './base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }


  getDiscover(param: String,page:string) {
    return this._httpClient.get(`${this.URL}movies/movies?page=` + page + '&size=' + param)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}movies/${id}`)
  }

  putById(movie) {
    console.log('foi')

    return this._httpClient.put(`${this.URL}movies/update`,movie)
  }

  getCast(id: String){
    return this._httpClient.get(`${this.URL}movieperson/${id}`)
  }

  getWithFilter(title: String){
    return this._httpClient.get(`${this.URL}/movies/filter/?title=` + title)
  }
}
