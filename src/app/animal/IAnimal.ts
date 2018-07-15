export interface IAnimal {
  name: string;
}

export class Animal {
  get image (): string {
    return this._image;
  }

  private _name;
  private _image: string;

  get name () {
    return this._name;
  }

  constructor ( name: string, image: string ) {
    this._name = name;
    this._image = image;
  }
}
