import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { AppComponent } from './app.component';
import { ProductModule } from './products/product.module';
import { AppRouterModule } from './app-router.module';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
