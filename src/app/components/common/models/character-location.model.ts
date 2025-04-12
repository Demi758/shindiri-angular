export class CharacterLocation {
    name: string;
    apiUrl: string;
    type?: string;
    dimension?: string;
    residents?: string[];

    constructor(location: any) {
        this.name = location.name;
        this.apiUrl = location.url;
        this.type = location.type;
        this.dimension = location.dimension;
        this.residents = location.residents;
    }
}