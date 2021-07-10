import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  public marca: string;
 // public productos : any[]
  
  constructor(
    public ProductosService : ProductosService
  ) {
    this.marca = "";
    //this.productos = 
   }

  ngOnInit(): void {
    this.ProductosService.listarProductos("adata")
  }

}
