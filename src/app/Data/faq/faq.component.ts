import { Component, OnInit, QueryList, ViewChildren , } from "@angular/core";
import { HttpHelpService } from "../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdSortableHeader } from "src/app/sortable.directive";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"]
})

export class FaqComponent implements OnInit {
  

  closeResult: string;
  dataId:any;
  userRegistId:any;
  userRegistId2:any;

 
  companyId = localStorage.getItem("companyId") || ''
  user_id = localStorage.getItem("user_id") || ''
  token =  localStorage.getItem("token") || ''

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  allFaqs:any;
  userId: any;
  selectedOption: string;
  id:any;


  constructor
  (private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private modalService: NgbModal,
  )
  {
 
    this.dataId = localStorage.getItem('companyId');
  };

  
 

  getAllFaq(){

    this.spinner.show();
     this.service.getAllActiveQuestionsByCompanyId( ).subscribe(({
     next: res =>{
         this.allFaqs = res;
          this.spinner.hide();

         console.log(this.allFaqs);
     },
     error: error =>{
      console.log(error)
     }
     }));
  };

    ngOnInit() {
      this.spinner.show()
      this.getAllFaq();  
      this.spinner.hide()
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
      console.log(this.userRegistId);

    };
}
