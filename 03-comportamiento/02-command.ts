/**
 * ! Patrón Command
 * Este patrón encapsula una solicitud como un objeto,
 * lo que le permite parametrizar otros objetos con diferentes solicitudes,
 * encolar solicitudes, o registrar solicitudes, y soporta operaciones que pueden deshacerse.
 *
 * Me gustó mucho la explicación de Refactoring Guru
 * https://refactoring.guru/es/design-patterns/command
 *
 * * Es útil cuando se necesita desacoplar el objeto que invoca
 * * la operación del objeto que sabe cómo realizarla.
 *
 *
 */

interface Command {
  execute(): void;
}

class Light {
  turnOn(): void {
    console.log("luz prendida");
  }
  turnOff(): void {
    console.log("luz apagada");
  }
}
class Fan {
  on(): void {
    console.log("ventilador encendido");
  }
  off(): void {
    console.log("ventilador apagada");
  }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOff();
  }
}
class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn();
  }
}
class FanOnCommand implements Command {
  constructor(private fan: Fan) {}

  execute(): void {
    this.fan.off();
  }
}
class FanOffCommand implements Command {
  constructor(private fan: Fan) {}

  execute(): void {
    this.fan.on();
  }
}

class RemoteControl {
  private commands: Record<string, Command> = {};

  setCommand(button: string, command: Command) {
    this.commands[button] = command;
  }

  pressButton(button: string): void {
    if (this.commands[button]) {
      this.commands;
      return;
    }

    console.log("no se ha asignado un comando a este boton");
  }
}

function main() {
  const remoteControl = new RemoteControl();
  const light = new Light();
  const fan = new Fan();

  const lightOnCommand = new LightOnCommand(light);
  const lightOffCommand = new LightOffCommand(light);

  const fanOnCommand = new FanOnCommand(fan);
  const fanOffCommand = new FanOffCommand(fan);

  remoteControl.setCommand("1", lightOnCommand);
  remoteControl.setCommand("2", lightOffCommand);
  remoteControl.setCommand("3", fanOnCommand);
  remoteControl.setCommand("4", fanOffCommand);

  let continueProgram = true;

  do {
    console.clear();
    const pressedButton =
      prompt(
        `Presione un boton de control:
      1.Encencer Luz
      2.Apagar Luz
      3.Encencer Fan
      4.Apagar Fan
      

      Boton: 
      `
      ) ?? "";

    remoteControl.pressButton(pressedButton);

    const continueProgramResponse = prompt(`\nDesear continuar? (y/n)`)?.toLowerCase();

    continueProgram = continueProgramResponse === "n" ? false : true;
  } while (continueProgram);
}

main();
