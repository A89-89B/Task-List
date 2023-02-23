import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter()

  onClick(){
    this.btnClick.emit();
  }

}
//El Input nos va permitir tomar estos valores que nos van a llegar
//por parametro desde el template(el html de header)
//se introduce en el text y lo guarda en el componente

//Output para enviar(en este caso al header)

//EventEmitter para emitir. Estamos emitiendo hacia afuera del componente