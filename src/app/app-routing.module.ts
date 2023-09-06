import { NoIngresadoGuard } from './no-ingresado.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]//Control de Ingreso
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]//Control de Ingreso
  },
  {
    path: 'cargando',
    loadChildren: () => import('./cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'perfil-profesor',
    loadChildren: () => import('./perfil-profesor/perfil-profesor.module').then( m => m.PerfilProfesorPageModule)
  },  {
    path: 'perfil-alumno',
    loadChildren: () => import('./perfil-alumno/perfil-alumno.module').then( m => m.PerfilAlumnoPageModule)
  },
  {
    path: 'chat-correo',
    loadChildren: () => import('./chat-correo/chat-correo.module').then( m => m.ChatCorreoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
