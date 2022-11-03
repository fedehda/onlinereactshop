import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ConcatenarPipe } from 'src/app/concatenar.pipe';
import { Product, ResponseProduct } from 'src/app/interfaces/Productos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos:Product[]=[]

  loading=true

  constructor(    
    private productosServices:ProductsService
    ) {
      this.productosServices.getAll()
      .subscribe({
        next:(data:ResponseProduct)=>{
          console.log(data)
          this.productos = data.results;
          this.loading = false;
        },
        error:error=>{
          console.log(error)
        }
      })
    }
   


  ngOnInit(): void {
  }

}
