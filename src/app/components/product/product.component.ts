import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/product';

 import { CartService } from 'src/app/service/cart.service';
import { NotificationService } from 'src/app/service/notification.service';
// import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products=product;
  // Productlist:Product[]=[]
  constructor(private CartService:CartService,private route:ActivatedRoute,private notifyService : NotificationService) { }
  addToCart(product) {
    this.CartService.addToCart(product);
    this.notifyService.showSuccess("Product successfully !!", "Added");
   // window.alert(`Your {{ product.name}} has been added to the cart!`);
  }
  // constructor(private productService:ProductService,private msg:CartService) { }

  ngOnInit(): void {
    // this.Productlist=this.productService.getProducts()
  }
  // handleAddToCart(){
  //   this.msg.sendMsg(this.Productlist)
  //   console.log(this.Productlist)
  // }

}
