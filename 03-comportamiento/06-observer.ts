/**
 * ! Patrón Observer
 * El patrón Observer es un patrón de diseño de comportamiento que establece
 * una relación de uno a muchos entre un objeto, llamado sujeto,
 * y otros objetos, llamados observadores, que son notificados
 * y actualizados automáticamente por el sujeto
 * cuando se producen cambios en su estado.
 *
 * * Es útil cuando necesitamos que varios objetos estén
 * * pendientes de los cambios
 *
 * !No confundirlo con RXJS Observables
 *
 * https://refactoring.guru/es/design-patterns/observer
 */

interface Observer {
  notify(videoTitle: string): void;
}

class YoutubeChannel {
  private subscribers: Observer[] = [];
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  subcriber(observer: Observer): void {
    this.subscribers.push(observer);

    console.log("nuevo subs al canal", this.name);
  }

  unsubscribe(observer: Observer) {
    this.subscribers = this.subscribers.filter((sub) => sub !== observer);
    console.log("un subcritor se dio de baja", this.name);
  }

  upploadVideo(videoTitle: string): void {
    console.log("subiendo un NUEVO video", videoTitle);

    for (const subs of this.subscribers) {
      subs.notify(videoTitle);
    }
  }
}

class Subcriber implements Observer {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  notify(videoTitle: string): void {
    console.log(
      this.name,
      `
      ha sido notificado: nuevo video
      `,
      videoTitle
    );
  }
}

function main() {
  const channel = new YoutubeChannel('ASBELDEV')
  const sub1 = new Subcriber('sub1')
  const sub2 = new Subcriber('sub2')
  const sub3 = new Subcriber('sub3')
  const sub4 = new Subcriber('sub4')

  channel.subcriber(sub1)

  channel.upploadVideo('video 1')
  channel.subcriber(sub2)
  channel.subcriber(sub3)

  
  channel.upploadVideo('video 2')
  channel.unsubscribe(sub3)
  channel.subcriber(sub4)


  channel.upploadVideo('MI ULTIMO VIDEO')
}

main()