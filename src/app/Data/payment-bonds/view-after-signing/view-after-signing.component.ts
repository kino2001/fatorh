import { Component, OnInit } from "@angular/core";
import { HttpHelpService } from "../../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-view-after-signing",
  templateUrl: "./view-after-signing.component.html",
  styleUrls: ["./view-after-signing.component.css"]
})

export class ViewAfterSigningComponent implements OnInit {
  
  dataId:any;
  customerId: any;
  userRegistId :any;
  id:any;
  paymentbondsDetails:any;
  imageAfterSigning:string='';

    constructor(
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private Router:Router,
    activatedRoute:ActivatedRoute)
    { 
      this.id = activatedRoute.snapshot.params['id']
      this.dataId = localStorage.getItem('companyId')
    };



    getPaymentbondsById(){
  
      this.spinner.show()
      this.service.getPaymentbondsById(this.id  ).subscribe(({
        next:res => {
          this.paymentbondsDetails = res[0];
          this.imageAfterSigning = this.paymentbondsDetails?.form_after_signing;
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
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);

  };
}
