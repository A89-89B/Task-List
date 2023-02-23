import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = 'My Task List';

  toggleAddTask(){
    console.log("toggleAddTask")
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