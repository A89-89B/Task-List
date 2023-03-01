import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Task } from '../Task';
import { TASKS } from '../mock-task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks' //URL del servidor

  constructor(private http:HttpClient) { } //inicializo el metodo http

  //Definimos que este metodo es un observable
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}` //busco por el id
    return this.http.delete<Task>(url)
  }
  updateTaskReminder(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions) //put actualizar info
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions) //post mandamos algo nuevo para gregar
  }
}


//El Servicio si trajo "constructor(){}" a diferencia de los componentes

//Esto nos permite consolar en un solo archivo toda la logica en cuanto a las tareas
//y que nuestros componentes solo llamen a esos servicios

//Nuestro Servicio es sincronico pero en la realidad son asincronicos(no sabemos cuando vuelven)
//Asi que importamos esta librilla que nos va permitir manejar o definir que un metodo observable
//que es asincronico. 
//Nuestro servicio, el getTasks es un metodo asicronico la base de datos lleva su tiempo en responder peticiones

//CON JSON-SERVER
//HttpClient y HttpHandler Esto nos va permitir llamadas GET, POST, etc a nuestro servidor
//const tasks = of(TASKS); \__Cambiado por:     return this.http.get<Task[]>(this.apiUrl)
//return tasks             /

//PUT recibe la url y el task del objeto que tiene que actualizar
//httpOption definimos que los headers que mandamos en la petición es una instancia de header y que que es un
//'Content-Type'y'aplication/json' le mandamos un json a nuestro servidor
//Agregamos httpOption en el return de la petición put Para informarle al backend que es un json