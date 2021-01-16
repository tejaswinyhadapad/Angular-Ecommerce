import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { product } from 'src/app/models/product';
// import{Cartitem} from 'src/app/models/cart';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 items: any[];
 //// public shoppingCartItems$: Observable<product[]>;
 //product: any[];
  // productRemoved = new EventEmitter();
  // calcTotal() {
  //   return this.product.reduce((acc, prod) => acc+= prod.num ,0);
  // }
  // removeProduct(product) {
  //   this.productRemoved.emit(product)
  // }
  
  // constructor(private cartService: CartService){
  //   this.shoppingCartItems$ = this
  //   .cartService
  //   .getItems();

  // this.shoppingCartItems$.subscribe(_ => _);

  // }
  constructor(private cartservice:CartService) {
    this.items=this.cartservice.getItems();
    // this.items();
   }
  
 
  ngOnInit(): void {
  }

}
