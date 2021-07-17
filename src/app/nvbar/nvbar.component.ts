import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrls: ['./nvbar.component.css']
})
export class NvbarComponent implements OnInit {
  
  @Input() searchResult!: string;

public parameterSearch : string = "";
public busqueda : string = "";
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  buscar(){
    this.parameterSearch = this.busqueda.replace(/ /g, "+");
    console.log(this.parameterSearch);
    

  // this.router.navigateByUrl("productos/"+this.parameterSearch)

   window.location.href = ("productos/"+this.parameterSearch)
    }
      
   



}
