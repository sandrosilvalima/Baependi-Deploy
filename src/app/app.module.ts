import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoComponent } from './produto/produto.component';
import { TodosprodutosComponent } from './todosprodutos/todosprodutos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ODSComponent } from './ods/ods.component';
import { DadosComponent } from './dados/dados.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';

import { MeusprodutosComponent } from './meusprodutos/meusprodutos.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { ArtesComponent } from './categoria/artes/artes.component';
import { ModaComponent } from './categoria/moda/moda.component';
import { EscolarComponent } from './categoria/escolar/escolar.component';
import { CasaComponent } from './categoria/casa/casa.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreNosComponent,
    RodapeComponent,
    MenuComponent,
    ContatoComponent,
    EntrarComponent,
    CadastrarComponent,
    CategoriaComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    ProdutoComponent,

    TodosprodutosComponent,
    CarrinhoComponent,
    ODSComponent,
    DadosComponent,
    InformacoesComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,

    MeusprodutosComponent,
    UserEditComponent,
    ArtesComponent,
    ModaComponent,
    EscolarComponent,
    CasaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
