import { Injectable } from '@angular/core';

export interface Message {
  img: string;
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
  video: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      img: 'https://cmsudi.udelistmo.edu/sites/default/files/aprender-programacion.png',
      fromName: 'Sofia',
      subject: 'Nuevo Mensaje: Ayuda',
      date: '11:32 AM',
      id: 0,
      read: false,
      video: ''
    },
   {
     img: '',
      fromName: 'Miguel',
      subject: 'Nuevo mensaje: Mucho Texto',
      date: '9:12 AM',
      id: 1,
      read: false,
      video: ''
    },
    {
      img: 'data:image/png;base64,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',
      fromName: 'Nacho',
      subject: 'Reporte de Notificacion Diaria',
      date: '1:55 AM',
      id: 2,
      read: false,
      video: ''
    },
    {
      img: 'data:image/png;base64,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',
      fromName: 'Felipe',
      subject: 'Nuevo Mensaje: Una Situacion',
      date: 'Ayer',
      id: 3,
      read: false,
      video: ''
    },
    {
      img: '',
      fromName: 'JJ',
      subject: 'Nuevo Mensaje: Actualizacion del Sistema',
      date: 'Ayer',
      id: 4,
      read: false,
      video: ''
    },
    {
      img: 'https://usefulangle.com/img/thumb/html.png',
      fromName: 'Andres',
      subject: 'Nuevo Mensaje: jeje',
      date: 'Ayer',
      id: 5,
      read: false,
      video: ''
    },
    {
      img: '',
      fromName: 'El Detonao',
      subject: 'Nuevo Mensaje: Salsa Picante',
      date: 'Lunes',
      id: 6,
      read: false,
      video: ''
    },
    {
      img: 'https://cmsudi.udelistmo.edu/sites/default/files/aprender-programacion.png',
      fromName: 'MEME',
      subject: 'Reporte Diario: Sin Papel',
      date: 'Domingo',
      id: 7,
      read: false,
      video: ''
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public deleteMessageById(id: number) {
    this.messages = this.messages.filter(aux => {
      return aux.id !== id
    })
  }
}
