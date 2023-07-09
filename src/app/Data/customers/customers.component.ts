import { DecimalPipe } from '@angular/common';
import { COUNTRIES } from './../../countries';
import { Component, OnInit, QueryList, ViewChildren , } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "src/app/country";
import { CountryService } from 'src/app/country.service';
import { NgbdSortableHeader, SortEvent } from 'src/app/sortable.directive';
import { HttpHelpService } from '../service/http-help.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { CityEndPoient, CustomersEndPoient } from '../service/global.service';
import { Router } from '@angular/router';
declare let $: any
import Swal from 'sweetalert2';

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"],
  providers: [CountryService, DecimalPipe]

})

export class CustomersComponent implements OnInit {
  closeResult: string;
  dataId:any;
  allCustomers:any;
  userRegistId:any;
  userRegistId2:any;
  isLoading:boolean=false ;
  term:any;
  p: any;
  customerId: any;
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


  addCustomer=new FormGroup({
    company_id:new FormControl(''),
    created_by:new FormControl(''),
    name:new FormControl(''),
    phone:new FormControl(''),
    company_customer_name :new FormControl(''),
    company_customer_address :new FormControl(''),
    tax_registration_number :new FormControl(''),
    commercial_registration_number :new FormControl(''),
    is_company :new FormControl(''),
    status:new FormControl(''),
  });



  constructor
  (private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private modalService: NgbModal,
    private Router:Router,
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

  getAllCustomers(){

   console.log(this.token);

      this.spinner.show();
       this.service.getCustomersByCompanyId(this.dataId).subscribe(({
        
       next: res =>{
           this.allCustomers = res;
            this.spinner.hide();
  
           console.log(this.allCustomers);
       },
       error: error =>{
        console.log(error);       
        this.spinner.hide();
       }
       }));
    };
  
    getId(id:any)
    {
       this.customerId = id ;
       console.log(this.customerId);
    };
  
    deleteCustomer() {

      this.service.deleteCustomer( this.customerId ).subscribe(({
        next:res=> {
          
          Swal.fire(res.message);
              this.getAllCustomers();
              this.allCustomers = res;
              this.modalService.dismissAll()
              console.log(this.allCustomers);
        },
        error:err =>{
          Swal.fire(err)
        }
      }))
    };
  
    changeStatus(id:number, status:any){
  
      let header=new HttpHeaders({
        'companyId': localStorage.getItem("companyId") ?? "",
        'user_id': localStorage.getItem("user_id") ?? "",
        'token': localStorage.getItem("token") ?? "",
      });
  
      let model =
      {
       'status' : status == 1 ? 0 : 1,
      }
  
      this.service.changeCustomerStatus(id , model ).subscribe(({
        
        next:res =>{
          Swal.fire('تم تعديل الحالة بنجاح');
            // this.allCustomers
            this.getAllCustomers()
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
      addedData()
      {

         let model =
         {
          company_id: Number(this.dataId),
          status:this.addCustomer.value.status,
          name: this.addCustomer.value.name,
          phone: this.addCustomer.value.phone,
          is_company: Boolean(this.addCustomer.value.is_company),
          commercial_registration_number: this.addCustomer.value.commercial_registration_number,
          tax_registration_number: this.addCustomer.value.tax_registration_number,
          company_customer_address: this.addCustomer.value.company_customer_address,
          company_customer_name  : this.addCustomer.value.company_customer_name ,
          created_by: Number(this.userRegistId),
         }
           this.spinner.show();
         this.service.Post(CustomersEndPoient.POST , model  ).subscribe(({
          next:response=>
          {
            console.log('success: ',response);
            if(response?.status == 200){
                Swal.fire('تم اضافة عميل بنجاح');  
                this.modalService.dismissAll();
                this.getAllCustomers();
                this.addCustomer.reset();
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
      this.getAllCustomers();  
      this.getAllCities();
      this.spinner.hide()
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);

    };
}
