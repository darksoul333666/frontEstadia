import { Injectable } from '@angular/core';
import axios from 'axios';
import {UrlGlobales} from "../services/UrlGlobales";
import { Observable, observable, of } from 'rxjs';
import Axios from 'axios';
import { HttpClient } from '@angular/common/http'; 




@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  public UrlApi: String ;
  public token: String ;
  axios: any;
 
 
 
   constructor(private http: HttpClient) { 
     this.UrlApi = UrlGlobales.UrlApi;
     this.token= UrlGlobales.token;
     this.axios = Axios;
     

   }
   listarMarcas() {
  return this.http.get(this.UrlApi+'marcas', {headers: { 'Authorization': 'Bearer '+ this.token }}).subscribe(
    (res : any) => {
      console.log(res['productos'])}
    
  )
 

}
}
