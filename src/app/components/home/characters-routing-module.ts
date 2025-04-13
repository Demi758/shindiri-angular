import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { SingleCharacterComponent } from './single-character/single-character.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
  },
  {
    path: ':id',
    component: SingleCharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
