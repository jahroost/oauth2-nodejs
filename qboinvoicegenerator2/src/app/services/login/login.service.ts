import { DataService } from '../http/data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class LoginService extends DataService {
  constructor(http: HttpClient) {
    console.log('login service')
    super(http);
  }
}
