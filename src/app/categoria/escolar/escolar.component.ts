import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Produtos } from 'src/app/models/Produtos';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-escolar',
  templateUrl: './escolar.component.html',
  styleUrls: ['./escolar.component.css']
})
export class EscolarComponent implements OnInit {

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
    // this.getAllProdutos()
    this.findByCategoriaCasa()
    

  }


  findByCategoriaCasa(){
    return this.categoriaService.getByTipoCategoriaCasa('Escolar').subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }

  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produtos[])=>{
      this.listaProduto = resp
    })
  }

}
