import { DataService } from '../http/data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class InvoiceService extends DataService {
  constructor(http: HttpClient) {

    // sandbox realmid
    const realmid = '123146028683054';

    // live realmid
    // const realmid = '123146014729599';

    super('api.intuit.com/v3/company/' + realmid + '/invoice', http);
   }
}
