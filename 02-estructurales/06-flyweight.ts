/**
 * ! Patrón Flyweight
 * Es un patrón de diseño estructural que nos permite usar objetos compartidos
 * para soportar eficientemente grandes cantidades de objetos.
 *
 * * Es útil cuando necesitamos una gran cantidad de objetos y queremos reducir
 * * la cantidad de memoria que utilizan.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */

interface iLocation {
  display(coor: {x: number, y: number}): void;
}

class LocationIcon implements iLocation {
  private type: string;
  private iconImage: string

  constructor(type: string, iconImage: string){
    this.type = type
    this.iconImage = iconImage
  }

  display(coordinates: {x: number, y: number}): void {}
}

class LocationFactory {
  getLocationIcon
}