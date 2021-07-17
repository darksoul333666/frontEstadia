import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  

  constructor(
    public CategoriasService : CategoriasService,
    public ProductosService : ProductosService
  ) { 
  }

  ngOnInit(): void {
    this.CategoriasService.listarCategorias()
  }
  
  listarPorCategoria(categoria:any){
    window.location.href = ("productos/"+categoria)
  }
  
}
