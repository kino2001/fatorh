import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HttpHelpService } from "../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import { InvoicesEndPoient } from '../service/global.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.css"]
})

export class InvoicesComponent implements OnInit {

  imageTemplate:any[]= [
    {imageSrc:'../../../assets/template-invoice/invoice-1.PNG' , id:1 , invoice_number:1},
    {imageSrc:'../../../assets/template-invoice/invoice-2.PNG' , id:2 , invoice_number:2},
    {imageSrc:'../../../assets/template-invoice/invoice-3.PNG' , id:3 , invoice_number:3},
    {imageSrc:'../../../assets/template-invoice/invoice-4.PNG' , id:4 , invoice_number:4},
  ]


  dataId:any;
  allInvoices:any;
  userRegistId:any;
  isLoading:boolean=false ;
  term:any;
  p: any;
  userId: any;
  user:any;
  allCustomers:any;
  AllCompany:any;
  allProducts:any;
  allBranches:any;
  branchId: any;
  invoiceId:any;
  currentStatus:boolean; // Use null as initial value
  templateId:any;

  addInvoice=new FormGroup({
    company_id:new FormControl(''),
    created_by:new FormControl(''),
    invoice_date:new FormControl(''),
    payment_method:new FormControl(''),
    branch_id :new FormControl(''),
    note :new FormControl(''),
    type_owner :new FormControl(''),
    owner_name :new FormControl(''),
    address :new FormControl(''),
    phone:new FormControl(''),
    tax_registration_number:new FormControl(''),
    commercial_registration_number:new FormControl(''),
    price_before_tax:new FormControl(''),
    tax_amount:new FormControl(''),
    price_after_tax:new FormControl(''),
    Special_Discount:new FormControl(''),
    price_after_Special_Discount:new FormControl(''),
    reason_discount:new FormControl(''),
    customer_id:new FormControl(''),
    product_name:new FormControl(''),
    quantity:new FormControl(''),
    product_price:new FormControl(''),
    total_product_price:new FormControl(''),
    product_id:new FormControl(''),
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
  
  openVerticallyCentered(dataConfirm:any) {
    this.modalService.open(dataConfirm, { centered: true });
  };

  openTemplateCentered(Confirm:any) {
    this.modalService.open(Confirm, { centered: true });
  };

  openXl(content:any) {
    this.modalService.open(content, { size: 'xl' });
  };

  openXlImage(imageContent:any) {
    this.modalService.open(imageContent, { size: 'xl' });
  };

  getAllInvoices(){

    this.spinner.show();
     this.service.getAllInvoicesFromCompany(this.dataId  ).subscribe(({
     next: res =>{
         this.allInvoices = res;
          this.spinner.hide();

         console.log(this.allInvoices);
     },
     error: error =>{
      console.log(error)
      this.spinner.hide();

     }
     }));
  };

  getAllCustomers(){ 
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

    getAllProducts(){
        this.spinner.show();
         this.service.getAllProductsInfoByCompanyId(this.dataId).subscribe(({
          
         next: res =>{
             this.allProducts = res;
              this.spinner.hide();
    
             console.log(this.allProducts);
         },
         error: error =>{
          console.log(error);       
          this.spinner.hide();
         }
         }));
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
     this.userId = id ;
     console.log(this.userId);
  };

  getTemplateId(id:any){
       this.templateId = id;
       console.log(this.templateId);
  };

  getInvoiceId(id:any)
  {
     this.invoiceId = id ;

     console.log(this.invoiceId);
  };

  confirmTemplate()
  {
    this.spinner.show()
     this.service.printInvoiceByeTmpleteId(this.invoiceId , this.templateId).subscribe(({
      next:response=>
      {
        console.log('success: ',response);
        if(response.status == 200){
          Swal.fire('تم تحميل نموذج الفاتورة بنجاح');
          this.modalService.dismissAll();
          this.getAllInvoices();
          this.spinner.hide();  
        }
        this.spinner.hide();  

      },
      error:error =>
      {
        console.log('error: ', error)
        Swal.fire('تم تحميل نموذج الفاتورة بنجاح');
        this.modalService.dismissAll();
        this.getAllInvoices();
          this.spinner.hide();  

      }
       
     }));
  };

  getIdBranch(id:any)
  {
     this.branchId = id ;
     console.log(this.branchId);
  };
  addedData()
  {
   
     let model =
     {
      company_id: Number(this.dataId),
      status:this.addInvoice.value.status,
      name: this.addInvoice.value.name,
      phone: this.addInvoice.value.phone,
      is_company: Boolean(this.addInvoice.value.is_company),
      commercial_registration_number: this.addInvoice.value.commercial_registration_number,
      tax_registration_number: this.addInvoice.value.tax_registration_number,
      company_customer_address: this.addInvoice.value.company_customer_address,
      company_customer_name  : this.addInvoice.value.company_customer_name ,
      created_by: Number(this.userRegistId),
     }
       this.spinner.show();
     this.service.Post(InvoicesEndPoient.POST , model  ).subscribe(({
      next:response=>
      {
        console.log('success: ',response);
        if(response?.status == 200){
            Swal.fire('Created Sucssesfly');  
            this.modalService.dismissAll();
            this.getAllInvoices();
            this.addInvoice.reset();
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

  confirmInvoice()
  {

     this.service.confirmInvoice(this.invoiceId).subscribe(({
      next:response=>
      {
        console.log('success: ',response);
            Swal.fire(response.message.ar);
            this.modalService.dismissAll();
            this.getAllInvoices();
            this.spinner.hide();        
      },
      error:error =>
      {
        console.log('error: ', error)
        Swal.fire(error.error.message);
      }
       
     }));
  };
  filterData(event:any)
  {
    let x = event.target.value;
    console.log(x)
  };
  ngOnInit() {
    this.spinner.show()
    this.getAllInvoices();  
    this.getAllCustomers();
    this.getAllProducts();
    this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
    console.log(this.userRegistId);
    this.spinner.hide();
  };
}
