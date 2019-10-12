import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ProductService {
  //private productListUrl = 'https://localhost:5001/weatherforecast/products'; 
  private productListUrl = 'api/products/products.json';
  constructor(private http: HttpClient){

  }
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productListUrl).pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse){
    let errMessage = '';
    if(err.error instanceof ErrorEvent){
      errMessage = `An error occured : ${err.error.message}`;
    }else{
      errMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errMessage);
    return throwError(errMessage);
  }
}