import {Component, OnInit} from '@angular/core'
import {IProduct} from './product'
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    _filterBy: string;

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
        this.filterBy = '';
      }

      ngOnInit():void{
        console.log("inside ngOnInit method");
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
      }

      performFilter(searchString: string):IProduct[]{
        searchString = searchString.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().indexOf(searchString) != -1);
      }

      onRatingClicked(message: string): void{
        this.pageTitle = 'Product List : ' + message;
      }
}