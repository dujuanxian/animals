import { Component, OnInit, Input } from '@angular/core';
import { IAnimal } from "../IAnimal";

@Component({
  selector: 'app-animal-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class AnimalDetailComponent implements OnInit {

  @Input() value: IAnimal;

  constructor() { }

  ngOnInit() {
  }

}
