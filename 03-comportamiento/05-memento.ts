/**
 * !Patrón Memento
 * Permite capturar y externalizar un estado interno de un objeto,
 * de manera que el objeto pueda ser restaurado a ese estado más tarde.
 *
 * * Es útil cuando se necesita guardar el estado de un objeto para poder
 * * volver a él en un futuro.
 *
 * https://refactoring.guru/es/design-patterns/memento
 */
class GameMemento {
  private level: number;
  private health: number;
  private position: string;

  constructor(level: number, health: number, position: string) {
    this.health = health;
    this.level = level;
    this.position = position;

    console.log(`
      jugando en el nivel ${this.level}
        salud: ${this.health}
        posicion: ${this.position}
      `);
  }

  save(): GameMemento {
    return new GameMemento(this.level, this.health, this.position);
  }

  play(level: number, health: number, position: string): void {
    this.level = level;
    this.health = health;
    this.position = position;

    console.log(`
      jugando en el nivel ${this.level}
        salud: ${this.health}
        posicion: ${this.position}
      `);
  }

  restore(memento: GameMemento): void {
    this.level = memento.getLevel();
    this.health = memento.getHealth();
    this.position = memento.getPosition();

    console.log(`
      progreso restaurado
      restauracion en el nivel ${this.level}
        salud: ${this.health}
        posicion: ${this.position}
      `);
  }

  getLevel() {
    return this.level;
  }
  getHealth() {
    return this.health;
  }
  getPosition() {
    return this.position;
  }
}
class Game {
  private level: number = 1;
  private health: number = 100;
  private position: string = "inicio";

  constructor() {
    console.log(`
      jugando en el nivel ${this.level}
        salud: ${this.health}
        posicion: ${this.position}
      `);
  }

  save(): GameMemento {
    return new GameMemento(this.level, this.health, this.position);
  }

  play(level: number, health: number, position: string): void {
    this.level = level;
    this.health = health;
    this.position = position;

    console.log(`
      jugando en el nivel ${this.level}
        salud: ${this.health}
        posicion: ${this.position}
      `);
  }

  restore(memento: GameMemento): void {
    this.level = memento.getLevel();
    this.health = memento.getHealth();
    this.position = memento.getPosition();

    console.log(`
      progreso restaurado
      restauracion en el nivel ${this.level}
        salud: ${this.health}
        posicion: ${this.position}
      `);
  }

  getLevel() {
    return this.level;
  }
  getHealth() {
    return this.health;
  }
  getPosition() {
    return this.position;
  }
}

class GameHistory {
  private mementos: GameMemento[] = [];

  push(memento: GameMemento) {
    this.mementos.push(memento);
  }

  pop(): GameMemento | undefined {
    return this.mementos.pop();
  }
}

function main() {
  const game = new Game();
  const history = new GameHistory()

  history.push(game.save())

  game.play(2,90, 'Bosque Encantado')
  history.push(game.save())

  game.play(3, 70, 'Cueva Oscura')
  history.push(game.save())

  game.play(4, 50, 'castillo del dragon')
  console.log("Esdato actual:");

  game.restore(history.pop()!)
  console.log("despues de restaurar ultimo Esdato actual:");
  

}

main();
