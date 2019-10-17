import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsGuard } from '../product-details/product-details.guard';
import { ProductDetailsComponent } from '../product-details/product-details.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRouterModule { }
