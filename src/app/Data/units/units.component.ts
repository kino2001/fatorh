import { Component, OnInit, QueryList, ViewChildren , } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgbdSortableHeader } from "src/app/sortable.directive";
import { HttpHelpService } from "../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UnitsEndPoient } from "../service/global.service";
import Swal from 'sweetalert2';

@Component({
  selector: "app-units",
  templateUrl: "./units.component.html",
  styleUrls: ["./units.component.css"]
})

export class UnitsComponent implements OnInit {
  
  closeResult: string;
  dataId:any;
  allProducts:any;
  userRegistId:any;
  userRegistId2:any;
  isLoading:boolean=false ;
  term:any;
  p: any;
  productId: any;
  allUnites:any;

  companyId = localStorage.getItem("companyId") || ''
  user_id = localStorage.getItem("user_id") || ''
  token =  localStorage.getItem("token") || ''

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  allBranches:any;
  userId: any;
  selectedOption: string;
  isCompany: boolean = false;
  id:any;


  addUnit=new FormGroup({
    company_id:new FormControl(''),
    unit_name_en:new FormControl(''),
    unit_name_ar:new FormControl(''),
    status :new FormControl(''),
    created_date :new FormControl(''),
    created_by:new FormControl(''),
  });


  constructor
  (private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private modalService: NgbModal,
  )
  {
 
    this.dataId = localStorage.getItem('companyId');
  };
 
  openXl(content:any) {
    this.modalService.open(content, { size: 'xl' });
  };
  
  openVerticallyCentered(dataDeleted:any) {
    this.modalService.open(dataDeleted, { centered: true });
  };

  getAllUnits(){
    
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
  
    getId(id:any)
    {
       this.productId = id ;
       console.log(this.productId);
    };
  
    changeStatus(id:number, status:any){
  
      let model =
      {
       'status' : status == 1 ? 0 : 1,
      }
  
      this.service.changeUnitStatus(id , model ).subscribe(({
        
        next:res =>{
            Swal.fire({
              icon: 'success',
              title: 'تم تعديل الحالة بنجاح',
            })
            // this.allProducts
            this.getAllUnits()
        },
        error:err =>{
          Swal.fire({
            icon: 'error',
            title: 'لا يمكن تحديث حالة هذا العنصر',
          })
        }
      }))
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

    filterStatus(event:any)
    {
      let x = event.target.value;
      console.log(x)
    };

    filterUnits(event:any)
    {
      let x = event.target.value;
      console.log(x)
    };
      addedData()
      {
  
         let model =
         {
          company_id: Number(this.dataId),
          unit_name_en:this.addUnit.value.unit_name_en,
          status:Number(this.addUnit.value.status),
          unit_name_ar: this.addUnit.value.unit_name_ar,
          created_date:this.addUnit.value.created_date,
          created_by: Number(this.userRegistId),
         }
           this.spinner.show();
         this.service.Post(UnitsEndPoient.POST , model  ).subscribe(({
          next:response=>
          {
            console.log('success: ',response);
            if(response?.status == 200){
              Swal.fire({
                icon: 'success',
                title: 'تم اضافة العنصر بنجاح',
              })  
                this.modalService.dismissAll();
                this.getAllUnits();
                this.addUnit.reset();
                this.spinner.hide();
            } else {
              Swal.fire(response.message);
              this.spinner.hide();
            }
          },
          error:error =>
          {
            for(let i = 0 ; i <error.error.message.length ; i++){
              Swal.fire(error.error.message[i]);
              console.log('error: ', error);
              this.spinner.hide();
            }
          }
           
         }));
      };
      
    ngOnInit() {
      this.spinner.show();
      this.getAllUnits();  
      this.getAllUnitesInfo();
      this.spinner.hide();
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'));
      console.log(this.userRegistId);

    };
}
