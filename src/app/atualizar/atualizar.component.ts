import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { ActivatedRoute,Route } from '@angular/router';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {
  id: String;
  produto = {
    title: "", price: 0.0, description:""
  };

  constructor(private web: WebService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.preencher_campos(this.id);
  }
  
  preencher_campos(id){
    
    this.web.getOneProduct(id).subscribe(res =>{
      let produtoTemporario = res
      this.produto.title = produtoTemporario.title
      this.produto.price = produtoTemporario.price
      this.produto.description = produtoTemporario.description
    });
  }

  AtualizarProduct(id){
    this.web.atualizarProduct(id, this.produto).subscribe({
      next: data => {
          alert("Produto Atualizado com Sucesso")
          
      },
      error: error => {
          alert("Erro, produto não atualizado")
      }
      });
   }
}
