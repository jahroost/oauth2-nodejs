// import { OAuthService } from 'angular-oauth2-oidc';
import { LoginService } from '../../services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loggedIn = false;
  payload;
    constructor(private service: LoginService) {
    }

  ngOnInit() {
  }

  async loginUser() {
    this.payload = await this.service.login()
    // console.log('URL', this.url)
    this.loggedIn = true;
  }

  async launchPopup() {
    var win;
    var checkConnect;
    var parameters = "location=1,width=800,height=650";
    parameters += ",left=" + (screen.width - 800) / 2 + ",top=" + (screen.height - 650) / 2;
    // Launch Popup
    await this.loginUser()
    console.log('URL', this.payload.url)
    win = window.open(this.payload.url, 'connectPopup', parameters)
    if (win.url.contains('/callback')) {
      win.close();
    }
  }

  // public login() {
  //   console.log('anything?')
  //   this.oauthService.initImplicitFlow();
  // }

  // public logoff() {
  //     this.oauthService.logOut();
  // }

}
