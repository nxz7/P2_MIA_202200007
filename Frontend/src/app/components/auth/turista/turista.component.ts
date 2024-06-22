import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';


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
export class TuristaComponent  {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}
