import { Component, OnInit } from '@angular/core';


import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  
  listaProdutos: Produto[];

  produto = {
    _id:"", title: "", price: 0.0, description:""
  };
  
  constructor(private web : WebService) { }

  carregarProdutos() :void{
    this.web.getProdutos().subscribe(res =>{
      this.listaProdutos = res;
    });
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }
  
  removeProduct(p: Produto){
    this.web.remove(p._id).subscribe({
      next: data => {
        alert('Deletado com sucesso')
        this.carregarProdutos()
      },
      error: error => {
        alert('Não foi possível deletar')
        
      }
    });
  }

  
}
