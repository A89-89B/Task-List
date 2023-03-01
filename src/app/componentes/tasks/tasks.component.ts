import { Component } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];
  
  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>(this.tasks = tasks));
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>(
      this.tasks = this.tasks.filter( (t) => t.id !== task.id)
    ))

  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)))
  }
}

//El servicio ya NO lo va a manejar el componente a traves del mock
//import { Task } from 'src/app/Task';        \
//import { TASKS } from 'src/app/mock-task';   \_ESTO SE CAMBIO
//export class TasksComponent {                /
//  tasks: Task[] = TASKS;                    /

//Agregue el constructor e inicializo el servicio como privado

//En el metodo ngOnInit cuando monte el componente, llamo a nuestro servicio y
//guardo la lista de tareas en nuestro "tasks"(tasks: Task[] = [])

//cuando el getTasks finaliza recibimos un coreback que recibe un parametro por respuesta, las tareas en este caso
//subscribe son como las promesas
//Esto es como las promise, el asyn y el await, el metodo suscribe de los observable

