import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ButtonComponent } from './componentes/button/button.component';
import { TasksComponent } from './componentes/tasks/tasks.component';
import { TasksItemComponent } from './componentes/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//El FontAwesomeModule se agrego solo cuando lo instale a traves del ng, 
//en lugar del npm. El ng lo mismo lo instala a traves del npm. LEER "COMO REVISAR"

//CON JSON-SERVER
//importamos el HttpClientModule en el app.module para que el resto de componentes puedan
//utilizar los metodos GET, POST, etc. importando en los mismos HttpClient y HttpHandler
//La permitomos en la aplicación para que la puedan usar en el componente