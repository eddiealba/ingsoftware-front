import { LOCALE_ID, NgModule } from '@angular/core';

//Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData} from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES, 'es');

//Routes
import { APP_ROUTING } from "./app.routes";

//Services


//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { OrdersComponent } from './components/user/orders/orders.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { OrderDetailComponent } from './components/user/order-detail/order-detail.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { MainComponent } from './menu/main/main.component';
import { AddproductComponent } from './components/product/addproduct/addproduct.component';
import { AddvoucherComponent } from './components/voucher/addvoucher/addvoucher.component';
import { EditproductComponent } from './components/product/editproduct/editproduct.component';
import { ListvoucherComponent } from './components/voucher/listvoucher/listvoucher.component';
import { CartComponent } from './components/user/cart/cart.component';
import { CatalogueComponent } from './components/category/catalogue/catalogue.component';
import { VoucherService } from './components/voucher/listvoucher/voucher.service';
import { ProductoService } from './productos/producto.service';
import { from } from 'rxjs';
import { PaymentComponent } from './components/user/payment/payment.component';
import { FormComponent } from './components/voucher/listvoucher/form.component';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {PaginatorpComponent} from './components/paginator/paginatorp.component';
import { FormeditComponent } from './components/voucher/listvoucher/formedit.component';
import { ProductosComponent } from './productos/productos.component';
import { FormpComponent } from './productos/formp.component';
import { FormpeditComponent } from './productos/formpedit.component';
import { DetalleComponent } from './productos/detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    OrdersComponent,
    ProfileComponent,
    OrderDetailComponent,
    UserEditComponent,
    MainComponent,
    AddproductComponent,
    AddvoucherComponent,
    EditproductComponent,
    
    ListvoucherComponent,
  
    CartComponent,
    CatalogueComponent,
    PaymentComponent,
    
    FormComponent,
    FormeditComponent,
    FormpComponent,
    FormpeditComponent,

    
    PaginatorComponent,
    PaginatorpComponent,
    ProductosComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [ProductoService, VoucherService, {provide: LOCALE_ID, useValue:'es'} ],

  bootstrap: [AppComponent]
})
export class AppModule { }
