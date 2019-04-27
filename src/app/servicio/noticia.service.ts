import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private httpclient: HttpClient) { }

  ConsultarNoticia(id): Observable<any>{
    return this.httpclient.get("http://iris.net.co/products/semana/items/" + id);   
  }
}
