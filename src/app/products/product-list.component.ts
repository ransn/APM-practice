import {Component, OnInit} from '@angular/core'
import {IProduct} from './product'
import { ProductService } from './product.service';

@Component({
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    _filterBy: string;
    errorMessage: string;

    get filterBy(): string{
      return this._filterBy;
    }

    set filterBy(value: string){
      this._filterBy = value;
      this.filteredProducts = this.filterBy ? this.performFilter(this.filterBy) : this.products;
    }
    

    filteredProducts: IProduct[];
    products: IProduct[] = [];

      toggleImage():void{
        if(this.showImage){
          this.showImage = false;
        }else{
          this.showImage = true;
        }
      }
      
      constructor(private _productService: ProductService){
        
      }

      ngOnInit():void{
        console.log("inside ngOnInit method");
        this._productService.getProducts().subscribe({
          next: data => {
            this.products = data;
            this.filteredProducts = this.products;
          },
          error: err => {
            this.errorMessage = err;
          }
        });
        
      }

      performFilter(searchString: string):IProduct[]{
        searchString = searchString.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().indexOf(searchString) != -1);
      }

      onRatingClicked(message: string): void{
        this.pageTitle = 'Product List : ' + message;
      }
}