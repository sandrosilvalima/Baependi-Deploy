import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { AutService } from 'src/app/service/aut.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  confirmarSenha: string
  confirmarEmail: string
  idUsuario: number
  foto = environment.foto

  constructor(
    private authService: AutService,
    private route: ActivatedRoute,
    private router: Router
  ){ }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ""){
      this.router.navigate(["/inicio"])
    }

    this.idUsuario = environment.id
    this.findByIdUsuario(this.idUsuario)

  }

  findByIdUsuario(id: number){
    this.authService.getByIdUser(id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  confirmEmail(event: any){
    this.confirmarEmail = event.target.value
  }

  atualizar(){
    if(this.usuario.senha != this.confirmarSenha || this.usuario.email != this.confirmarEmail){
      Swal.fire({
        icon: 'warning',
        text: 'Senha ou email incorretos!'

      })
    } else{
      this.authService.atualizar(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp
        this.router.navigate(["/inicio"])
      })
      Swal.fire({
        icon: 'success',
        text: 'Perfil atualizado com sucesso!',

      })
    }
  }



}
