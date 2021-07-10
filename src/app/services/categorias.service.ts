import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import {UrlGlobales} from "../services/UrlGlobales";


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
 public UrlApi: String ;
 public token: String ;
 public categorias : any[] 



constructor(
  private http: HttpClient
) { 
    this.UrlApi = UrlGlobales.UrlApi;
    this.token = UrlGlobales.token;
    this.categorias = [];

  }

listarCategorias(){
  this.http.get(this.UrlApi+'categorias', {headers: { 'Authorization': 'Bearer '+ this.token }}).subscribe(
    (res :any) => {
      console.log(res);
      for(let i = 0; i<res.length; i++){
        this.categorias.push(res[i])

      }
      
     
  
        

    
       // console.log(this.categorias);

    
    }
    
  )
}

}
