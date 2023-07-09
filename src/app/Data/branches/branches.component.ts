import { Component, OnInit , ViewChildren , QueryList} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import Swal from 'sweetalert2';
import { HttpHelpService } from "../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpHeaders } from "@angular/common/http";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from "src/app/sortable.directive";
import { BranchesEndPoient, CityEndPoient } from "../service/global.service";

@Component({
  selector: "app-branches",
  templateUrl: "./branches.component.html",
  styleUrls: ["./branches.component.css"]
})

export class BranchesComponent implements OnInit {
  
  allBranches:any;
  allCities:any;
  term:any;
  p: any;
  branchId: any;
  // branch:any;
  closeResult: string;
  isLoading:boolean=false ;
  dataId:any;
  userRegistId :any;
  otpCode: number;
  visible:any;
  currentStatus:boolean; // Use null as initial value

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;


  addBranch=new FormGroup({
    company_id:new FormControl(null),
    branch_name_ar:new FormControl(null),
    branch_name_en:new FormControl(null),
    branch_address:new FormControl(null),
    city_id:new FormControl(null),
    created_by:new FormControl(null),
  });


  constructor
    (
      private service:HttpHelpService ,
      private spinner: NgxSpinnerService , 
      private modalService: NgbModal,
    ) 
    { 
      this.dataId = localStorage.getItem('companyId')
    };

  getAllBranches(){

    
    this.spinner.show();
     this.service.getAllBrnchesByCompanyId(this.dataId ).subscribe(({
      
     next: res =>{
         this.allBranches = res;
          this.spinner.hide();
          const branch = this.allBranches.find((b: any) => b.branch_id === this.branchId);
          if (branch) {
            this.currentStatus = branch.status;
          } else {
            this.currentStatus = false; // Set a default value if branch is not found
          }
         console.log(this.allBranches);
     },
     error: error =>{
      console.log(error)
     }
     }));
  };

  getId(id:any)
  {
     this.branchId = id ;
     console.log(this.branchId);
  };

  addedData()
  {

     let model =
     {
      company_id: Number(this.dataId),
      branch_name_ar: this.addBranch.value.branch_name_ar,
      branch_name_en: this.addBranch.value.branch_name_en,
      branch_address  : this.addBranch.value.branch_address ,
      city_id :Number(this.addBranch.value.city_id),
      created_by: Number(this.userRegistId),
     }
  
     this.service.Post(BranchesEndPoient.POST , model  ).subscribe(({
      next:response=>
      {
        console.log('success: ',response);
        if(response?.status == 400){
            Swal.fire(response.error.message[0]);
        } else {
          Swal.fire(response.message);
        }
      },
      error:error =>
      {
        console.log('error: ', error)
        Swal.fire(error.error.message[0]);
      }
       
     }));
  };
  
  deleteBranch() {

    this.service.deleteBranch( this.branchId ).subscribe(({
      next:res=> {
        
        Swal.fire('تم حذف العنصر بنجاح');
            this.getAllBranches();
            this.allBranches = res;
            this.modalService.dismissAll()
            console.log(this.allBranches);
      },
      error:err =>{
        Swal.fire(err)
      }
    }))
  };

  changeStatus(id:number, status:any){

    let model =
    {
     'status' : status == 1 ? 0 : 1,
    }

    this.service.changeBranchStatus(id , model ).subscribe(({
      
      next:res =>{
        Swal.fire('تم تعديل الحالة بنجاح ');
          // this.allCustomers
          this.getAllBranches()
      },
      error:err =>{
        Swal.fire(err.message)
      }
    }))
  };

  openXl(content:any) {
    this.modalService.open(content, { size: 'xl' });
  };
  
  openVerticallyCentered(dataDeleted:any) {
    this.modalService.open(dataDeleted, { centered: true });
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

 filterCity(event:any)
 {
   let x = event.target.value;
   console.log(x)
 };
  ngOnInit() {
   this.getAllBranches();  
   this.getAllCities();
   this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
   console.log(this.userRegistId);
   this.currentStatus = false; // Replace with the actual initial status

  }
}
