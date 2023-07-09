import { Component, OnInit, QueryList, ViewChildren , } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpHelpService } from "../service/http-help.service";
import { CityEndPoient, CompanyEndPoient } from "../service/global.service";
import Swal from 'sweetalert2';
import { NgbdSortableHeader } from "src/app/sortable.directive";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"]
})

export class CompanyComponent implements OnInit {
  
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

  AllCompany:any;
  userId: any;
  selectedOption: string;
  id:any;
  constructor
  (private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private modalService: NgbModal,
  )
  {
 
    this.dataId = localStorage.getItem('companyId');
  };


  // openXl(content:any) {
  //   this.modalService.open(content, { size: 'xl' });
  // };
  
  openVerticallyCentered(dataDeleted:any) {
    this.modalService.open(dataDeleted, { centered: true });
  };
  getCompanyInfoByid(){

    this.spinner.show();
     this.service.getAllCompanyInfo(this.dataId).subscribe(({
      
     next: res =>{
         this.AllCompany = res;
          this.spinner.hide();

         console.log(this.AllCompany);
     },
     error: error =>{
      console.log(error)
      this.spinner.hide();

     }
     }));
  };
  
    getId(id:any)
    {
       this.salesPersonId = id ;
       console.log(this.salesPersonId);
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
      this.getCompanyInfoByid();  
      this.getAllCities();
      this.spinner.hide()
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);

    };
}
