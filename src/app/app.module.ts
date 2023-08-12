import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './painel/header/header.component';
import { FooterComponent } from './painel/footer/footer.component';
import { ListaComponent } from './painel/lista/lista.component';
import { FiltrosComponent } from './painel/filtros/filtros.component';
import { ModalComponent } from './shared/components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelComponent,
    HeaderComponent,
    FooterComponent,
    ListaComponent,
    FiltrosComponent,
    ModalComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
