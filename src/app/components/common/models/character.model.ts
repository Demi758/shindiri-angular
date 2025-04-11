import { CharacterLocation } from "./character-location.model";

export class Character {
    id: number;
    name: string;
    gender: string;
    image: string;
    species: string;
    status: ECharacterStatus;
    apiUrl: string;
    location: CharacterLocation;
    episode: string[];
    type?: string;

    constructor(character: any) {
        this.id = character.id;
        this.name = character.name;
        this.gender = character.gender;
        this.image = character.image;
        this.species = character.species;
        this.status = character.status;
        this.apiUrl = character.url;
        this.location = new CharacterLocation(character.location);
        this.episode = character.episode;
        this.type = character.type;
    }
}

export enum ECharacterStatus {
    ALIVE = "Alive",
    DEAD = "Dead",
    UNKNOWN = "unknown"
}

export class CharacterRes {
    results?: Character[];
}