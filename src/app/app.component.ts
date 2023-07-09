import { Component } from '@angular/core';
import * as AOS from 'aos';
import { AuthService } from './pages/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fatorhrtak';
  isLogin = true;
  constructor(private  authService:AuthService){
    this.authService.isLogin.subscribe(value => {
      this.isLogin = value;
    })
  }
  ngOnInit(){
    AOS.init();
  }
}
