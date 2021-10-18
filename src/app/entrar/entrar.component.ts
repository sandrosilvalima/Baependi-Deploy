import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioEspelho } from '../models/UsuarioEspelho';
import { AutService } from '../service/aut.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioEspelho: UsuarioEspelho = new UsuarioEspelho


  constructor(

    private auth: AutService,
    private router: Router

  ) { }



  ngOnInit()  {

    window.scroll(0,0)

  }

  entrar() {
    this.auth.entrar(this.usuarioEspelho).subscribe((resp: UsuarioEspelho)=>{
      this.usuarioEspelho = resp

      environment.token = this.usuarioEspelho.token
      environment.nomeUsuario = this.usuarioEspelho.nomeUsuario
      environment.foto = this.usuarioEspelho.foto
      environment.id = this.usuarioEspelho.idUsuario
      environment.email = this.usuarioEspelho.email
      environment.nomePessoal = this.usuarioEspelho.nomePessoal

      console.log(environment.token)
      console.log(environment.nomeUsuario)
      console.log(environment.nomePessoal)
      console.log(environment.foto)
      console.log(environment.id)
      console.log(environment.email)


      this.router.navigate(["/inicio"])
    }, erro =>{
      if(erro.status == 400){
        alert("Usuario ou senha estão incorretos!")
      }
    })
  }
}


