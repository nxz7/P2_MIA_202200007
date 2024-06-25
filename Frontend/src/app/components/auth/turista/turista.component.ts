import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-turista',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet, 
    RouterModule
  ],
  templateUrl: './turista.component.html',
  styleUrl: './turista.component.scss'
})
//borra
export class TuristaComponent {

  autosItems: any[] = [];
  viajesItems: any[] = [];
  username: string = '';
  private subscription: Subscription | undefined;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // login--> el parametro de username que se mando
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || null;
      if (this.username) {
        console.log('Username from queryParams:', this.username);
        //Swal.fire(this.username)
        // que se crague al iniciar
        this.actualizarTabla();
      } else {
        console.error('Username no esta en -> queryParams');
        // Handle case where username is not found in queryParams
      }
    });
  }

  actualizarTabla(): void {
    this.autosItems = [];
    this.viajesItems = [];

    //alert("HOLA");
    this.usuarioService.consult_post('/turista/actualizar',{}).subscribe({
      
      next: (response: any) => {
        // llenar tablas
        Swal.fire("TABLA ACTUALIZADA");
        if (response.status) {
          response.itemz.forEach((item: any) => { // itemz
            if (item.element === 'autos') { // element
              this.autosItems.push(item);
            } else if (item.element === 'viajes') { // elemento
              this.viajesItems.push(item);
            }
          });
        } else {
          console.error('Error al obtener los items del servidor');
          // error
        }
      },
      error: (error) => {
        console.error('Error en la solicitud al servidor', error);
        // error
      }
    });
  }
//-------------------VIAJES
  reservarViaje(viaje: any): void {
    if (!this.username) {
      console.error('Username not available for reservation');
      return;
    }

    const dataToPost = {
      agencia: viaje.agencia,
      origen: viaje.origen,
      destino: viaje.destino,
      dias: viaje.dias,
      precio: viaje.precio,
      username: this.username // Use the username obtained from queryParams
    };

    console.log(this.username);
    //alert(this.username);

    this.usuarioService.consult_post('/turista/solicitudViaje', dataToPost).subscribe({
      next: (response: any) => {
        // Handle success response if needed
        console.log('Reserva realizada con éxito:', response);
        Swal.fire('solicitud realizada con éxito :)');
      },
      error: (error: any) => {
        console.error('Error al realizar la solicitud:', error);
        Swal.fire('Error al realizar la solicitud :( ');
      }
    });
  }
  //-----------------------------------------------------------
//---------------------------------AUTOS
reservarAuto(auto: any): void {
  if (!this.username) {
    console.error('Username not available for reservation');
    return;
  }

  const dataToPost = {
    agencia: auto.agencia,
    marca: auto.marca,
    placa: auto.placa,
    modelo: auto.modelo,
    precio: auto.precio,
    ciudad: auto.ciudad,
    username: this.username // nombre del usuraio
  };

  console.log(this.username);
  //alert(this.username);

  this.usuarioService.consult_post('/turista/solicitudAuto', dataToPost).subscribe({
    next: (response: any) => {
      // Handle success response if needed
      console.log('solicitud realizada con éxito:)', response);
      Swal.fire('solicitud realizada con éxito :)');
    },
    error: (error: any) => {
      console.error('Error al realizar la solicitud:', error);
      Swal.fire('Error al realizar la reserva');
    }
  });
}




//------------------CERRAR SESION
  logout(): void {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    // Unsubscribe from the subscription to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}