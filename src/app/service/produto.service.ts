import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../models/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllProdutos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>("https://baependi.herokuapp.com/baependi/produtos/buscarTodos", this.token)
  }

  getByIdProdutos(id: number): Observable<Produtos>{
    return this.http.get<Produtos>(`https://baependi.herokuapp.com/baependi/produtos/BuscarProdutoId/${id}`)
  }

  getTipoMaterial(material: string): Observable<Produtos> {
    return this.http.get<Produtos> (`https://baependi.herokuapp.com/baependi/produtos/buscarPorTipoMaterial/${material}`, this.token)
  }

  postProdutos(produtos: Produtos): Observable<Produtos>{
    return this.http.post<Produtos>("https://baependi.herokuapp.com/baependi/produtos/salvar", produtos, this.token)
  }

  putProdutos(produtos: Produtos): Observable<Produtos>{
    return this.http.put<Produtos>("https://baependi.herokuapp.com/baependi/produtos/atualizar", produtos, this.token)
  }

  deleteProdutos(id: number){
    return this.http.delete(`https://baependi.herokuapp.com/baependi/produtos/deletar/${id}`)
  }

  getProdutos(busca: string): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`https://baependi.herokuapp.com/baependi/produtos/acharPorNomeProduto/${busca}`, this.token)
  }
}
