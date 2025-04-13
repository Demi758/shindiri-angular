import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './components/location/location.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./components/home/characters.module').then(
        (m) => m.CharactersModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'location/:id',
    component: LocationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'episode/:id',
    component: EpisodeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
