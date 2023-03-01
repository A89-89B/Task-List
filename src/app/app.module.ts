import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//                                     |
import { HttpClientModule } from '@angular/common/http';//                                       |
import { FormsModule } from '@angular/forms';//                                                  |
import { RouterModule, Routes } from '@angular/router';
//                                                                                           ___/ \
import { AppComponent } from './app.component';//                                                  |
import { HeaderComponent } from './componentes/header/header.component';//                         | 
import { ButtonComponent } from './componentes/button/button.component';//                         |
import { TasksComponent } from './componentes/tasks/tasks.component';//                            |
import { TasksItemComponent } from './componentes/tasks-item/tasks-item.component';//              |
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; //El del video lo puso arriba-(Aqui se puso al intalar)
import { AddTaskComponent } from './componentes/add-task/add-task.component';
import { AboutComponent } from './componentes/about/about.component';
import { FooterComponent } from './componentes/footer/footer.component';

const appRoutes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}) //forRoot para que inicialice en root. Sobre enableTracing dijo que era para el historial
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

//add-task
//agrego el FormsModule para uasrlo en el componente

//ROUTES
//Si escribia path: 'about' con mayuscula la primera(About) no funciona.