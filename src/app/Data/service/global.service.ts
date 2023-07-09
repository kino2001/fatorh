export const baseUrl : string = 'https://fatortak.onrender.com/';


/* start auth */

export enum RegisterEndPoient 
{
    POST = 'auth/createCompany',
};

export enum LoginEndPoient 
{
    POST = 'auth/signinAsCompany',
};

export enum OtpEndPoient 
{
    POST = 'auth/verifyUser',
};

export enum ResendOtpEndPoient 
{
    GET ='auth/reSendOtp/:user_id:',
};

export enum ForgotPasswordEndPoient 
{
    POST = 'auth/forgetPassword',
};

export enum CurrencyEndPoient 
{
    GET = 'auth/getcurrency',
};

/* end auth */

/* customers end point */
export enum CustomersEndPoient 
{
    GET = 'customer',
    POST = 'customer',
};
/* ProductsEndPoient  */

export enum ProductsEndPoient 
{
    GET = 'Product',
    POST = 'Product',
};

/* InvoicesEndPoient  */

export enum InvoicesEndPoient 
{
    POST = 'invoice/createInvoiceAllDeltias',
};

/* PaymentbondsEndPoient  */

export enum PaymentbondsEndPoient 
{
    POST = 'receipt',
};
/* Branches endpoint */

export enum BranchesEndPoient 
{
    GET = 'branche',
    POST = 'branche',
};

/* users endpoint */ 

export enum UsersEndPoient 
{
    GET = 'user',
    POST = 'user/createUserByOwner',
};

/* sales person endpoint*/
export enum SalesPersonEndPoient 
{
    GET = 'SalesPerson',
    POST = 'SalesPerson',
};

export enum CityEndPoient 
{
    GET = 'city',
    GETId ='city/:id:',
    POST = 'city',
    PUT = 'city/:id',
    DELETE = 'city/:id'
};

export enum CompanyEndPoient 
{
    GET = 'company',
};

export enum UnitsEndPoient 
{
    POST = 'MeasurementUnit',
};

export enum FaqEndPoient 
{
    POST = 'faq',
};
