import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { Index1Component } from './dashboard/index1/index1.component';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

import { LockScreenComponent } from './pages/lock-screen/lock-screen.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { Error400Component } from './pages/error400/error400.component';
import { Error403Component } from './pages/error403/error403.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { Error503Component } from './pages/error503/error503.component';

import { CustomersComponent } from './Data/customers/customers.component';
import { ProductsComponent } from './Data/varieties/products/products.component';
import { ImportaionComponent } from './Data/varieties/importaion/importaion.component';
import { OtpComponent } from './pages/otp/otp.component';
import { BranchesComponent } from './Data/branches/branches.component';
import { CompanyComponent } from './Data/company/company.component';
import { FaqComponent } from './Data/faq/faq.component';
import { SalespersonComponent } from './Data/salesperson/salesperson.component';
import { UnitsComponent } from './Data/units/units.component';
import { UsersComponent } from './Data/users/users.component';
import { AuthGuard } from './auth.guard';
import { InvoicesComponent } from './Data/invoices/invoices.component';
import { UpdateComponent } from './Data/customers/update/update.component';
import { AnalyticsComponent } from './Data/customers/analytics/analytics.component';
import { UpdateSalespersonComponent } from './Data/salesperson/update-salesperson/update-salesperson.component';
import { SalespersonAnalyticsComponent } from './Data/salesperson/salesperson-analytics/salesperson-analytics.component';
import { UpdatecompanyComponent } from './Data/company/updatecompany/updatecompany.component';
import { CompanyAnalyticsComponent } from './Data/company/company-analytics/company-analytics.component';
import { UpdateUsersComponent } from './Data/users/update-users/update-users.component';
import { BranchAnalyticsComponent } from './Data/branches/branch-analytics/branch-analytics.component';
import { UpdateBranchComponent } from './Data/branches/update-branch/update-branch.component';
import { UserAnalyticsComponent } from './Data/users/user-analytics/user-analytics.component';
import { AddInvoiceComponent } from './Data/invoices/add-invoice/add-invoice.component';
import { UpdateProductComponent } from './Data/varieties/products/update-product/update-product.component';
import { ProductAnalyticsComponent } from './Data/varieties/products/product-analytics/product-analytics.component';
import { UpdateUnitComponent } from './Data/units/update-unit/update-unit.component';
import { PaymentBondsComponent } from './Data/payment-bonds/payment-bonds.component';
import { ViewPaymentComponent } from './Data/payment-bonds/view-payment/view-payment.component';
import { ViewAfterSigningComponent } from './Data/payment-bonds/view-after-signing/view-after-signing.component';
import { HomeComponent } from './Screens/home/home.component';
import { AboutComponent } from './Screens/about/about.component';
import { PricesComponent } from './Screens/prices/prices.component';
import { ContactComponent } from './Screens/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin/index', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: Index1Component },
      { path: 'index', component: Index1Component },

      { path: 'customers', component: CustomersComponent },
      { path: 'update-customer/:id', component: UpdateComponent },
      { path: 'customer-analytics/:id', component: AnalyticsComponent },

      { path: 'products', component: ProductsComponent },
      { path: 'update-product/:id', component: UpdateProductComponent },
      { path: 'product-analytics/:id', component: ProductAnalyticsComponent },

      { path: 'importation', component: ImportaionComponent },

      { path: 'branches', component: BranchesComponent },
      { path: 'branch-analytics/:id', component: BranchAnalyticsComponent },
      { path: 'update-branch/:id', component: UpdateBranchComponent },

      { path: 'company', component: CompanyComponent },
      { path: 'update-company/:id', component: UpdatecompanyComponent },
      { path: 'company-analytics/:id', component: CompanyAnalyticsComponent },

      { path: 'faq', component: FaqComponent },

      { path: 'payment-bonds', component: PaymentBondsComponent },
      { path: 'view-payment-bonds/:id', component: ViewPaymentComponent },
      { path: 'view-after-signing/:id', component: ViewAfterSigningComponent },

      { path: 'salesperson', component: SalespersonComponent },
      { path: 'update-salesperson/:id', component: UpdateSalespersonComponent },
      {
        path: 'salesperson-analytics/:id',
        component: SalespersonAnalyticsComponent,
      },

      { path: 'units', component: UnitsComponent },
      { path: 'update-unit/:id', component: UpdateUnitComponent },

      { path: 'users', component: UsersComponent },
      { path: 'update-user/:id', component: UpdateUsersComponent },
      { path: 'user-analytics/:id', component: UserAnalyticsComponent },

      { path: 'invoices', component: InvoicesComponent },
      { path: 'add-invoice', component: AddInvoiceComponent },

      { path: 'index-1', component: Index1Component },
      { path: 'dashboard', component: Index1Component },
    ],
  },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'page-register', component: RegisterComponent },
  { path: 'page-login', component: LoginComponent },
  { path: 'page-lock-screen', component: LockScreenComponent },
  { path: 'page-forgot-password', component: ForgotPasswordComponent },
  { path: 'page-otp', component: OtpComponent },
  { path: 'page-error-400', component: Error400Component },
  { path: 'page-error-403', component: Error403Component },
  { path: 'page-error-404', component: Error404Component },
  { path: 'page-error-500', component: Error500Component },
  { path: 'page-error-503', component: Error503Component },

  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
