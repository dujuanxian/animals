import { Component, OnInit } from '@angular/core';
import { IAnimal, Animal } from "../IAnimal";

@Component ({
  selector: 'app-animal-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
})
export class AnimalListComponent implements OnInit {

  animals: IAnimal[] = [];

  constructor () {
  }

  ngOnInit () {
    this.animals.push(new Animal("驴", "/assets/images/donkey.png"));
    this.animals.push(new Animal("河马", "/assets/images/hippo.png"));
    this.animals.push(new Animal("鸵鸟", "/assets/images/ostrich.png"));
    this.animals.push(new Animal("狮子", "/assets/images/tiger.png"));
  }

}
