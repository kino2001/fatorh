import { CityEndPoient } from './../../Data/service/global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHelpService } from 'src/app/Data/service/http-help.service';
import { AuthService } from '../service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyEndPoient, RegisterEndPoient } from 'src/app/Data/service/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  allCurrency:any;
  isLoading:boolean=false ;
  error:string = '';
  allCities:any;
  constructor(  private service:HttpHelpService ,
    private Router:Router,
    private authService:AuthService ,
    private spinner: NgxSpinnerService ,) { }

    registerForm = new FormGroup({
      'companyName': new FormControl('' , [Validators.required ,Validators.minLength(3) ,Validators.maxLength(100)]),
      'companyNameAr': new FormControl('' , [Validators.required ,Validators.minLength(3) ,Validators.maxLength(100)]),
      'phoneNumber': new FormControl('' ,[Validators.required ]),
      'commercialRegistration' : new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}') ,Validators.maxLength(10) ,Validators.minLength(10)]),
      'taxRegistration': new FormControl('', [Validators.required, Validators.pattern('[0-9]{15}') ,Validators.maxLength(15) ,Validators.minLength(15)]),
      'address': new FormControl('' ,[Validators.required ]),
      'phone_company': new FormControl('' ,[Validators.required ]),
      'currency_id': new FormControl('' ,[Validators.required ]),
      'city_id': new FormControl('' ,[Validators.required ]),
      'user_name': new FormControl('' ,[Validators.required , Validators.minLength(3), Validators.maxLength(20)]),
      'password': new FormControl('' , [Validators.required , Validators.pattern(/^(?=.*[!@#$%^&*()_\-+=<>?])[A-Z][A-Za-z0-9!@#$%^&*()_\-+=<>?]{3,20}$/)]),

    });
 
    submitRigisterForm(registerForm)
    {
      // let header=new HttpHeaders({
      //   'company_id':localStorage.getItem("company_id")??""
      // });
      
      let model =  
      {
        "companyName": this.registerForm.value.companyName ,
        "companyNameAr" : this.registerForm.value.companyNameAr,
        "password" : this.registerForm.value.password,
        "phoneNumber" : this.registerForm.value.phoneNumber,
        'commercialRegistration':this.registerForm.value.commercialRegistration,
        "taxRegistration" : this.registerForm.value.taxRegistration,
        "address" : this.registerForm.value.address,
        "phone_company" : this.registerForm.value.phone_company,
        "currency_id" : this.registerForm.value.currency_id,
        "city_id" : this.registerForm.value.currency_id,
        "user_name" : this.registerForm.value.user_name,
      };
      this.spinner.show();

      this.authService.Register(RegisterEndPoient.POST,model ).subscribe(({
        next:response=>
        {
          this.spinner.show();
          console.log(this.registerForm.value)
          console.log('success:', response)
          if(response.status == 400 || response.status == 403){
            // Swal.fire(response.error_en);
            this.spinner.hide()
          }  else {
              localStorage.setItem('user_id',JSON.stringify(response.userInfo[0].user_id) )
              // Swal.fire(`Registered successfully, Your Company ID is: ${response.company.company_id}, Please save it to use it in Login `);
              this.Router.navigate(['/page-otp'])
              this.spinner.hide();

            }
        },
        error:error =>
        {
          // Swal.fire(error);
          this.spinner.hide();
        }
      }))
    
    }

  getAllCurrncy()
  {
    
    this.isLoading = true ;
    this.service.getData(CurrencyEndPoient.GET).subscribe(({
      next: responce => {

        this.allCurrency = responce;
        this.isLoading = false ;

        console.log( this.allCurrency);

      },
      error: error => 
      {
        alert(error.message);
        this.isLoading = false;
      } 
  }));
       };

  filterCurrncy(event:any)
       {
         let x = event.target.value;
         console.log(x)
       };

       filterCity(event:any)
       {
         let x = event.target.value;
         console.log(x)
       };

       getAllCities(){
        this.service.getData(CityEndPoient.GET).subscribe(({
        next: res =>{
            this.allCities = res;
            console.log(this.allCities);
        },
        error: error =>{
         console.log(error)
        }
        }));
     };
    
     toggleEye: boolean = true;
  
     toggleEyeIcon(inputPassword:any) {
       this.toggleEye = !this.toggleEye;
       
       inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';
   
       
     }
   

  ngOnInit() {
      this.spinner.show();
      this.getAllCurrncy();
      this.getAllCities();
      setTimeout(() => {
         this.spinner.hide();
      }, 1500);
  }
}
