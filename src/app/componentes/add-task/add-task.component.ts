import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)//el valor que recibe lo guarda en showAddTask
  }

  onSubmit(){
    if(this.text.length===0){
      alert("Please add a Task");
      return
    }
    const {text, day, reminder} = this
    const newTask ={text, day, reminder}
    this.onAddTask.emit(newTask);
  }
}

//const newTask ={
//  text: this.text,
//  day: this.day,
//  reminder: this.reminder
//}
//Podemos hacer la desconstrucción que nos permite javascript
//Podemos desconstruir el objeto this en sus parametros, simplificar el nuevo objeto de la siguiente forma:
//const {text, day, reminder} = this
//const newTask = {text, day, reminder}