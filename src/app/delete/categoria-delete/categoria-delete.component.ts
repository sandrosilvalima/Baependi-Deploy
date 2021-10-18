import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = new Categoria()
  categoriaId: number

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.categoriaId = this.route.snapshot.params['id']
    this.findByIdCategoria(this.categoriaId)
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria)=> {
      this.categoria= resp
    })
  }

  apagar() {
    this.categoriaService.deleteCategoria(this.categoriaId).subscribe(()=> {
      alert('Categoria cadastrada com sucesso!')
    })
  }

}
