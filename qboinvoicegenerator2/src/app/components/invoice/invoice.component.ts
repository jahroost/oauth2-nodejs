import { NotFoundError } from '../../common/not-found-error';
import { BadInput } from '../../common/bad-input';
import { AppError } from '../../common/app-error';
import { InvoiceService } from '../../services/invoicing/invoice.service';
import { Component, OnInit } from '@angular/core';
// import { HttpHeaders } from '@angular/common/http';
// import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})


export class InvoiceComponent implements OnInit {
  invoice;
  constructor(private service: InvoiceService) {
  }
  
  ngOnInit() {
  }
  
  createInvoice() {

    const invoice = {
      'Line': [
        {
          'Amount': 100.00,
          'DetailType': 'SalesItemLineDetail',
          'SalesItemLineDetail': {
            'ItemRef': {
              'value': '1',
              'name': 'Services'
            }
          }
        }
      ],
      'CustomerRef': {
        'value': '1'
      }
    };

    this.service.create()
      .then(
        newInvoice => {
          console.log(newInvoice)
          this.invoice = JSON.stringify(newInvoice, null, 2);
          // invoice['id'] = newInvoice.id;
            // this.posts.splice(0, 0, post);
          },
          (error: AppError) => {
            if (error instanceof BadInput) {
              // this.form.setErrors(error.originalError);
            } else {
              throw error;
            }
          });
  }
}
