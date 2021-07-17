import { Component, OnInit, Input } from '@angular/core';
import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';
import { ProductosService } from '../services/productos.service';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
@Input() parameterSearch = "";
  constructor(
    public ProductosService : ProductosService,
    public ruta: ActivatedRoute,
    public route: Router
  ) {
    
   }

  ngOnInit(): void {

    
  this.ProductosService.buscarParametro(this.ruta.snapshot.params.parameterSearch);
  this.ProductosService.listarPorCategorias(this.ruta.snapshot.params.parameterSearch);

  console.log(this.parameterSearch)
  }

}
