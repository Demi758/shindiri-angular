import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { SingleCharacterComponent } from './single-character/single-character.component';
import { CharactersRoutingModule } from './characters-routing-module';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterCardComponent,
    SingleCharacterComponent,
  ],
  imports: [CommonModule, CharactersRoutingModule],
  exports: [CharacterCardComponent],
})
export class CharactersModule {}
