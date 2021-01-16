import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product';
// import {Subject} from 'rxjs';
// import {Cartitem} from 'src/app/models/cart'
// import { HttpClient } from '@angular/common/http';
// import {cartUrl} from 'src/app/config/api';
// const baseUrl = 'http://localhost:8080/api/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  
items=[];
//Cartitem=[];
// constructor(private http: HttpClient) { }


//     getItems():Observable<Cartitem[]>{
//       return this.http.get<Cartitem[]>(cartUrl);
//     }
      addToCart(product) {
    //this.items.push(product);
    let productExists=false
    for (let i in this.items)
    {
      if(this.items[i].productId===product.id)
      {
        this.items[i].quantity++ 
        productExists=true
        break;
      }
    }
    if(!productExists){
      this.items.push({
        image:product.image,
        productId:product.id,
        name:product.name,
        quantity:1,
        price:product.price
      })
    }
    //return this.http.post(cartUrl,{product});
  }
  
  getItems(){
    return this.items;
  }
  
  

  clearCart(product) {
    // this.items = [];
    // return this.items;
    this.items = this.items.filter(({name}) => name !== product.name)
  }
 
  getTotal(){
    this.items=this.getItems();
    return this.items?.reduce((acc,item)=>acc + item.quantity*item.price,0)
  }
  // getTotal(){
  //   this.get<Cartitem[]>=this.getItems();
  //   return this.Cartitem?.reduce((acc,item)=>acc + item.quantity*item.price,0)
  // }
  // delete(index){
  //   this.items.splice(index,1);
  //   this.getTotal();
  //   }
}
