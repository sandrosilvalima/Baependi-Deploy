import { Produtos } from "./Produtos"

export class Usuario{
  public idUsuario: number
  public nomeUsuario: string
  public nomePessoal: string
  public estado: string
  public cidade: string
  public endereco: string
  public cep: string
  public email: string
  public senha: string
  public foto: string
  public listaDeProdutos: Produtos[]
}
