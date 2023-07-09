import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpHelpService } from "../../service/http-help.service";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: "app-update-users",
  templateUrl: "./update-users.component.html",
  styleUrls: ["./update-users.component.css"]
})

export class UpdateUsersComponent implements OnInit {
  
  allCities:any;
  dataId:any;
  customerId: any;
  userRegistId :any;
  id:any;
  customerDetails:any;

    userName:string = '';
    Password: string ='';
    numberPhone: string ='';

    constructor(
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private Router:Router,
    activatedRoute:ActivatedRoute)
    { 
      this.id = activatedRoute.snapshot.params['id']
      this.dataId = localStorage.getItem('companyId')
    };

    updateUser=new FormGroup({
      company_id:new FormControl(''),
      updated_by:new FormControl(''),
      user_name:new FormControl(''),
      phoneNumber:new FormControl(''),
      password:new FormControl(''),
    });

    
    updateData()
    {
 
       let model =
       {
        company_id: Number(this?.dataId),
        user_name: this?.updateUser?.value?.user_name,
        phoneNumber: this?.updateUser?.value?.phoneNumber ,
        password :this?.updateUser?.value?.password,
        updated_by: Number(this?.userRegistId),
       }
    
       this.service.updateUser(this.id, model  ).subscribe(({
        next:response=>
        {
          console.log('success: ',response);
              Swal.fire(response.message);
            // Swal.fire('Updated Successfully ');
            this.Router.navigate(['/admin/users']) 
          
        },
        error:error =>
        {
          console.log('error: ', error)
          Swal.fire(error.error.message);
        }
         
       }));
    };


  getUserDetailsById(){

    this.spinner.show()
    this.service.getCustomerById(this.id  ).subscribe(({
      next:res => {
        this.customerDetails = res[0];
        this.userName = this.customerDetails?.user_name;
        this.Password = this.customerDetails?.password;
        this.numberPhone = this.customerDetails?.phoneNumber;

        console.log(this.customerDetails);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  }



 getId(id:any)
 {
    this.customerId = id ;
    console.log(this.customerId);
 };


  ngOnInit() {
    this.spinner.show();
    this.getUserDetailsById();
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);
  }
}
