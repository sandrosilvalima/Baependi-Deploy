import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('https://baependi.herokuapp.com/baependi/categoria/buscarTodas', this.token)
  }

  getByIdCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`https://baependi.herokuapp.com/baependi/categoria/Buscarcategoriaid/${id}`)
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
      return this.http.post<Categoria>('https://baependi.herokuapp.com/baependi/categoria/salvar', categoria, this.token )
  }

  putCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>('https://baependi.herokuapp.com/baependi/categoria/atualizar', categoria, this.token)
  }

  deleteCategoria(id: number) {
    return this.http.delete(`https://baependi.herokuapp.com/baependi/categoria/deletar/${id}`)
  }

  getByTipoCategoriaCasa(tipo: string): Observable<Categoria>{
    return this.http.get<Categoria>(`https://baependi.herokuapp.com/baependi/categoria/acharPorTipoProduto/${tipo}`, this.token)

  }

}
