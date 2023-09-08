import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { NgxMaskDirective } from 'ngx-mask';
import { NgxMaskPipe } from 'ngx-mask';
import { provideNgxMask } from 'ngx-mask';
import { IConfig } from 'ngx-mask';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component'
import { FormsModule } from '@angular/forms';

const maskConfig: Partial<IConfig> = {
  validation: false,
};



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradaComponent,
    BarraPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule
   
 
    


  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
