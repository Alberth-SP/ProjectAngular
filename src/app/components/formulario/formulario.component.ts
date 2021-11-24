import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ServiceAppService } from 'src/app/services/service-app.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

 
  @Output() newEvent = new EventEmitter<any>();
  constructor( public dataService: ServiceAppService) { }




  sendData(){
    this.newEvent.emit({
      'name': this.dataService.name,
      'country': this.dataService.country,
      'id': this.dataService.idUser
    })
    this.dataService.name = "";
    this.dataService.country = "";
    this.dataService.idUser = 0;
  }

}
