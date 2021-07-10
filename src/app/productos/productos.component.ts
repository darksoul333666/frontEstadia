import { Component, OnInit } from '@angular/core';
import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
public productos : [1, 2, 3, 4, 5,6,7,8,9,10,11,12] 

  constructor() {
   this.productos = [1,2,3,4,5,6,7,8,9,10,11,12]
   }

  ngOnInit(): void {
    console.log(this.productos)
  }

}
