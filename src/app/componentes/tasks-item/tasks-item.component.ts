import { Component, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input() tareas: Task = TASKS[0]
  faTimes = faTimes;

}

//agrego el icono que quiero usar a una varible,
//icono previamente importado(import{faTimes}from...) LEER "COMO REVISAR"