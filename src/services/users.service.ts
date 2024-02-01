
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define una interfaz para la respuesta del servicio
interface UsuariosResponse {
  usuarios: string[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:4100';
  private usuario: string | null = null;

  // Métodos para obtener y establecer el estado del usuario
  getUsuario(): string {
    return this.usuario || "";
  }

  setUsuario(usuario: string): void {
    this.usuario = usuario;
  }

  // Método para iniciar sesión
  // iniciarSesion(usuario: string): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/iniciarSesion`, { usuario });
  // }
  
  constructor(private http: HttpClient) {}

  enviarUsuario(usuario: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/agregarUsuario`, { usuario });
  }

  // Indica el tipo de respuesta esperado usando la interfaz
  obtenerUsuarios(): Observable<UsuariosResponse> {
    return this.http.get<UsuariosResponse>(`${this.apiUrl}/obtenerUsuarios`);
  }
}