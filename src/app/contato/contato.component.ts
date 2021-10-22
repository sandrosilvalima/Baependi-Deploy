import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)

  }

  enviar(){
    Swal.fire({
      icon: 'success',
      text: 'Feedback enviado com sucesso!'
    })
  }
}
