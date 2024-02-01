import { Component } from '@angular/core';
import { UserService } from '../../services/users.service'; // Asegúrate de que la ruta sea correcta
import { SocketService } from '../../services/socket.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css'] // Debe ser styleUrls, no styleUrl
})
export class WritingComponent {
  message: string = '';

  constructor(private userService: UserService, private socketService: SocketService) {}

  enviarMensaje() {
    const usuario = this.userService.getUsuario();
    this.socketService.enviarMensaje({ user: usuario, message: this.message });
    this.message = ''; // Limpiar el mensaje después de enviarlo
  }
}
