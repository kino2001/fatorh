import { Component, OnInit } from "@angular/core";
import { CityEndPoient } from "../../service/global.service";
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpHelpService } from "../../service/http-help.service";

@Component({
  selector: "app-updatecompany",
  templateUrl: "./updatecompany.component.html",
  styleUrls: ["./updatecompany.component.css"]
})

export class UpdatecompanyComponent implements OnInit {
  
  allCities:any;
  dataId:any;
  allBranches:any;
  companyId: any;
  userRegistId :any;
  id:any;
  companyDetails:any;

    NameEn:string = '';
    NameAr:string = '';
    Address: string ='';
    Phone: string ='';
    constructor(
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private Router:Router,
    activatedRoute:ActivatedRoute)
    { 
      this.id = activatedRoute.snapshot.params['id']
      this.dataId = localStorage.getItem('companyId')
    };

    updateCompany=new FormGroup({
      company_id:new FormControl(''),
      updated_by:new FormControl(''),
      companyName:new FormControl(''),
      companyNameAr:new FormControl(''),
      address :new FormControl(''),
      phone_company:new FormControl(''),
    });

    
    updateData()
    {
     
       let model =
       {
        company_id: Number(this?.dataId),
        companyName: this?.updateCompany?.value?.companyName,
        companyNameAr: this?.updateCompany?.value?.companyNameAr,
        address  : this?.updateCompany?.value?.address ,
        phone_company :Number(this?.updateCompany?.value?.phone_company),
        updated_by: Number(this?.userRegistId),
       }
       this.spinner.show()

       this.service.updateCompany(this.id, model).subscribe(({
        next:response=>
        {
          console.log('success: ',response);
          if(response?.status == 400){
              Swal.fire(response.message);
          } else {
            Swal.fire('تم تعديل البيانات بنجاح');
            this.Router.navigate(['/admin/company']) 
            this.spinner.hide()
          }
        },
        error:error =>
        {
          console.log('error: ', error)
          Swal.fire(error.error.message);
          this.spinner.hide()
        }
         
       }));
    };


    getCompanyDetailsById(){

      this.spinner.show()
      this.service.getAllCompanyInfo(this.id).subscribe(({
        next:res => {
          this.companyDetails = res;
          this.NameEn = this.companyDetails?.companyName;
          this.NameAr = this.companyDetails?.companyNameAr;
          this.Phone = this.companyDetails?.phone_company;
          this.Address = this.companyDetails?.address;
          console.log(this.companyDetails);
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

      filterCity(event:any)
 {
   let x = event.target.value;
   console.log(x)
 };
 
 getId(id:any)
 {
    this.companyId = id ;
    console.log(this.companyId);
 };


  ngOnInit() {
    this.spinner.show();
    this.getCompanyDetailsById();
    this.getAllCities();
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);
  }
}
