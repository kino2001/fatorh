import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit, QueryList, ViewChildren , } from "@angular/core";
import Swal from 'sweetalert2';
import { HttpHelpService } from "../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { FormControl, FormGroup } from "@angular/forms";
import { NgbdSortableHeader } from "src/app/sortable.directive";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CityEndPoient, SalesPersonEndPoient } from "../service/global.service";

@Component({
  selector: "app-salesperson",
  templateUrl: "./salesperson.component.html",
  styleUrls: ["./salesperson.component.css"]
})

export class SalespersonComponent implements OnInit {
  
  closeResult: string;
  dataId:any;
  allSaelsPerson:any;
  userRegistId:any;
  userRegistId2:any;
  isLoading:boolean=false ;
  term:any;
  p: any;
  salesPersonId: any;
  allCities:any;
 
  companyId = localStorage.getItem("companyId") || ''
  user_id = localStorage.getItem("user_id") || ''
  token =  localStorage.getItem("token") || ''

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  allBranches:any;
  userId: any;
  selectedOption: string;
  isCompany: boolean = false;
  id:any;

  addSalesPerson=new FormGroup({
    company_id:new FormControl(''),
    created_by:new FormControl(''),
    salesperson_name_en:new FormControl(''),
    salesperson_name_ar:new FormControl(''),
    email :new FormControl(''),
    phone_number :new FormControl(''),
  });

  constructor
  (private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private modalService: NgbModal,
  )
  {
 
    this.dataId = localStorage.getItem('companyId');
  };

  addedData()
  {

     let model =
     {
      company_id: Number(this.dataId),
      salesperson_name_en:this.addSalesPerson.value.salesperson_name_en,
      salesperson_name_ar: this.addSalesPerson.value.salesperson_name_ar,
      email: this.addSalesPerson.value.email,
      phone_number: this.addSalesPerson.value.phone_number,
      created_by: Number(this.userRegistId),
     }
       this.spinner.show();
     this.service.Post(SalesPersonEndPoient.POST , model  ).subscribe(({
      next:response=>
      {
        console.log('success: ',response);
            Swal.fire('تم اضافة مندوب مبيعات بنجاح');  
            this.modalService.dismissAll();
            this.getAllSaelsPerson();
            this.addSalesPerson.reset();
            this.spinner.hide();
 
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
 
  openXl(content:any) {
    this.modalService.open(content, { size: 'xl' });
  };
  
  openVerticallyCentered(dataDeleted:any) {
    this.modalService.open(dataDeleted, { centered: true });
  };
  getAllSaelsPerson(){

    this.spinner.show();
     this.service.getAllSalesPersonFromCompany(this.dataId ).subscribe(({
      
     next: res =>{
         this.allSaelsPerson = res;
          this.spinner.hide();

         console.log(this.allSaelsPerson);
     },
     error: error =>{
      console.log(error)
     }
     }));
  };
  
    getId(id:any)
    {
       this.salesPersonId = id ;
       console.log(this.salesPersonId);
    };
  
    deleteSales() {
      this.service.deleteSalesPerson( this.salesPersonId ).subscribe(({
        next:res=> {
          
          Swal.fire('تم حذف العنصر بنجاح');
              this.getAllSaelsPerson();
              this.allSaelsPerson = res;
              this.modalService.dismissAll()
              console.log(this.allSaelsPerson);
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
  
      this.service.changeSalesPersonStatus(id , model ).subscribe(({
        
        next:res =>{
          Swal.fire('تم تعديل الحالة بنجاح');
            // this.allCustomers
            this.getAllSaelsPerson()
        },
        error:err =>{
          Swal.fire(err.message)
        }
      }))
    };
  
    toggleIsCompany() {
      this.isCompany = this.selectedOption === 'company';
    };
    filterStatus(event:any)
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
    
     filterCity(event:any)
     {
       let x = event.target.value;
       console.log(x)
     };
    

    ngOnInit() {
      this.spinner.show()
      this.getAllSaelsPerson();  
      this.getAllCities();
      this.spinner.hide()
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);

    };
}
