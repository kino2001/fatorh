import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPasswordEndPoient } from 'src/app/Data/service/global.service';
import { AuthService } from '../service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  isRequesting: boolean = false;


  ForgetPassword = new FormGroup({
    'company_id': new FormControl(null, [Validators.required]),
    'user_name': new FormControl('' ,[Validators.required , Validators.minLength(3), Validators.maxLength(20)]),
    });


  constructor( 
    private spinner: NgxSpinnerService ,
    private service:AuthService ,
    private Router:Router , ) { 

  };

  submitForget(ForgetPassword) {
    this.isRequesting = true;
    let model =  
    {
      "user_name": this.ForgetPassword.value.user_name ,
      "company_id": this.ForgetPassword.value.company_id ,
    }
    this.spinner.show();

    this.service.ForgotPassword(ForgotPasswordEndPoient.POST, model).subscribe(({
      
      next:response =>
      {
        this.isRequesting = false;

        this.spinner.show()
        if(response.status == 200)
        {
          alert(response.message_en);
          this.Router.navigate(['/page-login']);
        }
        else{
          if(response.status == 400){
            alert(response.error);

          }
          this.spinner.hide()
        }

        //  localStorage.setItem('user_email' , this.ForgetPassword.value.user_email);
        // this.HttpHelpersService.saveCurrentUser();
     
         
    },
    error:error =>
    {
      alert(error.error);
      this.isRequesting = false;

    }

    }));
  
  };


  ngOnInit() {
    this.spinner.show();

        setTimeout(() => {
           this.spinner.hide();
        }, 1500);
  }
}
