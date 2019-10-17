import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsRouterModule } from './product-details-router.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductDetailsRouterModule
  ],
  exports: [
    ProductDetailsRouterModule
  ]
})
export class ProductDetailsModule { }
