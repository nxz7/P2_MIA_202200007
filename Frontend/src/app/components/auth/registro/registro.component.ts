import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet, 
    RouterModule
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  constructor(
    private http: UsuarioService,
    private router: Router
    
  ){}

  form_registro= new FormGroup({
    name: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required),

  });



  registrar(){
    debugger;
    if (this.form_registro.valid)  {
      if (this.form_registro.value.password === this.form_registro.value.confirmPassword)  {
          this.http.consult_post("/register/register", this.form_registro.value).subscribe({
            next:(data: any)=>{
              if (data.status === true){
                console.log("USUARIO REGISTRADO!");
                //alerta
                alert("usuario registrado:)");
                //regrese al home
                //this.router.navigate(["/usuarios"]);
              }else {
                alert("error en el resgitro1");
                console.log("error en el registro")
              }
            },
            error: (error: any )=>{
              console.log("ERROR EN EL REGISTRO");
              console.log(error);
              alert("error en el resgitro2");
            }

          });
      }else {
        console.log("contraseñas no coinciden")
        alert("contraseñas no coinciden");
      }

    }else  {
      console.log("FORMULARIO INCOMPLETO");
      alert("Formulario incompleto");
    }

  }

  goBack() {
    this.router.navigate(["/usuarios"]);
  }

}
