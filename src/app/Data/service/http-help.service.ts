import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './global.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpHelpService {


  headers:any; 

  constructor(private _HttpClient: HttpClient,private Router:Router) {};

  /* global function */ 
  getData(endPoint: string ): Observable<any> 
  {
      return this._HttpClient.get<any>(baseUrl + endPoint)
  };

  Post(endPoint : string ,model: any ): Observable<any> {
    return this._HttpClient.post<any>(baseUrl + endPoint, model)
  };

  /* */

  /* branche function */ 

  getAllBrnchesByCompanyId(id:number ):Observable<any>{
   return this._HttpClient.get<any>(`${baseUrl}branche/getAllBrnchsByCompany/${id}`)
  };

  updateBranch(id : any ,model: any ): Observable<any> {
    return this._HttpClient.put<any>(`${baseUrl}branche/${id}`, model)
  };

  getBranchById(id:any ):Observable<any>
  {
    return this._HttpClient.get<any>(`${baseUrl}branche/${id}`)     
  };

 deleteBranch(id:number): Observable<any> 
 {
   return this._HttpClient.delete<any>(`${baseUrl}branche/${id}`)
 };

 changeBranchStatus(id:number, model:any ): Observable<any> 
 {
  console.log(id);
   return this._HttpClient.put<any>(`${baseUrl}branche/status/${id}`,model );
 };

 getBranchAnalytics (id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}branche/getBranchAnalytics/${id}`)
 };
 /* */

 /* subscribe plan */
 
 getSuscribPlan (id:number):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}Subscribe_to_plans/getDocumentsAnalytics/${id}`)
 };
 
 /* active plan */
 
 getActivePlan ( ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}plan/getAllActivePlans`)
 };

 /* profile */ 
 getProfileInfo (id:number):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}company/profial/${id}`)
 };
 
 /* customers function*/
 
 getCustomersByCompanyId(id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}customer/getAllCustomersByCompany/${id}`)
 };
 getCustomerAnalytics (id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}customer/getCustomerAnalytics/${id}`)
 };
 changeCustomerStatus(id:number ,model:any,): Observable<any> 
 {
  console.log(id);
   return this._HttpClient.put<any>(`${baseUrl}customer/status/${id}`,model );
 };
 updateCustomer(id : any ,model: any ): Observable<any> {
  return this._HttpClient.put<any>(`${baseUrl}customer/${id}`,model)
};
 getCustomerById(id:any ):Observable<any>
 {
   return this._HttpClient.get<any>(`${baseUrl}customer/${id}`)     
 };
 deleteCustomer(id:number): Observable<any> 
 {
   return this._HttpClient.delete<any>(`${baseUrl}customer/${id}`)
 };
 /* */

/* usres function */ 
getAllUserFromCompany(id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}user/getAllUserFromCompany/${id}`)
 };

 getUserAnalytics (id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}user/getCustomerAnalytics/${id}`)
 };
 changeUserStatus(id:number ,model:any,): Observable<any> 
 {
  console.log(id);
   return this._HttpClient.put<any>(`${baseUrl}user/status/${id}`,model );
 };

 deleteUser(id:number): Observable<any> 
 {
   return this._HttpClient.delete<any>(`${baseUrl}user/${id}`)
 };

 getUserById(id:any ):Observable<any>
 {
   return this._HttpClient.get<any>(`${baseUrl}user/${id}`)     
 };
 
 updateUser(id : any ,model: any ): Observable<any> {
  return this._HttpClient.put<any>(`${baseUrl}user/${id}`,model)
};
/* */

/* invoices function */ 
getInvoiceByIdAfterConfirmation(id:number ,templateNumber:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}invoice/${id}/export-pdf/${templateNumber}/`)
 };

 getAllInvoicesFromCompany(id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}invoice/getAllInvoiceByCompany/${id}`)
 };
 confirmInvoice(id : any): Observable<any> {
  return this._HttpClient.get<any>(`${baseUrl}invoice/confirmInvoice/${id}`)
};

printInvoiceByeTmpleteId(invoiceId : any , templateId:any): Observable<any> {
  return this._HttpClient.get<any>(`${baseUrl}exportPdf/${invoiceId}/invoice/${templateId}`)
};
//  getUserAnalytics (id:number ):Observable<any>{
//   return this._HttpClient.get<any>(`${baseUrl}user/getCustomerAnalytics/${id}`)
//  };
//  changeUserStatus(id:number ,model:any,): Observable<any> 
//  {
//   console.log(id);
//    return this._HttpClient.put<any>(`${baseUrl}user/status/${id}`,model );
//  };

