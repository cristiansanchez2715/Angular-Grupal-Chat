
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'conectedusers',
  templateUrl: './conectedusers.component.html',
  styleUrls: ['./conectedusers.component.css'],
})
export class ConectedusersComponent implements OnInit {
  usuarios: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.userService.obtenerUsuarios().subscribe(
      (data) => {
        // Verifica si 'usuarios' está presente antes de asignar
        if (data && data.usuarios) {
          this.usuarios = data.usuarios;
        } else {
          this.usuarios = [];
        }
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
        this.usuarios = [];
      }
    );
  }
}