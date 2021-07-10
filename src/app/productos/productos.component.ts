import { Component, OnInit } from '@angular/core';
import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(
    public ProductosService : ProductosService
  ) {


   }

  ngOnInit(): void {
    this.ProductosService.listarProductos("apple")
  }

}
