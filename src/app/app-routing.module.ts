import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path: '', redirectTo: 'product', pathMatch: 'full' },
  {path:'product',component:ProductComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'product/:id', component: ProductDetailsComponent}
  //{path:'product-details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
