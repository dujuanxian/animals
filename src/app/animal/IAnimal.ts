export interface IAnimal {
  name: string;
}

export class Animal {
  private _name;

  get name () {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }
}
