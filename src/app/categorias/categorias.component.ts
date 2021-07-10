import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  public categorias : [1, 2, 3, 4, 5,6,7,8,9,10,11,12] 

  constructor() { 
    this.categorias = [1,2,3,4,5,6,7,8,9,10,11,12]
  }

  ngOnInit(): void {
    console.log(this.categorias)
  }

}
