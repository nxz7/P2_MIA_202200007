import { Component,ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2';

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

  imagen: any = '';
  imagen_path: any = '';
  ruta_aws:any = '';

  constructor(
    private http: UsuarioService,
    private router: Router,
    private cdr: ChangeDetectorRef 
    
  ){}

  form_registro= new FormGroup({
    path: new FormControl(''),
    imagen: new FormControl(''),
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

//------------------prueba
const index = this.imagen_path.indexOf(",");
this.imagen_path = this.imagen_path.slice(index + 1);
this.form_registro.value.imagen = this.imagen_path;
this.form_registro.value.path = this.imagen.name;

//------------


          this.http.consult_post("/register/register", this.form_registro.value).subscribe({
            next:(data: any)=>{
              if (data.status === true){

                console.log("USUARIO REGISTRADO!");
                this.ruta_aws = data.image;
                this.cdr.detectChanges();
                //alerta
                console.log(data.image);
                Swal.fire("usuario registrado:)");
                //regrese al home
                //this.router.navigate(["/login"]);
              }else {
                Swal.fire("error en el resgitro1");
                console.log("error en el registro")
              }
            },
            error: (error: any )=>{
              console.log("ERROR EN EL REGISTRO");
              console.log(error);
              Swal.fire("ERROR EN EL REGISTRO - usuario ocupado o contraseña no coinciden");
            }

          });
      }else {
        console.log("contraseñas no coinciden")
        Swal.fire("contraseñas no coinciden");
      }

    }else  {
      console.log("FORMULARIO INCOMPLETO");
      Swal.fire("Formulario incompleto");
    }

  }

  goBack() {
    this.router.navigate(["/login"]);
  }



  onFileSelected(event: any){
    // base64!!!!!!!!1111
    this.imagen = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event:any) => {
      this.imagen_path = event.target.result;
    }
    reader.readAsDataURL(this.imagen);
  }

  encodeFileAsBase64(file:any){
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('loadend', () =>{
        resolve(reader.result);
      });
      reader.readAsDataURL(file);
    });
  }

}
