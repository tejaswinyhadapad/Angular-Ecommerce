import { Component, EventEmitter, OnInit } from '@angular/core';
// import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/service/cart.service';
import{Cartitem} from 'src/app/models/cart';
import { product } from 'src/app/models/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  items;
  //cartTotal: 0;
  //cartTotal: number=0;
  //cartItem: Cartitem[];
 
  quantity:1;
  // cartItemChanged = new EventEmitter<{
  //   productId: number
  // }>();
 

  // onCartitemChanged(event) {
  //   const id=event.target.getAttribute('id');
  //   this.cartItemChanged.emit({productId:id});
    

  // }
  // onCartitemChanged(event) {
      
      
  
  //   }
    
  constructor(private CartService:CartService){
    this.items=this.CartService.getItems();
    // this.addToCart(product);
    
    
  }

  

  ngOnInit(): void {

  //  getTotal() {
  //   this.items=this.getItems();
  //   return this.items?.reduce((acc,item)=>acc + item.quantity*item.price,0)
  // }
    
   }
 
  }