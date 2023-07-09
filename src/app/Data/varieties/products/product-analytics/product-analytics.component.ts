import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpHelpService } from "src/app/Data/service/http-help.service";

@Component({
  selector: "app-product-analytics",
  templateUrl: "./product-analytics.component.html",
  styleUrls: ["./product-analytics.component.css"]
})

export class ProductAnalyticsComponent implements OnInit {
  
   
  allCities:any;
  dataId:any;
  customerId: any;
  userRegistId :any;
  id:any;
  productDetails:any;
    constructor(
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private Router:Router,
    activatedRoute:ActivatedRoute)
    { 
      this.id = activatedRoute.snapshot.params['id']
      this.dataId = localStorage.getItem('companyId')
    };



  getProductAnalyticsById(){

    this.spinner.show()
    this.service.getProductsAnalytics(this.id  ).subscribe(({
      next:res => {
        this.productDetails = res;
        console.log(this.productDetails);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  }

  ngOnInit() {
    this.spinner.show();
    this.getProductAnalyticsById();
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);
  };
}
