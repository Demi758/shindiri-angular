import { Component } from '@angular/core';
import { CharacterEpisode } from '../common/models/character-episode.model';
import { Character } from '../common/models/character.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodeComponent {
  constructor(private route: ActivatedRoute, private episodeService: EpisodeService, private characterService: CharactersService, private router: Router) {}
  
    id!: number;
    episode!: CharacterEpisode;
    characters: Character[] = [];
    characterIds: number[] = [];
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = +params['id'];
        if(!!this.id) {
          this.getEpisodeData();
        }
      });
    }
  
    getEpisodeData() {
      this.episodeService.getEpisode(this.id).subscribe({
        next: (res: CharacterEpisode) => {
          this.episode = new CharacterEpisode(res);
          
          if(!!this.episode.characters) {
            for(let character of this.episode.characters) {
              const res = character.split('/');
              this.characterIds.push(+res[res.length - 1]);
            }
            
            this.getCharacters();
          }
        }
      })
    }
  
    getCharacters() {
      this.characterService.getMultipleCharacters(this.characterIds).subscribe({
        next: (res: Character[]) => {
          this.characters = res.map((character: Character) => new Character(character));
        }
      })
    }
  
    openCharacter(id: number) {
      this.router.navigateByUrl('characters/' + id);
    }
}
