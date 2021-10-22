import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../models/Categoria';
import { Usuario } from '../models/Usuario';
import { UsuarioEspelho } from '../models/UsuarioEspelho';
import { CategoriaService } from './categoria.service';

@Injectable({
  providedIn: 'root'
})
export class AutService {


  listaCategoria: Categoria

  constructor(
    private http: HttpClient,
    private categoriaService: CategoriaService
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar(usuarioEspelho: UsuarioEspelho): Observable<UsuarioEspelho> {
    return this.http.put<UsuarioEspelho>('https://baependi.herokuapp.com/baependi/usuario/login', usuarioEspelho)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://baependi.herokuapp.com/baependi/usuario/cadastrar', usuario)
  }

  getByIdUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://baependi.herokuapp.com/baependi/usuario/buscarId/${id}`)
  }

  atualizar(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>("https://baependi.herokuapp.com/baependi/usuario/atualizar", usuario, this.token)
  }

  findByCategoria(nome: string){
    this.categoriaService.getByTipoCategoriaCasa(nome).subscribe((resp: Categoria)=>{
      this.listaCategoria = resp
    })
  }


  logado() {
    let ok: boolean = false

    if(environment.token != "") {
      ok = true
    }
    return ok
  }


  nome() {
    let ok: string = environment.nomeUsuario


    return ok
  }

foto(){
  let ok: string = environment.foto

  return ok
}

}



