import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Categoria } from '../models/Categoria';
import { Produtos } from '../models/Produtos';
import { Usuario } from '../models/Usuario';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {


    produto: Produtos = new Produtos()
    categoria: Categoria = new Categoria()
    usuario: Usuario = new Usuario
    id: number
    listaCategoria: Categoria[]
    idUser = environment.id
    nomeMaterial: string
    idCategoria: number



    constructor(
      private router:Router,
      private categoriaService: CategoriaService,
      private produtoService: ProdutoService,

      ){}


  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ""){
      this.router.navigate(["/inicio"])
    }

    this.getAllCategorias()


  }

    getAllCategorias(){
      this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
          this.listaCategoria = resp
      })
    }

    findByIdCategoria(){
      this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
        this.categoria = resp
      })
    }

    findByIdProduto(){
      this.produtoService.getByIdProdutos(this.id).subscribe((resp: Produtos)=>{
        this.produto = resp
      })
    }

    findByNomeTipoMaterial() {
      this.produtoService.getTipoMaterial(this.nomeMaterial).subscribe((resp: Produtos)=> {
        this.produto= resp
      })
    }

    teste(){
      console.log("produto" + JSON.stringify(this.produto))
    }

    test(){
      console.log("categoria" + JSON.stringify(this.categoria))
    }


    cadastrar(){
      this.categoria = new Categoria;
      this.categoria.idCategoria = this.idCategoria
      this.produto.codigoCategoria = this.categoria


      this.usuario.idUsuario = this.idUser
      this.produto.comprador = this.usuario

      this.produtoService.postProdutos(this.produto).subscribe((resp: Produtos)=>{
        this.produto = resp

        
        Swal.fire({
          icon: 'success',
          text: 'Produto cadastrado com sucesso',

          

        })
        this.produto = new Produtos()
        this.router.navigate(['/inicio'])
      },erro =>{
        if (erro.status == 400){
          Swal.fire({
            icon: 'warning',
            text: 'Algum campo foi preenchido incorretamente!',
  
          })
      
        }
      })

    }
  }