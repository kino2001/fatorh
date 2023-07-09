import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren , } from "@angular/core";
import { CityEndPoient, PaymentbondsEndPoient } from "../service/global.service";
import Swal from 'sweetalert2';
import { NgbdSortableHeader } from "src/app/sortable.directive";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpHelpService } from "../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-payment-bonds",
  templateUrl: "./payment-bonds.component.html",
  styleUrls: ["./payment-bonds.component.css"]
})

export class PaymentBondsComponent implements OnInit {
  public file: any;
  url: any;

  closeResult: string;
  dataId:any;
  allPaymentbonds:any;
  userRegistId:any;
  userRegistId2:any;
  term:any;
  p: any;
  invoiceId: any;
  allCities:any;
 
  companyId = localStorage.getItem("companyId") || ''
  user_id = localStorage.getItem("user_id") || ''
  token =  localStorage.getItem("token") || ''

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  allConfirmedInvoices:any;
  AllCompany:any;
  allDetailsInputs:any;
  userId: any;
  newInvoiceId:any;
  priceAfterTax: string ='';
  companyNameAr: string ='';

  isInvoice: boolean = false;
  messageTextArea:string ;
  addPaymentbonds=new FormGroup({
    company_id:new FormControl(''),
    created_by:new FormControl(''),
    receipt_content:new FormControl(''),
    from_company :new FormControl(''),
    in_day :new FormControl(''),
    in_date :new FormControl(''),
    total_many :new FormControl(''),
    to_company :new FormControl(''),
    reason :new FormControl(''),
    invoice_id:new FormControl(''),
    customer_id :new FormControl(''),
  });

  constructor
  (private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private modalService: NgbModal,
    private cdRef:ChangeDetectorRef ,

  )
  {
 
    this.dataId = localStorage.getItem('companyId');
  };

  addedData()
  {
 
     let model =
     {
      company_id: Number(this.dataId),
      receipt_content:this.addPaymentbonds.value.receipt_content,
      from_company:this.addPaymentbonds.value.from_company,
      total_many:this.addPaymentbonds.value.total_many,
      to_company:this.addPaymentbonds.value.to_company,
      in_day:this.addPaymentbonds.value.in_day,
      in_date:this.addPaymentbonds.value.in_date,
      reason:this.addPaymentbonds.value.reason,
      invoice_id: Number(this.addPaymentbonds.value.invoice_id),
      customer_id: Number(this.addPaymentbonds.value.customer_id),
      created_by: Number(this.userRegistId),
     }
       this.spinner.show();
     this.service.Post(PaymentbondsEndPoient.POST , model  ).subscribe(({
      next:response=>
      {
        Swal.fire('تم اضافة سند الدفع بنجاح');
        this.modalService.dismissAll();
        this.getAllPaymentbonds();
        this.addPaymentbonds.reset();
        this.spinner.hide();
     if(response.status == 400) {
      Swal.fire(response.errorEN);
      this.spinner.hide();
    }
  },
  error:error =>
  {
    console.log('error: ', error)
    Swal.fire(error.errorEN);
    this.spinner.hide();
  }
       
     }));
  };

  openXl(content:any) {
    this.modalService.open(content, { size: 'xl' });
  };
  
  openVerticallyCentered(uploadData:any) {
    this.modalService.open(uploadData, { centered: true ,size: 'xl'});
  };


  openVerticallyCenteredTwo(viewData:any) {
    this.modalService.open(viewData, { centered: true ,size: 'xl'});
  };

    
  files: File[] = [];

  onFileChanged(event: any) {
    this.file = event.target.files[0];
    this.url = event.target.result;
  
   if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
  
          reader.onload = (event:any) => {
            this.url = reader.result
            this.cdRef.detectChanges();
          }
  
          reader.readAsDataURL(event.target.files[0]);
  
      };
  };

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  uploadFile()
  {
 
    const formData= new FormData();
    if(this.file != null){
      formData.append("file", this.file, this.file.name);
    }
       this.spinner.show();
     this.service.uploadPaymenbonds(this.invoiceId , formData  ).subscribe(({
      next:response=>
      {
        Swal.fire('تم رفع سند الدفع بنجاح');
        this.modalService.dismissAll();
        this.getAllPaymentbonds();
        this.addPaymentbonds.reset();
        this.spinner.hide();
     if(response.status == 400) {
      Swal.fire(response.message);
      this.spinner.hide();
    }
  },
  error:error =>
  {
    console.log('error: ', error)
    Swal.fire(error.message);
    this.spinner.hide();
  }
       
     }));
  };
  getAllPaymentbonds(){
     /* in table */ 
    this.spinner.show();
     this.service.getAllActivePaymentbondsByCompanyId(this.dataId ).subscribe(({
      
     next: res =>{
         this.allPaymentbonds = res;
          this.spinner.hide();

         console.log(this.allPaymentbonds);
     },
     error: error =>{
      console.log(error)
     }
     }));
  };

  getAllInvoicesConfirmFromCompany() {
    /* select*/
    this.spinner.show();
    this.service.getAllInvoicesConfirmFromCompany(this.dataId).subscribe({
      next: res => {
        this.allConfirmedInvoices = res;
        this.spinner.hide();
  
        console.log(this.allConfirmedInvoices);
  
 
        
      },
      error: error => {
        console.log(error);
      }
    });
  }

  
getInvoiceByIdFromReceipt(x: number) { // Accept x as a parameter
  /* بتأخد الإيدي بتاع الفاتورة عشان نجيب منها البيانات نبعتها في الإنبوت */
  
  this.service.getInvoiceByIdFromReceipt(x).subscribe({
    next: res => {
      

      this.allDetailsInputs = res[0];
      this.priceAfterTax = this.allDetailsInputs?.price_after_tax
      this.companyNameAr = this.allDetailsInputs?.company_Name_ar

      console.log(this.allDetailsInputs);
    },
    error: error => {
      console.log(error);
      
    }
  });
}

filterId(event: any) {
  let x = event.target.value;
  console.log(x);

  // Call getInvoiceByIdFromReceipt function with x
  this.getInvoiceByIdFromReceipt(Number(x));
  this.isInvoice = true;
};

    getId(id:any)
    {
       this.invoiceId = id ;

       console.log(this.invoiceId);
    };
  

    ngOnInit() {
      this.spinner.show()
      this.getAllPaymentbonds();  
      this.getAllInvoicesConfirmFromCompany();
      // this.getCompanyInfoByid()
      this.getInvoiceByIdFromReceipt(Number('x'));
      this.spinner.hide();
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'));
      console.log(this.userRegistId);
      this.messageTextArea='وفي ذلك، أتعهد بأن هذا المبلغ المذكور أعلاة قد تم استلامه بالكامل وأنني لا أملك أي مطالبات أو حقوق أخرى تتعلق بهذا المبلغ';
    };
}
