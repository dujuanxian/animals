import { Component, OnInit } from '@angular/core';
import { IAnimal, Animal } from "../IAnimal";

@Component ({
  selector: 'app-animal-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})
export class AnimalListComponent implements OnInit {

  animals: IAnimal[] = [];

  constructor () {
  }

  ngOnInit () {
    this.animals.push(new Animal("sheep"));
    this.animals.push(new Animal("bird"));
  }

}
