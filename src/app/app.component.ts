import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Albert';
  people: Array<any> = [];

  constructor(){
    this.people = [
      {
      'id': 1,
      'name': "Albert",
      'country': "Peru"
      },
      {
        'id': 2,
        'name': "Anita",
        'country': "Colombia"
      },
      {
        'id': 3,
        'name': "Paola",
        'country': "Brasil"
        }
    ]
  }

  receiveMessage($event:any){
    if($event.id <= 0){
      this.people.push({
        'name': $event.name,
        'country': $event.country,
        'id': this.people.length +1
      })
    }
    else{
      this.people = this.people.filter( e => e.id !== $event.id);
      this.people.push({
        'name': $event.name,
        'country': $event.country,
        'id': $event.id
      })
      

    }
    
  }
  
}
