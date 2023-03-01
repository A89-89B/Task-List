import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input() task: Task = TASKS[0]
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  
  faTimes = faTimes;

  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task)
  }
}

//agrego el icono que quiero usar a una varible,
//icono previamente importado(import{faTimes}from...) LEER "COMO REVISAR"

//LUEGO DE ACOMODAR EL SERVIDOR
//Tuve que cambiar "tareas:Task" por task (en @Input)