import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Produtos } from 'src/app/models/Produtos';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {


    produto: Produtos = new Produtos()
    categoria: Categoria = new Categoria()
    listaCategoria: Categoria[]
    idCategoria: number


  constructor(
    private router:Router,
    private routerAtivo: ActivatedRoute,
      private categoriaService: CategoriaService,
      private produtoService: ProdutoService,
  ) { }




  ngOnInit() {


    let id = this.routerAtivo.snapshot.params['id']
    this.findByIdProduto(id)
    this.findAllCategoria()
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produtos)=> {
      this.produto = resp

    })

  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }


  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=> {
      this.listaCategoria = resp
    })
  }




  atualizar() {

    this.categoria.idCategoria = this.idCategoria
    this.produto.codigoCategoria = this.categoria


    this.produtoService.putProdutos(this.produto).subscribe((resp: Produtos)=>{
      this.produto = resp
      Swal.fire({
        icon: 'success',
        text: 'Produto atualizado com sucesso',

      })
      this.router.navigate(['/meusprodutos'])
    })

  }

}
