import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:4000'); // Reemplaza con la URL de tu backend
  }

  enviarMensaje(mensaje: any) {
    this.socket.emit('enviarMensaje', mensaje);
  }

  onMensaje(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('nuevoMensaje', (data: any) => {
        observer.next(data);
      });
    });
  }

  // Agrega este método para desconectar el socket cuando sea necesario
  desconectar() {
    this.socket.disconnect();
  }
}