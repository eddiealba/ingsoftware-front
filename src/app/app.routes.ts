import { RouterModule, Routes } from '@angular/router'

import { SignupComponent } from './components/user/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { OrdersComponent } from './components/user/orders/orders.component';
import { OrderDetailComponent } from './components/user/order-detail/order-detail.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { AddproductComponent} from './components/product/addproduct/addproduct.component';
import { AddvoucherComponent} from './components/voucher/addvoucher/addvoucher.component';
import { EditproductComponent} from './components/product/editproduct/editproduct.component';
import { ListvoucherComponent} from './components/voucher/listvoucher/listvoucher.component';
import { CartComponent } from './components/user/cart/cart.component';
import { CatalogueComponent } from './components/category/catalogue/catalogue.component';
import { PaymentComponent } from './components/user/payment/payment.component';
import { FormComponent } from './components/voucher/listvoucher/form.component';



const APP_ROUTES: Routes = [
    { path: 'category/catalogue', component: CatalogueComponent},
    { path: 'user/profile', component: ProfileComponent },
    { path: 'user/orders', component: OrdersComponent },
    { path: 'user/orders/orderId', component: OrderDetailComponent },
    { path: 'user/edit', component: UserEditComponent },
    { path: 'user/cart', component: CartComponent },
    { path: 'user/payment', component: PaymentComponent },
    { path: 'product/addproduct', component: AddproductComponent},
    { path: 'voucher/addvoucher', component: AddvoucherComponent},
    { path: 'product/editproduct', component: EditproductComponent},
    { path: 'voucher/listvoucher', component: ListvoucherComponent},
    { path: 'listvoucher/form', component: FormComponent},
    { path: 'listvoucher/form/:voucherId', component: FormComponent},

    { path: '**', pathMatch: 'full', redirectTo: 'category/catalogue' }//redirectTo: 'home'
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);