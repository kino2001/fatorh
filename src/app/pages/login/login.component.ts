import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginEndPoient } from 'src/app/Data/service/global.service';
import { HttpHelpService } from 'src/app/Data/service/http-help.service';
import { AuthService } from '../service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string = '';

  constructor(private service:HttpHelpService ,
      private Router:Router,
      private authService:AuthService ,
      private spinner: NgxSpinnerService ,) {}

      loginForm = new FormGroup({
          'company_id': new FormControl(null, [Validators.required]),
          'user_name': new FormControl('' ,[Validators.required , Validators.minLength(3), Validators.maxLength(20)]),
          'password': new FormControl('' , [Validators.required , Validators.pattern(/^(?=.*[!@#$%^&*()_\-+=<>?])[A-Z][A-Za-z0-9!@#$%^&*()_\-+=<>?]{3,20}$/)]),
  
        });

  submitLoginForm(loginForm:FormGroup)
  {
    let model =  
    {
      "company_id":Number(loginForm.value.company_id) ,
      "password" : loginForm.value.password,
      "user_name" : loginForm.value.user_name,
    };
    this.spinner.show();

    this.authService.Login(LoginEndPoient.POST,model ).subscribe(({
      next:response=>
      {
        console.log('success: ',response);
          if(response.status == 400 || response.status == 403){
              // Swal.fire(response.error_en);
          } 
          else {
          localStorage.setItem('token',response.accessToken) ;  
          localStorage.setItem('user_id',response.userData[0].user_id) ;  
          localStorage.setItem('companyId',response.userData[0].company_id) ;  

          //Check Verified
            if(response.userData[0].verified == 1)  {
              //Check Payment
              if(response.CompanyData[0].status == 1) {
                  localStorage.setItem('token' , response.accessToken );[]
                  this.authService.saveCurrentUser();
                   this.Router.navigate(['/admin/index']);
              //No Payment go payment
              } else if(response.CompanyData[0].status == 95) {
                  this.Router.navigate(['/page-register'])
              }
              this.spinner.hide();
            } 
            //Not Verified
            else {
              this.Router.navigate(['/otp'])

            }
          }
          this.spinner.hide();

      },
      error:error =>
      {
        console.log('error: ', error)
        // Swal.fire(error.error_en);
        this.spinner.hide();

      }
    }))
  
  }

  ngOnInit() {
      this.spinner.show();

      setTimeout(() => {
         this.spinner.hide();
      }, 1500);
  }

  onLoggedin() {
      localStorage.setItem('isLoggedin', 'true');
  }
}
