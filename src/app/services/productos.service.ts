import { Injectable } from '@angular/core';
import axios from 'axios';
import {UrlGlobales} from "../services/UrlGlobales"; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public UrlApi: String ;
  public token: String ;
   marcas: any;
  public productos : any[] 
 
 
 
   constructor(private http: HttpClient) { 
     this.UrlApi = UrlGlobales.UrlApi;
     this.token= UrlGlobales.token;
     this.productos = [];


   }


listarProductos(marca: any){
  this.http.get(this.UrlApi+'marcas/' +marca+ '/productos', {headers: { 'Authorization': 'Bearer '+ this.token }}).subscribe(
    (res : any) => {
  
        for( let i = 0; i<res.productos.length;i++){
             
             
             this.productos.push(res.productos[i]);

        }

    
        console.log(this.productos);

    
    }
    
  )
}

buscarParametro(parameterSearch: any){
  this.http.get(this.UrlApi+'productos?busqueda=' +parameterSearch, {headers: { 'Authorization': 'Bearer '+ this.token }}).subscribe(
    (res : any) => {
  
        for( let i = 0; i<res.productos.length;i++){
             
             
             this.productos.push(res.productos[i]);

        }

        console.log(this.productos)
        console.log('productos?busqueda=' +parameterSearch);

    
    }
    
  )
}
listarPorCategorias(categoria:any){

  this.http.get(this.UrlApi+'productos?categoria=' +categoria, {headers: { 'Authorization': 'Bearer '+ this.token }}).subscribe(
    (res : any) => {
  
        for( let i = 0; i<res.productos.length;i++){
             
             
             this.productos.push(res.productos[i]);

        }

    
        console.log(this.productos);

    
    }
    
  )

}

}
