import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComParametroComponent } from './pagina-com-parametro/pagina-com-parametro.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

const routes: Routes = [
   { path:"primeira-pagina", component: PrimeiraPaginaComponent },
   { path:"segunda-pagina", component: SegundaPaginaComponent},
   { path:"",redirectTo: "primeira-pagina", pathMatch: "full"},
   { path:"pagina-com-parametro/:id", component: PaginaComParametroComponent},
   { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
   { path:"**", component: PaginaNaoEncontradaComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
