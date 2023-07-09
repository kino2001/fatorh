import { Component, OnInit } from "@angular/core";
import { HttpHelpService } from "../../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-user-analytics",
  templateUrl: "./user-analytics.component.html",
  styleUrls: ["./user-analytics.component.css"]
})

export class UserAnalyticsComponent implements OnInit {
  
  allCities:any;
  dataId:any;
  customerId: any;
  userRegistId :any;
  id:any;
  userDetails:any;
    constructor(
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private Router:Router,
    activatedRoute:ActivatedRoute)
    { 
      this.id = activatedRoute.snapshot.params['id']
      this.dataId = localStorage.getItem('companyId')
    };



  getUserAnalyticsById(){
  
    let headers = new HttpHeaders( {
      'companyId': localStorage.getItem("companyId") ?? "",
      'user_id': localStorage.getItem("user_id") ?? "",
      'token': localStorage.getItem("token") ?? "",
    })
    this.spinner.show()
    this.service.getUserAnalytics(this.id  ).subscribe(({
      next:res => {
        this.userDetails = res;
        console.log(this.userDetails);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  }

  ngOnInit() {
    this.spinner.show();
    this.getUserAnalyticsById();
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);
  };
}
