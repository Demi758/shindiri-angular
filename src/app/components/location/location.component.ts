import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../services/location.service';
import { CharacterLocation } from '../common/models/character-location.model';
import { Character } from '../common/models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
})
export class LocationComponent {
  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private characterService: CharactersService,
    private router: Router
  ) {}

  id!: number;
  location!: CharacterLocation;
  characters: Character[] = [];
  characterIds: number[] = [];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      if (!!this.id) {
        this.getLocationData();
      }
    });
  }

  getLocationData() {
    this.locationService.getLocation(this.id).subscribe({
      next: (res: CharacterLocation) => {
        this.location = new CharacterLocation(res);

        if (!!this.location.residents) {
          for (let resident of this.location.residents) {
            const res = resident.split('/');
            this.characterIds.push(+res[res.length - 1]);
          }

          this.getCharacters();
        }
      },
    });
  }

  getCharacters() {
    this.characterService.getMultipleCharacters(this.characterIds).subscribe({
      next: (res: Character[]) => {
        this.characters = res.map(
          (character: Character) => new Character(character)
        );
      },
    });
  }

  openCharacter(id: number) {
    this.router.navigateByUrl('characters/' + id);
  }
}
