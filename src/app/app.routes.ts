import { Routes } from '@angular/router';
import { ListProductsComponent } from './features/list-products/list-products.component';
import { CartComponent } from './features/cart/cart.component';
import { AddEditProductComponent } from './features/add-edit-product/add-edit-product.component';

export const routes: Routes = [
    {path: 'products', component: ListProductsComponent},
    { path: 'add', component: AddEditProductComponent },
    {path: 'cart', component: CartComponent},
    { path: 'edit/:id', component: AddEditProductComponent}
];
