import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  public marcas : [1, 2, 3, 4, 5,6,7,8,9,10,11,12] 
  
  constructor() {
    this.marcas = [1,2,3,4,5,6,7,8,9,10,11,12]
   }

  ngOnInit(): void {
    console.log(this.marcas)
  }

}
