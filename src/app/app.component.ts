import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectosinstandalone';
  usuario = "";
  sign = false;
chatcontainer = "chat-container";

  private actualizarSign(): void {
    this.sign = true;
  }

  recibirUsuario(usuario: string): void {
    console.log('Usuario recibido en el componente padre:', usuario);
    this.usuario = usuario;
    this.actualizarSign();
  }


  
}