import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../models/Categoria';
import { Produtos } from '../models/Produtos';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-todosprodutos',
  templateUrl: './todosprodutos.component.html',
  styleUrls: ['./todosprodutos.component.css']
})
export class TodosprodutosComponent implements OnInit {

  produto: Produtos = new Produtos()
  categoria: Categoria = new Categoria()
  listaCategoria : Categoria[]
  listaProdutos: Produtos[]
  idCategoria: number



  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {


    window.scroll(0,0)
    this.findAllProdutos()
    this.findAllCategoria()


  }

 
  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produtos[])=>{
      this.listaProdutos = resp
    })
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }
}



