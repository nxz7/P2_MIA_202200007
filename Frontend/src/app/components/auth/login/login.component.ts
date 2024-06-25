import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2';

// or via CommonJS

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet, 
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})



export class LoginComponent {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  form_login = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  login() {
    if (this.form_login.valid) {
      this.usuarioService.consult_post('/login/getUser', this.form_login.value).subscribe({
        next: (data: any) => {
          if (data.status) {
            console.log('USUARIO LOGUEADO!');
            Swal.fire("Usuario logueado :)");
            //alert('Usuario logueado :)');
//--------------------------------------------------------
          const userType = data.user.type;
            switch (userType) {
              case 'admin':
              
                this.router.navigate(["/admin"]);
                Swal.fire("Bienvenido Admin!!!");
                //alert('Bienvenido Admin!!!');
                break;
              case 'recepcionista':
                Swal.fire("Bienvenido Recepcionista!!!");
                //alert('Bienvenido Recepcionista!!!');
                this.router.navigate(["/recepcionista"]);
                break;
              case 'turista':
                this.router.navigate(['/turista'], { queryParams: { username: data.user.username } });
                Swal.fire('Bienvenido Turista!!!');
                break;
              default:
                Swal.fire('Bienvenido!');
            }
            //this.router.navigate(['/dashboard']); // Redirect to a dashboard or appropriate route
          } else {
            Swal.fire('Error en el login');
            console.log('Error en el login');
          }
        },
        error: (error: any) => {
          console.log('ERROR EN EL LOGIN');
          console.log(error);
          Swal.fire('Error en el login');
        }
      });
    } else {
      console.log('Formulario incompleto');
      Swal.fire('Formulario incompleto');
    }
  }
}
