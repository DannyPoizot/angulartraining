import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnoService {
    private technos : any = [];

  constructor() { }

  createTechno(techno : any) {
    this.technos = [techno, ...this.technos];
    console.log(this.technos);
  }
}
