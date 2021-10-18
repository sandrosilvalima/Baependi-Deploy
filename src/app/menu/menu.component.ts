import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Categoria } from '../models/Categoria';
import { Usuario } from '../models/Usuario';
import { UsuarioEspelho } from '../models/UsuarioEspelho';
import { AutService } from '../service/aut.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarioEspelho: UsuarioEspelho = new UsuarioEspelho
  id = environment.id



  constructor(
    private router: Router,
    public auth: AutService,
    private categoriaService: CategoriaService
    ) { }

  ngOnInit() {
  }

  entrar() {
    this.auth.entrar(this.usuarioEspelho).subscribe((resp: UsuarioEspelho)=>{
      this.usuarioEspelho = resp

      environment.token = this.usuarioEspelho.token
      environment.nomeUsuario = this.usuarioEspelho.nomeUsuario
      environment.nomePessoal = this.usuarioEspelho.nomePessoal
      environment.foto = this.usuarioEspelho.foto
      environment.id = this.usuarioEspelho.idUsuario
      environment.email = this.usuarioEspelho.email
      environment.estado = this.usuarioEspelho.estado
      environment.cidade = this.usuarioEspelho.cidade
      environment.endereco = this.usuarioEspelho.endereco
      environment.cep = this.usuarioEspelho.cep

      console.log(environment.token)
      console.log(environment.nomeUsuario)
      console.log(environment.nomePessoal)
      console.log(environment.foto)
      console.log(environment.id)
      console.log(environment.email)

      this.router.navigate(["/inicio"])
    },erroLocal =>{
      if(erroLocal.status == 400){
        Swal.fire({
          icon: 'warning',
          text: 'Senha ou email incorretos!'

        })
      }
    })
  }

  sair(){
    this.router.navigate(["/inicio"])
    environment.token = ""
    environment.id = 0
    environment.nomeUsuario = ""
    environment.foto = ""
    environment.email = ""
    environment.nomePessoal = ""
  }


}
