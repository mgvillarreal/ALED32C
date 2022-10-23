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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    IngresoComponent,
    ChatComponent,
    TopmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
