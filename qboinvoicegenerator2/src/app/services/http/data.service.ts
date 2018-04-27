import { BadInput } from '../../common/bad-input';
import { NotFoundError } from '../../common/not-found-error';
import { AppError } from '../../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

// sandbox url
const baseurl = 'localhost:3000';

// live url
// const baseurl = 'https://quickbooks.api.intuit.com';


@Injectable()
export class DataService {

  constructor(private url: string, private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url)
      .map(response => response)
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, resource)
      .map(response => response)
      .catch(this.handleError);
  }

  // update(resource) {
  //   return this.http.patch(baseurl + '/' + resource.id, JSON.stringify({ isRead: true }))
  //     .map(response => JSON.stringify(response))
  //     .catch(this.handleError);
  // }

  // delete(id) {
  //   return this.http.delete(baseurl + '/' + id)
  //     .map(response => response)
  //     .catch(this.handleError);
  // }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    
    return Observable.throw(new AppError(error));
  }
}
