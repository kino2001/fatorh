import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { OtpEndPoient } from "src/app/Data/service/global.service";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";
import { HttpHelpService } from "src/app/Data/service/http-help.service";

@Component({
  selector: "app-otp",
  templateUrl: "./otp.component.html",
  styleUrls: ["./otp.component.css"]
})

export class OtpComponent implements OnInit {
  error:string = '';
  userRegistId :any;
  otpCode: number;

  constructor(private service:HttpHelpService ,
    private Router:Router,
    private authService:AuthService ,
    private spinner: NgxSpinnerService ,) {}

otp()
{
  let model =  
  {
    "user_id": Number(this.userRegistId),
    "otp" : this.otpCode
  };
  this.spinner.show();


  this.authService.Otp(OtpEndPoient.POST,model ).subscribe(({
    
    next:response=>
    {
      this.spinner.show();
      console.log('success: ',response);
      if(response?.status == 400){
          // Swal.fire(response.message);
      } else {
        // Swal.fire(response.message);
        this.Router.navigate(['/page-login']) 
      }
      this.spinner.hide();
    },
    error:error =>
    {
      console.log('error: ', error)
      // Swal.fire('Code is not correct please try again.');
    }
  }))

}

onLoggedin() {
  localStorage.setItem('isLoggedin', 'true');
}
ngOnInit() {
   this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
   console.log(this.userRegistId);
   
}
}
