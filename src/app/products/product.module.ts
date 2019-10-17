import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductRouterModule } from './product-router.module';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsModule } from '../product-details/product-details.module';
import { ProductDetailsRouterModule } from '../product-details/product-details-router.module';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductDetailsModule,
    ProductRouterModule
  ]
})
export class ProductModule { }
