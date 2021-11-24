import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAppService {

  idUser: number = 0;
  name: string = "";
  country: string = "";

  constructor() { }
}
