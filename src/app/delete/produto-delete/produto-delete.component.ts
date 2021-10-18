import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Produtos } from 'src/app/models/Produtos';
import { ProdutoService } from 'src/app/service/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produtos = new Produtos
  idProd : number



  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private routerAtiva: ActivatedRoute
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    this.idProd = this.routerAtiva.snapshot.params['id']
    this.findByIdProduto(this.idProd)




  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produtos)=>{
      this.produto = resp
    })
  }


  apagar() {
    this.produtoService.deleteProdutos(this.idProd).subscribe(()=> {
      Swal.fire({
        icon: 'success',
        text: 'Produto deletado com sucesso',

      })
      this.router.navigate(['/meusprodutos'])
    })
  }


}
