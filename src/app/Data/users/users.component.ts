import { Component, OnInit } from "@angular/core";
import { HttpHelpService } from "../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { HttpHeaders } from "@angular/common/http";
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from "@angular/forms";
import { UsersEndPoient } from "../service/global.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})

export class UsersComponent implements OnInit {
  dataId:any;
  allUsers:any;
  userRegistId:any;
  isLoading:boolean=false ;
  term:any;
  p: any;
  userId: any;
  user:any;

  addUser=new FormGroup({
    company_id:new FormControl(''),
    created_by:new FormControl(''),
    user_name:new FormControl(''),
    password:new FormControl(''),
    phoneNumber :new FormControl(''),  
  });
  constructor
  (
    private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private modalService: NgbModal,
    private Router:Router,
  ) 
  { 
    this.dataId = localStorage.getItem('companyId')
  };

  openXl(content:any) {
    this.modalService.open(content, { size: 'xl' });
  };
  
  openVerticallyCentered(dataDeleted:any) {
    this.modalService.open(dataDeleted, { centered: true });
  };

  getAllUsers(){

    this.spinner.show();
     this.service.getAllUserFromCompany(this.dataId ).subscribe(({
     next: res =>{
         this.allUsers = res;
          this.spinner.hide();

         console.log(this.allUsers);
     },
     error: error =>{
      console.log(error)
     }
     }));
  };

  getId(id:any)
  {
     this.userId = id ;
     console.log(this.userId);
  };

  addedData()
  {

     let model =
     {
      company_id: Number(this.dataId),
      user_name: this.addUser.value.user_name,
      password: this.addUser.value.password,
      phoneNumber: this.addUser.value.phoneNumber,
      created_by: Number(this.userRegistId),
     }
  
     this.service.Post(UsersEndPoient.POST , model ).subscribe(({
      next:response=>
      {
        console.log('success: ',response);
        Swal.fire({
          icon: 'success',
          title: 'تم اضافة مستخدم بنجاح',
        })
            this.modalService.dismissAll();
            this.getAllUsers();
            this.addUser.reset();
            this.spinner.hide();
         if(response.status == 400) {
          Swal.fire(response.errorEN);
        }
      },
      error:error =>
      {
        console.log('error: ', error)
        Swal.fire(error.errorEN);
      }
       
     }));
  };
  changeStatus(id:number, status:any){

    let model =
    {
     'status' : status == 1 ? 0 : 1,
    }

    this.service.changeUserStatus(id , model ).subscribe(({
      
      next:res =>{
        Swal.fire({
          icon: 'success',
          title: 'تم تعديل الحالة بنجاح',
        })
          this.getAllUsers()
      },
      error:err =>{
        Swal.fire(err.message)
      }
    }))
  };

  deleteCustomer() {

    this.service.deleteUser( this.userId ).subscribe(({
      next:res=> {
        
        Swal.fire({
          icon: 'success',
          title: 'تم حذف المستخدم بنجاح',
        })
            this.getAllUsers();
            this.allUsers = res;
            this.modalService.dismissAll()
            console.log(this.allUsers);
      },
      error:err =>{
        Swal.fire(err)
      }
    }))
  };
  ngOnInit() {
    this.getAllUsers();  
    this.userRegistId = JSON.parse(localStorage.getItem('user_id'))
    console.log(this.userRegistId);
  };
};
