import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
//import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  // product: { id: number; image: string; name: string; description: string; price: number; quantity: number; };
  addToCart(product) {
    this.CartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  constructor(private route:ActivatedRoute,private CartService:CartService,private productService:ProductService) { 
    
  }
// sub;
// id;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = product[+params.get('id')];
      //console.log("product");
    });
  //   this.sub=this.route.paramMap.subscribe(params => { 
  //     console.log(params);
  //      this.id = params.get('id'); 
  //      let products=this.productService.product();
  //      this.product=products.find(p => p.id==this.id);    
  //  });
    
// this.route.params.subscribe(params => {
//       const id = +params['id'];
//       this.product = this.productService.getProduct(id);
//     });
}

}
