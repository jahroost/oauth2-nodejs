// import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    // constructor(private oauthService: OAuthService) {
    // }

  ngOnInit() {
  }

  // public login() {
  //   console.log('anything?')
  //   this.oauthService.initImplicitFlow();
  // }

  // public logoff() {
  //     this.oauthService.logOut();
  // }

}
