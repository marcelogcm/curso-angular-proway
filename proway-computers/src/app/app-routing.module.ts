import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';


const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: "", redirectTo:"produtos", pathMatch:"full"},
  { path: "**", component: NaoEncontradaComponent},
  { path: 'produtos/detalhes-produto/:id', component: DetalhesProdutoComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
