import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/Productos';
import { ProductsService } from '../../services/products.service';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {

  details!:Product
  isLoading:boolean=true

  constructor(
    private productosServices:ProductsService,
    private activateRoute:ActivatedRoute
  ) {
    const id = this.activateRoute.snapshot.paramMap.get("id")
    console.log("id",id)
    if(id){
      this.productosServices.getDetails(id)
      .subscribe((data:Product)=>{
        this.details=data
        this.isLoading=false
        })
      }
    } 


  ngOnInit(): void {
  }

}
