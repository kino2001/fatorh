import { Component, OnInit } from "@angular/core";
import { HttpHelpService } from "../../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpHeaders } from "@angular/common/http";
import { CityEndPoient } from "../../service/global.service";
import Swal from 'sweetalert2';

@Component({
  selector:"app-update-branch",
  templateUrl:"./update-branch.component.html",
  styleUrls: ["./update-branch.component.css"]
})

export class UpdateBranchComponent implements OnInit {
  
  allCities:any;
  dataId:any;
  allBranches:any;
  branchId: any;
  userRegistId :any;
  id:any;
  branchDetails:any;
  branchNameAR: string = '';
  branchNameEN: string = '';
  branchAddrees: string = '';
  branchCity: string = '';
  isSelected: boolean = false;

    constructor(
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private Router:Router,
    activatedRoute:ActivatedRoute)
    { 
      this.id = activatedRoute.snapshot.params['id']
      this.dataId = localStorage.getItem('companyId');
    };

    updateBranch=new FormGroup({
      company_id:new FormControl(''),
      updated_by:new FormControl(''),
      branch_name_ar:new FormControl(''),
      branch_name_en:new FormControl(''),
      branch_addrees :new FormControl(''),
      city_id:new FormControl(''),
    });

    
    updateData()
    {

       let model =
       {
        company_id: Number(this?.dataId),
        branch_name_ar: this?.updateBranch?.value?.branch_name_ar,
        branch_name_en: this?.updateBranch?.value?.branch_name_en,
        branch_addrees  : this?.updateBranch?.value?.branch_addrees ,
        city_id :Number(this?.updateBranch?.value?.city_id),
        updated_by: Number(this?.userRegistId),
       }
    
       this.service.updateBranch(this.id, model  ).subscribe(({
        next:response=>
        {
          console.log('success: ',response);
          if(response?.status == 400){
              Swal.fire(response.message);
          } else {
            Swal.fire("تم تعديل البيانات بنجاح");
            this.Router.navigate(['/admin//branches']) 
          }
        },
        error:error =>
        {
          console.log('error: ', error)
          Swal.fire(error.error.message);
        }
         
       }));
    };


  getBranchDetailsById(){
  
    this.service.getBranchById(this.id).subscribe(({
      next:res => {
        this.spinner.show()
        this.branchDetails = res[0];
        this.branchNameAR = this.branchDetails?.branch_name_ar;
        this.branchNameEN = this.branchDetails?.branch_name_en;
        this.branchAddrees = this.branchDetails?.branch_addrees;
        this.branchCity = this.branchDetails?.city_name_en;
        
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
    this.branchId = id ;
    console.log(this.branchId);
 };


  ngOnInit() {
    this.spinner.show();
    this.getAllCities();
    this.getBranchDetailsById();   
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);
  }
}
