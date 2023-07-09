import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpHelpService } from '../../service/http-help.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector:"app-analytics",
  templateUrl:"./analytics.component.html",
  styleUrls: ["./analytics.component.css"]
})

export class AnalyticsComponent implements OnInit {
  
  allCities:any;
  dataId:any;
  customerId: any;
  userRegistId :any;
  id:any;
  customerDetails:any;
    constructor(
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private Router:Router,
    activatedRoute:ActivatedRoute)
    { 
      this.id = activatedRoute.snapshot.params['id']
      this.dataId = localStorage.getItem('companyId')
    };



  getCustomerAnalyticsById(){
  
    let headers = new HttpHeaders( {
      'companyId': localStorage.getItem("companyId") ?? "",
      'user_id': localStorage.getItem("user_id") ?? "",
      'token': localStorage.getItem("token") ?? "",
    })
    this.spinner.show()
    this.service.getCustomerAnalytics(this.id  ).subscribe(({
      next:res => {
        this.customerDetails = res;
        console.log(this.customerDetails);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  }

  ngOnInit() {
    this.spinner.show();
    this.getCustomerAnalyticsById();
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);
  };
};
