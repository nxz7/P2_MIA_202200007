import { Routes } from '@angular/router';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminComponent } from './components/auth/admin/admin.component';
import { TuristaComponent } from './components/auth/turista/turista.component';
import { RecepcionistaComponent } from './components/auth/recepcionista/recepcionista.component';

export const routes: Routes = [
    { path: "register",
    component: RegistroComponent
    },
    { path: "login",
    component: LoginComponent
    },
    { path: "admin",
    component: AdminComponent
    },
    { path: "turista",
    component: TuristaComponent
    },
    { path: "recepcionista",
    component: RecepcionistaComponent
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

