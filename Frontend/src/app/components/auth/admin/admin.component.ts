import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';



@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet, 
    RouterModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  historialItems: any[] = [];
  
  constructor(    
    private http: UsuarioService,
    private router: Router) {
      this.tablaHistorial();
    }


    form_registro= new FormGroup({
      name: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", Validators.required),
      type:new FormControl("", Validators.required)
  
    });


    registrar(){
      debugger;
      if (this.form_registro.valid)  {
        if (this.form_registro.value.password === this.form_registro.value.confirmPassword)  {
            this.http.consult_post("/admin/crearUsuarios", this.form_registro.value).subscribe({
              next:(data: any)=>{
                if (data.status === true){
                  console.log("USUARIO REGISTRADO!");
                  //alerta
                  alert("usuario registrado:)");
                  //regrese al home
                  //this.router.navigate(["/login"]);
                }else {
                  alert("error en el resgitro1");
                  console.log("error en el registro")
                }
              },
              error: (error: any )=>{
                console.log("ERROR EN EL REGISTRO");
                console.log(error);
                alert("ERROR EN EL REGISTRO - usuario ocupado o contraseña no coinciden");
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


//-------------------------VIAJES
    form_viajes= new FormGroup({
      agencia: new FormControl("", Validators.required),
      origen: new FormControl("", Validators.required),
      destino: new FormControl("", Validators.required),
      dias: new FormControl("", Validators.required),
      precio: new FormControl("", Validators.required)
  
    });
  

    registrar_viajes(){
      debugger;
      if (this.form_viajes.valid)  {
            this.http.consult_post("/admin/crearViajes", this.form_viajes.value).subscribe({
              next:(data: any)=>{
                if (data.status === true){
                  console.log("Viaje registrado!");
                  //alerta
                  alert("Viaje registrado!");
                  //regrese al home
                  //this.router.navigate(["/login"]);
                }else {
                  alert("error en el resgitro1");
                  console.log("error en el registro")
                }
              },
              error: (error: any )=>{
                console.log("ERROR EN EL REGISTRO");
                console.log(error);
                alert("ERROR EN EL REGISTRO - asegurese de llenar los espacios indicados");
              }
  
            });
  
      }else  {
        console.log("FORMULARIO INCOMPLETO");
        alert("Formulario incompleto");
      }
  
    }

//------------------------------AUTO

form_autos= new FormGroup({
  agencia: new FormControl("", Validators.required),
  marca: new FormControl("", Validators.required),
  placa: new FormControl("", Validators.required),
  modelo: new FormControl("", Validators.required),
  precio: new FormControl("", Validators.required),
  ciudad: new FormControl("", Validators.required)

});


registrar_autos(){
  debugger;
  if (this.form_autos.valid)  {
        this.http.consult_post("/admin/crearAutos", this.form_autos.value).subscribe({
          next:(data: any)=>{
            if (data.status === true){
              console.log("AUTO registrado!");
              //alerta
              alert("AUTO registrado!");
              //regrese al home
              //this.router.navigate(["/login"]);
            }else {
              alert("error en el resgitro del auto (1)");
              console.log("error en el registro")
            }
          },
          error: (error: any )=>{
            console.log("ERROR EN EL REGISTRO");
            console.log(error);
            alert("ERROR EN EL REGISTRO - asegurese de llenar los espacios indicados");
          }

        });

  }else  {
    console.log("FORMULARIO INCOMPLETO");
    alert("Formulario incompleto");
  }

}


//-------------------eliminar usuaio

form_eliminarUsuario = new FormGroup({
  username: new FormControl("", Validators.required)
});

eliminar_usuario() {
  if (this.form_eliminarUsuario.valid) {
    const username = this.form_eliminarUsuario.value.username;
    this.http.consult_post("/admin/borrarUser", { username }).subscribe({
      next: (data: any) => {
        if (data.status === true) {
          console.log("Usuario eliminado!");
          alert("Usuario eliminado!");
        } else {
          alert("Error al eliminar usuario");
          console.log("Error al eliminar usuario");
        }
      },
      error: (error: any) => {
        console.log("Error en la solicitud", error);
        alert("Error en la solicitud");
      }
    });
  } else {
    console.log("Formulario incompleto");
    alert("Formulario incompleto");
  }
}

//------------------------eliminar Viajes ------------

form_eliminarViajes= new FormGroup({
  agencia: new FormControl("", Validators.required),
  origen: new FormControl("", Validators.required),
  destino: new FormControl("", Validators.required),
  dias: new FormControl("", Validators.required),
  precio: new FormControl("", Validators.required)

});


eliminar_viajes(){
  debugger;
  if (this.form_eliminarViajes.valid)  {
        this.http.consult_post("/admin/borrarViajes", this.form_eliminarViajes.value).subscribe({
          next:(data: any)=>{
            if (data.status === true){
              console.log("Viaje eliminado!");
              //alerta
              alert("Viaje eliminado!");
              //regrese al home
              //this.router.navigate(["/login"]);
            }else {
              alert("error al eliminar (no existe)- revisar la escritura");
              console.log("error al eliminar - revisar la escritura");
            }
          },
          error: (error: any )=>{
            console.log("error al eliminar - revisar la escritura");
            console.log(error);
            alert("ERROR EN EL REGISTRO - asegurese de llenar los espacios indicados - revisar la escritura");
          }

        });

  }else  {
    console.log("FORMULARIO INCOMPLETO");
    alert("Formulario incompleto");
  }

}

//--------------------------------------------
//----------------------- eliminar auto

form_eliminarAutos= new FormGroup({
  agencia: new FormControl("", Validators.required),
  marca: new FormControl("", Validators.required),
  placa: new FormControl("", Validators.required),
  modelo: new FormControl("", Validators.required),
  precio: new FormControl("", Validators.required),
  ciudad: new FormControl("", Validators.required)

});


eliminar_autos(){
  debugger;
  if (this.form_eliminarAutos.valid)  {
        this.http.consult_post("/admin/borrarAutos", this.form_eliminarAutos.value).subscribe({
          next:(data: any)=>{
            if (data.status === true){
              console.log("AUTO eliminado!");
              //alerta
              alert("AUTO eliminado!");
              //regrese al home
              //this.router.navigate(["/login"]);
            }else {
              alert("error al eliminar (no existe)- revisar la escritura");
              console.log("error al eliminar auto")
            }
          },
          error: (error: any )=>{
            console.log("ERROR AL ELIMINAR");
            console.log(error);
            alert("ERROR AL ELIMINAR - asegurese de llenar los espacios indicados");
          }

        });

  }else  {
    console.log("FORMULARIO INCOMPLETO");
    alert("Formulario incompleto");
  }

}
//--------------------historial
  tablaHistorial() {
    this.http.consult_post('/admin/TablaHistorial', {}).subscribe({
      next: (response: any) => {
        if (response.status) {
          this.historialItems = response.items;
        } else {
          console.error('Error al obtener el historial del servidor');
        }
      },
      error: (error) => {
        console.error('Error en la solicitud del historial', error);
      }
    });
  }


//-----------------------------------------------
  logout() {
    this.router.navigate(['/login']);
  }
}
