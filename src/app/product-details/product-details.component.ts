import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../products/product';
import { ProductService } from '../products/product.service';
import { Observable, throwError } from 'rxjs';

@Component({
  //selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _product: ProductService) { }
  productId: number;
  product: IProduct;
  pageTitle: string = "Product Details"
  errorMessage: string;
  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id');
    console.log(this.productId);
    this.getProductDetails();
  }

  onBack(){
    this.router.navigate(['/products']);
  }

  getProductDetails(){
    return this._product.getProductDetails(this.productId).subscribe(
      {
        next: p=>this.product = p,
        error: err=>this.errorMessage = err
      }
    );
  }

}
