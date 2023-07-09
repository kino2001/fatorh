import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedService } from './shared.service';
import { NgbdSortableHeader } from './sortable.directive';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NestableModule } from 'ngx-nestable';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LightboxModule } from 'ngx-lightbox';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

import { MetismenuAngularModule } from '@metismenu/angular';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

/* #########################  SITE PAGES COMPONENT ###################*/

import { AdminComponent } from './admin/admin.component';

import { Index1Component } from './dashboard/index1/index1.component';

import { LoadingComponent } from './elements/loading/loading.component';
import { NavHeaderComponent } from './elements/nav-header/nav-header.component';
import { HeaderComponent } from './elements/header/header.component';
import { NavigationComponent } from './elements/navigation/navigation.component';
import { FooterComponent } from './elements/footer/footer.component';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LockScreenComponent } from './pages/lock-screen/lock-screen.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { Error400Component } from './pages/error400/error400.component';
import { Error403Component } from './pages/error403/error403.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { Error503Component } from './pages/error503/error503.component';

import { Graph1Component } from './elements/dashboard1/graph1/graph1.component';
import { Graph2Component } from './elements/dashboard1/graph2/graph2.component';
import { Graph3Component } from './elements/dashboard1/graph3/graph3.component';
import { Graph4Component } from './elements/dashboard1/graph4/graph4.component';

import { SwitcherComponent } from './switcher/switcher.component';
import { CustomersComponent } from './Data/customers/customers.component';
import { ProductsComponent } from './Data/varieties/products/products.component';
import { ImportaionComponent } from './Data/varieties/importaion/importaion.component';
import { CompanyComponent } from './Data/company/company.component';
import { SalespersonComponent } from './Data/salesperson/salesperson.component';
import { UsersComponent } from './Data/users/users.component';
import { FaqComponent } from './Data/faq/faq.component';
import { OtpComponent } from './pages/otp/otp.component';
import { PackegsComponent } from './Data/packegs/packegs.component';
import { BranchesComponent } from './Data/branches/branches.component';
import { UnitsComponent } from './Data/units/units.component';
import { AuthGuard } from './auth.guard';
import { HttpConfigInterceptor } from './interciptor/jwt.interceptor';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateComponent } from './Data/customers/update/update.component';
import { BranchAnalyticsComponent } from './Data/branches/branch-analytics/branch-analytics.component';
import { UpdateBranchComponent } from './Data/branches/update-branch/update-branch.component';
import { AnalyticsComponent } from './Data/customers/analytics/analytics.component';
import { UpdateUsersComponent } from './Data/users/update-users/update-users.component';
import { UserAnalyticsComponent } from './Data/users/user-analytics/user-analytics.component';
import { UpdateSalespersonComponent } from './Data/salesperson/update-salesperson/update-salesperson.component';
import { SalespersonAnalyticsComponent } from './Data/salesperson/salesperson-analytics/salesperson-analytics.component';
import { UpdatecompanyComponent } from './Data/company/updatecompany/updatecompany.component';
import { CompanyAnalyticsComponent } from './Data/company/company-analytics/company-analytics.component';
import { AddInvoiceComponent } from './Data/invoices/add-invoice/add-invoice.component';
import { InvoicesComponent } from './Data/invoices/invoices.component';
import { UpdateProductComponent } from './Data/varieties/products/update-product/update-product.component';
import { ProductAnalyticsComponent } from './Data/varieties/products/product-analytics/product-analytics.component';
import { UpdateUnitComponent } from './Data/units/update-unit/update-unit.component';
import { PaymentBondsComponent } from './Data/payment-bonds/payment-bonds.component';
import { ViewPaymentComponent } from './Data/payment-bonds/view-payment/view-payment.component';
import { ViewAfterSigningComponent } from './Data/payment-bonds/view-after-signing/view-after-signing.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './Screens/home/home.component';
import { AboutComponent } from './Screens/about/about.component';
import { NavbarscComponent } from './Screens/navbarsc/navbarsc.component';
import { HomeheaderComponent } from './Screens/homeheader/homeheader.component';
import { OurServiceComponent } from './Screens/our-service/our-service.component';
import { PricesComponent } from './Screens/prices/prices.component';
import { ContactComponent } from './Screens/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    Index1Component,

    LoadingComponent,
    NavHeaderComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,

    NavHeaderComponent,

    RegisterComponent,
    LoginComponent,
    LockScreenComponent,
    ForgotPasswordComponent,
    Error400Component,
    Error403Component,
    Error404Component,
    Error500Component,
    Error503Component,

    Graph1Component,
    Graph2Component,
    Graph3Component,
    Graph4Component,

    SwitcherComponent,

    CustomersComponent,
    UpdateComponent,
    AnalyticsComponent,

    ProductsComponent,
    UpdateProductComponent,
    ProductAnalyticsComponent,

    ImportaionComponent,

    CompanyComponent,
    UpdatecompanyComponent,
    CompanyAnalyticsComponent,

    SalespersonComponent,
    UpdateSalespersonComponent,
    SalespersonAnalyticsComponent,

    UsersComponent,
    UpdateUsersComponent,
    UserAnalyticsComponent,

    InvoicesComponent,
    AddInvoiceComponent,

    FaqComponent,
    OtpComponent,
    PackegsComponent,

    BranchesComponent,
    UpdateBranchComponent,
    BranchAnalyticsComponent,

    UnitsComponent,
    UpdateUnitComponent,

    PaymentBondsComponent,
    ViewPaymentComponent,
    ViewAfterSigningComponent,

    HomeComponent,
    AboutComponent,
    NavbarscComponent,
    HomeheaderComponent,
    OurServiceComponent,
    PricesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    NgApexchartsModule,
    NestableModule,
    NgxSpinnerModule,
    LightboxModule,
    FullCalendarModule,
    MetismenuAngularModule,
    PerfectScrollbarModule,
    NgxDropzoneModule,
    CarouselModule,
    [SweetAlert2Module.forRoot()],
    MatListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    DragDropModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule,
    MatTreeModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [
    SharedService,
    AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
