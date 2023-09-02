import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';



const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: "", redirectTo:"produtos", pathMatch:"full"},
  { path: 'nao-encontrada', component: NaoEncontradaComponent },
  { path: '**', redirectTo: 'nao-encontrada' } // Redirecionar para 'nao-encontrada' se a rota não for encontrada

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
