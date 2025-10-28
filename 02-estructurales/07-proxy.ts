/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */

class Player {
  name: string;

  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }
}

interface Room {
  enter(player: Player): void;
}

class SecretRoom implements Room {
  enter(player: Player): void {
    console.log(`bienvenido a la sala secrte ${player.name}`);
    console.log(`un gran enemigo`);
  }
}

class MagicPortal implements Room {
  private secretRoom: Room;

  constructor(room: Room) {
    this.secretRoom = room;
  }
  enter(player: Player): void {
    if (player.level >= 10) {
      this.secretRoom.enter(player);
      return;
    }

    console.log(`Lo siento mucho ${player.name}, tu nivel ${player.level} es muy bajo`);
  }
}

function main() {
  const portal = new MagicPortal(new SecretRoom());
  const player = new Player('aventeurero 1', 5)
  const player2 = new Player('aventeurero 2', 15)

  console.log('aventurero 1 intente entrar al portal');
  portal.enter(player)
  console.log('aventurero 2 intente entrar al portal');
  portal.enter(player2)
  
}

main();
