import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from '../nao-encontrada/nao-encontrada.component';
import { NumericoGuard } from '../numerico.guard';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: ':id', component: DetalhesProdutoComponent },
  {
    path: 'detalhes/:id',
    component: DetalhesProdutoComponent,
    canActivate: [NumericoGuard], // Aplicar o guard à rota de detalhes
  },
  { path: 'nao-encontrada', component: NaoEncontradaComponent },
  { path: ':id', component: DetalhesProdutoComponent },
  { path: 'nao-encontrada', component: NaoEncontradaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
