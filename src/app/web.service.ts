import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './Produto';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseURL = "https://banco-dados-teste.glitch.me/api";

  //listar
  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL + "/produtos");  
  }
  //cadastro
  cadastrarProduto(produto) : Observable<any>{
    let body = new HttpParams();
    body = body.set("title", produto.title) 
    body = body.set("price", String(produto.price))
    body = body.set("description", produto.description)  

    return this.http.post(this.baseURL + "/produtos", body, {observe: "response"});
  }
  //remove
  remove(_id: string){  
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
  //listar um produto
  getOneProduct(id) : Observable<Produto> {
    return this.http.get<Produto>(`${this.baseURL}/produtos/${id}`);  
  }
  constructor(private http: HttpClient) { }
}
