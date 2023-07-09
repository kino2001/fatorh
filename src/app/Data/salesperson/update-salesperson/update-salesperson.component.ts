import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpHelpService } from "../../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from 'sweetalert2';
import { CityEndPoient } from "../../service/global.service";

@Component({
  selector: "app-update-salesperson",
  templateUrl: "./update-salesperson.component.html",
  styleUrls: ["./update-salesperson.component.css"]
})

export class UpdateSalespersonComponent implements OnInit {
  
  allCities:any;
  dataId:any;
  customerId: any;
  userRegistId :any;
  id:any;
  salesPersonDetails:any;

    salesPersonNameAr:string = '';
    salesPersonNameEn:string = '';
    Email: string ='';
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

    updateSalesPerson=new FormGroup({
      company_id:new FormControl(''),
      updated_by:new FormControl(''),
      salesperson_name_en:new FormControl(''),
      email:new FormControl('' , [Validators.required, Validators.email]),
      phone_number:new FormControl(''),
      salesperson_name_ar:new FormControl(''),
    });

    
    updateData()
    {
    
       let model =
       {
        company_id: Number(this?.dataId),
        salesperson_name_ar: this?.updateSalesPerson?.value?.salesperson_name_ar,
        salesperson_name_en: this?.updateSalesPerson?.value?.salesperson_name_en,
        email: this?.updateSalesPerson?.value?.email ,
        phone_number :this?.updateSalesPerson?.value?.phone_number,
        updated_by: Number(this?.userRegistId),
       }
          this.spinner.show()
       this.service.updateSalesPerson(this.id, model).subscribe(({
        next:response=>
        {
          console.log('success: ',response);
              // Swal.fire(response.message);
            Swal.fire('تم تعديل البيانات بنجاح ');
            this.Router.navigate(['/admin/salesperson']) 
          this.spinner.hide()
        },
        error:error =>
        {
          console.log('error: ', error)
          Swal.fire(error.error.message);
          this.spinner.hide()
        }
         
       }));
    };


  getSalesPersonDetailsById(){

    this.spinner.show()
    this.service.getSalesPersonById(this.id).subscribe(({
      next:res => {
        this.salesPersonDetails = res[0];
        this.salesPersonNameAr = this.salesPersonDetails?.salesperson_name_ar;
        this.salesPersonNameEn = this.salesPersonDetails?.salesperson_name_en;
        this.Phone = this.salesPersonDetails?.phone_number;
        this.Email = this.salesPersonDetails?.email;
        console.log(this.salesPersonDetails);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  }
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
    this.getSalesPersonDetailsById();
  
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);
  }
}
