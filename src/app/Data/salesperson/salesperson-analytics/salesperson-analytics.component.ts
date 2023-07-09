import { Component, OnInit } from "@angular/core";
import { HttpHelpService } from "../../service/http-help.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-salesperson-analytics",
  templateUrl: "./salesperson-analytics.component.html",
  styleUrls: ["./salesperson-analytics.component.css"]
})

export class SalespersonAnalyticsComponent implements OnInit {
  
  allCities:any;
  dataId:any;
  customerId: any;
  userRegistId :any;
  id:any;
  salesPersonDetails:any;
    constructor(
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private Router:Router,
    activatedRoute:ActivatedRoute)
    { 
      this.id = activatedRoute.snapshot.params['id']
      this.dataId = localStorage.getItem('companyId')
    };



  getSalesPersonAnalyticsById(){
  
    this.spinner.show()
    this.service.getSalesPersonAnalytics(this.id).subscribe(({
      next:res => {
        this.salesPersonDetails = res;
        console.log(this.salesPersonDetails);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  }

  ngOnInit() {
    this.spinner.show();
    this.getSalesPersonAnalyticsById();
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);
  };
}
