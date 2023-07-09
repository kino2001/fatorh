import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { CityEndPoient } from "src/app/Data/service/global.service";
import { HttpHelpService } from "src/app/Data/service/http-help.service";
import Swal from 'sweetalert2';

@Component({
  selector: "app-update-product",
  templateUrl: "./update-product.component.html",
  styleUrls: ["./update-product.component.scss"]
})

export class UpdateProductComponent implements OnInit {
  
  allCities:any;
  dataId:any;
  customerId: any;
  userRegistId :any;
  id:any;
  productDetails:any;
  allUnites:any;

    PnameAr: string ='';
    PnameEn: string ='';
    Pcode: string ='';
    Pprics: string ='';
    Uid: string ='';

    constructor(
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private Router:Router,
    activatedRoute:ActivatedRoute)
    { 
      this.id = activatedRoute.snapshot.params['id']
      this.dataId = localStorage.getItem('companyId')
    };

    updateProduct=new FormGroup({
      updated_by:new FormControl(''),
      product_name_ar:new FormControl(''),
      product_name_en:new FormControl(''),
      product_code :new FormControl(''),  
      product_price:new FormControl(''),  
      unit_id :new FormControl(''),  
      status :new FormControl(''),  

    });

    
    updateData()
    {
       let model =
       {
        company_id: Number(this?.dataId),
        product_name_ar: this?.updateProduct?.value?.product_name_ar,
        product_name_en: this?.updateProduct?.value?.product_name_en,
        product_code  : this?.updateProduct?.value?.product_code ,
        product_price  : Number(this?.updateProduct?.value?.product_price) ,
        unit_id  : this?.updateProduct?.value?.unit_id ,
        status  : Number(this?.updateProduct?.value?.status ),
        updated_by: Number(this?.userRegistId),
       }
    
       this.service.updateProductById(this.id, model  ).subscribe(({
        next:response=>
        {
          console.log('success: ',response);
              // Swal.fire(response.message);
            Swal.fire('تم تعديل البيانات بنجاح ');
            this.Router.navigate(['/admin/products']) 
          
        },
        error:error =>
        {
          console.log('error: ', error)
          Swal.fire(error.error.message);
        }
         
       }));
    };

    getAllUnitesInfo(){
      this.spinner.show();
       this.service.getAllUnitesInfoByCompanyId(this.dataId).subscribe(({
        
       next: res =>{
           this.allUnites = res;
            this.spinner.hide();
  
           console.log(this.allUnites);
       },
       error: error =>{
        console.log(error)
       }
       }));
    };

    filterUnits(event:any)
    {
      let x = event.target.value;
      console.log(x)
    };
    getProductDetailsById(){

      this.spinner.show()
      this.service.getProductById(this.id  ).subscribe(({
        next:res => {
          this.productDetails = res;
          this.PnameAr = this.productDetails?.product_name_ar;
          this.PnameEn = this.productDetails?.product_name_en;
          this.Pcode = this.productDetails?.product_code;
          this.Pprics = this.productDetails?.product_price;
          this.Uid = this.productDetails?.unit_id;  
          console.log(this.productDetails);
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
    this.getProductDetailsById();
    this.getAllUnitesInfo();
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);
  }
}
