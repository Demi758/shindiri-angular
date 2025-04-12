export class CharacterEpisode {
    id: number;
    name: string;
    airDate: string;
    episode: string;
    characters: string[];
    apiUrl: string;

    constructor(episode: any) {
        this.id = episode.id;
        this.name = episode.name;
        this.airDate = episode.air_date;
        this.episode = episode.episode;
        this.characters = episode.characters;
        this.apiUrl = episode.url;
    }
}