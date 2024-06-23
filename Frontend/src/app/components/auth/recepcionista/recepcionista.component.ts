import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';


@Component({
  selector: 'app-recepcionista',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet, 
    RouterModule
  ],
  templateUrl: './recepcionista.component.html',
  styleUrl: './recepcionista.component.scss'
})


export class RecepcionistaComponent {
  items: any[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.actualizarTabla();
  }

  actualizarTabla(): void {
    this.usuarioService.consult_post('/recepcionista/tabla', {}).subscribe({
      next: (response: any) => {
        alert("TABLA ACTUALIZADA");
        if (response.status) {
          this.items = response.items.map((item: any) => {
            const { solicitud, ...rest } = item;
            return rest;
          });
        } else {
          console.error('Error al obtener los items del servidor');
        }
      },
      error: (error) => {
        console.error('Error en la solicitud al servidor', error);
      }
    });
  }

  getItemValue(item: any, index: number): string {
    const keys = Object.keys(item).slice(1); // Skip the first key
    return keys[index] ? item[keys[index]] : '';
  }

  aceptar(item: any): void {
    const { username, agencia, precio } = item;
    this.usuarioService.consult_post('/recepcionista/aceptarSolicitud', { username, agencia, precio }).subscribe({
      next: (response: any) => {
        if (response.status) {
        alert(`Solicitud aceptada para ${username}`);
        this.actualizarTabla();
      }else {
        console.error('error al aceptar la solicitu');
        alert(`error al aceptar la solicitud`);
      }
         // Update the table after the action
      },
      error: (error) => {
        console.error('error al aceptar la solicitu', error);
      }
    });
  }

  rechazar(item: any): void {
    const { username, agencia, precio } = item;
    this.usuarioService.consult_post('/recepcionista/borrarSolicitud', { username, agencia, precio }).subscribe({
      next: (response: any) => {

        if (response.status) {

        alert(`Solicitud rechazada para ${username}`);
        this.actualizarTabla(); 
      }else {
        console.error('error al rechazar la solicitur');
        alert(`error al rechazar la solicitur`);
      }
      },
      error: (error) => {
        console.error('Error en la solicitud de rechazo', error);
      }
    });
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}