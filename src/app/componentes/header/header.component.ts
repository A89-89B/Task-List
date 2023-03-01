import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Router } from '@angular/router'//Para saber en que ruta estamos

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = 'My Task List';
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService: UiService, 
    private router: Router){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)//el valor que recibe lo guarda en showAddTask
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}
//EN EL VIDEO TIENE:
//import{ Component, OnInit } from ...(igual)
//export class HeaderComponent implements OnInit {
//
//  constuctor() {}
//  ngOnInit(): void {
//  }  
//}