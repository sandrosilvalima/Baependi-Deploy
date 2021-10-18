import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoDeleteComponent } from 'src/app/delete/produto-delete/produto-delete.component';
import { Categoria } from 'src/app/models/Categoria';
import { Produtos } from 'src/app/models/Produtos';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategoria : Categoria[]
  produto: Produtos = new Produtos()
  listaProduto: Produtos[]

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {


    window.scroll(0,0)
    this.findByCategoriaCasa()
  }


  findByCategoriaCasa(){
    return this.categoriaService.getByTipoCategoriaCasa('Casa').subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }

  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produtos[])=>{
      this.listaProduto = resp
    })
  }
}









