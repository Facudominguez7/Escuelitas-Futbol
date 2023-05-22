import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFirestoreModule,
  SETTINGS,
} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { EditarEscuelitaComponent } from './componentes/editar-escuelita/editar-escuelita.component';
import { EscuelitasComponent } from './componentes/escuelitas/escuelitas.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { EscuelitaServicio } from './servicios/escuelita.service';
import { LoginService } from './servicios/login.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    EditarEscuelitaComponent,
    EscuelitasComponent,
    LoginComponent,
    NoEncontradoComponent,
    PiePaginaComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-Escuelitas-Futbol'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [EscuelitaServicio, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
