import { Component, OnInit } from "@angular/core";
import { HttpHelpService } from "../../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';

@Component({
  selector: "app-view-payment",
  templateUrl: "./view-payment.component.html",
  styleUrls: ["./view-payment.component.css"]
})

export class ViewPaymentComponent implements OnInit {
  
  allCities:any;
  dataId:any;
  customerId: any;
  userRegistId :any;
  id:any;
  paymentbondsDetails:any;

  priceAfterTax: string ='';
  companyNameAr: string ='';
  TaxReg: string ='';
  CompanyLogo:string='';
  InDate:string='';
  InDay:string='';
  Reason:string='';
  ReciptContent:string='';
  TotalMoney:string='';
  ToCompany:string='';
  FromCompany:string='';
  Commercialregistration:string='';
  ReciptId:string='';

  
  

    constructor(
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private Router:Router,
    activatedRoute:ActivatedRoute)
    { 
      this.id = activatedRoute.snapshot.params['id']
      this.dataId = localStorage.getItem('companyId')
    };

    exportPdf(){
      // let model = this.id
      this.service.exportPdf(this.id ).subscribe(({
        next:res => {
          if(res.status == 200){
            Swal.fire('تم تحميل سند الدفع بنجاح');
            const blob = new Blob([res.body], { type: 'application/pdf' });
            saveAs(blob, 'اسم الملف.pdf');
    
          }
        },
        error:err => {
          console.log(err);
          
        }
      }))
    }

    getPaymentbondsById(){
  
      this.spinner.show()
      this.service.getPaymentbondsById(this.id  ).subscribe(({
        next:res => {
          this.paymentbondsDetails = res[0];
          this.priceAfterTax = this.paymentbondsDetails?.price_after_tax;
          this.companyNameAr = this.paymentbondsDetails?.company_Name_ar;
          this.TaxReg = this.paymentbondsDetails?.taxRegistration;
          this.CompanyLogo = this.paymentbondsDetails?.company_logo;
          this.InDate = this.paymentbondsDetails?.in_date;
          this.InDay=this.paymentbondsDetails?.in_day;
          this.Reason=this.paymentbondsDetails?.reason;
          this.ReciptContent=this.paymentbondsDetails?.receipt_content;
          this.TotalMoney=this.paymentbondsDetails?.total_many;
          this.ToCompany=this.paymentbondsDetails?.to_company;
          this.FromCompany=this.paymentbondsDetails?.from_company;
          this.Commercialregistration=this.paymentbondsDetails?.commercialRegistration;
          this.ReciptId=this.paymentbondsDetails?.receipt_id;

          
          
          
          console.log(this.paymentbondsDetails);
          this.spinner.hide();
        },
        error:err => {
          console.log(err);
          
        }
      }))
    }

  ngOnInit() {
    this.spinner.show();
    this.getPaymentbondsById();
    this.exportPdf();
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);

  };
}
