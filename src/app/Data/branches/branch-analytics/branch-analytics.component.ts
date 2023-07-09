import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpHelpService } from "../../service/http-help.service";

@Component({
  selector: "app-branch-analytics",
  templateUrl:"./branch-analytics.component.html",
  styleUrls: ["./branch-analytics.component.css"]
})

export class BranchAnalyticsComponent implements OnInit {
  
  allCities:any;
  dataId:any;
  customerId: any;
  userRegistId :any;
  id:any;
  branchDetails:any;
    constructor(
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private Router:Router,
    activatedRoute:ActivatedRoute)
    { 
      this.id = activatedRoute.snapshot.params['id']
      this.dataId = localStorage.getItem('companyId')
    };



  getBranchAnalyticsById(){
  
    let headers = new HttpHeaders( {
      'companyId': localStorage.getItem("companyId") ?? "",
      'user_id': localStorage.getItem("user_id") ?? "",
      'token': localStorage.getItem("token") ?? "",
    })
    this.spinner.show()
    this.service.getBranchAnalytics(this.id  ).subscribe(({
      next:res => {
        this.branchDetails = res;
        console.log(this.branchDetails);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  }

  ngOnInit() {
    this.spinner.show();
    this.getBranchAnalyticsById();
    setTimeout(() => {
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);
          this.spinner.hide();
    }, 1000);
  };
}
