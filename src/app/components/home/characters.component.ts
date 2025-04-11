import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character, CharacterRes } from '../common/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit {
  constructor(private characterService: CharactersService) {}

  characters?: Character[] = [];

  ngOnInit() {
    this.characterService.getCharacters().subscribe({
      next: (res: CharacterRes) => {
        const resCharacters = res.results;
        this.characters = resCharacters?.map((character: Character) => new Character(character));
      },
    });
  }
}
