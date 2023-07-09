import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { HttpHelpService } from 'src/app/Data/service/http-help.service';
// import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/pages/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	dataId:any;
	allInfo:any;

	toggleChat: boolean = true;
	toggleSingle: boolean = true;
	isLogin:boolean = false;

	constructor(public router: Router , private authService:AuthService , private service:HttpHelpService ,) {

		authService.currentUser.subscribe(()=>{
			if(authService.currentUser.getValue() != null)
			{
			   this.isLogin = true;
			}
			else
			{
			  this.isLogin = false ;
			};
		  });
	      this.dataId = localStorage.getItem('user_id');

    }	

	isLogOut()
    {
      this.authService.logout();
	  localStorage.clear()
	  this.router.navigate(['/page-login'])
    };

	getProfileByUserId(){

	
		 this.service.getProfileInfo(this.dataId).subscribe(({
		  
		 next: res =>{
			 this.allInfo = res[0];
	
			 console.log(this.allInfo);
		 },
		 error: error =>{
		  console.log(error)
	
		 }
		 }));
	  };
	ngOnInit(): void {
		this.getProfileByUserId();
	};
	
	
	togglechatbar() {
		this.toggleChat = !this.toggleChat;
	}
	singleChatWindow() {
		this.toggleSingle = !this.toggleSingle;
	}

}
