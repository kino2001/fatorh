import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpHelpService } from 'src/app/Data/service/http-help.service';

@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css']
})
export class Index1Component implements OnInit {
  allPlans:any
  allActivePlans:any;
  dataId:any;
  userRegistId:any;
  constructor
  (private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private modalService: NgbModal,
  )
  {
    this.dataId = localStorage.getItem('companyId');
  };

  getSubscribePlan(){

    this.spinner.show();
     this.service.getSuscribPlan(this.dataId).subscribe(({
      
     next: res =>{
         this.allPlans = res;
          this.spinner.hide();

         console.log(this.allPlans);
     },
     error: error =>{
      console.log(error)
      this.spinner.hide();

     }
     }));
  };

  getAcitvePlan(){

    this.spinner.show();
     this.service.getActivePlan().subscribe(({
      
     next: res =>{
         this.allActivePlans = res;
          this.spinner.hide();

         console.log(this.allActivePlans);
     },
     error: error =>{
      console.log(error)
      this.spinner.hide();

     }
     }));
  };

  ngOnInit(): void {
    this.spinner.show();
    this.getSubscribePlan();
    this.getAcitvePlan();
    this.userRegistId = JSON.parse(localStorage.getItem('user_id'))

    this.spinner.hide();

  }
  
 

}
