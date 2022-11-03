import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map,Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ResponseProduct } from '../interfaces/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient
  ) { }

  // Get all query results
  getAll():Observable<ResponseProduct>{
    return this.http.get<ResponseProduct>(environment.apiEndpoint+"/sites/MLA/search?q=iphone")
  }
  //Promises
  getAllPromise(){
    return lastValueFrom(this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=iphone"))
  }
  //Pipes
  getAllPipe(){
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=iphone").pipe(map((value:any)=>value.results))

  }
  //Get product details
  getDetails(id:string):Observable<Product>{
    return this.http.get<Product>("https://api.mercadolibre.com/items/"+id)
  }

/*  create(data:any){
    return this.http.post("URL", data)
  }

  update(id:string,data:any){
    return this.http.put("URL/"+id,data)
  }
  
  delete(id:string){
    return this.http.delete("URL/"+id)
  }
*/
}
