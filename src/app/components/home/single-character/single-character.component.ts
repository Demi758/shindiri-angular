import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../../services/characters.service';
import { Character } from '../../common/models/character.model';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrl: './single-character.component.css'
})
export class SingleCharacterComponent implements OnInit {
  constructor(private route: ActivatedRoute, private characterService: CharactersService) {}

  id!: number;
  character!: Character;
  episodes: number[] = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if(!!this.id) {
        this.getCharacterData();
      }
    });
  }

  getCharacterData() {
    this.characterService.getCharacter(this.id).subscribe({
      next: (res: Character) => {
        this.character = new Character(res);
        for(let episode of this.character.episode)
        {
          const ep = episode.split('/');
          this.episodes.push(+ep[ep.length - 1]);
          console.log(this.episodes);
        }
      }
    })
  }
}
