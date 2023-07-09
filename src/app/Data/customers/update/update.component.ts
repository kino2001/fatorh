import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpHelpService } from "../../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import Swal from 'sweetalert2';
import { CityEndPoient } from "../../service/global.service";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"]
})

export class UpdateComponent implements OnInit {
  
  allCities:any;
  dataId:any;
  customerId: any;
  userRegistId :any;
  id:any;
  customerDetails:any;

    Name:string = '';
    Company_customer_name: string ='';
    Company_customer_address: string ='';
    Phone: string ='';
    Tax_registration_number: string ='';
    Commercial_registration_number: string ='';
    Is_company: boolean = false;

    constructor(
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private Router:Router,
    activatedRoute:ActivatedRoute)
    { 
      this.id = activatedRoute.snapshot.params['id']
      this.dataId = localStorage.getItem('companyId')
    };

    updateCustomer=new FormGroup({
      company_id:new FormControl(''),
      updated_by:new FormControl(''),
      status:new FormControl(''),
      name:new FormControl(''),
      company_customer_name:new FormControl(''),
      company_customer_address:new FormControl(''),
      tax_registration_number:new FormControl(''),
      commercial_registration_number:new FormControl(''),
      phone :new FormControl(''),
      is_company :new FormControl(''),
    });

    
    updateData()
    {
  
       let model =
       {
        company_id: Number(this?.dataId),
        status: Number(this?.updateCustomer?.value.status),
        name: this?.updateCustomer?.value?.name,
        company_customer_name: this?.updateCustomer?.value?.company_customer_name,
        phone: this?.updateCustomer?.value?.phone ,
        company_customer_address :this?.updateCustomer?.value?.company_customer_address,
        tax_registration_number :this?.updateCustomer?.value?.tax_registration_number,
        commercial_registration_number :this?.updateCustomer?.value?.commercial_registration_number,
        is_company :this?.updateCustomer?.value?.is_company,
        updated_by: Number(this?.userRegistId),
       }
    
       this.service.updateCustomer(this.id, model  ).subscribe(({
        next:response=>
        {
          console.log('success: ',response);
              Swal.fire(response.message);
            // Swal.fire('Updated Successfully ');
            this.Router.navigate(['/admin/customers']) 
          
        },
        error:error =>
        {
          console.log('error: ', error)
          Swal.fire(error.error.message);
        }
         
       }));
    };


  getCustomerDetailsById(){

    this.spinner.show()
    this.service.getCustomerById(this.id  ).subscribe(({
      next:res => {
        this.customerDetails = res[0];
        this.Name = this.customerDetails?.name;
        this.Tax_registration_number = this.customerDetails?.tax_registration_number;
        this.Company_customer_name = this.customerDetails?.company_customer_name;
        this.Company_customer_address = this.customerDetails?.company_customer_address;
        this.Commercial_registration_number = this.customerDetails?.commercial_registration_number;
        this.Is_company=this.customerDetails?.is_company;
        this.Phone=this.customerDetails?.phone;

        console.log(this.customerDetails);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  }


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

     filterStatus(event:any)
  {
    let x = event.target.value;
    console.log(x)
  };
 
 getId(id:any)
 {
    this.customerId = id ;
    console.log(this.customerId);
 };


  ngOnInit() {
    this.spinner.show();
    this.getCustomerDetailsById();
    this.getAllCities();
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);
  }
}
