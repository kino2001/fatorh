import { Component, OnInit, QueryList, ViewChildren , } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpHelpService } from "../../service/http-help.service";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { NgbdSortableHeader } from "src/app/sortable.directive";
import { ProductsEndPoient } from "../../service/global.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})

export class ProductsComponent implements OnInit {
  
  closeResult: string;
  dataId:any;
  allProducts:any;
  userRegistId:any;
  userRegistId2:any;
  isLoading:boolean=false ;
  term:any;
  p: any;
  productId: any;
  allCities:any;
  allUnites:any;

  companyId = localStorage.getItem("companyId") || ''
  user_id = localStorage.getItem("user_id") || ''
  token =  localStorage.getItem("token") || ''

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  allBranches:any;
  userId: any;
  selectedOption: string;
  isCompany: boolean = false;
  id:any;


  addProduct=new FormGroup({
    company_id:new FormControl(''),
    product_name_ar:new FormControl(''),
    product_name_en:new FormControl(''),
    unit_id :new FormControl(''),  
    status :new FormControl(''),  
    product_price :new FormControl(''),  
    product_code:new FormControl(''),
    address :new FormControl(''),  
    created_by:new FormControl(''),
    
  });



  constructor
  (private service:HttpHelpService ,
    private spinner: NgxSpinnerService ,
    private modalService: NgbModal,
    private Router:Router,
  )
  {
 
    this.dataId = localStorage.getItem('companyId');
  };
 
  openXl(content:any) {
    this.modalService.open(content, { size: 'xl' });
  };
  
  openVerticallyCentered(dataDeleted:any) {
    this.modalService.open(dataDeleted, { centered: true });
  };

  getAllProducts(){

    console.log(this.token);

      this.spinner.show();
       this.service.getAllProductsInfoByCompanyId(this.dataId).subscribe(({
        
       next: res =>{
           this.allProducts = res;
            this.spinner.hide();
  
           console.log(this.allProducts);
       },
       error: error =>{
        console.log(error);       
        this.spinner.hide();
       }
       }));
    };
  
    getId(id:any)
    {
       this.productId = id ;
       console.log(this.productId);
    };
  
    deleteProduct() {

      this.service.deleteProductById( this.productId ).subscribe(({
        next:res=> {
          
          Swal.fire(res.message);
              this.getAllProducts();
              this.allProducts = res;
              this.modalService.dismissAll()
              console.log(this.allProducts);
        },
        error:err =>{
          Swal.fire(err)
        }
      }))
    };
  
    changeStatus(id:number, status:any){
  
      let model =
      {
       'status' : status == 1 ? 0 : 1,
      }
  
      this.service.changeProductStatus(id , model ).subscribe(({
        
        next:res =>{
          Swal.fire('تم تعديل الحالة بنجاح');
            // this.allProducts
            this.getAllProducts()
        },
        error:err =>{
          Swal.fire(err.message)
        }
      }))
    };
  
    getAllUnitesInfo(){
      
      this.spinner.show();
       this.service.getAllUnitesInfoByCompanyId(this.dataId).subscribe(({
        
       next: res =>{
           this.allUnites = res;
            this.spinner.hide();
  
           console.log(this.allUnites);
       },
       error: error =>{
        console.log(error)
       }
       }));
    };

    filterStatus(event:any)
    {
      let x = event.target.value;
      console.log(x)
    };

    filterUnits(event:any)
    {
      let x = event.target.value;
      console.log(x)
    };
      addedData()
      {
  
         let model =
         {
          company_id: Number(this.dataId),
          unit_id: Number(this.addProduct.value.unit_id),
          product_code:this.addProduct.value.product_code,
          address: this.addProduct.value.address,
          product_name_ar: this.addProduct.value.product_name_ar,
          product_name_en: this.addProduct.value.product_name_en,
          product_price: Number(this.addProduct.value.product_price),
          created_by: Number(this.userRegistId),
          status: Number(this.addProduct.value.status),
         }
           this.spinner.show();
         this.service.Post(ProductsEndPoient.POST , model  ).subscribe(({
          next:response=>
          {
            console.log('success: ',response);
            if(response?.status == 200){
                Swal.fire('تم اضافة منتج بنجاح');  
                this.modalService.dismissAll();
                this.getAllProducts();
                this.addProduct.reset();
                this.spinner.hide();
            } else {
              Swal.fire(response.message);
              this.spinner.hide();
            }
          },
          error:error =>
          {
            for(let i = 0 ; i <error.error.message.length ; i++){
              Swal.fire(error.error.message[i]);
              console.log('error: ', error);
              this.spinner.hide();
            }
          }
           
         }));
      };
      
    
     filterCity(event:any)
     {
       let x = event.target.value;
       console.log(x)
     };
    

    ngOnInit() {
      this.spinner.show();
      this.getAllProducts();  
      this.getAllUnitesInfo();
      this.spinner.hide();
      this.userRegistId = JSON.parse(localStorage.getItem('user_id'));
      console.log(this.userRegistId);

    };
}