//  deleteUser(id:number): Observable<any> 
//  {
//    return this._HttpClient.delete<any>(`${baseUrl}user/${id}`)
//  };

//  getUserById(id:any ):Observable<any>
//  {
//    return this._HttpClient.get<any>(`${baseUrl}user/${id}`)     
//  };
 
//  updateUser(id : any ,model: any ): Observable<any> {
//   return this._HttpClient.put<any>(`${baseUrl}user/${id}`,model)
// };
/* */

/* slaes person function */ 

getAllSalesPersonFromCompany(id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}SalesPerson/getAllSalesPersonsByCompany/${id}`)
 };
 getAllSalesPerson():Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}SalesPerson`,)
 };
 changeSalesPersonStatus(id:number,model:any,): Observable<any> 
 {
  console.log(id);
   return this._HttpClient.put<any>(`${baseUrl}SalesPerson/status/${id}`,model );
 };

 deleteSalesPerson(id:number): Observable<any> 
 {
   return this._HttpClient.delete<any>(`${baseUrl}SalesPerson/${id}`)
 };

 getSalesPersonById(id:any ):Observable<any>
 {
   return this._HttpClient.get<any>(`${baseUrl}SalesPerson/${id}`)     
 };
 
 updateSalesPerson(id : any ,model: any ): Observable<any> {
  return this._HttpClient.put<any>(`${baseUrl}SalesPerson/${id}`,model)
};

getSalesPersonAnalytics (id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}SalesPerson/getSalesPersonAnalytics/${id}`)
 };

 getActiveSalesPerson (id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}SalesPerson/getActiveSalesPersons/${id}`)
 };
/* */

/* company function */ 
getAllCompanyInfo(id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}company/${id}`)
 };
updateCompany(id : any ,model: any ): Observable<any> {
  return this._HttpClient.put<any>(`${baseUrl}company/${id}`,model)
};

/* */ 
/* products function */ 
getAllProductsInfoByCompanyId(id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}Product/getAllProductByCompanyId/${id}`)
 };

 getProductsAnalytics (id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}Product/getProdactAnalytics/${id}`)
 };
 deleteProductById(id:number): Observable<any> 
 {
   return this._HttpClient.delete<any>(`${baseUrl}Product/${id}`)
 };
 updateProductById(id : any ,model: any ): Observable<any> {
  return this._HttpClient.put<any>(`${baseUrl}Product/${id}`,model)
};

getProductById(id:any ):Observable<any>
{
  return this._HttpClient.get<any>(`${baseUrl}Product/${id}`)     
};

changeProductStatus(id:number ,model:any,): Observable<any> 
{
 console.log(id);
  return this._HttpClient.put<any>(`${baseUrl}Product/status/${id}`,model );
};
 /* */ 

/* unites function */ 
getAllUnitesInfoByCompanyId(id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}MeasurementUnit/getUnitByCompany/${id}`)
 };

 deleteUnitById(id:number): Observable<any> 
 {
   return this._HttpClient.delete<any>(`${baseUrl}MeasurementUnit/${id}`)
 };
 updateUnitById(id : any ,model: any ): Observable<any> {
  return this._HttpClient.put<any>(`${baseUrl}MeasurementUnit/${id}`,model)
};

getUnittById(id:any ):Observable<any>
{
  return this._HttpClient.get<any>(`${baseUrl}MeasurementUnit/${id}`)     
};

changeUnitStatus(id:number ,model:any,): Observable<any> 
{
 console.log(id);
  return this._HttpClient.put<any>(`${baseUrl}MeasurementUnit/status/${id}`,model );
};

/* faq function */ 
getAllActiveQuestionsByCompanyId( ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}faq/getAllActiveQuestions`)
 };

 /* payment bonds function */ 
getAllActivePaymentbondsByCompanyId(id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}receipt/getAllReceiptByCompany/${id}`)
 };

 getPaymentbondsById(id:any ):Observable<any>
{
  return this._HttpClient.get<any>(`${baseUrl}receipt/${id}`)     
};

uploadPaymenbonds(id:number ,model:any,): Observable<any> 
{
 console.log(id);
  return this._HttpClient.post<any>(`${baseUrl}receipt/uploadReceipt/${id}`,model );
};
exportPdf(id:number): Observable<any> 
{
 console.log(id);
  return this._HttpClient.get<any>(`${baseUrl}exportPdf/receipt/${id}` );
};

getAllInvoicesConfirmFromCompany(id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}invoice/getAllInvoicConfirmedByCompany/${id}`)
 };
 
 getInvoiceByIdFromReceipt(id:number ):Observable<any>{
  return this._HttpClient.get<any>(`${baseUrl}invoice/getInvoiceByIdFromReceipt/${id}`)
 };




}
