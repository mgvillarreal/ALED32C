import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { TopmenuComponent } from './componentes/topmenu/topmenu.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

import { AnimacionComponent } from './componentes/animacion/animacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterChatPipe } from './pipes/filter-chat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    IngresoComponent,
    ChatComponent,
    TopmenuComponent,
    PerfilComponent,

    AnimacionComponent,
     FilterChatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
