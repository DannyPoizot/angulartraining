import { Component, OnInit } from '@angular/core';
import { TechnoService } from '../services/techno.service';

@Component({
  selector: 'app-techno-add',
  templateUrl: './techno-add.component.html',
  styleUrls: ['./techno-add.component.scss']
})
export class TechnoAddComponent implements OnInit {

  constructor(private ts: TechnoService) { }

  ngOnInit(): void {
  }

addTechno(form : any) {
  // console.log(form.value)
  this.ts.createTechno(form.value);
}

}
