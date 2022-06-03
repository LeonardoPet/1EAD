import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './Produto';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseURL = "https://banco-dados-teste.glitch.me/api";

  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL + "/produtos");  
  }
  cadastrarProduto(produto) : Observable<any>{
    let body = new HttpParams();
    body = body.set("title", produto.title) 
    body = body.set("price", String(produto.price))
    body = body.set("description", produto.description)  

    return this.http.post(this.baseURL + "/produtos", body, {observe: "response"});
  }
  remove(_id: string){  
  // const url= = `$(this.baseURL)/${id}`;
    return this.http.delete<Produto>(`${this.baseURL}/produtos/${_id}`);
  }

  //edit
  atualizarProduct(id: string, produto): Observable<any>{ 
    let body = new HttpParams();
    body = body.set("title", produto.title) 
    body = body.set("price", String(produto.price))
    body = body.set("description", produto.description)  
    return this.http.put<Produto>(`${this.baseURL}/produtos/${id}`, produto);
   
  }
  constructor(private http: HttpClient) { }
}
