import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Usuario } from '../models/Usuario';
import { AutService } from '../service/aut.service';

@Component({
  selector: 'app-meusprodutos',
  templateUrl: './meusprodutos.component.html',
  styleUrls: ['./meusprodutos.component.css']
})
export class MeusprodutosComponent implements OnInit {

  user: Usuario = new Usuario();
  idUsuario = environment.id;

  constructor(
    private router: Router,
    private authService: AutService
  ) { }

  ngOnInit() {
    window.scroll(0,0);
    if (environment.token == "") {

      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Sua sessão expirou!'
      })


      this.router.navigate(["/inicio"]);
    }

    this.findByIdUser();
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUsuario).subscribe((resp: Usuario)=>{
      this.user = resp;
    });
  }
}
