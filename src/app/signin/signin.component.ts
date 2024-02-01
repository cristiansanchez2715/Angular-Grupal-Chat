import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  usuario: string = ''; // Variable del formulario
  

  @Output() enviarUsuarioEvent = new EventEmitter<string>(); // Evento personalizado

  constructor(private userService: UserService) {}

  enviarUsuario(): void {
    // No es necesario llamar a iniciarSesion, simplemente establece el usuario y emite el evento
    this.userService.setUsuario(this.usuario);
    this.enviarUsuarioEvent.emit(this.usuario);
    this.userService.enviarUsuario(this.usuario).subscribe({
      next: (response) => {
        console.log('Envío de usuario exitoso:', response);
        // También puedes emitir el evento si es necesario en tu lógica
        this.enviarUsuarioEvent.emit(this.usuario);
      },
      error: (error) => {
        console.error('Error en el envío de usuario:', error);
      },
      complete: () => {
        // Puedes hacer algo en el momento de la finalización, si es necesario
      }
    });

}
}
