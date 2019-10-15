import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements CanActivate {

  constructor(private route: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let productId = +next.url[1].path; // http://localhost:4200/products/10
      if(isNaN(productId) || productId < 1){
        alert("Invalid product Id");
        // route it back to productList page
        this.route.navigate(['/products']);
        return false;
      }
    return true;
  }
  
}
