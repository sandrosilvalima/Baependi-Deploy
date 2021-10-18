import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']

})
export class CarrinhoComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    if(environment.token == "" || environment.token != ""){
      Swal.fire({
        icon: 'warning',
        text: 'Em criação...'

      })
      this.router.navigate(["/inicio"])
    }
  }

}
