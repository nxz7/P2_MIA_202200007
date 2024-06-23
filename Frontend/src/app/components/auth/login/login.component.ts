import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';


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
            alert('Usuario logueado :)');
//--------------------------------------------------------
          const userType = data.user.type;
            switch (userType) {
              case 'admin':
              
                this.router.navigate(["/admin"]);
                alert('Bienvenido Admin!!!');
                break;
              case 'recepcionista':
                alert('Bienvenido Recepcionista!!!');
                this.router.navigate(["/recepcionista"]);
                break;
              case 'turista':
                this.router.navigate(['/turista'], { queryParams: { username: data.user.username } });
                alert('Bienvenido Turista!!!');
                break;
              default:
                alert('Bienvenido!');
            }
            //this.router.navigate(['/dashboard']); // Redirect to a dashboard or appropriate route
          } else {
            alert('Error en el login');
            console.log('Error en el login');
          }
        },
        error: (error: any) => {
          console.log('ERROR EN EL LOGIN');
          console.log(error);
          alert('Error en el login');
        }
      });
    } else {
      console.log('Formulario incompleto');
      alert('Formulario incompleto');
    }
  }
}
