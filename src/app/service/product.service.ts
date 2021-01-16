import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {productUrl} from 'src/app/config/api';
import {product} from 'src/app/models/product';
@Injectable({
  providedIn: 'root'
})
//const apiUrl='http://localhost:3000/products';
//let products:product[];
export class ProductService {
  product: any;
  // products:Product[]=[
    // new Product(1,'Product 1','This is description',100),  
    // new Product(2,'Product 2','This is description',200),
    // new Product(3,'Product 3','This is description',300),
    // new Product(4,'Product 4','This is description',400),
    // new Product(5,'Product 5','This is description',500),  
  // ]
//   constructor(private http:HttpClient) { }
//   getProduct(id) :Observable<product[]>{
//     // this.product=this.product();
//     return this.http.get<product[]>(productUrl);
// }
//   getProduct(id){
//     this.product=this.product();
//     return this.product.find(p => p.id==id);
// } 
// getProduct(id:number):product{
//   return this.product().find((item:product)=>{
//     return item.id===id;
//   })
// }

}
