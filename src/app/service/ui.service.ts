import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';//Esto nos sirve para poder encadenar eventos.Poder escuchar cambios en las funciones ya sea que sean asincronicas o las hacemos asincronicas

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean = false;
  private subject = new Subject<any>(); //Esto tiene que ver con la posibilidad de poder escuchar eventos del templete

  constructor() { }

  toggleAddTask():void{ //no retorna nada(void)
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);//Creo que se lo paso a subject(el showAddTask)
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
