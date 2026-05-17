import { Routes } from '@angular/router';
import { Dashboard } from './paginas/dashboard/dashboard';
import { Usuarios } from './paginas/usuarios/usuarios';
import { Mensajes } from './paginas/mensajes/mensajes';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'usuarios', component: Usuarios },
  { path: 'mensajes', component: Mensajes },
];
