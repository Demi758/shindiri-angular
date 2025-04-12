import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './components/location/location.component';
import { EpisodeComponent } from './components/episode/episode.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    loadChildren: () => import("./components/home/characters.module").then((m) => m.CharactersModule),
  },
  {
    path: 'location/:id',
    component: LocationComponent
  },
  {
    path: 'episode/:id',
    component: EpisodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
