import { Component, OnInit , Input} from '@angular/core';
import { filter } from 'rxjs';
import { ServiceAppService } from 'src/app/services/service-app.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  @Input() people: Array<any> = [];

  constructor(private dataService: ServiceAppService) { 
    
  }

  ngOnInit(): void {
  }

  deleteItem(id:any){
    this.people = this.people.filter( e => e.id !== id);
    let i = 1;
    for(let p of this.people){
      p.id = i;
      i += 1;
    }

  }

  editItem(id:any){
    let person = this.people.find( e => e.id === id);
    this.dataService.name=person.name;
    this.dataService.country=person.country;
    this.dataService.idUser=person.id;
    

  }

}
