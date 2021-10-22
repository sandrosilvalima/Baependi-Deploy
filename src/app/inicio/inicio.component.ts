import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../models/Categoria';
import { Produtos } from '../models/Produtos';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  produtos: Produtos = new Produtos
  listaProdutos: Produtos[]
  foto = environment.foto
  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  



  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){

    window.scroll(0,0)

    this.getAllProdutos()
  }

  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produtos[])=>{
      this.listaProdutos = resp
    })
  }

}
